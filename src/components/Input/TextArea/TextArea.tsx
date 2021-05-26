/* External dependencies */
import React, {
  forwardRef,
  Ref,
  useRef,
  useCallback,
  useState,
  useLayoutEffect,
  useMemo,
} from 'react'

/* Internal dependencies */
import useMergeRefs from '../../../hooks/useMergeRefs'
import Styled from './TextArea.styled'
import { getTextAreaBgColorSemanticName } from './utils'
import type { TextAreaProps } from './TextArea.types'

export const TEXT_AREA_TEST_ID = 'bezier-react-text-area'

function TextArea(
  {
    interpolation,
    wrapperInterpolation,
    className,
    wrapperClassName,
    style,
    wrapperStyle,
    testId = TEXT_AREA_TEST_ID,
    autoFocus = false,
    readOnly = false,
    value = '',
    hasError = false,
    maxRows,
    minRows,
    onFocus,
    onBlur,
    onChange,
    ...props
  }: TextAreaProps,
  forwardedRef: Ref<HTMLTextAreaElement>,
) {
  const inputRef = useRef<HTMLTextAreaElement | null>(null)
  const mergedInputRef = useMergeRefs<HTMLTextAreaElement>(inputRef, forwardedRef)

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

  const focus = useCallback(() => {
    inputRef.current?.focus()
  }, [])

  const handleFocus = useCallback((event: React.FocusEvent<HTMLTextAreaElement>) => {
    if (readOnly) { return }
    setFocused(true)
    onFocus?.(event)
  }, [
    onFocus,
    readOnly,
  ])

  const handleBlur = useCallback((event: React.FocusEvent<HTMLTextAreaElement>) => {
    setFocused(false)
    onBlur?.(event)
  }, [onBlur])

  // eslint-disable-next-line prefer-arrow-callback
  useLayoutEffect(function initialAutoFocus() {
    if (autoFocus) {
      focus()
      inputRef.current?.setSelectionRange(inputRef.current?.value.length, inputRef.current?.value.length)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Styled.Wrapper
      className={className}
      interpolation={interpolation}
      focused={focused}
      hasError={hasError}
      bgColor={bgColorSemanticName}
      data-testid={testId}
    >
      <Styled.TextAreaAutoSizeBase
        ref={mergedInputRef}
        value={value}
        readOnly={readOnly}
        maxRows={maxRows}
        minRows={minRows}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
    </Styled.Wrapper>
  )
}

export default forwardRef(TextArea)
