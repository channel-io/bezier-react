/* External dependencies */
import React, { useCallback, MouseEvent } from 'react'

/* Internal dependencies */
import { Text } from '../Text'
import {
  StyledRadioWrapper,
  StyledRadioInput,
  StyledRadioContent,
} from './Radio.styled'
import RadioProps from './Radio.types'

function Radio({
  as,
  className,
  style,
  label,
  checked = false,
  value,
  onClick,
  disabled = false,
  children,
}: RadioProps) {
  const handleClick = useCallback((e: MouseEvent) => {
    if (!disabled && onClick) {
      onClick(value, e)
    }
  }, [onClick, disabled, value])

  return (
    <StyledRadioWrapper
      className={className}
      style={style}
      onClick={handleClick}
    >
      <StyledRadioInput
        as={as}
        type="radio"
        checked={checked}
        disabled={disabled}
      />
      <StyledRadioContent>
        { label && (
          <Text>
            { label }
          </Text>
        ) }
        { children }
      </StyledRadioContent>
    </StyledRadioWrapper>
  )
}

export default Radio
