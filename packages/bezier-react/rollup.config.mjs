import { exec } from 'child_process'

import { DEFAULT_EXTENSIONS } from '@babel/core'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import url from '@rollup/plugin-url'
import { defineConfig } from 'rollup'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { visualizer } from 'rollup-plugin-visualizer'

const extensions = [...DEFAULT_EXTENSIONS, '.ts', '.tsx']

/**
 * @type {import('rollup').PluginImpl}
 */
function tscAlias() {
  return {
    name: 'tscAlias',
    writeBundle: () => new Promise((resolve, reject) => {
      exec('tsc-alias', function callback(error, stdout, stderr) {
        if (stderr || error) {
          reject(stderr || error)
        } else {
          resolve(stdout)
        }
      })
    }),
  }
}

const commonPlugins = [
  commonjs(),
  nodeResolve({ extensions }),
  typescript({
    tsconfig: './tsconfig.json',
    exclude: [
      '**/*.stories.tsx',
      '**/*.test.ts',
      '**/*.test.tsx',
      './src/utils/storyUtils.ts',
      './src/utils/testUtils.tsx',
    ],
  }),
  babel({
    babelHelpers: 'runtime',
    skipPreflightCheck: true,
    exclude: 'node_modules/**',
    extensions,
  }),
  peerDepsExternal(),
  url(),
  tscAlias(),
  visualizer({ filename: 'stats.html' }),
]

const generateConfig = ({
  output: _output,
  plugins: _plugins,
}) => defineConfig({
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

export default defineConfig([
  generateConfig({
    output: {
      file: 'dist/index.cjs.js',
      format: 'cjs',
    },
  }),
  generateConfig({
    output: {
      dir: 'dist',
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: '.',
    },
  }),
])
