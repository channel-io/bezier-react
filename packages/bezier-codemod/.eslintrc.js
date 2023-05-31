module.exports = {
  root: true,
  extends: ['bezier'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.eslint.json',
  },
  rules: {
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true,
      },
    ],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: { order: 'asc' },
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      },
    ],
    '@typescript-eslint/naming-convention': 'off',
  },
}
