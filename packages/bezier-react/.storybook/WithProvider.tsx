import React from 'react'

import type { Decorator } from '@storybook/react'

import { AppProvider } from '~/src/components/AppProvider'
import { SmoothCornersFeature } from '~/src/components/FeatureProvider'
import { Text } from '~/src/components/Text'
import { InvertedThemeProvider } from '~/src/components/ThemeProvider'

import styles from './preview.module.scss'

const features = [SmoothCornersFeature]

export const WithProvider: Decorator = (Story, context) => (
  <AppProvider
    themeName="light"
    features={features}
  >
    <div className={styles.Wrapper}>
      <div className={styles.Theme}>
        <div className={styles.Story}>
          { Story(context) }
        </div>
        <Text bold color="bgtxt-absolute-black-light">
          Light Theme
        </Text>
      </div>

      <InvertedThemeProvider>
        <div className={styles.Theme}>
          <div className={styles.Story}>
            { Story(context) }
          </div>
          <Text bold color="bgtxt-absolute-black-light">
            Dark Theme
          </Text>
        </div>
      </InvertedThemeProvider>
    </div>
  </AppProvider>
)
