module.exports = {
  plugins: ['./plugins/validate-token'],
  rules: {
    'bezier/validate-token': true,
  },
  overrides: [
    {
      files: ['**/*.ts'],
      customSyntax: 'postcss-styled-syntax',
    },
  ],
}
