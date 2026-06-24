'use client'

import { forwardRef, useRef } from 'react'

import classNames from 'classnames'
import TextareaAutosize from 'react-textarea-autosize'

import useId from '~/src/hooks/useId'
import { useIsomorphicLayoutEffect } from '~/src/hooks/useIsomorphicLayoutEffect'
import {
  COMMON_IME_CONTROL_KEYS,
  useKeyboardActionLockerWhileComposing,
} from '~/src/hooks/useKeyboardActionLockerWhileComposing'
import useMergeRefs from '~/src/hooks/useMergeRefs'
import { useFormFieldProps } from '~/src/v3/Form'

import type { TextAreaProps } from './TextArea.types'

import styles from './TextArea.module.scss'

/**
 * `TextArea` is a multiline text input that grows within the configured row range.
 * @example
 *
 * ```tsx
 * <TextArea
 *   placeholder="Enter a message"
 *   minRows={3}
 *   maxRows={10}
 * />
 * ```
 */
export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextArea(
    {
      style,
      className,
      minRows = 6,
      maxRows = 6,
      autoFocus = false,
      onKeyDown,
      onKeyUp,
      ...rest
    },
    forwardedRef
  ) {
    const {
      disabled,
      readOnly,
      hasError,
      id: fieldId,
      ...ownProps
    } = useFormFieldProps(rest)
    const id = useId(fieldId, 'bezier-text-area')

    const inputRef = useRef<HTMLTextAreaElement | null>(null)
    const mergedInputRef = useMergeRefs(inputRef, forwardedRef)

    const { handleKeyDown, handleKeyUp } =
      useKeyboardActionLockerWhileComposing({
        keysToLock: COMMON_IME_CONTROL_KEYS,
        onKeyDown,
        onKeyUp,
      })

    useIsomorphicLayoutEffect(function initialAutoFocus() {
      function setSelectionToEnd() {
        inputRef.current?.setSelectionRange(
          inputRef.current?.value.length,
          inputRef.current?.value.length
        )
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
        id={id}
        style={style}
        className={classNames(styles.TextArea, className)}
        ref={mergedInputRef}
        disabled={disabled}
        readOnly={readOnly}
        maxRows={maxRows}
        minRows={minRows}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
      />
    )
  }
)
