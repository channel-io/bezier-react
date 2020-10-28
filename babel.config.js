module.exports = {
  env: {
    test: {
      presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        '@babel/preset-react',
        ['@babel/preset-typescript', { isTSX: true, allExtensions: true }],
      ],
      plugins: [
        ["@babel/plugin-proposal-decorators", { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: false }],
        ['@babel/plugin-transform-classes', { loose: true }],
        ['transform-imports', {
          'core-decorators': {
            transform: 'core-decorators/lib/${member}',
            preventFullImport: true,
          },
        }],
      ],
    },
    build: {
      presets: [
        ['@babel/preset-env'],
        '@babel/preset-react',
        ['@babel/preset-typescript', { isTSX: true, allExtensions: true }],
      ],
      plugins: [
        ["@babel/plugin-proposal-decorators", { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: false }],
        ['@babel/plugin-transform-classes', { loose: true }],
        ['transform-imports', {
          'core-decorators': {
            transform: 'core-decorators/lib/${member}',
            preventFullImport: true,
          },
        }],
      ],
    },
  },
}
