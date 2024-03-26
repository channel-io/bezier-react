import { readFileSync } from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'

import { DEFAULT_EXTENSIONS } from '@babel/core'
import alias from '@rollup/plugin-alias'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import url from '@rollup/plugin-url'
import { transform } from 'lightningcss'
import postcssPresetEnv from 'postcss-preset-env'
import { defineConfig } from 'rollup'
import nodeExternals from 'rollup-plugin-node-externals'
import postcss from 'rollup-plugin-postcss'
import { visualizer } from 'rollup-plugin-visualizer'

// eslint-disable-next-line import/extensions
import postcssAutoLayer from './postcss-auto-layer.mjs'

const pkg = JSON.parse(
  readFileSync(fileURLToPath(new URL('./package.json', import.meta.url)))
)

const rootDir = fileURLToPath(new URL('.', import.meta.url))
const styleSheetDir = 'styles.css'

const extensions = [...DEFAULT_EXTENSIONS, '.ts', '.tsx']

/**
 * @type {import('rollup').PluginImpl}
 */
function minifycss() {
  return {
    name: 'minify-css',
    generateBundle(options, bundle) {
      const styleSheetFile = bundle[styleSheetDir]
      const { code: optimizedSource } = transform({
        code: styleSheetFile.source,
        minify: true,
      })

      /**
       * NOTE: To avoid the following error:
       * (!) The emitted file 'style.css' overwrites a previously emitted file of the same name.
       */
      delete bundle[styleSheetDir]

      this.emitFile({
        ...styleSheetFile,
        source: optimizedSource,
      })
    },
  }
}

const generateConfig = ({ output = [], plugins = [] }) =>
  defineConfig({
    input: ['src/index.ts', 'src/alpha-components/index.ts'],
    output,
    plugins: [
      alias({
        entries: [
          {
            find: '~',
            replacement: rootDir,
          },
        ],
      }),
      postcss({
        extract: styleSheetDir,
        autoModules: true,
        modules: {
          /**
           * ex. b-1w3e4
           */
          generateScopedName: 'b-[hash:base64:5]',
          hashPrefix: 'bezier',
        },
        plugins: [
          postcssPresetEnv(),
          postcssAutoLayer({
            name: 'components',
            path: '**/components/**/*.module.scss',
          }),
        ],
      }),
      /**
       * **IMPORTANT**: Order matters!
       * If you're also using @rollup/plugin-node-resolve, make sure this plugin comes before it in the plugins array
       * @see https://github.com/Septh/rollup-plugin-node-externals#3-order-matters
       */
      nodeExternals({
        deps: false,
        peerDeps: true,
        packagePath: './package.json',
      }),
      nodeResolve({ extensions }),
      /**
       * **IMPORTANT**: Order matters!
       * When using @rollup/plugin-babel with @rollup/plugin-commonjs in the same Rollup configuration,
       * it's important to note that @rollup/plugin-commonjs must be placed before this plugin in the plugins array for the two to work together properly.
       * @see https://github.com/rollup/plugins/tree/master/packages/babel#using-with-rollupplugin-commonjs
       */
      commonjs(),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        extensions,
      }),
      url(),
      visualizer({ filename: 'stats.html' }),
      minifycss(),
      ...plugins,
    ],
  })

export default defineConfig([
  generateConfig({
    output: [
      {
        format: 'cjs',
        dir: path.dirname(pkg.main),
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: '[name].js',
        exports: 'named',
      },
      {
        format: 'esm',
        dir: path.dirname(pkg.module),
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: '[name].mjs',
      },
    ],
  }),
])
