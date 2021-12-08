/* External dependencies */
import React, { useState, useMemo } from 'react'
import { base } from 'paths.macro'
import { Meta, Story } from '@storybook/react'

/* Internal dependencies */
import { Typography } from 'Foundation'
import { getTitle } from 'Utils/storyUtils'
import { Text } from 'Components/Text'
import RadioProps from './Radio.types'
import Radio from './Radio'

export default {
  title: getTitle(base),
  component: Radio,
  argTypes: {
    onClick: { action: 'onClick' },
  },
} as Meta

const Template: Story<RadioProps> = ({
  children,
  ...otherRadioProps
}) => (
  <Radio {...otherRadioProps}>
    <Text>
      { children }
    </Text>
  </Radio>
)

export const Primary = Template.bind({})
Primary.args = {
  value: 1,
  watchingValue: 1,
  disabled: false,
  children: 'hello, world!',
}

export const MultiRadio = ({
  optionsRange,
  disableAfter,
}) => {
  const [selected, setSelected] = useState(1)

  const options = useMemo(() => Array.from(Array(optionsRange).keys()), [optionsRange])

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
