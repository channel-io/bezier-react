import StyleDictionary, {
  type Config,
  type Platform,
} from 'style-dictionary'

import {
  customJsCjs,
  customJsEsm,
} from './lib/format'
import {
  customFontPxToRem,
  customRadiusPx,
} from './lib/transform'
import { toCamelCase } from './lib/utils'

const TokenBuilder = StyleDictionary
  .registerTransform(customFontPxToRem)
  .registerTransform(customRadiusPx)
  .registerFormat(customJsCjs)
  .registerFormat(customJsEsm)

function defineWebPlatform(options: Platform): Platform {
  return {
    transforms: [
      'attribute/cti',
      'name/cti/kebab',
      customFontPxToRem.name,
      customRadiusPx.name,
    ],
    basePxFontSize: 10,
    ...options,
  }
}

interface DefineConfigOptions {
  source: string[]
  destination: string
  options?: {
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
      'js/cjs': defineWebPlatform({
        buildPath: 'dist/cjs/',
        files: [
          {
            destination: `${toCamelCase(destination)}.js`,
            format: customJsCjs.name,
            filter: (token) => token.filePath.includes(destination),
          },
        ],
      }),
      'js/esm': defineWebPlatform({
        buildPath: 'dist/esm/',
        files: [
          {
            destination: `${toCamelCase(destination)}.mjs`,
            format: customJsEsm.name,
            filter: (token) => token.filePath.includes(destination),
          },
        ],
      }),
      css: defineWebPlatform({
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
        source: ['src/global/*.json', 'src/semantic/light-theme/*.json'],
        destination: 'light-theme',
        options: {
          cssSelector: ':where(:root, :host), [data-bezier-theme="light"]',
        },
      }),
    ),
    TokenBuilder.extend(
      defineConfig({
        source: ['src/global/*.json', 'src/semantic/dark-theme/*.json'],
        destination: 'dark-theme',
        options: { cssSelector: '[data-bezier-theme="dark"]' },
      }),
    ),
  ].forEach((builder) => builder.buildAllPlatforms())
}

main()
