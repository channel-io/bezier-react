/* External dependencies */
import React, { useState } from 'react'
import base from 'paths.macro'

/* Internal dependencies */
import { getTitle } from '../../../utils/etcUtils'
import TextArea from './TextArea'

export default {
  title: getTitle(base),
  component: TextArea,
}

const Template = ({ ...otherProps }) => {
  const [value] = useState('12345')

  return (
    <div style={{ width: 500 }}>
      <TextArea
        value={value}
        // eslint-disable-next-line no-console
        onChange={console.log}
        {...otherProps}
      />
    </div>

  )
}

export const Primary = Template.bind({})

Primary.args = {
  autoFocus: true,
  maxHeight: 300,
  placeholder: 'say hi to autoResizable textarea!',
}
