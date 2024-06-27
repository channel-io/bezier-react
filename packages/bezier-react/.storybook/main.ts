import { type StorybookConfig } from '@storybook/react-webpack5'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'

export default {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.tsx'],

  addons: [
    '@storybook/addon-controls',
    '@storybook/addon-actions',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-measure',
    '@storybook/addon-outline',
    {
      name: '@storybook/addon-styling-webpack',
      options: {
        rules: [
          {
            test: /\.scss$/,
            use: [
              'style-loader',
              'css-loader',
              {
                loader: 'sass-loader',
                options: {
                  implementation: require.resolve('sass'),
                },
              },
            ],
          },
        ],
      },
    },
    '@storybook/addon-webpack5-compiler-babel',
    '@chromatic-com/storybook',
  ],

  typescript: {
    /**
     * `react-docgen-typescript-plugin` introduces significant overhead
     * when HMR is enabled, so we enable it only in production.
     */
    reactDocgen:
      process.env.NODE_ENV === 'production' && 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldRemoveUndefinedFromOptional: true,
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },

  webpackFinal: async (config) => {
    config.resolve = {
      ...config.resolve,
      // Apply tsconfig alias path
      plugins: [
        ...(config?.resolve?.plugins ?? []),
        new TsconfigPathsPlugin({}),
      ],
      extensions: [...(config.resolve?.extensions ?? []), '.ts', '.tsx'],
    }

    config.module = {
      ...config.module,
      rules: [
        ...(config.module?.rules ?? []),
        {
          test: /\.(ts|tsx)$/,
          loader: require.resolve('babel-loader'),
          options: {
            presets: [['react-app', { flow: false, typescript: true }]],
          },
        },
      ],
    }

    return config
  },

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  docs: {},
} as StorybookConfig
