/* External dependencies */
import React from 'react'
import { addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

/* Internal dependencies */
import { LightTheme, ThemeProvider } from '../../styling/Theme'
import GNB from './GNB'

export default {
  title: 'GNB',
  decorators: [withKnobs],
}

const decorator = storyfn => (
  <div style={{ height: '100vh' }}>
    { storyfn() }
  </div>
)

addDecorator(decorator)

export const WithoutTheme = () => (<GNB />)

export const WithTheme = () => (
  <ThemeProvider theme={LightTheme}>
    <GNB />
  </ThemeProvider>
)
