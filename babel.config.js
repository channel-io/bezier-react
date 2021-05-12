module.exports = {
  env: {
    test: {
      presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        '@babel/preset-react',
        ['@babel/preset-typescript', { isTSX: true, allExtensions: true }],
      ],
      plugins: [
        "@babel/plugin-transform-runtime",
        ['@babel/plugin-proposal-class-properties', { loose: false }],
      ],
    },
    build: {
      presets: [
        ['@babel/preset-env'],
        '@babel/preset-react',
        ['@babel/preset-typescript', { isTSX: true, allExtensions: true }],
      ],
      plugins: [
        "@babel/plugin-transform-runtime",
        ['@babel/plugin-proposal-class-properties', { loose: false }],
      ],
    },
  },
}
