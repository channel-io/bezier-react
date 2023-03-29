module.exports = {
  root: true,
  extends: ['bezier'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.eslint.json',
  },
  rules: {
    '@typescript-eslint/naming-convention': 'off',
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
