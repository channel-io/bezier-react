module.exports = {
  extends: [
    '@channel.io/eslint-config',
    'plugin:storybook/recommended',
  ],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'max-classes-per-file': 'off',
    'no-restricted-imports': 'off',
  },
}
