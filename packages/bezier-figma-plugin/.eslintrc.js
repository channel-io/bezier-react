module.exports = {
  root: true,
  extends: [
    '@channel.io/eslint-config'
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.eslint.json',
  },
  overrides: [
    {
      files: ['./**/*'],
      rules: {
        'no-restricted-imports': 'off',
        'no-restricted-globals': 'off',
      },
    },
  ],
}
