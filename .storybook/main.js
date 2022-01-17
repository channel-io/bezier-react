const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  stories: [
    '../src/**/*.stories.(tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-controls',
    '@storybook/addon-actions',
    '@storybook/addon-a11y',
    '@storybook/addon-toolbars',
    '@storybook/addon-docs',
    '@storybook/addon-backgrounds',
  ],
  features: {
    postcss: false,
  },
  webpackFinal: async (config) => {
    // Apply tsconfig alias path
    config.resolve.plugins.push(new TsconfigPathsPlugin({}))

    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    })

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]],
      },
    })

    config.resolve.extensions.push('.ts', '.tsx')

    config.node = { fs: 'empty' }

    return config
  }
}
