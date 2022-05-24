/* External dependencies */
import React, { forwardRef, Ref, useRef, useCallback, useState, useLayoutEffect, useMemo } from 'react'

/* Internal dependencies */
import useMergeRefs from 'Hooks/useMergeRefs'
import useFormFieldProps from 'Components/Forms/useFormFieldProps'
import Styled from './TextArea.styled'
import { getTextAreaBgColorSemanticName } from './utils'
import TextAreaProps, { TextAreaHeight } from './TextArea.types'

export const TEXT_AREA_TEST_ID = 'bezier-react-text-area'

function TextArea({
  interpolation,
  wrapperInterpolation,
  className,
  wrapperClassName,
  style,
  wrapperStyle,
  testId = TEXT_AREA_TEST_ID,
  minRows = TextAreaHeight.Row6,
  maxRows = TextAreaHeight.Row6,
  autoFocus = false,
  value = '',
  onFocus,
  onBlur,
  onChange,
  ...rest
}: TextAreaProps,
forwardedRef: Ref<HTMLTextAreaElement>,
) {
  const {
    disabled,
    readOnly,
    hasError,
    ...ownProps
  } = useFormFieldProps(rest)

  const inputRef = useRef<HTMLTextAreaElement | null>(null)
  const mergedInputRef = useMergeRefs<HTMLTextAreaElement>(inputRef, forwardedRef)

  const activeInput = !disabled && !readOnly

  const [focused, setFocused] = useState(false)

  const bgColorSemanticName = useMemo(() => (
    getTextAreaBgColorSemanticName({
      focused,
      hasError,
      readOnly,
    })
  ), [
    focused,
    hasError,
    readOnly,
  ])

  const handleFocus = useCallback((event: React.FocusEvent<HTMLTextAreaElement>) => {
    if (!activeInput) { return }
    setFocused(true)
    onFocus?.(event)
  }, [
    onFocus,
    activeInput,
  ])

  const handleBlur = useCallback((event: React.FocusEvent<HTMLTextAreaElement>) => {
    setFocused(false)
    onBlur?.(event)
  }, [onBlur])

  // eslint-disable-next-line prefer-arrow-callback
  useLayoutEffect(function initialAutoFocus() {
    function setSelectionToEnd() {
      inputRef.current?.setSelectionRange(inputRef.current?.value.length, inputRef.current?.value.length)
    }

    if (autoFocus) {
      inputRef.current?.focus()
      setSelectionToEnd()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Styled.Wrapper
      className={className}
      interpolation={interpolation}
      focused={focused}
      hasError={hasError}
      disabled={disabled}
      bgColor={bgColorSemanticName}
      data-testid={testId}
    >
      <Styled.TextAreaAutoSizeBase
        {...ownProps}
        ref={mergedInputRef}
        value={value}
        disabled={disabled}
        readOnly={readOnly}
        maxRows={maxRows}
        minRows={minRows}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </Styled.Wrapper>
  )
}

export default forwardRef(TextArea)
