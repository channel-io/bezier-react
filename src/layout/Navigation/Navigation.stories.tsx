/* External dependencies */
import React from 'react'
import { addDecorator } from '@storybook/react'
import { withKnobs, select } from '@storybook/addon-knobs'

/* Internal dependencies */
import { GNB } from '../GNB'
import { ThemeProvider, LightTheme, DarkTheme } from '../../styling/Theme'
import Navigation from './Navigation'

export default {
  title: 'Navigation',
  decorators: [withKnobs],
}

const decorator = storyfn => (
  <div style={{ height: '100vh' }}>
    { storyfn() }
  </div>
)

addDecorator(decorator)

export const Default = () => (
  <ThemeProvider theme={LightTheme}>
    <Navigation />
  </ThemeProvider>
)

export const WithGNB = () => {
  const getTheme = (theme: string) => (theme === 'dark' ? DarkTheme : LightTheme)

  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
      }}
    >
      <ThemeProvider theme={getTheme(select('theme', ['light', 'dark'], 'light'))}>
        <GNB>
          This is GNB
        </GNB>
        <Navigation>
          This is Navigation
        </Navigation>
      </ThemeProvider>
    </div>
  )
}
