import React from 'react'

import type { Preview } from '@storybook/react'

import { SmoothCornersFeature } from '~/src/features'

import { AppProvider } from '~/src/components/AppProvider/AppProvider'
import { Text } from '~/src/components/Text'
import { InvertedThemeProvider } from '~/src/components/ThemeProvider'

import styles from './preview.module.scss'

const features = [SmoothCornersFeature]

export const WithProvider: NonNullable<Preview['decorators']>[number] = (Story, context) => (
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
