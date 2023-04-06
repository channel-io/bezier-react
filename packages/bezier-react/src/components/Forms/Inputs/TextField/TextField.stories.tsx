/* External dependencies */
import React, {
  useCallback,
  useRef,
  useState,
} from 'react'

import {
  type Meta,
  type Story,
} from '@storybook/react'
import base from 'paths.macro'

/* Internal dependencies */
import {
  getObjectFromEnum,
  getTitle,
} from '~/src/utils/storyUtils'

import { SearchIcon } from '~/src/components/Icon'

import TextField from './TextField'
import {
  type TextFieldProps,
  type TextFieldRef,
  TextFieldSize,
  TextFieldVariant,
} from './TextField.types'

export default {
  title: getTitle(base),
  component: TextField,
} as Meta

const PrimaryTemplate: Story<TextFieldProps> = ({ ...otherProps }) => {
  const inputRef = useRef<TextFieldRef>(null)
  const [value, setValue] = useState('12345')

  const handleChangeValue = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value)
  }, [])

  const handleClickLeftIcon = useCallback(() => {
    inputRef.current?.selectAll()
  }, [])

  return (
    <div style={{ width: '300px' }}>
      <TextField
        ref={inputRef}
        value={value}
        autoFocus
        leftContent={{
          icon: SearchIcon,
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

