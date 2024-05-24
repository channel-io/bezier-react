import React, { forwardRef, useRef } from 'react'

import classNames from 'classnames'
import TextareaAutosize from 'react-textarea-autosize'

import { useIsomorphicLayoutEffect } from '~/src/hooks/useIsomorphicLayoutEffect'
import {
  COMMON_IME_CONTROL_KEYS,
  useKeyboardActionLockerWhileComposing,
} from '~/src/hooks/useKeyboardActionLockerWhileComposing'
import useMergeRefs from '~/src/hooks/useMergeRefs'

import { useFormFieldProps } from '~/src/components/FormControl'

import type { TextAreaProps } from './TextArea.types'

import styles from './TextArea.module.scss'

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextArea(
    {
      style,
      className,
      minRows = 6,
      maxRows = 6,
      autoFocus = false,
      value = '',
      onKeyDown,
      onKeyUp,
      ...rest
    },
    forwardedRef
  ) {
    const { disabled, readOnly, hasError, ...ownProps } =
      useFormFieldProps(rest)

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
        style={style}
        className={classNames(styles.TextArea, className)}
        ref={mergedInputRef}
        value={value}
        disabled={disabled}
        readOnly={readOnly}
        maxRows={maxRows}
        minRows={minRows}
        data-testid="bezier-text-area"
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
      />
    )
  }
)
