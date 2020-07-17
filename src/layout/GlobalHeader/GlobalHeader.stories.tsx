/* External dependencies */
import React from 'react'
import { addDecorator } from '@storybook/react'
import { withKnobs, boolean, select } from '@storybook/addon-knobs'

/* Internal dependencies */
import { LightTheme, DarkTheme, ThemeProvider } from '../../styling/Theme'
import GlobalHeader from './GlobalHeader'

export default {
  title: 'GlobalHeader',
  decorators: [withKnobs],
}

const decorator = storyfn => (
  <div style={{ width: '100vw' }}>
    { storyfn() }
  </div>
)

addDecorator(decorator)

export const WithoutTheme = () => (<GlobalHeader />)

export const WithTheme = () => {
  const isWindows = boolean('Windows', false)
  const getTheme = (theme: string) => (theme === 'dark' ? DarkTheme : LightTheme)

  return (
    <ThemeProvider theme={getTheme(select('theme', ['light', 'dark'], 'light'))}>
      <GlobalHeader
        isWindows={isWindows}
      >
        { isWindows ? 'Windows' : 'macOS' }
      </GlobalHeader>
    </ThemeProvider>
  )
}
