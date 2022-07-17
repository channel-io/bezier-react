const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: [
    '../src/stories/Intro.stories.mdx',
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
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({}),
    ]

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]],
      },
    })

    config.resolve.extensions.push('.ts', '.tsx')

    return config
  }
}
