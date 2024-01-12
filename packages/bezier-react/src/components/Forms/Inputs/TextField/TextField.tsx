import React, {
  type Ref,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react'

import { CancelCircleFilledIcon } from '@channel.io/bezier-icons'
import classNames from 'classnames'
import { v4 as uuid } from 'uuid'

import { useWindow } from '~/src/providers/WindowProvider'
import { toString } from '~/src/utils/string'
import {
  isArray,
  isEmpty,
  isNil,
} from '~/src/utils/type'

import { COMMON_IME_CONTROL_KEYS } from '~/src/components/Forms/Inputs/constants/CommonImeControlKeys'
import useFormFieldProps from '~/src/components/Forms/useFormFieldProps'
import useKeyboardActionLockerWhileComposing from '~/src/components/Forms/useKeyboardActionLockerWhileComposing'
import {
  Icon,
  IconSize,
} from '~/src/components/Icon'

import {
  type SelectionRangeDirections,
  type TextFieldItemProps,
  type TextFieldProps,
  type TextFieldRef,
  TextFieldSize,
  TextFieldType,
  TextFieldVariant,
} from './TextField.types'

import styles from './TextField.module.scss'

export const TEXT_INPUT_TEST_ID = 'bezier-react-text-input'
export const TEXT_INPUT_CLEAR_ICON_TEST_ID = 'bezier-react-text-input-clear-icon'

function TextFieldComponent({
  type,
  size = TextFieldSize.M,
  testId = TEXT_INPUT_TEST_ID,
  autoFocus,
  autoComplete = 'off',
  variant = TextFieldVariant.Primary,
  allowClear = false,
  selectAllOnInit = false,
  selectAllOnFocus = false,
  leftContent,
  rightContent,
  withoutLeftContentWrapper = false,
  withoutRightContentWrapper = false,
  inputClassName,
  inputInterpolation,
  wrapperClassName,
  wrapperInterpolation,
  leftWrapperClassName,
  leftWrapperInterpolation,
  rightWrapperClassName,
  rightWrapperInterpolation,
  value,
  onFocus,
  onChange,
  onKeyDown,
  onKeyUp,
  ...rest
}: TextFieldProps,
forwardedRef: Ref<TextFieldRef>,
) {
  const { window } = useWindow()

  const {
    disabled,
    readOnly,
    hasError,
    ...ownProps
  } = useFormFieldProps(rest)

  const focusTimeout = useRef<ReturnType<Window['setTimeout']>>()
  const blurTimeout = useRef<ReturnType<Window['setTimeout']>>()

  const normalizedValue = useMemo(() => (
    isNil(value) ? undefined : toString(value)
  ), [value])

  const activeInput = !disabled && !readOnly
  const activeClear = activeInput && allowClear && !isEmpty(normalizedValue)

  const inputRef = useRef<HTMLInputElement | null>(null)

  const focus = useCallback(() => {
    clearTimeout(focusTimeout.current)
    focusTimeout.current = window.setTimeout(() => {
      inputRef.current?.focus()
    }, 0)
  }, [window])

  const blur = useCallback(() => {
    clearTimeout(blurTimeout.current)
    blurTimeout.current = window.setTimeout(() => {
      inputRef.current?.blur()
    }, 0)
  }, [window])

  const setSelectionRange = useCallback((start?: number, end?: number, direction?: SelectionRangeDirections) => {
    if (type && [TextFieldType.Number, TextFieldType.Email, TextFieldType.Hidden].includes(type)) { return }
    inputRef.current?.setSelectionRange(start || 0, end || 0, direction || 'none')
  }, [type])

  const getSelectionRange = useCallback((): [number, number] =>
    [inputRef.current?.selectionStart || 0, inputRef.current?.selectionEnd || 0], [])

  const selectAll = useCallback(() => {
    focus()
    if (inputRef.current) {
      setSelectionRange(0, inputRef.current.value.length, 'backward')
    }
  }, [
    focus,
    setSelectionRange,
  ])

  const unselect = useCallback(() => {
    focus()
    if (inputRef.current) {
      const valueLen = inputRef.current.value.length
      setSelectionRange(valueLen, valueLen)
    }
  }, [
    focus,
    setSelectionRange,
  ])

  const getBoundingClientRect = useCallback((): DOMRect => {
    if (inputRef.current) { return inputRef.current.getBoundingClientRect() }
    return new DOMRect(undefined, undefined, 0, 0)
  }, [])

  const getDOMNode = useCallback(() => inputRef.current, [])

  const handle = useMemo((): TextFieldRef => ({
    focus,
    blur,
    setSelectionRange,
    getSelectionRange,
    selectAll,
    unselect,
    getBoundingClientRect,
    getDOMNode,
  }), [
    focus,
    blur,
    setSelectionRange,
    getSelectionRange,
    selectAll,
    unselect,
    getBoundingClientRect,
    getDOMNode,
  ])

  useImperativeHandle(forwardedRef, () => handle)

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

  const handleFocus = useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    if (!activeInput) { return }
    if (selectAllOnFocus) {
      selectAll()
    }
    if (onFocus) {
      onFocus(event)
    }
  }, [
    selectAllOnFocus,
    selectAll,
    activeInput,
    onFocus,
  ])

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    if (activeInput && onChange) {
      onChange(event)
    }
  }, [
    activeInput,
    onChange,
  ])

  const {
    handleKeyDown: handleKeyDownWrappedWithComposingLocker,
    handleKeyUp: handleKeyUpWrappedWithComposingLocker,
  } = useKeyboardActionLockerWhileComposing({
    keysToLock: COMMON_IME_CONTROL_KEYS,
    onKeyDown,
    onKeyUp,
  })

  const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    if (activeInput && handleKeyDownWrappedWithComposingLocker) {
      handleKeyDownWrappedWithComposingLocker(event)
    }
  }, [
    activeInput,
    handleKeyDownWrappedWithComposingLocker,
  ])

  const handleKeyUp = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    if (activeInput && handleKeyUpWrappedWithComposingLocker) {
      handleKeyUpWrappedWithComposingLocker(event)
    }
  }, [
    activeInput,
    handleKeyUpWrappedWithComposingLocker,
  ])

  const handleClear = useCallback(() => {
    const input = inputRef.current
    if (activeInput && input) {
      const setValue = Object?.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set
      const event = new Event('input', { bubbles: true })
      setValue?.call(input, '')
      input.dispatchEvent(event)
    }
  }, [activeInput])

  const renderLeftItem = useCallback((item: TextFieldItemProps) => {
    if ('icon' in item) {
      return (
        <Icon
          className={!isNil(item.onClick) ? styles.clickable : undefined}
          source={item.icon}
          size={IconSize.S}
          color={item.iconColor ?? 'txt-black-dark'}
          onClick={item.onClick}
        />
      )
    }

    return item
  }, [])

  const LeftComponent = useMemo(() => {
    if (isNil(leftContent)) {
      return null
    }

    const item = renderLeftItem(leftContent)

    if (withoutLeftContentWrapper) { return item }

    return (
      <div className={classNames(
        styles.LeftContentWrapper,
        leftWrapperClassName,
      )}
      >
        { item }
      </div>
    )
  }, [
    leftContent,
    withoutLeftContentWrapper,
    leftWrapperClassName,
    renderLeftItem,
  ])

  const renderRightItem = useCallback((item: TextFieldItemProps, key?: string) => {
    if ('icon' in item) {
      const clickable = !isNil(item.onClick)
      const Comp = clickable ? 'button' : 'div'

      return (
        <Comp
          key={key}
          type="button"
          className={classNames(
            styles.RightItemWrapper,
            clickable && styles.clickable,
          )}
          onClick={item.onClick}
        >
          <Icon
            source={item.icon}
            size={IconSize.XS}
            color={item.iconColor ?? 'txt-black-dark'}
          />
        </Comp>
      )
    }

    return React.cloneElement(
      item, { key },
    )
  }, [])

  const RightComponent = useMemo(() => {
    if (isNil(rightContent) || isEmpty(rightContent)) {
      return null
    }

    const items = isArray(rightContent)
      ? rightContent.map((item) => renderRightItem(item, uuid()))
      : renderRightItem(rightContent)

    if (withoutRightContentWrapper) { return items }

    return (
      <div
        className={classNames(
          styles.RightContentWrapper,
          rightWrapperClassName,
        )}
      >
        { items }
      </div>
    )
  }, [
    rightContent,
    withoutRightContentWrapper,
    rightWrapperClassName,
    renderRightItem,
  ])

  const ClearComponent = useMemo(() => (
    <button
      className={styles.CloseIconWrapper}
      tabIndex={-1}
      type="button"
      onClick={handleClear}
    >
      <Icon
        className={styles.CloseIcon}
        testId={TEXT_INPUT_CLEAR_ICON_TEST_ID}
        source={CancelCircleFilledIcon}
        size={IconSize.XS}
      />
    </button>
  ), [handleClear])

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={classNames(
        styles.TextFieldWrapper,
        styles[`variant-${variant}`],
        styles[`size-${size}`],
        disabled && styles.disabled,
        readOnly && styles.readonly,
        hasError && styles.invalid,
        wrapperClassName,
      )}
      data-testid={testId}
      onMouseDown={focus}
    >
      { LeftComponent }
      <input
        className={classNames(
          styles.TextFieldInput,
          inputClassName,
        )}
        ref={inputRef}
        type={type}
        value={normalizedValue}
        /**
         * Invalid size attribute
         * FIXME: https://github.com/channel-io/bezier-react/issues/1053
         */
        size={size}
        autoComplete={autoComplete}
        readOnly={readOnly}
        disabled={disabled}
        onFocus={handleFocus}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        {...ownProps}
      />
      { activeClear && ClearComponent }
      { RightComponent }
    </div>
  )
}

export default forwardRef(TextFieldComponent)
