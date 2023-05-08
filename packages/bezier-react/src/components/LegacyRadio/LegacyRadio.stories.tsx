import React, {
  useMemo,
  useState,
} from 'react'

import {
  type Meta,
  type Story,
} from '@storybook/react'
import { base } from 'paths.macro'

import { Typography } from '~/src/foundation'

import { getTitle } from '~/src/utils/storyUtils'

import { Text } from '~/src/components/Text'

import { LegacyRadio } from './LegacyRadio'
import { type LegacyRadioProps } from './LegacyRadio.types'

export default {
  title: getTitle(base),
  component: LegacyRadio,
  argTypes: {
    onClick: { action: 'onClick' },
  },
} as Meta

const Template: Story<LegacyRadioProps> = ({
  children,
  ...otherRadioProps
}) => (
  <LegacyRadio {...otherRadioProps}>
    <Text>
      { children }
    </Text>
  </LegacyRadio>
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
          <LegacyRadio
            key={value}
            value={value}
            watchingValue={selected}
            onClick={v => setSelected(v)}
            disabled={value >= disableAfter}
          >
            <Text>
              { value }st option
            </Text>
          </LegacyRadio>
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
