module.exports = {
  plugins: ['./plugins/validate-token'],
  rules: {
    'bezier/validate-token': true,
  },
  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      customSyntax: 'postcss-styled-syntax',
    },
  ],
}
