/**
 * @type {import('eslint').Linter.Config}
*/
module.exports = {
  root: true,
  extends: ['bezier'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.eslint.json',
  }
}
