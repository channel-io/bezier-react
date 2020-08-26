/* External dependencies */
import React, { useState, useMemo } from 'react'

/* Internal dependencies */
import { Text } from '../Text'
import Typography from '../../styling/Typography'
import { ThemeProvider, LightTheme } from '../../styling/Theme'
import Radio from './Radio'

export default {
  title: 'Radio',
  component: Radio,
  argTypes: {
    onClick: { action: 'onClick' },
  },
}

const Template = ({
  text,
  ...otherRadioProps
}) => (
  <ThemeProvider theme={LightTheme}>
    <Radio {...otherRadioProps}>
      <Text>
        { text }
      </Text>
    </Radio>
  </ThemeProvider>
)

export const Primary = Template.bind({})
Primary.args = {
  value: 1,
  watchingValue: 1,
  disabled: false,
  text: 'hello, world!',
}

export const MultiRadio = ({
  optionsRange,
  disableAfter,
}) => {
  const [selected, setSelected] = useState(1)

  const options = useMemo(() => [...Array(optionsRange).keys()], [optionsRange])

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
            disabled={value >= disableAfter}
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

MultiRadio.args = {
  optionsRange: 10,
  disableAfter: 8,
}

MultiRadio.argTypes = {
  optionsRange: {
    control: {
      type: 'range',
      min: 1,
      max: 20,
    },
  },
}
