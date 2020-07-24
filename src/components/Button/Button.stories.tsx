/* External dependencies */
import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'

/* Internal dependencies */
import { ThemeProvider, LightTheme } from '../../styling/Theme'
import Button from './Button'

export default {
  title: 'Button',
  decorators: [withKnobs],
}

export const Primary = () => (
  <ThemeProvider theme={LightTheme}>
    <Button text="저장" />
  </ThemeProvider>
)
