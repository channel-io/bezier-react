import postcssStyledSyntax from 'postcss-styled-syntax'

module.exports = {
  plugins: [
    './plugins/no-component-style-override',
    './plugins/no-internal-selector',
    './plugins/prefer-layout-component',
    './plugins/require-suppression-reason',
    './plugins/validate-token',
  ],
  rules: {
    'bezier/validate-token': true,
  },
  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      customSyntax: postcssStyledSyntax,
    },
  ],
}
