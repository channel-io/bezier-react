import React, {
  forwardRef,
  useLayoutEffect,
  useRef,
} from 'react'

import classNames from 'classnames'
import TextareaAutosize from 'react-textarea-autosize'

import useMergeRefs from '~/src/hooks/useMergeRefs'

import { COMMON_IME_CONTROL_KEYS } from '~/src/components/Forms/Inputs/constants/CommonImeControlKeys'
import useFormFieldProps from '~/src/components/Forms/useFormFieldProps'
import useKeyboardActionLockerWhileComposing from '~/src/components/Forms/useKeyboardActionLockerWhileComposing'

import type { TextAreaProps } from './TextArea.types'
import { TextAreaHeight } from './TextArea.types'

import styles from './TextArea.module.scss'

export const TEXT_AREA_TEST_ID = 'bezier-react-text-area'

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(function TextArea({
  style,
  className,
  testId = TEXT_AREA_TEST_ID,
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
  const mergedInputRef = useMergeRefs<HTMLTextAreaElement>(inputRef, forwardedRef)

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
    <div
      style={style}
      className={classNames(
        styles.TextAreaWrapper,
        className,
      )}
      data-testid={testId}
    >
      <TextareaAutosize
        {...ownProps}
        className={styles.TextArea}
        ref={mergedInputRef}
        value={value}
        disabled={disabled}
        readOnly={readOnly}
        maxRows={maxRows}
        minRows={minRows}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
      />
    </div>
  )
})
