/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  root: true,
  plugins: ['jsdoc', 'sort-export-all', 'storybook'],
  extends: ['bezier', 'plugin:jsdoc/recommended-typescript-error'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.eslint.json',
  },
  rules: {
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: { order: 'asc' },
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        pathGroupsExcludedImportTypes: ['react', 'react-dom'],
        pathGroups: [
          {
            pattern: '{react,react-dom}',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '~/src/{alpha-components,components}/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: './**/*.scss',
            group: 'sibling',
            position: 'after',
          },
        ],
      },
    ],
    'sort-export-all/sort-export-all': 'error',
    'jsdoc/require-jsdoc': 'off',
    'jsdoc/require-returns': 'off',
    'jsdoc/require-param': 'off',
    'jsdoc/check-param-names': 'off',
    /**
     * NOTE: To allow @type tag in configuration files
     */
    'jsdoc/check-tag-names': [
      'error',
      {
        typed: false,
      },
    ],
  },
}
