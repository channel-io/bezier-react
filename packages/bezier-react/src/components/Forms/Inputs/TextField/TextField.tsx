import React, {
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

import {
  COMMON_IME_CONTROL_KEYS,
  type FormFieldSize,
} from '~/src/components/Forms'
import useFormFieldProps from '~/src/components/Forms/useFormFieldProps'
import useKeyboardActionLockerWhileComposing from '~/src/components/Forms/useKeyboardActionLockerWhileComposing'
import {
  Icon,
  IconSize,
} from '~/src/components/Icon'

// eslint-disable-next-line no-restricted-imports
import formStyles from '../../Form.module.scss'

import {
  type SelectionRangeDirections,
  type TextFieldItemProps,
  type TextFieldProps,
  type TextFieldRef,
  TextFieldType,
  TextFieldVariant,
} from './TextField.types'

import styles from './TextField.module.scss'

export const TEXT_INPUT_TEST_ID = 'bezier-react-text-input'
export const TEXT_INPUT_CLEAR_ICON_TEST_ID = 'bezier-react-text-input-clear-icon'

/**
 * FIXME: This mapping constant was defined for UI consistency,
 * and it should be removed with size attribute
 */
const INPUT_LENGTH_BY_SIZE: Record<FormFieldSize, number> = {
  xs: 28,
  m: 36,
  l: 44,
  xl: 54,
}

function TextFieldLeftContent({
  children,
  wrapperStyle,
  wrapperClassName,
  withoutWrapper,
}: {
  children: TextFieldProps['leftContent']
  wrapperStyle: TextFieldProps['leftWrapperStyle']
  wrapperClassName: TextFieldProps['leftWrapperClassName']
  withoutWrapper: TextFieldProps['withoutLeftContentWrapper']
}) {
  if (isNil(children)) {
    return null
  }

  const Content = (() => {
    if ('icon' in children) {
      return (
        <Icon
          className={!isNil(children.onClick) ? styles.clickable : undefined}
          source={children.icon}
          size={IconSize.S}
          color={children.iconColor ?? 'txt-black-dark'}
          onClick={children.onClick}
        />
      )
    }

    return children
  })()

  if (withoutWrapper) { return Content }

  return (
    <div
      style={wrapperStyle}
      className={classNames(
        styles.LeftContentWrapper,
        wrapperClassName,
      )}
    >
      { Content }
    </div>
  )
}

function TextFieldRightContent({
  children,
  wrapperStyle,
  wrapperClassName,
  withoutWrapper,
}: {
  children: TextFieldProps['rightContent']
  wrapperStyle: TextFieldProps['rightWrapperStyle']
  wrapperClassName: TextFieldProps['rightWrapperClassName']
  withoutWrapper: TextFieldProps['withoutRightContentWrapper']
}) {
  const renderRightItem = useCallback((item: TextFieldItemProps, key?: string) => {
    if ('icon' in item) {
      const clickable = !isNil(item.onClick)
      const Comp = clickable ? 'button' : 'div'

      return (
        <Comp
          key={key}
          type={clickable ? 'button' : undefined}
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

  if (isNil(children) || isEmpty(children)) { return null }

  const contents = isArray(children)
    ? children.map((item) => renderRightItem(item, uuid()))
    : renderRightItem(children)

  if (withoutWrapper) {
    return <>{ contents }</>
  }

  return (
    <div
      style={wrapperStyle}
      className={classNames(
        styles.RightContentWrapper,
        wrapperClassName,
      )}
    >
      { contents }
    </div>
  )
}

export const TextField = forwardRef<TextFieldRef, TextFieldProps>(function TextField({
  type,
  size: sizeProps = 'm',
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
  style,
  className,
  wrapperStyle,
  wrapperClassName,
  leftWrapperStyle,
  leftWrapperClassName,
  rightWrapperStyle,
  rightWrapperClassName,
  value,
  onFocus,
  onChange,
  onKeyDown,
  onKeyUp,
  ...rest
}, forwardedRef) {
  const { window } = useWindow()

  const {
    disabled,
    readOnly,
    hasError,
    size: formFieldSize,
    ...ownProps
  } = useFormFieldProps(rest)

  const focusTimeout = useRef<ReturnType<Window['setTimeout']>>()
  const blurTimeout = useRef<ReturnType<Window['setTimeout']>>()

  const normalizedValue = isNil(value) ? undefined : toString(value)
  const activeInput = !disabled && !readOnly
  const activeClear = activeInput && allowClear && !isEmpty(normalizedValue)
  const size = formFieldSize ?? sizeProps

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

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      style={wrapperStyle}
      className={classNames(
        styles.TextFieldWrapper,
        styles[`variant-${variant}`],
        styles[`size-${size}`],
        formStyles[`size-${size}`],
        wrapperClassName,
      )}
      data-testid={testId}
      onMouseDown={focus}
    >
      <TextFieldLeftContent
        wrapperStyle={leftWrapperStyle}
        wrapperClassName={leftWrapperClassName}
        withoutWrapper={withoutLeftContentWrapper}
      >
        { leftContent }
      </TextFieldLeftContent>

      <input
        style={style}
        className={classNames(
          styles.TextFieldInput,
          className,
        )}
        ref={inputRef}
        type={type}
        value={normalizedValue}
        /**
         * Invalid size attribute
         * FIXME: https://github.com/channel-io/bezier-react/issues/1053
         */
        size={INPUT_LENGTH_BY_SIZE[size]}
        autoComplete={autoComplete}
        readOnly={readOnly}
        disabled={disabled}
        onFocus={handleFocus}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        {...ownProps}
      />

      { activeClear && (
        <button
          className={classNames(
            styles.CloseIconWrapper,
            styles.clickable,
          )}
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
      ) }

      <TextFieldRightContent
        wrapperStyle={rightWrapperStyle}
        withoutWrapper={withoutRightContentWrapper}
        wrapperClassName={rightWrapperClassName}
      >
        { rightContent }
      </TextFieldRightContent>
    </div>
  )
})
