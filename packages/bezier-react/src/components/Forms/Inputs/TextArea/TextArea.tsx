import React, {
  forwardRef,
  useLayoutEffect,
  useRef,
} from 'react'

import classNames from 'classnames'
import TextareaAutosize from 'react-textarea-autosize'

import {
  COMMON_IME_CONTROL_KEYS,
  useKeyboardActionLockerWhileComposing,
} from '~/src/hooks/useKeyboardActionLockerWhileComposing'
import useMergeRefs from '~/src/hooks/useMergeRefs'

import useFormFieldProps from '~/src/components/Forms/useFormFieldProps'

import type { TextAreaProps } from './TextArea.types'
import { TextAreaHeight } from './TextArea.types'

import styles from './TextArea.module.scss'

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(function TextArea({
  style,
  className,
  testId = 'bezier-react-text-area',
  minRows = TextAreaHeight.Row6,
  maxRows = TextAreaHeight.Row6,
  autoFocus = false,
  value = '',
  onKeyDown,
  onKeyUp,
  ...rest
}, forwardedRef) {
  const {
    disabled,
    readOnly,
    hasError,
    ...ownProps
  } = useFormFieldProps(rest)

  const inputRef = useRef<HTMLTextAreaElement | null>(null)
  const mergedInputRef = useMergeRefs(inputRef, forwardedRef)

  const {
    handleKeyDown,
    handleKeyUp,
  } = useKeyboardActionLockerWhileComposing({
    keysToLock: COMMON_IME_CONTROL_KEYS,
    onKeyDown,
    onKeyUp,
  })

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
    <TextareaAutosize
      {...ownProps}
      style={style}
      className={classNames(
        styles.TextArea,
        className,
      )}
      ref={mergedInputRef}
      value={value}
      disabled={disabled}
      readOnly={readOnly}
      maxRows={maxRows}
      minRows={minRows}
      data-testid={testId}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
    />
  )
})
