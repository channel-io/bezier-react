/* External dependencies */
import React, { useRef, useCallback, useState } from 'react'
import base from 'paths.macro'

/* Internal dependencies */
import { getTitle, getObjectFromEnum } from '../../../utils/etcUtils'
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
    <div style={{ width: wrapperWidth }}>
      <TextField
        ref={inputRef}
        value={value}
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
  wrapperWidth: 280,
}

Primary.argTypes = {
  wrapperWidth: {
    control: {
      type: 'range',
      min: 100,
      max: 300,
    },
  },
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

