module.exports = {
  plugins: [
    "import-newlines"
  ],
  extends: [
    '@channel.io/eslint-config',
  ],
  rules: {
    'import-newlines/enforce': ['error', { items: 1 }],
    'import/no-duplicates': ['error', { 'prefer-inline': true }],
    '@typescript-eslint/consistent-type-imports': ['error', { fixStyle: 'inline-type-imports' }],
    '@typescript-eslint/consistent-type-exports': 'error',
    'jsx-a11y/alt-text': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/no-static-element-interactions': 'warn',
  }
}
