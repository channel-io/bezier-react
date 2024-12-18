import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

/**
 * @type {import('rollup').RollupOptions}
 */
export default [
  {
    input: 'src/server.ts',
    output: {
      file: 'dist/server.js',
      format: 'cjs',
    },
    external: ['vscode'],
    plugins: [
      nodeResolve({
        browser: false,
        preferBuiltins: true,
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),
      commonjs(),
      typescript(),
    ],
  },
  {
    input: 'src/client.ts',
    output: {
      file: 'dist/client.js',
      format: 'cjs',
    },
    external: ['vscode'],
    plugins: [
      nodeResolve({
        browser: false,
        preferBuiltins: true,
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),
      commonjs(),
      typescript(),
    ],
  },
]
