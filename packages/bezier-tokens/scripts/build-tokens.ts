import StyleDictionary, {
  type Config,
  type Options,
  type Platform,
} from 'style-dictionary'

import { customFileHeader } from './lib/fileHeader'
import {
  customJsCjs,
  customJsEsm,
} from './lib/format'
import {
  customCubicBezier,
  customFontFamily,
  customFontRem,
} from './lib/transform'

const TokenBuilder = StyleDictionary
  .registerTransform(customCubicBezier)
  .registerTransform(customFontFamily)
  .registerTransform(customFontRem)
  .registerFormat(customJsCjs)
  .registerFormat(customJsEsm)
  .registerFileHeader(customFileHeader)

function defineWebPlatform({ options, ...rest }: Platform): Platform {
  return {
    transforms: [
      'attribute/cti',
      'name/cti/kebab',
      customCubicBezier.name,
      customFontFamily.name,
      customFontRem.name,
    ],
    basePxFontSize: 10,
    options: {
      fileHeader: customFileHeader.name,
      ...options,
    },
    ...rest,
  }
}

interface DefineConfigOptions {
  source: string[]
  destination: string
  options?: Options & {
    cssSelector: string
  }
}

function defineConfig({
  source,
  destination,
  options,
}: DefineConfigOptions): Config {
  return {
    source,
    platforms: {
      'web/cjs': defineWebPlatform({
        buildPath: 'dist/cjs/',
        files: [
          {
            destination: `${destination}.js`,
            format: customJsCjs.name,
            filter: (token) => token.filePath.includes(destination),
          },
        ],
      }),
      'web/esm': defineWebPlatform({
        buildPath: 'dist/esm/',
        files: [
          {
            destination: `${destination}.mjs`,
            format: customJsEsm.name,
            filter: (token) => token.filePath.includes(destination),
          },
        ],
      }),
      'web/css': defineWebPlatform({
        buildPath: 'dist/css/',
        files: [
          {
            destination: `${destination}.css`,
            format: 'css/variables',
            filter: (token) => token.filePath.includes(destination),
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

function main() {
  [
    TokenBuilder.extend(
      defineConfig({
        source: ['src/global/*.json'],
        destination: 'global',
        options: { cssSelector: ':where(:root, :host)' },
      }),
    ),
    TokenBuilder.extend(
      defineConfig({
        source: ['src/global/*.json', 'src/semantic/lightTheme/*.json'],
        destination: 'lightTheme',
        options: {
          cssSelector: ':where(:root, :host), [data-bezier-theme="light"]',
        },
      }),
    ),
    TokenBuilder.extend(
      defineConfig({
        source: ['src/global/*.json', 'src/semantic/darkTheme/*.json'],
        destination: 'darkTheme',
        options: { cssSelector: '[data-bezier-theme="dark"]' },
      }),
    ),
  ].forEach((builder) => builder.buildAllPlatforms())
}

main()
