module.exports = {
  root: true,
  extends: [
    '@channel.io/eslint-config',
    'plugin:storybook/recommended',
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: [
      './tsconfig.eslint.json',
      './packages/*/tsconfig.json',
    ],
  },
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'max-classes-per-file': 'off',
    // FIXME: Delete the below rules after migration
    'react/destructuring-assignment': 'off',
    'react/jsx-key': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',
  },
}
