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
    className={styles.Theme}
    ref={forwardedRef}
    {...rest}
  >
    <div className={styles.Story}>
      { children }
    </div>
  </div>
))

const preview: Preview = {
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
