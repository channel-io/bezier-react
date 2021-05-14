/* External dependencies */
import React, {
  Ref,
  forwardRef,
  useState,
  useEffect,
  useImperativeHandle,
  useRef,
  useCallback,
  useMemo,
} from 'react'
import ReactDOM from 'react-dom'
import { size as getSize, isNil, isEmpty, isArray, toString, includes } from 'lodash-es'
import { v4 as uuid } from 'uuid'

/* Internal dependencies */
import { Icon, IconSize } from '../../Icon'
import Styled from './TextField.styled'
import type { TextFieldProps } from './TextField.types'
import {
  TextFieldItemProps,
  TextFieldType,
  TextFieldRef,
  SelectionRangeDirections,
  TextFieldSize,
  TextFieldVariant,
} from './TextField.types'
import { getProperTextFieldBgColor } from './TextFieldUtils'

export const TEXT_INPUT_TEST_ID = 'ch-design-system-text-input'

function TextFieldComponent({
  name,
  type,
  size = TextFieldSize.M,
  testId = TEXT_INPUT_TEST_ID,
  autoFocus,
  autoComplete = 'off',
  disabled = false,
  readOnly = false,
  variant = TextFieldVariant.Primary,
  hasError = false,
  allowClear = false,
  selectAllOnInit = false,
  selectAllOnFocus = false,
  leftContent,
  rightContent,
  wrapperClassName,
  wrapperInterpolation,
  leftWrapperClassName,
  leftWrapperInterpolation,
  rightWrapperClassName,
  rightWrapperInterpolation,
  maxLength,
  value,
  placeholder,
  onBlur,
  onFocus,
  onChange,
  ...otherProps
}: TextFieldProps, forwardedRef: Ref<TextFieldRef>) {
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

  const focusTimeout = useRef<ReturnType<typeof setTimeout>>()
  const blurTimeout = useRef<ReturnType<typeof setTimeout>>()

  const normalizedValue = useMemo(() => (
    isNil(value) ? undefined : toString(value)
  ), [value])

  const activeClear = useMemo(() => (
    !disabled
    && !readOnly
    && allowClear
  ), [
    disabled,
    readOnly,
    allowClear,
  ])

  const inputRef = useRef<HTMLInputElement | null>(null)

  const focus = useCallback(() => {
    clearTimeout(focusTimeout.current)
    focusTimeout.current = setTimeout(() => {
      inputRef.current?.focus()
    }, 0)
  }, [])

  const blur = useCallback(() => {
    clearTimeout(blurTimeout.current)
    blurTimeout.current = setTimeout(() => {
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

  const getBoundingClientRect = useCallback((): ClientRect => {
    if (inputRef.current) { return inputRef.current.getBoundingClientRect() }
    return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 }
  }, [])

  const getDOMNode = useCallback(() => ReactDOM.findDOMNode(inputRef.current), [])

  useImperativeHandle(forwardedRef, () => ({
    focus,
    blur,
    setSelectionRange,
    getSelectionRange,
    selectAll,
    unselect,
    getBoundingClientRect,
    getDOMNode,
  }))

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
    if (!disabled && !readOnly) {
      setFocused(true)
      if (selectAllOnFocus) { selectAll() }
      if (onFocus) { onFocus(event) }
    }
  }, [
    selectAllOnFocus,
    selectAll,
    readOnly,
    disabled,
    onFocus,
  ])

  const handleBlur = useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    setFocused(false)
    if (onBlur) { onBlur(event) }
  }, [onBlur])

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    if (!readOnly && !disabled && onChange) {
      onChange(event)
    }
  }, [
    readOnly,
    disabled,
    onChange,
  ])

  const handleClear = useCallback(() => {
    const input = inputRef.current
    if (!readOnly && !disabled && input) {
      const setValue = Object?.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set
      const event = new Event('input', { bubbles: true })
      setValue?.call(input, '')
      input.dispatchEvent(event)
    }
  }, [
    readOnly,
    disabled,
  ])

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
    return !isNil(item) && (
      <Styled.LeftContentWrapper
        className={leftWrapperClassName}
        interpolation={leftWrapperInterpolation}
      >
        { item }
      </Styled.LeftContentWrapper>
    )
  }, [
    leftContent,
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
      hasError={hasError}
      readOnly={readOnly}
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
        ref={inputRef}
        name={name}
        size={size}
        autoComplete={autoComplete}
        type={type}
        readOnly={readOnly}
        disabled={disabled}
        value={normalizedValue}
        placeholder={placeholder}
        maxLength={maxLength}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        {...otherProps}
      />
      { activeClear && clearComponent }
      { rightComponent }
    </Styled.Wrapper>
  )
}

export default forwardRef(TextFieldComponent)
