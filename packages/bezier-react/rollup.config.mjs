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
const buildEntryId = 'virtual:bezier-react-build-entry'
const resolvedBuildEntryId = `\0${buildEntryId}`

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

/**
 * Create a single build-only entry so that styles from every public entry are
 * ordered against the same module graph when they are extracted.
 */
function buildEntry() {
  return {
    name: 'build-entry',
    resolveId(id) {
      if (id === buildEntryId) {
        return resolvedBuildEntryId
      }

      return null
    },
    load(id) {
      if (id === resolvedBuildEntryId) {
        return `
          import * as stable from '~/src/index'
          import * as beta from '~/src/beta/index'

          export { beta, stable }
        `
      }

      return null
    },
    generateBundle(options, bundle) {
      Object.entries(bundle).forEach(([fileName, output]) => {
        if (
          output.type === 'chunk' &&
          output.facadeModuleId === resolvedBuildEntryId
        ) {
          delete bundle[fileName]
          delete bundle[`${fileName}.map`]
        }
      })
    },
  }
}

const generateConfig = ({ output = [], plugins = [] }) =>
  defineConfig({
    input: buildEntryId,
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
        use: {
          sass: {
            /**
             * FIXME: Silence warnings caused by the following issue.
             *
             * Since the `rollup-plugin-postcss` plugin is no longer maintained, we will be implementing our own plugin.
             * @see {@link https://github.com/sass/dart-sass/issues/1481}
             */
            silenceDeprecations: ['legacy-js-api'],
          },
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
      /**
       * dependencies를 external로 두어 산출물에 패키지 이름으로 남긴다.
       *
       * 이유: pnpm의 `node_modules`는 심볼릭 링크라, 번들 대상에 두면 rollup이 링크를
       * 실경로로 풀어 설치 해시가 박힌 경로(`node_modules/.pnpm/<pkg>@<ver>_<hash>/…`)를
       * 산출물에 써넣는다. 그 경로는 소비자 환경에 존재하지 않는다.
       *
       * 제약: CJS 산출물은 external을 `require()`로 남긴다. 따라서 **ESM 전용 의존성은
       * `exclude`에 넣어 번들에 포함해야 한다** — 그러지 않으면 CJS 진입점을 `require`하는
       * 소비자가 `ERR_REQUIRE_ESM`으로 깨진다(Node 22는 통과하지만 Node 20에서 실패).
       * 이 패키지는 `require` 엔트리를 제공하고 소비자의 최소 Node 버전을 제한하지 않는다.
       *
       * exclude 갱신 조건: dependencies를 추가·변경할 때 그 패키지가 ESM 전용인지 본다.
       * 판별은 그 패키지 `package.json`이 `"type": "module"`이면서 `exports`에 `require`
       * 조건이 없는 것. 해당하면 여기에 더한다.
       */
      nodeExternals({
        deps: true,
        peerDeps: true,
        exclude: ['ssr-window'],
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
      buildEntry(),
      ...plugins,
    ],
    onwarn(warning, warn) {
      if (
        warning.code === 'MODULE_LEVEL_DIRECTIVE' &&
        warning.message.includes('use client')
      ) {
        return
      }

      /**
       * FIXME: Silence warnings caused by the following issues
       * @see {@link https://github.com/radix-ui/primitives/issues/3281}
       */
      if (
        warning.code === 'SOURCEMAP_ERROR' &&
        warning.loc.file.includes('@radix-ui') &&
        warning.loc.line === 1
      ) {
        return
      }

      warn(warning)
    },
  })

/**
 * `preserveModules`는 번들에 포함된 의존성을 그 모듈의 경로 그대로 출력한다.
 * pnpm의 `node_modules`는 실경로가 `node_modules/.pnpm/<pkg>@<ver>[_<peer해시>]/node_modules/<pkg>/…`
 * 라서, 그대로 두면 설치 해시가 박힌 디렉토리가 산출물 안에 생긴다.
 * 소비자에게 의미 없는 경로이고 설치마다 달라지므로 평평하게 되돌린다.
 */
const flattenPnpmPath = (name) =>
  name.replace(/node_modules\/\.pnpm\/[^/]+\/node_modules\//g, 'node_modules/')

export default defineConfig([
  generateConfig({
    output: [
      {
        format: 'cjs',
        dir: path.dirname(pkg.main),
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: (chunk) => `${flattenPnpmPath(chunk.name)}.js`,
        sourcemapPathTransform: flattenPnpmPath,
        exports: 'named',
      },
      {
        format: 'esm',
        dir: path.dirname(pkg.module),
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: (chunk) => `${flattenPnpmPath(chunk.name)}.mjs`,
        sourcemapPathTransform: flattenPnpmPath,
      },
    ],
  }),
])
