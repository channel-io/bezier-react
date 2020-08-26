/* External dependencies */
import React, { useState, useMemo } from 'react'

/* Internal dependencies */
import { Text } from '../Text'
import Typography from '../../styling/Typography'
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
  <Radio {...otherRadioProps}>
    <Text>
      { text }
    </Text>
  </Radio>
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
    <>
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
    </>
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
