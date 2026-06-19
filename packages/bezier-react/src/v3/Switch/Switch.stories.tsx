import { useEffect, useState } from 'react'

import { type Meta, type StoryFn, type StoryObj } from '@storybook/react'

import { Box } from '~/src/v3/Box'
import {
  FormField,
  FormLabel,
} from '~/src/v3/FormField'

import { Switch } from './Switch'
import { type SwitchProps } from './Switch.types'

const meta: Meta<typeof Switch> = {
  title: 'V3 components/Switch',
  component: Switch,
  argTypes: {
    checked: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onCheckedChange: {
      action: 'onCheckedChange',
    },
  },
}

export default meta

const Template: StoryFn<SwitchProps> = ({
  children,
  checked: checkedProp,
  onCheckedChange,
  ...props
}) => {
  const [checked, setChecked] = useState(checkedProp)

  useEffect(() => {
    setChecked(checkedProp)
  }, [checkedProp])

  return (
    <Switch
      checked={checked}
      onCheckedChange={(nextChecked) => {
        setChecked(nextChecked)
        onCheckedChange?.(nextChecked)
      }}
      {...props}
    >
      {children}
    </Switch>
  )
}

export const Controlled: StoryObj<SwitchProps> = {
  render: Template,
  args: {
    checked: true,
    disabled: false,
    required: false,
    hasError: false,
    children: 'Enable notification',
  },
}

export const Uncontrolled: StoryObj<SwitchProps> = {
  render: ({ children, ...props }) => <Switch {...props}>{children}</Switch>,
  args: {
    defaultChecked: true,
    disabled: false,
    required: false,
    hasError: false,
    children: 'Enable notification',
  },
}

export const WithoutLabel: StoryObj<SwitchProps> = {
  render: () => <Switch defaultChecked />,
}

export const LongLabel: StoryObj<SwitchProps> = {
  tags: ['!autodocs'],
  parameters: { controls: { disable: true } },
  render: () => (
    <Box width={240}>
      <Switch defaultChecked>
        Notify me when there are important updates about this workspace
      </Switch>
    </Box>
  ),
}

export const WithFormField: StoryObj<SwitchProps> = {
  tags: ['!autodocs'],
  parameters: { controls: { disable: true } },
  render: () => (
    <FormField>
      <FormLabel>Email notification</FormLabel>
      <Switch defaultChecked />
    </FormField>
  ),
}
