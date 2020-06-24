/* External dependencies */
import React from 'react'
import { addDecorator } from '@storybook/react'
import { withKnobs, select, number } from '@storybook/addon-knobs'

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

export const ResizeDisabled = () => (
  <ThemeProvider theme={LightTheme}>
    <Navigation disableResize/>
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
        <Navigation
          maxWidth={number('max width', 540)}
          minWidth={number('min width', 240)}
        >
          This is Navigation
        </Navigation>
        <div
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          This is Content
        </div>
      </ThemeProvider>
    </div>
  )
}
