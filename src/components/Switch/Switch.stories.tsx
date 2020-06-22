/* External dependencies */
import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, boolean, number } from '@storybook/addon-knobs'

/* Internal dependencies */
import Switch from './Switch'
import { ThemeProvider, DefaultTheme } from '../../theme/Theme'

export default {
  title: 'Switch',
  decorators: [withKnobs],
}

export const Primary = () => (
  <ThemeProvider theme={DefaultTheme}>
    <Switch
      size={number('size', 16)}
      checked={boolean('checked', true)}
      disabled={boolean('disabled', false)}
      onClick={action('onClick')}
    />
  </ThemeProvider>
)

export const Controlled = () => {
  const [checked, setChecked] = useState(true)
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Switch
        size={number('size', 16)}
        checked={checked}
        onClick={setChecked}
        disabled={boolean('disabled', false)}
      />
    </ThemeProvider>
  )
}
