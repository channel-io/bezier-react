/* External dependencies */
import React from 'react'
import base from 'paths.macro'

/* Internal dependencies */
import { getTitle } from '../../utils/etcUtils'
import KeyValueListItem from './KeyValueListItem'

export default {
  title: getTitle(base),
  compnent: KeyValueListItem,
}

const Template = ({ ...otherProps }) => (
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
