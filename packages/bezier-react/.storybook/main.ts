import {
  dirname,
  join,
} from 'path'

import { type StorybookConfig } from '@storybook/react-webpack5'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')))
}

export default {
  stories: [
    '../src/**/*.stories.(tsx|mdx)',
  ],

  addons: [
    getAbsolutePath('@storybook/addon-controls'),
    getAbsolutePath('@storybook/addon-actions'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-toolbars'),
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-backgrounds'),
    {
      name: '@storybook/addon-styling',
      options: {
        sass: {
          implementation: require('sass'),
        },
      },
    },
  ],

  typescript: {
    /**
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
      ],
    }

    config.module = {
      ...config.module,
      rules: [
        ...(config.module?.rules ?? []), {
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

  docs: {
    autodocs: true,
  },
} as StorybookConfig
