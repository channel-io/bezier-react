import { minimatch } from 'minimatch'
import StyleDictionary, { type Platform } from 'style-dictionary'

import {
  customJsCjs,
  customJsEsm,
} from './lib/format'
import { CSSTransforms } from './lib/transform'

const CustomTransforms = [...Object.values(CSSTransforms)]

const TokenBuilder = CustomTransforms.reduce(
  (builder, transform) => builder.registerTransform(transform),
  StyleDictionary,
)
  .registerFormat(customJsCjs)
  .registerFormat(customJsEsm)

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

const PATH = {
  GLOBAL: 'src/global/*.json',
  SEMANTIC_COMMON: 'src/semantic/*.json',
  SEMANTIC_LIGHT: 'src/semantic/light-theme/*.json',
  SEMANTIC_DARK: 'src/semantic/dark-theme/*.json',
} as const

function main() {
  TokenBuilder.extend({
    source: [PATH.GLOBAL, PATH.SEMANTIC_COMMON, PATH.SEMANTIC_LIGHT],
    platforms: {
      'web/cjs/global': defineWebPlatform({
        buildPath: 'dist/cjs/',
        files: [
          {
            destination: 'global.js',
            format: customJsCjs.name,
            filter: ({ filePath }) =>
              [PATH.GLOBAL].some((src) => minimatch(filePath, src)),
          },
        ],
      }),
      'web/esm/global': defineWebPlatform({
        buildPath: 'dist/esm/',
        files: [
          {
            destination: 'global.mjs',
            format: customJsEsm.name,
            filter: ({ filePath }) =>
              [PATH.GLOBAL].some((src) => minimatch(filePath, src)),
          },
        ],
      }),
      'web/css/global': defineWebPlatform({
        buildPath: 'dist/css/',
        files: [
          {
            destination: 'global.css',
            format: 'css/variables',
            filter: ({ filePath }) =>
              [PATH.GLOBAL, PATH.SEMANTIC_COMMON].some((src) =>
                minimatch(filePath, src),
              ),
            options: {
              selector: ':where(:root, :host)',
              outputReferences: true,
            },
          },
        ],
      }),
      'web/cjs/light-theme': defineWebPlatform({
        buildPath: 'dist/cjs/',
        files: [
          {
            destination: 'lightTheme.js',
            format: customJsCjs.name,
            filter: ({ filePath }) =>
              [PATH.SEMANTIC_COMMON, PATH.SEMANTIC_LIGHT].some((src) =>
                minimatch(filePath, src),
              ),
          },
        ],
      }),
      'web/esm/light-theme': defineWebPlatform({
        buildPath: 'dist/esm/',
        files: [
          {
            destination: 'lightTheme.mjs',
            format: customJsEsm.name,
            filter: ({ filePath }) =>
              [PATH.SEMANTIC_COMMON, PATH.SEMANTIC_LIGHT].some((src) =>
                minimatch(filePath, src),
              ),
          },
        ],
      }),
      'web/css/light-theme': defineWebPlatform({
        buildPath: 'dist/css/',
        files: [
          {
            destination: 'light-theme.css',
            format: 'css/variables',
            filter: ({ filePath }) =>
              [PATH.SEMANTIC_LIGHT].some((src) => minimatch(filePath, src)),
            options: {
              selector: ':where(:root, :host), [data-bezier-theme="light"]',
              outputReferences: true,
            },
          },
        ],
      }),
    },
  }).buildAllPlatforms()

  TokenBuilder.extend({
    source: [PATH.GLOBAL, PATH.SEMANTIC_COMMON, PATH.SEMANTIC_DARK],
    platforms: {
      'web/cjs/dark-theme': defineWebPlatform({
        buildPath: 'dist/cjs/',
        files: [
          {
            destination: 'darkTheme.js',
            format: customJsCjs.name,
            filter: ({ filePath }) =>
              [PATH.SEMANTIC_COMMON, PATH.SEMANTIC_DARK].some((src) =>
                minimatch(filePath, src),
              ),
          },
        ],
      }),
      'web/esm/dark-theme': defineWebPlatform({
        buildPath: 'dist/esm/',
        files: [
          {
            destination: 'darkTheme.mjs',
            format: customJsEsm.name,
            filter: ({ filePath }) =>
              [PATH.SEMANTIC_COMMON, PATH.SEMANTIC_DARK].some((src) =>
                minimatch(filePath, src),
              ),
          },
        ],
      }),
      'web/css/dark-theme': defineWebPlatform({
        buildPath: 'dist/css/',
        files: [
          {
            destination: 'darkTheme.css',
            format: 'css/variables',
            filter: ({ filePath }) =>
              [PATH.SEMANTIC_DARK].some((src) => minimatch(filePath, src)),
            options: {
              selector: '[data-bezier-theme="dark"]',
              outputReferences: true,
            },
          },
        ],
      }),
    },
  }).buildAllPlatforms()
}

main()
