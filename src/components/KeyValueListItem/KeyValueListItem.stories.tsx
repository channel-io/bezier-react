/* External dependencies */
import React from 'react'
import base from 'paths.macro'
import { Meta, Story } from '@storybook/react'

/* Internal dependencies */
import { getTitle } from '../../utils/storyUtils'
import KeyValueListItem from './KeyValueListItem'
import { KeyValueListItemProps } from './KeyValueListItem.types'

export default {
  title: getTitle(base),
  component: KeyValueListItem,
} as Meta

const Template: Story<KeyValueListItemProps> = ({ ...otherProps }) => (
  <>
    <KeyValueListItem
      {...otherProps}
    >
      value content
    </KeyValueListItem>
    <br />
    <KeyValueListItem
      multiline
      {...otherProps}
    >
      multiline value content
    </KeyValueListItem>
  </>
)

export const Primary = Template.bind({})

Primary.args = {
  keyIcon: 'trash',
  keyContent: 'Key',
  // eslint-disable-next-line no-console
  actions: { icon: 'edit', onClick: console.log, tooltip: '수정하기' },
}
