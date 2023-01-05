/* eslint-disable no-console */
/* External dependencies */
import React from 'react'
import base from 'paths.macro'
import { Meta, Story } from '@storybook/react'

/* Internal dependencies */
import { getTitle } from 'Utils/storyUtils'
import { Button, ButtonColorVariant, ButtonStyleVariant } from 'Components/Button'
import { BadgeIcon, EditIcon, Icon } from 'Components/Icon'
import KeyValueListItem from './KeyValueListItem'
import KeyValueMultiLineListItem from './KeyValueMultiLineListItem'
import { KeyValueListItemProps } from './KeyValueListItem.types'

export default {
  title: getTitle(base),
  component: KeyValueListItem,
} as Meta

interface KeyValueListItemStorybookProps extends KeyValueListItemProps {
  containerWidth: number
}

const DEFAULT_ARGS: KeyValueListItemStorybookProps = {
  keyIcon: <Icon source={BadgeIcon} />,
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

const SingleLineTemplate: Story<KeyValueListItemStorybookProps> = ({ containerWidth, ...otherProps }) => (
  <div
    style={{
      width: `${containerWidth}px`,
    }}
  >
    <KeyValueListItem {...otherProps} />
    <KeyValueListItem
      {...otherProps}
      actions={Array.from(Array(2)).map(() => ({ icon: <Icon source={EditIcon} />, onClick: console.log, tooltip: '수정하기' }))}
    />
    <KeyValueListItem {...otherProps} onClickKey={onClickKey} onClickValue={onClickValue} />
    <KeyValueListItem {...otherProps}>
      <Button
        leftContent="play"
        text="높이 테스트"
        colorVariant={ButtonColorVariant.Green}
        styleVariant={ButtonStyleVariant.Primary}
      />
    </KeyValueListItem>
  </div>
)

const MultiLineTemplate: Story<KeyValueListItemStorybookProps> = ({ containerWidth, ...otherProps }) => (
  <div
    style={{
      width: `${containerWidth}px`,
    }}
  >
    <KeyValueMultiLineListItem {...otherProps} />
    <KeyValueMultiLineListItem
      {...otherProps}
      actions={Array.from(Array(2)).map(() => ({ icon: <Icon source={EditIcon} />, onClick: console.log, tooltip: '수정하기' }))}
    />
    <KeyValueMultiLineListItem {...otherProps} onClickKey={onClickKey} onClickValue={onClickValue} />
  </div>
)

export const SingleLine = SingleLineTemplate.bind({})
SingleLine.args = {
  ...DEFAULT_ARGS,
  actions: { icon: <Icon source={EditIcon} />, onClick: console.log, tooltip: '수정하기' },
}

export const MultiLine = MultiLineTemplate.bind({})
MultiLine.args = {
  ...DEFAULT_ARGS,
}
