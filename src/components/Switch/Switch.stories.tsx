/* External dependencies */
import React, { useState, useRef, useCallback } from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, boolean, number } from '@storybook/addon-knobs'

/* Internal dependencies */
import { ThemeProvider, LightTheme } from '../../styling/Theme'
import Switch from './Switch'
import SwitchProps from './Switch.types'

export default {
  title: 'Switch',
  decorators: [withKnobs],
}

export const Primary = ({
  size = number('size', 16),
  checked = boolean('checked', true),
  disabled = boolean('disabled', false),
  onClick = action('onClick'),
  ...otherProps
}: SwitchProps) => (
  <ThemeProvider theme={LightTheme}>
    <Switch
      size={size}
      checked={checked}
      disabled={disabled}
      onClick={onClick}
      {...otherProps}
    />
  </ThemeProvider>
)

export const Controlled = () => {
  const [checked, setChecked] = useState(true)
  return (
    <ThemeProvider theme={LightTheme}>
      <Switch
        size={number('size', 16)}
        checked={checked}
        onClick={setChecked}
        disabled={boolean('disabled', false)}
      />
    </ThemeProvider>
  )
}

export const WithRef = () => {
  const switchRef = useRef<HTMLDivElement | null>(null)

  const [checked, setChecked] = useState(true)

  const handleClick = useCallback(() => {
    alert(`Switch class name: ${switchRef.current?.classList}`)
  }, [switchRef])

  return (
    <ThemeProvider theme={LightTheme}>
      <Switch
        ref={switchRef}
        size={number('size', 16)}
        checked={checked}
        onClick={setChecked}
        disabled={boolean('disabled', false)}
      />
      <button
        type="button"
        onClick={handleClick}
      >
        click me
      </button>
    </ThemeProvider>
  )
}
