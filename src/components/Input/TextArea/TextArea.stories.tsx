/* External dependencies */
import React, {
  useCallback,
  useState,
} from 'react'
import base from 'paths.macro'

/* Internal dependencies */
import { getObjectFromEnum, getTitle } from '../../../utils/storyUtils'
import TextArea from './TextArea'
import { TextAreaSize } from './TextArea.types'

export default {
  title: getTitle(base),
  component: TextArea,
}

const Template = ({ ...otherProps }) => {
  const [value, setValue] = useState('12345')

  const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // eslint-disable-next-line no-console
    console.log(e)
    setValue(e.target.value)
  }, [])

  return (
    <div style={{ width: 500 }}>
      <TextArea
        value={value}
        onChange={handleChange}
        {...otherProps}
      />
    </div>
  )
}

export const Primary = Template.bind({})

Primary.args = {
  autoFocus: true,
  readOnly: false,
  hasError: false,
  size: TextAreaSize.S,
  placeholder: 'say hi to autoResizable textarea!',
}

Primary.argTypes = {
  size: {
    control: {
      type: 'radio',
      options: getObjectFromEnum(TextAreaSize),
    },
  },
}
