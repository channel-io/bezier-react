import { minimatch } from 'minimatch'
import StyleDictionary, {
  type Config,
  type Options,
  type Platform,
} from 'style-dictionary'

import { buildJsIndex } from './build-js-index'
import { buildScssIndex } from './build-scss-index'
import {
  customCss,
  customJsCjs,
  customJsEsm,
} from './lib/format'
import { CSSTransforms } from './lib/transform'
import { toKebabCase } from './lib/utils'
import { mergeCss } from './merge-css'

const CustomTransforms = [...Object.values(CSSTransforms)]

const BUILD_PATH = {
  BASE: 'dist',
  CJS: 'cjs',
  ESM: 'esm',
  CSS: 'css',
  SCSS: 'scss',
}

const TokenBuilder = CustomTransforms.reduce(
  (builder, transform) => builder.registerTransform(transform),
  StyleDictionary
)
  .registerFormat(customJsCjs)
  .registerFormat(customJsEsm)
  .registerFormat(customCss)

function defineWebPlatform({
  options,
  transforms,
  ...rest
}: Platform): Platform {
  return {
    transforms: ['attribute/cti', 'name/cti/kebab', ...(transforms ?? [])],
    basePxFontSize: 10,
    options: {
      showFileHeader: false,
      ...options,
    },
    ...rest,
  }
}

interface DefineConfigOptions {
  source: string[]
  reference?: string[]
  basePath: string
  destination: string
  options?: Options & {
    cssSelector: string
  }
}

function defineConfig({
  source,
  reference = [],
  basePath,
  destination,
  options,
}: DefineConfigOptions): Config {
  const transforms = CustomTransforms.map(({ name }) => name)

  return {
    source: [...source, ...reference],
    platforms: {
      'web/cjs': defineWebPlatform({
        buildPath: `${basePath}/${BUILD_PATH.CJS}/`,
        files: [
          {
            destination: `${destination}.js`,
            format: customJsCjs.name,
            filter: ({ filePath }) =>
              source.some((src) => minimatch(filePath, src)),
          },
        ],
        transforms,
      }),
      'web/esm': defineWebPlatform({
        buildPath: `${basePath}/${BUILD_PATH.ESM}/`,
        files: [
          {
            destination: `${destination}.mjs`,
            format: customJsEsm.name,
            filter: ({ filePath }) =>
              source.some((src) => minimatch(filePath, src)),
          },
        ],
        transforms,
      }),
      'web/css': defineWebPlatform({
        buildPath: `${basePath}/${BUILD_PATH.CSS}/`,
        files: [
          {
            destination: `${destination}.css`,
            format: customCss.name,
            filter: ({ filePath }) =>
              source.some((src) => minimatch(filePath, src)),
            options: {
              selector: options?.cssSelector,
              outputReferences: true,
            },
          },
        ],
        transforms,
      }),
      'web/scss': defineWebPlatform({
        buildPath: `${basePath}/${BUILD_PATH.SCSS}/`,
        files: [
          {
            destination: `${toKebabCase(destination)}.scss`,
            format: 'scss/map-deep',
            filter: ({ filePath }) =>
              source.some((src) => minimatch(filePath, src)),
            options: {
              outputReferences: false,
            },
          },
        ],
        transforms,
      }),
    },
  }
}

async function main() {
  ;[
    TokenBuilder.extend(
      defineConfig({
        source: ['src/global/*.json'],
        basePath: BUILD_PATH.BASE,
        destination: 'global',
        options: { cssSelector: ':where(:root, :host)' },
      })
    ),
    TokenBuilder.extend(
      defineConfig({
        source: ['src/semantic/*.json', 'src/semantic/light-theme/*.json'],
        reference: ['src/global/*.json'],
        basePath: BUILD_PATH.BASE,
        destination: 'lightTheme',
        options: {
          cssSelector: ':where(:root, :host), [data-bezier-theme="light"]',
        },
      })
    ),
    TokenBuilder.extend(
      defineConfig({
        source: ['src/semantic/*.json', 'src/semantic/dark-theme/*.json'],
        reference: ['src/global/*.json'],
        basePath: BUILD_PATH.BASE,
        destination: 'darkTheme',
        options: { cssSelector: '[data-bezier-theme="dark"]' },
      })
    ),
  ].forEach((builder) => {
    builder.buildAllPlatforms()
  })

  for (const buildPath of [`${BUILD_PATH.BASE}/${BUILD_PATH.CSS}`]) {
    await mergeCss(buildPath, { addSystemDarkThemeFallback: true })
  }

  for (const buildPath of [`${BUILD_PATH.BASE}/${BUILD_PATH.SCSS}`]) {
    await buildScssIndex({ buildPath })
  }

  for (const options of [
    { buildPath: `${BUILD_PATH.BASE}/${BUILD_PATH.CJS}`, isCjs: true },
    { buildPath: `${BUILD_PATH.BASE}/${BUILD_PATH.ESM}`, isCjs: false },
  ]) {
    await buildJsIndex(options)
  }
}

main()
