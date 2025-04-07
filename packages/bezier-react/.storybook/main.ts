import { type StorybookConfig } from '@storybook/react-webpack5'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'

export default {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.tsx'],

  addons: [
    '@storybook/addon-controls',
    '@storybook/addon-actions',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-designs',
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
              {
                loader: 'css-loader',
                options: {
                  modules: {
                    /**
                     * NOTE: The default value of the `esModule` option is `true`, and the default value of the `namedExport` option is also `true`.
                     * This is set by default to avoid conflicts with the default export keyword of ESModule,
                     * but applying this requires changing all style import statements to Namespace import statements('import * as styles from './styles.module.scss';').
                     * Also, when the `namedExport` option becomes `false`, the default value of the `exportLocalsConvention` option changes to 'camel-case-only'.
                     * Since the current bezier-react CSS module component class naming is in pascal case, applying this would require many changes.
                     * @see {@link https://github.com/webpack-contrib/css-loader/releases/tag/v7.0.0}
                     */
                    namedExport: false,
                    exportLocalsConvention: 'as-is',
                  },
                },
              },
              {
                loader: 'sass-loader',
                options: {
                  /**
                   * FIXME: To support the path resolve method of rollup-plugin-postcss ('../../' of '_tokens.scss')
                   * @see {@link https://github.com/webpack-contrib/sass-loader/releases/tag/v16.0.0}
                   */
                  api: 'legacy',
                  sassOptions: {
                    silenceDeprecations: ['legacy-js-api'],
                  },
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
    reactDocgen: 'react-docgen-typescript',
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
            presets: [
              [
                'react-app',
                { flow: false, typescript: true, runtime: 'automatic' },
              ],
            ],
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
