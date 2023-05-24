import * as fs from 'fs'
import * as path from 'path'

import commonjs from '@rollup/plugin-commonjs'
import url from '@rollup/plugin-url'
import virtual from '@rollup/plugin-virtual'
import { createFilter } from '@rollup/pluginutils'
import { transform } from '@svgr/core'
import { defineConfig } from 'rollup'
import { optimize } from 'svgo'

const config = {
  iconsDir: 'icons',
}

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
    {
      name: 'convertColors',
      params: {
        currentColor: true,
      },
    },
  ],
}

/**
 * @type { { name: string, svg: string }[] }
 */
const iconEntries = []

function toCamelCase(str) {
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase())
}

function generateIconEntryModule() {
  const files = fs.readdirSync(config.iconsDir, 'utf-8')

  const iconObjects = files.map((file) => {
    const iconName = file.replace('.svg', '')
    const iconKey = toCamelCase(iconName)
    const svgSource = fs.readFileSync(`${config.iconsDir}/${file}`, 'utf-8')
    const { data: optimizedSvg } = optimize(svgSource, {
      ...svgoConfig,
      path: file,
    })

    iconEntries.push({ name: iconName, svg: optimizedSvg })

    return `'${iconKey}': { name: '${iconName}', svg: '${optimizedSvg}' },`
  })

  return `export default { ${iconObjects.join('\n')} };`
}

/**
 * 1. svgo를 통해 svg를 최적화한다. 용량 감소 및 fill=currentColor 변환을 위해
 * 2. svgr core를 통해 리액트 컴포넌트로 변환한다.
 * 3. 빌드 완료 시 아래와 같은 디렉토리 구조가 되어야한다.
 *  dist/
 *   index.js: 소스엔 없지만,빌드 타임에 생성되는 파일. import allIcon from 'icons/all.svg' 를 export { all: { name: 'all' svg: '<svg>...' } } 같은 형식으로 svg 하위 디렉토리에 있는 모든 svg를 export 한다.
 *   icons/ : 최적화된 svg 파일들이 들어있는 디렉토리. import allIcon from '@channel.io/bezier-icons/icons/all.svg' 같은 형식으로 라이브러리 사용처에서 접근할 수 있다.
 *   react/ : 최적화된 svg 파일들을 리액트 컴포넌트로 변환한 파일들이 들어있는 디렉토리. import { AllIcon } from '@channel.io/bezier-icons/react' 같은 형식으로 라이브러리 사용처에서 접근할 수 있다.
 *   index.d.ts: 리액트 컴포넌트 및 index.js 에서 내보내는 객체에 대한 타입 정의를 담고 있다.
 *   cf) 또한 이 라이브러리는 esm, cjs 모듈 시스템 모두 잘 지원해야한다.
 */

/**
 * @type {import('@svgr/babel-plugin-transform-svg-component').Template}
 */
function reactIconTemplate({ imports, componentName, props, interfaces, jsx }, { tpl }) {
  return tpl`
    ${imports}

    ${interfaces}

    import { createBezierIcon } from '../utils'

    function ${componentName}(${props}) {
      return (
        ${jsx}
      )
    }

    export default createBezierIcon(${componentName})
  `
}

/**
 * @type {import('rollup').PluginImpl}
 */
function buildSvg(options = {}) {
  const filter = createFilter(options.include || '**/*.svg', options.exclude)

  /**
   * @type {import('rollup').EmittedFile[]}
   */
  const optimizedSvgEmittedFiles = []

  return {
    name: 'buildSvg',
    async transform(code, id) {
      if (!filter(id) || !id.endsWith('.svg')) { return null }

      console.debug('🚨[transform] id:', id)
      console.debug('🚨[transform] code:', code)

      const rawSvg = fs.readFileSync(id, 'utf8')
      // console.debug(rawSvg)

      const { data: optimizedSvgCode } = optimize(rawSvg, {
        ...svgoConfig,
        path: id,
      })

      optimizedSvgEmittedFiles.push({
        type: 'asset',
        fileName: `icons/${path.basename(id)}`,
        source: optimizedSvgCode,
      })

      const jsCode = await transform(
        optimizedSvgCode,
        {
          icon: true,
          template: reactIconTemplate,
        },
        {
          filePath: id,
          caller: { name: 'buildSvg' },
        },
      )

      console.debug('🚨[transform] react:', jsCode)

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
      console.debug('🚨[buildEnd] optimizedSvgs:', optimizedSvgEmittedFiles)
      optimizedSvgEmittedFiles.forEach(this.emitFile)
    },
  }
}

export default defineConfig(
  [
    {
      input: 'src/index.ts',
      output: [
        {
          dir: 'dist',
          format: 'cjs',
          entryFileNames: '[name].js',
          chunkFileNames: '[name].js',
        },
        {
          dir: 'dist',
          format: 'esm',
          entryFileNames: '[name].mjs',
          chunkFileNames: '[name].mjs',
        },
      ],
      plugins: [
        virtual({
          'icons/index.ts': generateIconEntryModule(),
          'src/index.ts': `
        import icons from '../icons/index.ts'
        export default icons
      `,
        }),
        buildSvg(),
      ],
    },
    {
      input: 'src/react/index.ts',
      output: [
        {
          dir: 'dist',
          format: 'cjs',
          entryFileNames: '[name].js',
          chunkFileNames: '[name].js',
        },
        {
          dir: 'dist',
          format: 'esm',
        },
      ],
      plugins: [
        virtual({
          'icons/index.ts': generateIconEntryModule(),
          'src/index.ts': `
        import icons from '../icons/index.ts'
        export default icons
      `,
        }),
        buildSvg(),
      ],

    },
  ])
