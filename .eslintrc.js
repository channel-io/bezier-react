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
      files: ['./packages/bezier-react/**/*'],
      rules: {
        'import/extensions': 'off', // FIXME(@aru)
        'import/order': [
          'error',
          {
            groups: ['external', 'builtin', 'internal', 'parent', 'sibling', 'index'],
            pathGroups: [
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
                pattern: '~/src/providers/**',
                group: 'internal',
                position: 'before',
              },
              {
                pattern: '~/src/hooks/**',
                group: 'internal',
                position: 'before',
              },
              {
                pattern: '~/src/worklets/**',
                group: 'internal',
                position: 'before',
              },
              {
                pattern: '~/src/@(constants|types|utils|assets)/**',
                group: 'internal',
                position: 'before',
              },
              {
                pattern: '~/src/@(components|layout)/**',
                group: 'internal',
                position: 'before',
              },
            ],
          },
        ],
      },
    },
    {
      files: ['./packages/bezier-figma-plugin/**/*'],
      rules: {
        'no-restricted-imports': 'off',
        'no-restricted-globals': 'off',
      },
    },
  ],
}
