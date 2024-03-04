/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  root: true,
  plugins: [
    'jsdoc',
    'sort-export-all',
  ],
  extends: [
    'bezier',
    'plugin:jsdoc/recommended-typescript-error',
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.eslint.json',
  },
  rules: {
    'sort-imports': ['error', {
      ignoreDeclarationSort: true,
    }],
    'import/order': ['error', {
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
      pathGroupsExcludedImportTypes: [
        'react',
        'react-dom',
      ],
      pathGroups: [{
        pattern: 'react',
        group: 'external',
        position: 'before',
      }, {
        pattern: 'react-dom',
        group: 'external',
        position: 'before',
      }, {
        pattern: '~/src/primitives/**',
        group: 'internal',
        position: 'after',
      }, {
        pattern: '~/src/components/**',
        group: 'internal',
        position: 'after',
      }, {
        pattern: './**/*.scss',
        group: 'sibling',
        position: 'after',
      }] },
    ],
    'sort-export-all/sort-export-all': 'error',
    'jsdoc/require-jsdoc': 'off',
    'jsdoc/require-returns': 'off',
    'jsdoc/require-param': 'off',
    'jsdoc/check-param-names': 'off',
    /**
     * NOTE: To allow @type tag in configuration files
     */
    'jsdoc/check-tag-names': ['error', {
      typed: false,
    }],
    'max-classes-per-file': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'warn',
    '@typescript-eslint/naming-convention': 'off',
  },
}
