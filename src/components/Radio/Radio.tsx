/* External dependencies */
import React, { useCallback, MouseEvent } from 'react'

/* Internal dependencies */
import {
  StyledRadioWrapper,
  StyledRadioInput,
} from './Radio.styled'
import RadioProps from './Radio.types'

function Radio({
  as,
  className,
  style,
  dotClassName,
  watchingValue,
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
      disabled={disabled}
      onClick={handleClick}
    >
      <StyledRadioInput
        as={as}
        className={dotClassName}
        type="radio"
        checked={watchingValue === value}
        disabled={disabled}
      />
      { children }
    </StyledRadioWrapper>
  )
}

export default Radio
