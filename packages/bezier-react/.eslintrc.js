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
        pathGroupsExcludedImportTypes: ['react', 'react-dom'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'react-dom',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '~/src/foundation',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '~/src/foundation/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '~/src/components/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: './**/*.styled',
            group: 'sibling',
            position: 'after',
          },
        ],
      },
    ],
    'max-classes-per-file': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'warn',
    '@typescript-eslint/naming-convention': 'off',
  },
}
