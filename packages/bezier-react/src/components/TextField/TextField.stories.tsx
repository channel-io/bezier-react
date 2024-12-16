import { useCallback, useRef, useState } from 'react'
import * as React from 'react'

import { SearchIcon } from '@channel.io/bezier-icons'
import { type Meta, type StoryFn } from '@storybook/react'

import { TextField } from './TextField'
import { type TextFieldProps, type TextFieldRef } from './TextField.types'

const meta: Meta<typeof TextField> = {
  component: TextField,
}
export default meta

const PrimaryTemplate: StoryFn<TextFieldProps> = ({ ...otherProps }) => {
  const inputRef = useRef<TextFieldRef>(null)
  const [value, setValue] = useState('12345')

  const handleChangeValue = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.currentTarget.value)
    },
    []
  )

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

export const Primary = {
  render: PrimaryTemplate,

  args: {
    variant: 'primary',
    size: 'm',
    disabled: false,
    readOnly: false,
    allowClear: true,
    hasError: false,
    selectAllOnFocus: false,
    maxLength: 10,
    placeholder: 'this is placeholder',
  },
}
