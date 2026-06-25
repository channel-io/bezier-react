'use client'

import {
  type ChangeEvent,
  type FocusEvent,
  type KeyboardEvent,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'

import classNames from 'classnames'


import useId from '~/src/hooks/useId'
import {
  COMMON_IME_CONTROL_KEYS,
  useKeyboardActionLockerWhileComposing,
} from '~/src/hooks/useKeyboardActionLockerWhileComposing'

import { useWindow } from '~/src/components/WindowProvider'

import type {
  BaseTextInputProps,
  SelectionRangeDirections,
  TextInputRef,
  TextInputSize,
} from './BaseTextInput.types'

import styles from './BaseTextInput.module.scss'


const INPUT_LENGTH_BY_SIZE = {
  m: 20,
  l: 25,
} satisfies Record<NonNullable<BaseTextInputProps['size']>, number>

function hasInputValue(value: unknown) {
  return value != null && String(value).length > 0
}

function normalizeSize(size?: string): TextInputSize {
  return size === 'l' ? 'l' : 'm'
}

export const BaseTextInput = forwardRef<TextInputRef, BaseTextInputProps>(
  function BaseTextInput(
    {
      type = 'text',
      size: sizeProp,
      autoFocus,
      autoComplete = 'off',
      className,
      style,
      inputClassName,
      inputStyle,
      disabled = false,
      readOnly = false,
      leadingSlot,
      trailingSlot,
      withoutLeadingSlotWrapper = false,
      withoutTrailingSlotWrapper = false,
      selectAllOnInit = false,
      selectAllOnFocus = false,
      onFocus,
      onChange,
      onKeyDown,
      onKeyUp,
      id: idProp,
      defaultValue,
      placeholder,
      value,
      ...rest
    },
    forwardedRef
  ) {
    const { window } = useWindow()
    const inputProps = rest

    const focusTimeout = useRef<ReturnType<Window['setTimeout']>>(undefined)
    const blurTimeout = useRef<ReturnType<Window['setTimeout']>>(undefined)
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [hasValue, setHasValue] = useState(() =>
      hasInputValue(value ?? defaultValue)
    )

    const size = normalizeSize(sizeProp)
    const id = useId(idProp, 'bezier-text-input')
    const activeInput = !disabled && !readOnly

    const focus = useCallback(
      (options?: FocusOptions) => {
        clearTimeout(focusTimeout.current)
        focusTimeout.current = window.setTimeout(() => {
          inputRef.current?.focus(options)
        }, 0)
      },
      [window]
    )

    const blur = useCallback(() => {
      clearTimeout(blurTimeout.current)
      blurTimeout.current = window.setTimeout(() => {
        inputRef.current?.blur()
      }, 0)
    }, [window])

    const setSelectionRange = useCallback(
      (start?: number, end?: number, direction?: SelectionRangeDirections) => {
        if (['number', 'email'].includes(type)) {
          return
        }
        inputRef.current?.setSelectionRange(
          start || 0,
          end || 0,
          direction || 'none'
        )
      },
      [type]
    )

    const getSelectionRange = useCallback(
      (): [number, number] => [
        inputRef.current?.selectionStart || 0,
        inputRef.current?.selectionEnd || 0,
      ],
      []
    )

    const selectAll = useCallback(() => {
      focus()
      if (inputRef.current) {
        setSelectionRange(0, inputRef.current.value.length, 'backward')
      }
    }, [focus, setSelectionRange])

    const unselect = useCallback(() => {
      focus()
      if (inputRef.current) {
        const valueLen = inputRef.current.value.length
        setSelectionRange(valueLen, valueLen)
      }
    }, [focus, setSelectionRange])

    const getBoundingClientRect = useCallback((): DOMRect => {
      if (inputRef.current) {
        return inputRef.current.getBoundingClientRect()
      }
      return new DOMRect(undefined, undefined, 0, 0)
    }, [])

    const getDOMNode = useCallback(() => inputRef.current, [])

    const handle = useMemo(
      (): TextInputRef => ({
        focus,
        blur,
        setSelectionRange,
        getSelectionRange,
        selectAll,
        unselect,
        getBoundingClientRect,
        getDOMNode,
      }),
      [
        focus,
        blur,
        setSelectionRange,
        getSelectionRange,
        selectAll,
        unselect,
        getBoundingClientRect,
        getDOMNode,
      ]
    )

    useImperativeHandle(forwardedRef, () => handle)

    useEffect(() => {
      if (value != null) {
        setHasValue(hasInputValue(value))
      }
    }, [value])

    useEffect(() => {
      if (autoFocus) {
        focus()
      }
      if (selectAllOnInit) {
        focus()
        selectAll()
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleFocus = useCallback(
      (event: FocusEvent<HTMLInputElement>) => {
        if (!activeInput) {
          return
        }
        if (selectAllOnFocus) {
          selectAll()
        }
        onFocus?.(event)
      },
      [activeInput, onFocus, selectAll, selectAllOnFocus]
    )

    const handleChange = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        if (activeInput) {
          if (value == null) {
            setHasValue(event.currentTarget.value.length > 0)
          }
          onChange?.(event)
        }
      },
      [activeInput, onChange, value]
    )

    const {
      handleKeyDown: handleKeyDownWrappedWithComposingLocker,
      handleKeyUp: handleKeyUpWrappedWithComposingLocker,
    } = useKeyboardActionLockerWhileComposing({
      keysToLock: COMMON_IME_CONTROL_KEYS,
      onKeyDown,
      onKeyUp,
    })

    const handleKeyDown = useCallback(
      (event: KeyboardEvent<HTMLInputElement>) => {
        if (activeInput) {
          handleKeyDownWrappedWithComposingLocker?.(event)
        }
      },
      [activeInput, handleKeyDownWrappedWithComposingLocker]
    )

    const handleKeyUp = useCallback(
      (event: KeyboardEvent<HTMLInputElement>) => {
        if (activeInput) {
          handleKeyUpWrappedWithComposingLocker?.(event)
        }
      },
      [activeInput, handleKeyUpWrappedWithComposingLocker]
    )

    return (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <div
        style={style}
        className={classNames(
          styles.BaseTextInput,
          styles[`size-${size}`],
          className
        )}
        onMouseDown={() => focus()}
      >
        {leadingSlot &&
          (withoutLeadingSlotWrapper ? (
            leadingSlot
          ) : (
            <div className={styles.LeadingSlot}>{leadingSlot}</div>
          ))}

        <div className={styles.InputWrapper}>
          {placeholder && !hasValue && (
            <span className={styles.Placeholder}>{placeholder}</span>
          )}
          <input
            ref={inputRef}
            style={inputStyle}
            className={classNames(styles.Input, inputClassName)}
            type={type}
            /**
             * Invalid size attribute
             * FIXME: https://github.com/channel-io/bezier-react/issues/1053
             */
            size={INPUT_LENGTH_BY_SIZE[size]}
            id={id}
            value={value}
            defaultValue={defaultValue}
            placeholder={placeholder}
            autoFocus={autoFocus}
            autoComplete={autoComplete}
            disabled={disabled}
            readOnly={readOnly}
            onFocus={handleFocus}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
            {...inputProps}
          />
        </div>

        {trailingSlot &&
          (withoutTrailingSlotWrapper ? (
            trailingSlot
          ) : (
            <div className={styles.TrailingSlot}>{trailingSlot}</div>
          ))}
      </div>
    )
  }
)
