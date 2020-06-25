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
          {
            Array.from(Array(100).keys()).map((item, index) => (
              <div style={{ marginTop: 1, backgroundColor: 'grey', width: '100%' }}>
                { index }
              </div>
            ))
          }
        </Navigation>
        <div
          style={{
            width: '100%',
            height: '100%',
            overflowX: 'hidden',
            overflowY: 'scroll',
          }}
        >
          This is Content
          {
            Array.from(Array(100).keys()).map((item, index) => (
              <div style={{ marginTop: 1, backgroundColor: 'lightgrey', width: '100%' }}>
                { index }
              </div>
            ))
          }
        </div>
      </ThemeProvider>
    </div>
  )
}
