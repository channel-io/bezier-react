import { minimatch } from 'minimatch'
import StyleDictionary, {
  type Config,
  type Options,
  type Platform,
} from 'style-dictionary'

import { buildJsIndex } from './build-js-index'
import {
  alphaCustomCss,
  alphaCustomJsCjs,
  alphaCustomJsEsm,
  customJsCjs,
  customJsEsm,
} from './lib/format'
import { CSSTransforms } from './lib/transform'
import { mergeCss } from './merge-css'

const CustomTransforms = [...Object.values(CSSTransforms)]

const BUILD_PATH = {
  BASE: 'dist',
  BASE_ALPHA: 'dist/alpha',
  CJS: 'cjs',
  ESM: 'esm',
  CSS: 'css',
}

const TokenBuilder = CustomTransforms.reduce(
  (builder, transform) => builder.registerTransform(transform),
  StyleDictionary
)
  .registerFormat(customJsCjs)
  .registerFormat(customJsEsm)

const AlphaTokenBuilder = CustomTransforms.reduce(
  (builder, transform) => builder.registerTransform(transform),
  StyleDictionary
)
  .registerFormat(alphaCustomJsCjs)
  .registerFormat(alphaCustomJsEsm)
  .registerFormat(alphaCustomCss)

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
  /**
   * Whether to use the alpha version of the custom formatter
   * TODO: Remove this option in the next major release.
   */
  useAlpha?: boolean
  source: string[]
  reference?: string[]
  basePath: string
  destination: string
  options?: Options & {
    cssSelector: string
  }
}

function defineConfig({
  useAlpha = false,
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
            format: useAlpha ? alphaCustomJsCjs.name : customJsCjs.name,
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
            format: useAlpha ? alphaCustomJsEsm.name : customJsEsm.name,
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
            format: useAlpha ? alphaCustomCss.name : 'css/variables',
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
    AlphaTokenBuilder.extend(
      defineConfig({
        useAlpha: true,
        source: ['src/alpha/global/*.json'],
        basePath: BUILD_PATH.BASE_ALPHA,
        destination: 'global',
        options: { cssSelector: ':where(:root, :host)' },
      })
    ),
    AlphaTokenBuilder.extend(
      defineConfig({
        useAlpha: true,
        source: [
          'src/alpha/functional/*.json',
          'src/alpha/functional/light-theme/*.json',
          'src/alpha/semantic/*.json',
        ],
        reference: ['src/alpha/global/*.json'],
        basePath: BUILD_PATH.BASE_ALPHA,
        destination: 'lightTheme',
        options: {
          cssSelector: ':where(:root, :host), [data-bezier-theme="light"]',
        },
      })
    ),
    AlphaTokenBuilder.extend(
      defineConfig({
        useAlpha: true,
        source: [
          'src/alpha/functional/*.json',
          'src/alpha/functional/dark-theme/*.json',
          'src/alpha/semantic/*.json',
        ],
        reference: ['src/alpha/global/*.json'],
        basePath: BUILD_PATH.BASE_ALPHA,
        destination: 'darkTheme',
        options: { cssSelector: '[data-bezier-theme="dark"]' },
      })
    ),
  ].forEach((builder) => {
    builder.buildAllPlatforms()
  })

  for (const buildPath of [
    `${BUILD_PATH.BASE}/${BUILD_PATH.CSS}`,
    `${BUILD_PATH.BASE_ALPHA}/${BUILD_PATH.CSS}`,
  ]) {
    await mergeCss(buildPath)
  }

  for (const options of [
    { buildPath: `${BUILD_PATH.BASE}/${BUILD_PATH.CJS}`, isCjs: true },
    { buildPath: `${BUILD_PATH.BASE_ALPHA}/${BUILD_PATH.CJS}`, isCjs: true },
    { buildPath: `${BUILD_PATH.BASE}/${BUILD_PATH.ESM}`, isCjs: false },
    { buildPath: `${BUILD_PATH.BASE_ALPHA}/${BUILD_PATH.ESM}`, isCjs: false },
  ]) {
    await buildJsIndex(options)
  }
}

main()
