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

import KeyValueListItem from './KeyValueListItem'
import { type KeyValueListItemProps } from './KeyValueListItem.types'
import KeyValueMultiLineListItem from './KeyValueMultiLineListItem'

const meta:Meta<typeof KeyValueListItem> = {
  component: KeyValueListItem,
}
export default meta

interface KeyValueListItemStorybookProps extends KeyValueListItemProps {
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
    <KeyValueListItem {...otherProps} />
    <KeyValueListItem
      {...otherProps}
      actions={Array.from(Array(2)).map(() => ({ icon: EditIcon, onClick: console.log, tooltip: '수정하기' }))}
    />
    <KeyValueListItem {...otherProps} onClickKey={onClickKey} onClickValue={onClickValue} />
    <KeyValueListItem {...otherProps}>
      <Button
        leftContent={PlayIcon}
        text="높이 테스트"
        colorVariant={ButtonColorVariant.Green}
        styleVariant={ButtonStyleVariant.Primary}
      />
    </KeyValueListItem>
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
    <KeyValueMultiLineListItem {...otherProps} />
    <KeyValueMultiLineListItem
      {...otherProps}
      actions={Array.from(Array(2)).map(() => ({ icon: EditIcon, onClick: console.log, tooltip: '수정하기' }))}
    />
    <KeyValueMultiLineListItem {...otherProps} onClickKey={onClickKey} onClickValue={onClickValue} />
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
