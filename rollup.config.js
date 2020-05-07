import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import ts from 'rollup-plugin-typescript2'
import sass from 'rollup-plugin-sass'
import commonjs from '@rollup/plugin-commonjs'

import packageJson from './package.json'

export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    ts({ useTsconfigDeclarationDir: true }),
    sass({
      insert: true,
    }),
  ],
}
