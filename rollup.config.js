import { DEFAULT_EXTENSIONS } from '@babel/core'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import url from '@rollup/plugin-url'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import { visualizer } from 'rollup-plugin-visualizer'

import packageJson from './package.json'

const extensions = DEFAULT_EXTENSIONS.concat(['.ts', '.tsx'])

const commonPlugins = [
  commonjs(),
  babel({
    babelHelpers: 'runtime',
    exclude: 'node_modules/**',
    extensions,
  }),
  peerDepsExternal(),
  url(),
  visualizer({
    filename: 'stats.html',
  }),
]

const configGenerator = ({
  output: _output,
  plugins: _plugins,
}) => ({
  input: 'src/index.ts',
  output: {
    ..._output,
    sourcemap: true,
  },
  plugins: [
    ..._plugins,
    ...commonPlugins,
  ],
  external: [/@babel\/runtime/],
})

export default [
  // CommonJS
  configGenerator({
    output: {
      file: packageJson.main,
      format: 'cjs',
    },
    plugins: [
      nodeResolve({
        mainFields: ['main', 'module'],
        extensions,
      }),
    ],
  }),
  // ESModules
  configGenerator({
    output: {
      dir: 'build',
      format: 'esm',
      preserveModules: true,
    },
    plugins: [
      nodeResolve({
        extensions,
      }),
    ],
  }),
]
