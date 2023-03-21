module.exports = {
  plugins: [
    "import-newlines"
  ],
  extends: [
    '@channel.io/eslint-config',
  ],
  rules: {
    'import/no-duplicates': ['error', { 'prefer-inline': true }],
    'import-newlines/enforce': ['error', { items: 1 }],
    '@typescript-eslint/consistent-type-imports': ['error', { fixStyle: 'inline-type-imports' }],
    '@typescript-eslint/consistent-type-exports': 'error',
  }
}
