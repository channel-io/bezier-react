module.exports = {
  root: true,
  extends: ['bezier'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.eslint.json',
  },
  rules: {
    'max-classes-per-file': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'warn',
    'import/no-duplicates': ['error', { 'prefer-inline': true }],
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/consistent-type-imports': ['error', { fixStyle: 'inline-type-imports' }],
    '@typescript-eslint/consistent-type-exports': 'error',
  },
  overrides: [
    {
      files: ['./packages/**/src/**/*'],
      rules: {
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
  ],
}
