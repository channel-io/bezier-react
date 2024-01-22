/* eslint-disable no-console */
import React from 'react'

import {
  BadgeIcon,
  EditIcon,
  PlayIcon,
} from '@channel.io/bezier-icons'
import {
  type Meta,
  type StoryFn,
} from '@storybook/react'

import {
  Button,
  ButtonColorVariant,
  ButtonStyleVariant,
} from '~/src/components/Button'

import {
  KeyValueItem,
  KeyValueMultiLineItem,
} from './KeyValueItem'
import { type KeyValueItemProps } from './KeyValueItem.types'

const meta:Meta<typeof KeyValueItem> = {
  component: KeyValueItem,
}
export default meta

interface KeyValueListItemStorybookProps extends KeyValueItemProps {
  containerWidth: number
}

const DEFAULT_ARGS: KeyValueListItemStorybookProps = {
  keyIcon: BadgeIcon,
  keyContent: 'I\'m the Long Long Key',
  containerWidth: 300,
  // eslint-disable-next-line max-len
  children: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis eveniet minus nobis nemo quisquam ipsum ut. Iste molestiae sint, laboriosam minima, quaerat velit blanditiis natus quos non vel fugiat perspiciatis.',
}

function onClickKey() {
  console.log('Key')
}

function onClickValue() {
  console.log('Value')
}

const SingleLineTemplate: StoryFn<KeyValueListItemStorybookProps> = ({
  containerWidth,
  ...otherProps
}) => (
  <div
    style={{
      width: `${containerWidth}px`,
    }}
  >
    <KeyValueItem {...otherProps} />
    <KeyValueItem
      {...otherProps}
      actions={Array.from(Array(2)).map(() => ({ icon: EditIcon, onClick: console.log, tooltip: '수정하기' }))}
    />
    <KeyValueItem {...otherProps} onClickKey={onClickKey} onClickValue={onClickValue} />
    <KeyValueItem {...otherProps}>
      <Button
        leftContent={PlayIcon}
        text="높이 테스트"
        colorVariant={ButtonColorVariant.Green}
        styleVariant={ButtonStyleVariant.Primary}
      />
    </KeyValueItem>
  </div>
)

const MultiLineTemplate: StoryFn<KeyValueListItemStorybookProps> = ({
  containerWidth,
  ...otherProps
}) => (
  <div
    style={{
      width: `${containerWidth}px`,
    }}
  >
    <KeyValueMultiLineItem {...otherProps} />
    <KeyValueMultiLineItem
      {...otherProps}
      actions={Array.from(Array(2)).map(() => ({ icon: EditIcon, onClick: console.log, tooltip: '수정하기' }))}
    />
    <KeyValueMultiLineItem {...otherProps} onClickKey={onClickKey} onClickValue={onClickValue} />
  </div>
)

export const SingleLine = {
  render: SingleLineTemplate,

  args: {
    ...DEFAULT_ARGS,
    actions: { icon: EditIcon, onClick: console.log, tooltip: '수정하기' },
  },
}

export const MultiLine = {
  render: MultiLineTemplate,

  args: {
    ...DEFAULT_ARGS,
  },
}
