import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import { defineConfig } from 'rollup'

export default defineConfig({
  input: 'src/client.ts',
  output: {
    dir: 'dist',
    format: 'cjs',
  },
  external: ['vscode'],
  plugins: [
    nodeResolve({
      browser: false,
      preferBuiltins: true,
      extensions: ['.js', '.jsx', '.ts', '.tsx'], // 해석할 파일 확장자
    }),
    commonjs(),
    typescript(),
  ],
})
