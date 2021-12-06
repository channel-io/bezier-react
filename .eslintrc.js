module.exports = {
  extends: ['@channel.io/eslint-config', 'plugin:storybook/recommended'],
  parserOptions: {
    project: ['./tsconfig.eslint.json'],
  },
  rules: {
    'no-restricted-modules': 'off',
    'react/jsx-props-no-spreading': 'off',
    'max-classes-per-file': 'off',
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
}
