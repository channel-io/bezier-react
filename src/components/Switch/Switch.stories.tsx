/* External dependencies */
import React, { useRef, useCallback } from 'react'

/* Internal dependencies */
import { ThemeProvider, LightTheme } from '../../styling/Theme'
import Switch from './Switch'

export default {
  title: 'Switch',
  argTypes: {
    onClick: { action: 'onClick' },
  },
}

const Template = ({ ...otherSwitchProps }) => (
  <ThemeProvider theme={LightTheme}>
    <Switch {...otherSwitchProps} />
  </ThemeProvider>
)

export const Primary = Template.bind({})
Primary.args = {
  size: 16,
  checked: true,
  disabled: false,
}

export const WithRef = ({
  size,
  disabled,
  checked,
}) => {
  const switchRef = useRef<HTMLDivElement | null>(null)

  const handleClick = useCallback(() => {
    alert(`Switch class name: ${switchRef.current?.classList}`)
  }, [switchRef])

  return (
    <ThemeProvider theme={LightTheme}>
      <Switch
        ref={switchRef}
        size={size}
        checked={checked}
        onClick={handleClick}
        disabled={disabled}
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
WithRef.args = {
  size: 16,
  checked: true,
  disabled: false,
}
