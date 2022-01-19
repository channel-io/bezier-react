/* External dependencies */
import React, { Ref, forwardRef, useState, useEffect, useImperativeHandle, useRef, useCallback, useMemo } from 'react'
import { size as getSize, isNil, isEmpty, isArray, toString, includes } from 'lodash-es'
import { v4 as uuid } from 'uuid'

/* Internal dependencies */
import { window } from 'Utils/domUtils'
import { Icon, IconSize } from 'Components/Icon'
import useFormFieldProps from 'Components/Forms/useFormFieldProps'
import Styled from './TextField.styled'
import {
  TextFieldItemProps,
  TextFieldType,
  TextFieldRef,
  SelectionRangeDirections,
  TextFieldSize,
  TextFieldVariant,
} from './TextField.types'
import { getProperTextFieldBgColor, getProperTextFieldBorderRadius } from './TextFieldUtils'
import type { TextFieldProps } from './TextField.types'

export const TEXT_INPUT_TEST_ID = 'bezier-react-text-input'

function TextFieldComponent({
  name,
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
  onBlur,
  onFocus,
  onChange,
  onKeyDown,
  onKeyUp,
  ...rest
}: TextFieldProps,
forwardedRef: Ref<TextFieldRef>,
) {
  const {
    disabled,
    readOnly,
    hasError,
    ...ownProps
  } = useFormFieldProps(rest)

  const [focused, setFocused] = useState(false)
  const [hovered, setHovered] = useState(false)

  const wrapperBgColorSemanticName = useMemo(() => (
    getProperTextFieldBgColor({
      variant,
      focused,
      hasError,
      readOnly,
    })
  ), [
    variant,
    focused,
    hasError,
    readOnly,
  ])

  const wrapperBorderRadius = useMemo(() => (
    getProperTextFieldBorderRadius({
      size,
    })
  ), [size])

  const focusTimeout = useRef<ReturnType<Window['setTimeout']>>()
  const blurTimeout = useRef<ReturnType<Window['setTimeout']>>()

  const normalizedValue = useMemo(() => (
    isNil(value) ? undefined : toString(value)
  ), [value])

  const activeInput = !disabled && !readOnly
  const activeClear = activeInput && allowClear

  const inputRef = useRef<HTMLInputElement | null>(null)

  const focus = useCallback(() => {
    clearTimeout(focusTimeout.current)
    focusTimeout.current = window.setTimeout(() => {
      inputRef.current?.focus()
    }, 0)
  }, [])

  const blur = useCallback(() => {
    clearTimeout(blurTimeout.current)
    blurTimeout.current = window.setTimeout(() => {
      inputRef.current?.blur()
    }, 0)
  }, [])

  const setSelectionRange = useCallback((start?: number, end?: number, direction?: SelectionRangeDirections) => {
    if (includes([TextFieldType.Number, TextFieldType.Email, TextFieldType.Hidden], type)) { return }
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
    if (activeInput) {
      setFocused(true)
      if (selectAllOnFocus) { selectAll() }
      if (onFocus) { onFocus(event) }
    }
  }, [
    selectAllOnFocus,
    selectAll,
    activeInput,
    onFocus,
  ])

  const handleBlur = useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    setFocused(false)
    if (onBlur) { onBlur(event) }
  }, [onBlur])

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    if (activeInput && onChange) {
      onChange(event)
    }
  }, [
    activeInput,
    onChange,
  ])

  const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    if (activeInput && onKeyDown) {
      onKeyDown(event)
    }
  }, [
    activeInput,
    onKeyDown,
  ])

  const handleKeyUp = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    if (activeInput && onKeyUp) {
      onKeyUp(event)
    }
  }, [
    activeInput,
    onKeyUp,
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

  const renderLeftItem = useCallback((item: TextFieldItemProps) => (
    'icon' in item
      ? (
        <Styled.LeftIcon
          name={item.icon}
          size={IconSize.S}
          color={item.iconColor ?? 'txt-black-dark'}
          clickable={!isNil(item.onClick)}
          onClick={item.onClick}
        />
      ) : item
  ), [])

  const leftComponent = useMemo(() => {
    if (isNil(leftContent)) {
      return null
    }

    const item = renderLeftItem(leftContent)

    if (isNil(item) || withoutLeftContentWrapper) { return item }

    return (
      <Styled.LeftContentWrapper
        className={leftWrapperClassName}
        interpolation={leftWrapperInterpolation}
      >
        { item }
      </Styled.LeftContentWrapper>
    )
  }, [
    leftContent,
    withoutLeftContentWrapper,
    leftWrapperClassName,
    leftWrapperInterpolation,
    renderLeftItem,
  ])

  const renderRightItem = useCallback((item: TextFieldItemProps, key?: string) => (
    'icon' in item ? (
      <Styled.RightItemWrapper
        key={key}
        clickable={!isNil(item.onClick)}
        onClick={item.onClick}
      >
        <Icon
          name={item.icon}
          size={IconSize.XS}
          color={item.iconColor ?? 'txt-black-dark'}
        />
      </Styled.RightItemWrapper>
    ) : React.cloneElement(
      item,
      { key },
    )
  ), [])

  const rightComponent = useMemo(() => {
    if (isNil(rightContent) || isEmpty(rightContent)) {
      return null
    }

    const items = isArray(rightContent)
      ? rightContent.map((item) => renderRightItem(item, uuid()))
      : renderRightItem(rightContent)

    if (withoutRightContentWrapper) { return items }

    return (
      <Styled.RightContentWrapper
        className={rightWrapperClassName}
        interpolation={rightWrapperInterpolation}
      >
        { items }
      </Styled.RightContentWrapper>
    )
  }, [
    rightContent,
    withoutRightContentWrapper,
    rightWrapperClassName,
    rightWrapperInterpolation,
    renderRightItem,
  ])

  const clearComponent = useMemo(() => (
    <Styled.ClearIconWrapper
      onClick={handleClear}
    >
      {
        getSize(normalizedValue) > 0 && (focused || hovered) && (
          <Icon
            name="cancel-circle-filled"
            size={IconSize.XS}
          />
        )
      }
    </Styled.ClearIconWrapper>
  ), [
    focused,
    handleClear,
    hovered,
    normalizedValue,
  ])

  return (
    <Styled.Wrapper
      className={wrapperClassName}
      variant={variant}
      size={size}
      bgColor={wrapperBgColorSemanticName}
      borderRadius={wrapperBorderRadius}
      hasError={hasError}
      disabled={disabled}
      focused={focused}
      interpolation={wrapperInterpolation}
      data-testid={testId}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseDown={focus}
    >
      { leftComponent }
      <Styled.Input
        type={type}
        className={inputClassName}
        interpolation={inputInterpolation}
        ref={inputRef}
        value={normalizedValue}
        name={name}
        size={size}
        autoComplete={autoComplete}
        readOnly={readOnly}
        disabled={disabled}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        {...ownProps}
      />
      { activeClear && clearComponent }
      { rightComponent }
    </Styled.Wrapper>
  )
}

export default forwardRef(TextFieldComponent)
