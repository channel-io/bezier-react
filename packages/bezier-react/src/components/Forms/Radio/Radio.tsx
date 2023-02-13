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
import useFormFieldProps from 'Components/Forms/useFormFieldProps'
import {
  StyledRadioWrapper,
  StyledRadioHandle,
} from './Radio.styled'
import RadioProps from './Radio.types'

export const RADIO_TEST_ID = 'bezier-react-radio'
export const RADIO_HANDLE_TEST_ID = 'bezier-react-radio-handle'

/**
 * @deprecated Use `RadioGroup` instead.
 */
function Radio(
  {
    as,
    testId = RADIO_TEST_ID,
    handleTestId = RADIO_HANDLE_TEST_ID,
    dotClassName,
    watchingValue,
    value,
    onClick,
    children,
    ...rest
  }: RadioProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  const {
    disabled,
    ...ownProps
  } = useFormFieldProps(rest)

  const [hovered, setHovered] = useState(false)

  const handleClick = useCallback((e: MouseEvent) => {
    if (!disabled && onClick) {
      onClick(value, e)
    }
  }, [
    onClick,
    disabled,
    value,
  ])

  const handleMouseOver = useCallback(() => setHovered(true), [])

  const handleMouseLeave = useCallback(() => setHovered(false), [])

  const checked = useMemo(() => {
    if (isNil(watchingValue) || isNil(value)) { return false }
    return watchingValue === value
  }, [
    watchingValue,
    value,
  ])

  return (
    <StyledRadioWrapper
      ref={forwardedRef}
      data-testid={testId}
      disabled={disabled}
      onClick={handleClick}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      {...ownProps}
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

/**
 * @deprecated Use `RadioGroup` instead.
 */
export default forwardRef(Radio)
