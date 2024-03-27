import { minimatch } from 'minimatch'
import StyleDictionary, {
  type Config,
  type Options,
  type Platform,
} from 'style-dictionary'

import { customJsCjs, customJsEsm } from './lib/format'
import { CSSTransforms } from './lib/transform'

const CustomTransforms = [...Object.values(CSSTransforms)]

const TokenBuilder = CustomTransforms.reduce(
  (builder, transform) => builder.registerTransform(transform),
  StyleDictionary
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
  return {
    source: [...source, ...reference],
    platforms: {
      'web/cjs': defineWebPlatform({
        buildPath: `${basePath}/cjs/`,
        files: [
          {
            destination: `${destination}.js`,
            format: customJsCjs.name,
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
            format: customJsEsm.name,
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

function main() {
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
    TokenBuilder.extend(
      defineConfig({
        source: ['src/alpha/global/*.json'],
        basePath: 'dist/alpha',
        destination: 'global',
        options: { cssSelector: ':where(:root, :host)' },
      })
    ),
  ].forEach((builder) => builder.buildAllPlatforms())
}

main()
