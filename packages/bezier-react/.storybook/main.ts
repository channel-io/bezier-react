import {
  dirname,
  join,
} from 'path'

import { type StorybookConfigVite } from '@storybook/builder-vite'
import { mergeConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')))
}

export default {
  stories: [
    '../src/**/*.stories.@(tsx|mdx)',
  ],

  addons: [
    getAbsolutePath('@storybook/addon-controls'),
    getAbsolutePath('@storybook/addon-actions'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-toolbars'),
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-backgrounds'),
  ],

  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {
      builder: {
        useSWC: true,
      },
    },
  },

  viteFinal: async (config) => mergeConfig(config, {
    define: {
      'process.env': process.env,
    },
    sourcemap: true,
    plugins: [
      tsconfigPaths(),
    ],
  }),

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

  docs: {
    autodocs: true,
  },
} as StorybookConfigVite
