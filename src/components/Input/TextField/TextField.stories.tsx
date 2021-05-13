/* External dependencies */
import React, { useRef, useCallback, useState } from 'react'
import base from 'paths.macro'

/* Internal dependencies */
import {
  getTitle,
  getObjectFromEnum,
} from '../../../utils/storyUtils'
import TextField from './TextField'
import { TextFieldRef, TextFieldSize, TextFieldVariant } from './TextField.types'

export default {
  title: getTitle(base),
  component: TextField,
}

const PrimaryTemplate = ({ wrapperWidth, ...otherProps }) => {
  const inputRef = useRef<TextFieldRef>(null)
  const [value, setValue] = useState('12345')

  const handleChangeValue = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value)
  }, [])

  const handleClickLeftIcon = useCallback(() => {
    inputRef.current.selectAll()
  }, [])

  return (
    <div style={{ width: '300px' }}>
      <TextField
        ref={inputRef}
        value={value}
        autoFocus
        leftContent={{
          icon: 'search',
          iconColor: 'txt-black-dark',
          onClick: handleClickLeftIcon,
        }}
        onChange={handleChangeValue}
        {...otherProps}
      />
    </div>
  )
}

export const Primary = PrimaryTemplate.bind({})

Primary.args = {
  variant: TextFieldVariant.Primary,
  size: TextFieldSize.M,
  disabled: false,
  readOnly: false,
  allowClear: true,
  hasError: false,
  selectAllOnFocus: false,
  maxLength: 10,
  placeholder: 'this is placeholder',
}

Primary.argTypes = {
  size: {
    control: {
      type: 'radio', // type 'select' is automatically inferred when 'options' is defined
      options: getObjectFromEnum(TextFieldSize),
    },
  },
  variant: {
    control: {
      type: 'radio',
      options: getObjectFromEnum(TextFieldVariant),
    },
  },
}

