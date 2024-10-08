/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ['@channel.io/eslint-config/web'],
  plugins: ['@channel.io/eslint-plugin', 'jest'],
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['dist', 'node_modules'],
  env: {
    node: true,
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
        ],
      },
    ],
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true,
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { fixStyle: 'inline-type-imports' },
    ],
    '@typescript-eslint/consistent-type-exports': [
      'error',
      { fixMixedExportsWithInlineTypeSpecifier: true },
    ],
    '@typescript-eslint/naming-convention': 'off',
  },
}
