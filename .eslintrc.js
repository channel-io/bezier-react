module.exports = {
  extends: ['@channel.io/eslint-config'],
  parserOptions: {
    project: ['./tsconfig.eslint.json'],
  },
  rules: {
    'no-restricted-imports': 'off',
    'no-restricted-modules': 'off',
    'react/jsx-props-no-spreading': 'off',
    'max-classes-per-file': 'off',
  },
}
