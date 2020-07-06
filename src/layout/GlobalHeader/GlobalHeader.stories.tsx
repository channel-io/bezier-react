/* External dependencies */
import React from 'react'
import { addDecorator } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'

/* Internal dependencies */
import { LightTheme, ThemeProvider } from '../../styling/Theme'
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

  return (
    <ThemeProvider theme={LightTheme}>
      <GlobalHeader
        isWindows={isWindows}
      >
        { isWindows ? 'Windows' : 'macOS' }
      </GlobalHeader>
    </ThemeProvider>
  )
}
