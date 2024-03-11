import React, { forwardRef } from 'react'

import type { Preview } from '@storybook/react'

import { AppProvider } from '~/src/components/AppProvider'
import { SmoothCornersFeature } from '~/src/components/FeatureProvider'
import { InvertedThemeProvider } from '~/src/components/ThemeProvider'

import styles from './preview.module.scss'
import '~/src/styles/index.scss'

const features = [SmoothCornersFeature]

const Content = forwardRef<HTMLDivElement, React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>>(({
  children,
  ...rest
}, forwardedRef) => (
  <div
    className={styles.Story}
    ref={forwardedRef}
    {...rest}
  >
    { children }
  </div>
))

const preview: Preview = {
  parameters: {
    layout: 'centered',
    options: {
      storySort: {
        order: ['ReadMe', 'Changelog', 'Components'],
      },
    },
  },
  decorators: [(Story) => (
    <AppProvider
      themeName="light"
      features={features}
    >
      <div className={styles.Wrapper}>
        <Content>
          <Story />
        </Content>

        <InvertedThemeProvider>
          <Content>
            <Story />
          </Content>
        </InvertedThemeProvider>
      </div>
    </AppProvider>
  )],
}

export default preview
