import { readFileSync } from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'

import { DEFAULT_EXTENSIONS } from '@babel/core'
import alias from '@rollup/plugin-alias'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import url from '@rollup/plugin-url'
import { defineConfig } from 'rollup'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { visualizer } from 'rollup-plugin-visualizer'

const pkg = JSON.parse(
  readFileSync(fileURLToPath(new URL('./package.json', import.meta.url))),
)

const rootDir = fileURLToPath(new URL('.', import.meta.url))

const extensions = [...DEFAULT_EXTENSIONS, '.ts', '.tsx']

const generateConfig = ({
  output = [],
  plugins = [],
}) => defineConfig({
  input: 'src/index.ts',
  output,
  external: [/@babel\/runtime/],
  plugins: [
    alias({
      entries: [{
        find: '~',
        replacement: rootDir,
      }],
    }),
    peerDepsExternal(),
    nodeResolve({ extensions }),
    commonjs(),
    babel({
      babelHelpers: 'runtime',
      skipPreflightCheck: true,
      exclude: 'node_modules/**',
      extensions,
    }),
    url(),
    visualizer({ filename: 'stats.html' }),
    ...plugins,
  ],
})

export default defineConfig([
  generateConfig({
    output: [{
      format: 'cjs',
      dir: path.dirname(pkg.main),
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: 'src',
      entryFileNames: '[name].js',
      exports: 'named',
    },
    {
      format: 'esm',
      dir: path.dirname(pkg.module),
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: 'src',
      entryFileNames: '[name].mjs',
    }],
  }),
])
