module.exports = {
  env: {
    build: {
      presets: [
        ['@babel/preset-env'],
        '@babel/preset-react',
        ['@babel/preset-typescript', { isTSX: true, allExtensions: true }],
      ],
      plugins: [
        '@babel/plugin-transform-runtime',
        ['@babel/plugin-proposal-private-property-in-object', { loose: false }],
        ['@babel/plugin-proposal-class-properties', { loose: false }],
        ['babel-plugin-styled-components', {
          minify: true,
          pure: true,
          topLevelImportPaths: ['~/src/foundation'],
        }],
      ],
    },
  },
}
