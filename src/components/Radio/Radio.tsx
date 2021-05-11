/* External dependencies */
import React, {
  useCallback,
  useState,
  useMemo,
  MouseEvent,
  forwardRef,
} from 'react'
import { isNil } from 'lodash-es'

/* Internal dependencies */
import {
  StyledRadioWrapper,
  StyledRadioHandle,
} from './Radio.styled'
import RadioProps from './Radio.types'

export const RADIO_TEST_ID = 'ch-design-system-radio'
export const RADIO_HANDLE_TEST_ID = 'ch-design-system-radio-handle'

function Radio(
  {
    as,
    testId = RADIO_TEST_ID,
    handleTestId = RADIO_HANDLE_TEST_ID,
    className,
    style,
    dotClassName,
    watchingValue,
    value,
    onClick,
    disabled = false,
    children,
    ...otherProps
  }: RadioProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  const [hovered, setHovered] = useState(false)

  const handleClick = useCallback((e: MouseEvent) => {
    if (!disabled && onClick) {
      onClick(value, e)
    }
  }, [onClick, disabled, value])

  const handleMouseOver = useCallback(() => setHovered(true), [])

  const handleMouseLeave = useCallback(() => setHovered(false), [])

  const checked = useMemo(() => {
    if (isNil(watchingValue) || isNil(value)) { return false }
    return watchingValue === value
  }, [watchingValue, value])

  return (
    <StyledRadioWrapper
      ref={forwardedRef}
      data-testid={testId}
      className={className}
      style={style}
      disabled={disabled}
      onClick={handleClick}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      {...otherProps}
    >
      <StyledRadioHandle
        as={as}
        data-testid={handleTestId}
        className={dotClassName}
        checked={checked}
        disabled={disabled}
        hovered={hovered}
      />
      { children }
    </StyledRadioWrapper>
  )
}

export default forwardRef(Radio)
