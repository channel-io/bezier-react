import React, {
  useMemo,
  useState,
} from 'react'

import {
  type Meta,
  type StoryFn,
} from '@storybook/react'

import { Text } from '~/src/components/Text'

import { LegacyRadio } from './LegacyRadio'

const meta: Meta<typeof LegacyRadio> = {
  component: LegacyRadio,
  argTypes: {
    onClick: { action: 'onClick' },
  },
}
export default meta

const Template: StoryFn<typeof LegacyRadio> = ({
  children,
  ...otherRadioProps
}) => (
  <LegacyRadio {...otherRadioProps}>
    <Text>{ children }</Text>
  </LegacyRadio>
)

export const Primary = {
  render: Template,

  args: {
    value: 1,
    watchingValue: 1,
    disabled: false,
    children: 'hello, world!',
  },
}

export const MultiRadio = {
  render: function Render({ optionsRange, disableAfter }) {
    const [selected, setSelected] = useState(1)

    const options = useMemo(() => Array.from(Array(optionsRange).keys()), [optionsRange])

    return (
      <>
        <Text typo="24">
          selected Option: { selected }
        </Text>

        { options.map((value) => (
          <LegacyRadio
            key={value}
            value={value}
            watchingValue={selected}
            onClick={(v) => setSelected(v)}
            disabled={value >= disableAfter}
          >
            <Text>{ value }st option</Text>
          </LegacyRadio>
        )) }
      </>
    )
  },

  args: {
    optionsRange: 10,
    disableAfter: 8,
  },

  argTypes: {
    optionsRange: {
      control: {
        type: 'range',
        min: 1,
        max: 20,
      },
    },
  },
}
