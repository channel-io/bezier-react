import { dirname, join } from "path"

import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import { type StorybookConfig } from '@storybook/react-webpack5'

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")))
}

const config: StorybookConfig = {
  stories: [
    '../src/**/*.stories.(tsx|mdx)',
  ],

  addons: [
    getAbsolutePath("@storybook/addon-controls"),
    getAbsolutePath("@storybook/addon-actions"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-toolbars"),
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@storybook/addon-backgrounds"),
  ],

  typescript: {
    /**
     * @note
     *
     * `react-docgen-typescript-plugin` introduces significant overhead
     * when HMR is enabled, so we enable it only in production.
     */
    reactDocgen: process.env.NODE_ENV === 'production' && 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldRemoveUndefinedFromOptional: true,
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
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
      extensions: [
        ...(config.resolve?.extensions ?? []),
        '.ts',
        '.tsx',
      ]
    }

    config.module = {
      ...config.module,
      rules: [
        ...(config.module?.rules ?? []), {
        test: /\.(ts|tsx)$/,
        loader: require.resolve('babel-loader'),
        options: {
          presets: [['react-app', { flow: false, typescript: true }]],
          }
        }
      ]
    }

    return config
  },

  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },

  docs: {
    autodocs: true
  }
}

export default config