import { DEFAULT_EXTENSIONS } from '@babel/core'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import url from '@rollup/plugin-url'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import { visualizer } from 'rollup-plugin-visualizer'
import typescript from 'rollup-plugin-typescript2'

import packageJson from './package.json'

const extensions = DEFAULT_EXTENSIONS.concat(['.ts', '.tsx'])

// Order Matters, must after rollup-plugin-node-resolve
// See Also: https://www.npmjs.com/package/rollup-plugin-typescript2
const typescriptPlugin = typescript({
  typescript: require('ttypescript'),
  tsconfig: './tsconfig.json',
  useTsconfigDeclarationDir: true,
  tsconfigDefaults: {
    noEmit: false,
    emitDeclarationOnly: true,
    compilerOptions: {
      plugins: [
        { transform: 'typescript-transform-paths' },
        { transform: 'typescript-transform-paths', afterDeclarations: true },
      ],
    },
    exclude: [
      '**/__mocks__/*',
      '**/*.stories.tsx',
      '**/*.test.ts',
      '**/*.test.tsx',
      './src/utils/storyUtils.ts',
      './src/utils/testUtils.tsx',
    ],
  },
})

const commonPlugins = [
  commonjs(),
  babel({
    babelHelpers: 'runtime',
    skipPreflightCheck: true,
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
      typescriptPlugin,
    ],
  }),
  // ESModules
  configGenerator({
    output: {
      dir: 'build',
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: '.',
    },
    plugins: [
      nodeResolve({
        extensions,
      }),
      typescriptPlugin,
    ],
  }),
]
