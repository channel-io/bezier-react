module.exports = {
  root: true,
  extends: [
    '@channel.io/eslint-config',
    'plugin:storybook/recommended',
  ],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'max-classes-per-file': 'off',
    'no-restricted-imports': 'off',
    // FIXME: Delete the below rules after migration
    'react/destructuring-assignment': 'off',
    'react/jsx-key': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',
  },
}
