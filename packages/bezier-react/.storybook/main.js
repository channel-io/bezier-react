const ReactDocgenTypescriptPlugin = require('@channel-io/react-docgen-typescript-plugin').default
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
  typescript: {
    /**
     * @note
     * 
     * default `typescript.reactDocgen` option is to use `react-docgen-typescript-plugin`,
     * which is not compatible with TS <= 4.3
     * 
     * so we need to disable and override it with our own plugin (@channel-io/react-docgen-typescript-plugin).
     */
    reactDocgen: false,
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

    if (process.env.NODE_ENV === 'production') {
      /**
       * @note
       * 
       * `react-docgen-typescript-plugin` introduces significant overhead
       * when HMR is enabled, so we enable it only in production.
       */
      config.plugins.push(new ReactDocgenTypescriptPlugin({
        shouldExtractLiteralValuesFromEnum: true,
        propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
      }))
    }

    return config
  }
}
