import { minimatch } from 'minimatch'
import StyleDictionary, {
  type Config,
  type Options,
  type Platform,
} from 'style-dictionary'

import { buildJsIndex } from './build-js-index'
import {
  alphaCustomJsCjs,
  alphaCustomJsEsm,
  customJsCjs,
  customJsEsm,
} from './lib/format'
import { CSSTransforms } from './lib/transform'
import { mergeCss } from './merge-css'

const CustomTransforms = [...Object.values(CSSTransforms)]

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

function defineWebPlatform({ options, ...rest }: Platform): Platform {
  return {
    transforms: [
      'attribute/cti',
      'name/cti/kebab',
      ...CustomTransforms.map((transform) => transform.name),
    ],
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
  return {
    source: [...source, ...reference],
    platforms: {
      'web/cjs': defineWebPlatform({
        buildPath: `${basePath}/cjs/`,
        files: [
          {
            destination: `${destination}.js`,
            format: useAlpha ? alphaCustomJsCjs.name : customJsCjs.name,
            filter: ({ filePath }) =>
              source.some((src) => minimatch(filePath, src)),
          },
        ],
      }),
      'web/esm': defineWebPlatform({
        buildPath: `${basePath}/esm/`,
        files: [
          {
            destination: `${destination}.mjs`,
            format: useAlpha ? alphaCustomJsEsm.name : customJsEsm.name,
            filter: ({ filePath }) =>
              source.some((src) => minimatch(filePath, src)),
          },
        ],
      }),
      'web/css': defineWebPlatform({
        buildPath: `${basePath}/css/`,
        files: [
          {
            destination: `${destination}.css`,
            format: 'css/variables',
            filter: ({ filePath }) =>
              source.some((src) => minimatch(filePath, src)),
            options: {
              selector: options?.cssSelector,
              outputReferences: true,
            },
          },
        ],
      }),
    },
  }
}

async function main() {
  ;[
    TokenBuilder.extend(
      defineConfig({
        source: ['src/global/*.json'],
        basePath: 'dist',
        destination: 'global',
        options: { cssSelector: ':where(:root, :host)' },
      })
    ),
    TokenBuilder.extend(
      defineConfig({
        source: ['src/semantic/*.json', 'src/semantic/light-theme/*.json'],
        reference: ['src/global/*.json'],
        basePath: 'dist',
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
        basePath: 'dist',
        destination: 'darkTheme',
        options: { cssSelector: '[data-bezier-theme="dark"]' },
      })
    ),
    AlphaTokenBuilder.extend(
      defineConfig({
        useAlpha: true,
        source: ['src/alpha/global/*.json'],
        basePath: 'dist/alpha',
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
        basePath: 'dist/alpha',
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
        basePath: 'dist/alpha',
        destination: 'darkTheme',
        options: { cssSelector: '[data-bezier-theme="dark"]' },
      })
    ),
  ].forEach((builder) => builder.buildAllPlatforms())

  for (const buildPath of ['dist/css', 'dist/alpha/css']) {
    await mergeCss(buildPath)
  }

  for (const options of [
    { buildPath: 'dist/cjs', isCjs: true },
    { buildPath: 'dist/alpha/cjs', isCjs: true },
    { buildPath: 'dist/esm', isCjs: false },
    { buildPath: 'dist/alpha/esm', isCjs: false },
  ]) {
    await buildJsIndex(options)
  }
}

main()
