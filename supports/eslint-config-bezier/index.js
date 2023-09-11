module.exports = {
  plugins: ['import-newlines'],
  extends: ['@channel.io/eslint-config'],
  rules: {
    "no-multiple-empty-lines": ['error', { max: 1, maxEOF: 1, maxBOF: 0 }],
    'import-newlines/enforce': ['error', { items: 1 }],
    // FIXME: Conflict with consistent-type-imports rule. Try testing again after TS version 5 update.
    // 'import/no-duplicates': ['error', { 'prefer-inline': true }],
    '@typescript-eslint/consistent-type-imports': ['error', { fixStyle: 'inline-type-imports' }],
    '@typescript-eslint/consistent-type-exports': 'error',
    'jsx-a11y/alt-text': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/no-static-element-interactions': 'warn',
  }
}
