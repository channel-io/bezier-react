/* External dependencies */
import React, { useState } from 'react'

/* Internal dependencies */
import { ThemeProvider, LightTheme } from '../../styling/Theme'
import { Text } from '../Text'
import Radio from './Radio'

export default {
  title: 'Radio',
}

export const Primary = () => {
  const [checked, setChecked] = useState(false)

  const onClick = () => setChecked(prev => !prev)

  return (
    <ThemeProvider theme={LightTheme}>
      <Radio
        checked={checked}
        onClick={onClick}
      >
        <Text>
          hello
        </Text>
      </Radio>
    </ThemeProvider>
  )
}

export const Disabled = () => (
  <ThemeProvider theme={LightTheme}>
    <Radio disabled>
      <Text>
        hello
      </Text>
    </Radio>
  </ThemeProvider>
)

export const CheckedDisabled = () => (
  <ThemeProvider theme={LightTheme}>
    <Radio disabled checked>
      <Text>
        hello
      </Text>
    </Radio>
  </ThemeProvider>
)
