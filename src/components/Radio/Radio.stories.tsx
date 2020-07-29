/* External dependencies */
import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

/* Internal dependencies */
import { Text } from '../Text'
import Typography from '../../styling/Typography'
import { ThemeProvider, LightTheme } from '../../styling/Theme'
import Radio from './Radio'

export default {
  title: 'Radio',
  decorators: [withKnobs],
}

export const Primary = () => {
  const [checked, setChecked] = useState(false)

  const onClick = () => setChecked(prev => !prev)

  return (
    <ThemeProvider theme={LightTheme}>
      <div style={{ margin: 10 }}>
        <Radio
          checked={checked}
          onClick={onClick}
        >
          <Text>
            { text('label', 'hello!') }
          </Text>
        </Radio>
      </div>
    </ThemeProvider>
  )
}

export const Disabled = () => (
  <ThemeProvider theme={LightTheme}>
    <Radio disabled>
      <Text>
        { text('label', 'hello, world!') }
      </Text>
    </Radio>
  </ThemeProvider>
)

export const CheckedDisabled = () => (
  <ThemeProvider theme={LightTheme}>
    <Radio disabled checked>
      <Text>
        { text('label', 'hello, world!') }
      </Text>
    </Radio>
  </ThemeProvider>
)

export const MultiRadio = () => {
  const [selected, setSelected] = useState(1)

  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <ThemeProvider theme={LightTheme}>
      <Text typo={Typography.Size24}>
        selected Option: { selected }
      </Text>

      {
        options.map(value => (
          <Radio
            key={value}
            value={value}
            watchingValue={selected}
            onClick={v => setSelected(v)}
            disabled={value >= 8}
          >
            <Text>
              { value }st option
            </Text>
          </Radio>
        ))
      }
    </ThemeProvider>
  )
}
