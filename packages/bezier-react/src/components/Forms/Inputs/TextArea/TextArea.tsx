/* External dependencies */
import React, {
  forwardRef,
  type Ref,
  useRef,
  useCallback,
  useState,
  useLayoutEffect,
  useMemo,
} from 'react'

/* Internal dependencies */
import useMergeRefs from '~/src/hooks/useMergeRefs'
import useFormFieldProps from '~/src/components/Forms/useFormFieldProps'
import useKeyboardActionLockerWhileComposing from '~/src/components/Forms/useKeyboardActionLockerWhileComposing'
import { COMMON_IME_CONTROL_KEYS } from '~/src/components/Forms/Inputs/constants/CommonImeControlKeys'
import Styled from './TextArea.styled'
import { getTextAreaBgColorSemanticName } from './utils'
import type TextAreaProps from './TextArea.types'
import { TextAreaHeight } from './TextArea.types'

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
  onKeyDown,
  onKeyUp,
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

  const {
    handleKeyDown,
    handleKeyUp,
  } = useKeyboardActionLockerWhileComposing({
    keysToLock: COMMON_IME_CONTROL_KEYS,
    onKeyDown,
    onKeyUp,
  })

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
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
      />
    </Styled.Wrapper>
  )
}

export default forwardRef(TextArea)
