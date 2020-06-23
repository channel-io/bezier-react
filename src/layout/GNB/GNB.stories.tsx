/* External dependencies */
import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'

/* Internal dependencies */
import { LightTheme, ThemeProvider } from '../../styling/Theme'
import GNB from './GNB'

export default {
  title: 'GNB',
  decorators: [withKnobs],
}

export const WithoutTheme = () => (<GNB />)

export const WithTheme = () => (
  <ThemeProvider theme={LightTheme}>
    <GNB />
  </ThemeProvider>
)
