import { DEFAULT_EXTENSIONS } from '@babel/core'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import url from '@rollup/plugin-url'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import { visualizer } from 'rollup-plugin-visualizer'

import packageJson from './package.json'

const extensions = DEFAULT_EXTENSIONS.concat(['.ts', '.tsx'])

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      extensions,
    }),
    commonjs(),
    url(),
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
      extensions,
    }),
    visualizer({
      filename: 'stats.html',
    }),
  ],
  external: [/@babel\/runtime/],
}
