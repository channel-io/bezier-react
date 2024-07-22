import * as fs from 'fs'
import * as path from 'path'

import { DEFAULT_EXTENSIONS } from '@babel/core'
import alias from '@rollup/plugin-alias'
import { babel } from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import virtual from '@rollup/plugin-virtual'
import { createFilter } from '@rollup/pluginutils'
import { transform } from '@svgr/core'
import { defineConfig } from 'rollup'
import { visualizer } from 'rollup-plugin-visualizer'
import { optimize } from 'svgo'

const extensions = [...DEFAULT_EXTENSIONS, '.ts', '.tsx', '.svg']

const config = {
  input: {
    icons: 'icons',
    utils: 'utils',
  },
  output: {
    icons: 'svg',
    react: 'react',
    utils: 'utils',
  },
}

const iconBasePath = new URL(`./${config.input.icons}`, import.meta.url)
  .pathname
const utilBasePath = new URL(`./${config.input.utils}`, import.meta.url)
  .pathname

const iconFileNames = fs.readdirSync(config.input.icons, 'utf-8')

const iconNames = []
const iconImportLines = []
const iconExportLines = []
const iconObjectLines = []
const iconComponentTypes = []

function toPascalCase(str) {
  return str
    .replace(/[-_](.)/g, (_, c) => c.toUpperCase())
    .replace(/^(.)/, (_, c) => c.toUpperCase())
}

iconFileNames.forEach((iconFileName) => {
  const iconName = iconFileName.replace('.svg', '')
  const iconModuleName = `${toPascalCase(iconName)}Icon`

  iconNames.push(`'${iconName}'`)
  iconImportLines.push(
    `import ${iconModuleName} from '../${config.input.icons}/${iconFileName}'`
  )
  iconExportLines.push(`${iconModuleName},`)
  iconObjectLines.push(`'${iconName}': ${iconModuleName},`)
  iconComponentTypes.push(`export declare const ${iconModuleName}: BezierIcon`)
})

const ICONS_OBJECT = 'icons'

const entryModuleContent = `
  ${iconImportLines.join('\n')}
  const ${ICONS_OBJECT} = { ${iconObjectLines.join('\n')} }
  export { ${iconExportLines.concat(`${ICONS_OBJECT},`).join('\n')} }
  export * from '${config.input.utils}'
`

const entryTypesContent = `
declare module '*.svg' {
  const content: string
  export default content
}

/**
 * Since IconSource created by svgr is forwarded ref,
 * Its correct type is React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement> & React.RefAttributes<SVGSVGElement>>,
 * however, we keep React.FunctionComponent type for backward compatibility.
 */
export declare type IconSource = React.FunctionComponent<React.SVGProps<SVGSVGElement>>
export declare type BezierIcon = IconSource & { __bezier__icon: true }

export declare function isBezierIcon(arg: unknown): arg is BezierIcon
export declare function createBezierIcon(icon: IconSource): BezierIcon

export declare type IconName = ${iconNames.join(' | ')}
/**
 * @deprecated If you import this module, all icons are bundled, so please import and use the individual icons.
 * @example
 * import { AllIcon } from '@channel.io/bezier-icons'
 */
export declare const icons: Record<IconName, BezierIcon>

${iconComponentTypes.join('\n')}
`.trim()

/**
 * @type {import('rollup').PluginImpl}
 */
function emitFile({ fileName, source }) {
  return {
    name: 'emitFile',
    buildEnd() {
      if (source.length === 0) {
        this.warn('source content is empty')
      }

      this.emitFile({
        type: 'asset',
        fileName,
        source,
      })
    },
  }
}

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

      export default createBezierIcon(forwardRef(${componentName}))
    `
  }

  const optimizedSvgs = []

  return {
    name: 'svgBuild',
    async transform(code, id) {
      if (!filter(id) || !id.endsWith('.svg')) {
        return null
      }

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
          ref: true,
          template: reactIconTemplate,
        },
        {
          filePath: id,
          caller: { name: 'svgBuild' },
        }
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

export default defineConfig({
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
      /**
       * "auto" combines both "esModule" and "default" by injecting helpers that contain code that detects at runtime
       * if the required value contains the __esModule property.
       * Adding this property is a hack implemented by TypeScript esModuleInterop,
       * Babel and other tools to signify that the required value is the namespace of a transpiled ES module.:
       *
       * @see: https://rollupjs.org/configuration-options/#output-interop
       */
      interop: 'auto',
      manualChunks,
    },
    {
      dir: 'dist',
      format: 'esm',
      entryFileNames: '[name].mjs',
      chunkFileNames: '[name].mjs',
      manualChunks,
    },
  ],
  external: ['react'],
  plugins: [
    virtual({ 'src/index.ts': entryModuleContent }),
    nodeResolve({ extensions }),
    svgBuild({ include: `${iconBasePath}/*.svg` }),
    /**
     * Module resolution is not working well inside the virtual module, so use the alias plugin to resolve the module manually.
     */
    alias({
      entries: [
        {
          find: config.input.utils,
          replacement: utilBasePath,
        },
      ],
    }),
    babel({
      exclude: 'node_modules/**',
      extensions,
      envName: 'production',
      babelHelpers: 'bundled',
    }),
    emitFile({
      fileName: 'index.d.ts',
      source: entryTypesContent,
    }),
    terser(),
    visualizer(),
  ],
})
