/* External dependencies */
import React, {
  useCallback,
  useState,
  useMemo,
  MouseEvent,
} from 'react'
import _ from 'lodash'

/* Internal dependencies */
import {
  StyledRadioWrapper,
  StyledRadioInput,
} from './Radio.styled'
import RadioProps from './Radio.types'

export const RADIO_TEST_ID = 'ch-design-system-radio'

function Radio({
  as,
  testId = RADIO_TEST_ID,
  className,
  style,
  dotClassName,
  watchingValue,
  value,
  onClick,
  disabled = false,
  children,
}: RadioProps) {
  const [hovered, setHovered] = useState(false)

  const handleClick = useCallback((e: MouseEvent) => {
    if (!disabled && onClick) {
      onClick(value, e)
    }
  }, [onClick, disabled, value])

  const handleMouseOver = useCallback(() => setHovered(true), [])

  const handleMouseLeave = useCallback(() => setHovered(false), [])

  const checked = useMemo(() => {
    if (_.isNil(watchingValue) || _.isNil(value)) { return false }
    return watchingValue === value
  }, [watchingValue, value])

  return (
    <StyledRadioWrapper
      className={className}
      style={style}
      disabled={disabled}
      onClick={handleClick}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <StyledRadioInput
        as={as}
        data-testid={testId}
        className={dotClassName}
        type="radio"
        checked={checked}
        disabled={disabled}
        hovered={hovered}
      />
      { children }
    </StyledRadioWrapper>
  )
}

export default Radio
