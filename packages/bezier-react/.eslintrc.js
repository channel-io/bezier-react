module.exports = {
  root: true,
  extends: [
    '@channel.io/eslint-config',
    'plugin:storybook/recommended',
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.eslint.json',
  },
  rules: {
    'max-classes-per-file': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'warn',
    '@typescript-eslint/consistent-type-imports': 'off',
    '@typescript-eslint/naming-convention': 'off',
  },
  overrides: [
    {
      files: ['./**/*'],
      rules: {
        'import/order': [
          'error',
          {
            groups: ['external', 'builtin', 'internal', 'parent', 'sibling', 'index'],
            pathGroups: [
              {
                pattern: 'Foundation',
                group: 'internal',
                position: 'before',
              },
              {
                pattern: 'Foundation/**',
                group: 'internal',
                position: 'before',
              },
              {
                pattern: 'Providers/**',
                group: 'internal',
                position: 'before',
              },
              {
                pattern: 'Hooks/**',
                group: 'internal',
                position: 'before',
              },
              {
                pattern: 'Worklets/**',
                group: 'internal',
                position: 'before',
              },
              {
                pattern: '@(Constants|Types|Utils)/**',
                group: 'internal',
                position: 'before',
              },
              {
                pattern: '@(Components|Layout)/**',
                group: 'internal',
                position: 'before',
              },
            ],
          },
        ],
      },
    },
  ],
}
