import * as fs from 'fs'
import * as path from 'path'

import { babel } from '@rollup/plugin-babel'
import virtual from '@rollup/plugin-virtual'
import { createFilter } from '@rollup/pluginutils'
import { transform } from '@svgr/core'
import { defineConfig } from 'rollup'
import { visualizer } from 'rollup-plugin-visualizer'
import { optimize } from 'svgo'

const config = {
  input: {
    icons: 'icons',
  },
  output: {
    icons: 'assets',
  },
}

const iconBasePath = new URL('./icons', import.meta.url).pathname

function toPascalCase(str) {
  return str
    .replace(/[-_](.)/g, (_, c) => c.toUpperCase())
    .replace(/^(.)/, (_, c) => c.toUpperCase())
}

function getIconModuleName(iconFileName) {
  return toPascalCase(iconFileName).replace('.svg', 'Icon')
}

const iconFileNames = fs.readdirSync(config.input.icons, 'utf-8')

const entryModuleContent = iconFileNames
  .map((iconFileName) => `export { default as ${getIconModuleName(iconFileName)} } from '../${config.input.icons}/${iconFileName}'`)
  .join('\n')

/**
 * @type {import('rollup').PluginImpl}
 */
function svgBuild(options = {}) {
  const filter = createFilter(options.include || '**/*.svg', options.exclude)

  /**
   * @type {import('svgo').Config}
   */
  const svgoConfig = {
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false,
          },
        },
      },
      {
        name: 'convertColors',
        params: {
          currentColor: true,
        },
      },
    ],
  }

  /**
   * @type {import('@svgr/babel-plugin-transform-svg-component').Template}
   */
  function reactIconTemplate({ imports, componentName, props, interfaces, jsx }, { tpl }) {
    return tpl`
      ${imports}

      ${interfaces}

      function ${componentName}(${props}) {
        return (
          ${jsx}
        )
      }

      export default ${componentName}
    `
  }

  const optimizedSvgs = []

  return {
    name: 'buildSvg',
    async transform(code, id) {
      if (!filter(id) || !id.endsWith('.svg')) { return null }

      const rawSvg = fs.readFileSync(id, 'utf8')

      const { data: optimizedSvgCode } = optimize(rawSvg, {
        ...svgoConfig,
        path: id,
      })

      optimizedSvgs.push({
        name: path.basename(id),
        svg: optimizedSvgCode,
      })

      const jsCode = await transform(
        optimizedSvgCode,
        {
          /**
           * NOTE: If plugin-jsx is not present, the transformation will not work properly.
           */
          plugins: ['@svgr/plugin-jsx'],
          icon: true,
          jsxRuntime: 'classic',
          template: reactIconTemplate,
        },
        {
          filePath: id,
          caller: { name: 'svgBuild' },
        },
      )

      return {
        code: jsCode,
        ast: {
          type: 'Program',
          sourceType: 'module',
          start: 0,
          end: null,
          body: [],
        },
        map: { mappings: '' },
      }
    },
    buildEnd() {
      /**
       * NOTE: Create optimized SVG asset files in that path.
       */
      optimizedSvgs.forEach(({ name, svg }) => {
        this.emitFile({
          type: 'asset',
          fileName: `${config.output.icons}/${name}`,
          source: svg,
        })
      })
    },
  }
}

/**
 * NOTE: We know react only ships cjs with a default export. By being explicit here,
 * we get to shave off some unneeded interop code
 */
function interop(id) {
  return id === 'react' ? 'defaultOnly' : 'auto'
}

function manualChunks(id) {
  if (id.startsWith(iconBasePath)) {
    return id.replace(iconBasePath, 'icons/')
  }
  return undefined
}

export default defineConfig({
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist',
      format: 'cjs',
      entryFileNames: '[name].js',
      chunkFileNames: '[name].js',
      interop,
      manualChunks,
    },
    {
      dir: 'dist',
      format: 'esm',
      entryFileNames: '[name].mjs',
      chunkFileNames: '[name].mjs',
      interop,
      manualChunks,
    },
  ],
  external: ['react'],
  plugins: [
    virtual({ 'src/index.ts': entryModuleContent }),
    svgBuild({ include: `${iconBasePath}/*.svg` }),
    babel({
      exclude: 'node_modules/**',
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.svg'],
      envName: 'production',
      babelHelpers: 'bundled',
    }),
    visualizer(),
  ],
})
