module.exports = {
  root: true,
  extends: [
    '@channel.io/eslint-config',
    'plugin:storybook/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'max-classes-per-file': 'off',
    // FIXME: Delete the below rules after migration
    'react/destructuring-assignment': 'off',
    'react/jsx-key': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',
  },
  overrides: [
    {
      files: ['bezier-react/**/*'],
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
