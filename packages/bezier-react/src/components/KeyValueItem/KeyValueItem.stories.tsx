import React from 'react'

import { BadgeIcon, EditIcon } from '@channel.io/bezier-icons'
import { type Meta, type StoryFn, type StoryObj } from '@storybook/react'

import { KeyValueItem, KeyValueMultiLineItem } from './KeyValueItem'
import { type KeyValueItemProps } from './KeyValueItem.types'

const meta: Meta<typeof KeyValueItem> = {
  component: KeyValueItem,
}

const SingleLineTemplate: StoryFn<KeyValueItemProps> = (props) => (
  <div style={{ width: 300 }}>
    <KeyValueItem {...props} />
  </div>
)

const MultiLineTemplate: StoryFn<KeyValueItemProps> = (props) => (
  <div style={{ width: 300 }}>
    <KeyValueMultiLineItem {...props} />
  </div>
)

const args: KeyValueItemProps = {
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  keyIcon: BadgeIcon,
  keyContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  actions: {
    icon: EditIcon,
    onClick: () => window.alert('actions.onClick'),
    tooltip: 'Edit',
  },
  onClickKey: () => window.alert('onClickKey'),
  onClickValue: () => window.alert('onClickValue'),
}

export const Primary: StoryObj<KeyValueItemProps> = {
  render: SingleLineTemplate,
  args,
}

export const MultiLine: StoryObj<KeyValueItemProps> = {
  render: MultiLineTemplate,
  args,
}

export default meta
