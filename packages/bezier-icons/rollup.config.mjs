/**
 * TODO
 * - [ ] Generate type declaration file
 */

import * as fs from 'fs'
import * as path from 'path'

import alias from '@rollup/plugin-alias'
import { babel } from '@rollup/plugin-babel'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import virtual from '@rollup/plugin-virtual'
import { createFilter } from '@rollup/pluginutils'
import { transform } from '@svgr/core'
import { defineConfig } from 'rollup'
import { visualizer } from 'rollup-plugin-visualizer'
import { optimize } from 'svgo'

const config = {
  input: {
    icons: 'icons',
    utils: 'utils',
  },
  output: {
    icons: 'assets',
    react: 'icons',
    utils: 'utils',
  },
}

const iconBasePath = new URL(`./${config.input.icons}`, import.meta.url).pathname
const utilBasePath = new URL(`./${config.input.utils}`, import.meta.url).pathname

const iconFileNames = fs.readdirSync(config.input.icons, 'utf-8')

const iconImportLines = []
const iconExportLines = []
const iconObjectLines = []
const iconTypes = []

function toPascalCase(str) {
  return str
    .replace(/[-_](.)/g, (_, c) => c.toUpperCase())
    .replace(/^(.)/, (_, c) => c.toUpperCase())
}

iconFileNames.forEach((iconFileName) => {
  const iconName = iconFileName.replace('.svg', '')
  const iconModuleName = `${toPascalCase(iconName)}Icon`

  iconImportLines.push(`import ${iconModuleName} from '../${config.input.icons}/${iconFileName}'`)
  iconExportLines.push(`${iconModuleName},`)
  iconObjectLines.push(`'${iconName}': ${iconModuleName},`)
  iconTypes.push(`export declare const ${iconModuleName}: BezierIcon`)
})

const ICONS_OBJECT = 'icons'

const iconsObject = `
  const ${ICONS_OBJECT} = { ${iconObjectLines.join('\n')} }
`

const exports = `
  export { ${iconExportLines.concat(`${ICONS_OBJECT},`).join('\n')} }
`

const entryModuleContent = `
  ${iconImportLines.join('\n')}
  ${iconsObject}
  ${exports}
`

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
      /**
       * Set the `fill` attribute to `currentColor` for all `path` elements.
       * This allows us to dynamically change the color of the SVG icon.
       * @see https://gomakethings.com/currentcolor-and-svgs/#dynamic-svg-colors
       */
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
  function reactIconTemplate({ imports, componentName, props, jsx }, { tpl }) {
    return tpl`
      ${imports}

      import { createBezierIcon } from '${config.input.utils}'

      function ${componentName}(${props}) {
        return (
          ${jsx}
        )
      }

      export default createBezierIcon(${componentName})
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
           * If plugin-jsx is not present, the transformation will not work properly.
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
       * Create optimized SVG asset files in that path.
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
 * We know react only ships cjs with a default export. By being explicit here,
 * we get to shave off some unneeded interop code
 */
function interop(id) {
  return id === 'react' ? 'defaultOnly' : 'auto'
}

/**
 * Split into individual chunks for smooth tree shaking.
 */
function manualChunks(id) {
  if (id.startsWith(iconBasePath)) {
    return id
      .replace(iconBasePath, `${config.output.react}/`)
      .replace('.svg', '')
  }
  if (id.startsWith(utilBasePath)) {
    return id
      .replace(utilBasePath, `${config.output.utils}/`)
      .replace('.ts', '')
  }
  return undefined
}

export default defineConfig([
  {
    /**
     * Instead of the actual src/index.ts, use a virtual entry point via virtual plugin.
     */
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
      typescript(),
      svgBuild({ include: `${iconBasePath}/*.svg` }),
      /**
       * The module is not resolving well, so use the alias plugin to resolve the module.
       */
      alias({
        entries: [{
          find: config.input.utils,
          replacement: utilBasePath,
        }],
      }),
      babel({
        exclude: 'node_modules/**',
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.svg'],
        envName: 'production',
        babelHelpers: 'bundled',
      }),
      terser(),
      visualizer(),
    ],
  },
])
