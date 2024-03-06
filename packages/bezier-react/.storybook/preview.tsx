import React from 'react'

import type { Preview } from '@storybook/react'

import { AppProvider } from '~/src/components/AppProvider'
import { SmoothCornersFeature } from '~/src/components/FeatureProvider'
import { Text } from '~/src/components/Text'
import { InvertedThemeProvider } from '~/src/components/ThemeProvider'

import styles from './preview.module.scss'
import '~/src/styles/index.scss'

const features = [SmoothCornersFeature]

const preview: Preview = {
  decorators: [(Story) => (
    <AppProvider
      themeName="light"
      features={features}
    >
      <div className={styles.Wrapper}>
        <div className={styles.Theme}>
          <div className={styles.Story}>
            <Story />
          </div>
          <Text bold color="bgtxt-absolute-black-light">
            Light Theme
          </Text>
        </div>

        <InvertedThemeProvider>
          <div className={styles.Theme}>
            <div className={styles.Story}>
              <Story />
            </div>
            <Text bold color="bgtxt-absolute-black-light">
              Dark Theme
            </Text>
          </div>
        </InvertedThemeProvider>
      </div>
    </AppProvider>
  )],
}

export default preview
