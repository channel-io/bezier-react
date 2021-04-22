/* External dependencies */
import React, { Ref, forwardRef, useState, useEffect, useImperativeHandle, useRef, useCallback, useMemo } from 'react'
import ReactDOM from 'react-dom'
import { isNil, isEmpty, isArray, toString } from 'lodash-es'
import { v4 as uuid } from 'uuid'

/* Internal dependencies */
import { Icon, IconSize } from '../../Icon'
import { Typography } from '../../../foundation'
import Styled from './TextField.styled'
import type TextFieldProps from './TextField.types'
import { TextFieldItemProps, TextFieldRef, SelectionRangeDirections, TextFieldSize } from './TextField.types'

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
  variant = 'primary',
  hasError = false,
  allowClear = false,
  selectAllOnInit = false,
  selectAllOnFocus = false,
  left,
  right,
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

  const normalizedValue = useMemo(() => (
    isNil(value) ? undefined : toString(value)
  ), [
    value,
  ])

  const inputRef = useRef<HTMLInputElement>(null)

  const focus = useCallback(() => {
    setTimeout(() => {
      if (inputRef.current) { inputRef.current.focus() }
    }, 0)
  }, [])

  const blur = useCallback(() => {
    setTimeout(() => {
      if (inputRef.current) { inputRef.current.blur() }
    }, 0)
  }, [])

  const setSelectionRange = useCallback((start?: number, end?: number, direction?: SelectionRangeDirections) => {
    if (inputRef.current) { inputRef.current.setSelectionRange(start || 0, end || 0, direction || 'none') }
  }, [])

  const getSelectionRange = useCallback((): [number, number] => {
    if (inputRef.current) {
      return [inputRef.current.selectionStart || 0, inputRef.current.selectionEnd || 0]
    }
    return [0, 0]
  }, [])

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
    if ((selectAllOnInit || autoFocus) && inputRef.current) {
      focus()
      setSelectionRange(inputRef.current.value.length, inputRef.current.value.length)

      if (selectAllOnInit) {
        selectAll()
      }
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

  const renderLeftItem = useCallback(
    (item: TextFieldItemProps) => (
      'content' in item
        ? item.content
        : (
          <Styled.LeftIcon
            name={item.icon}
            size={IconSize.S}
            color={item.iconColor ?? 'txt-black-dark'}
            clickable={!isNil(item.onClick)}
            onClick={item.onClick}
          />
        )
    ),
    [],
  )

  const leftContent = useMemo(() => {
    if (isNil(left)) {
      return null
    }

    const item = renderLeftItem(left)
    const show = !isNil(item)

    return show && (
      <Styled.LeftContentWrapper
        className={leftWrapperClassName}
        interpolation={leftWrapperInterpolation}
      >
        { item }
      </Styled.LeftContentWrapper>
    )
  }, [
    left,
    leftWrapperClassName,
    leftWrapperInterpolation,
    renderLeftItem,
  ])

  const renderRightItem = useCallback(
    (item: TextFieldItemProps, key?: string) => (
      'content' in item ? React.cloneElement(
        item.content,
        { key },
      ) : (
        <Styled.RightItemWrapper
          key={key}
          clickable={!isNil(item.onClick)}
          color={item.iconColor ?? 'txt-black-dark'}
          onClick={item.onClick}
        >
          <Icon
            name={item.icon}
            size={IconSize.XS}
          />
        </Styled.RightItemWrapper>
      )
    ),
    [],
  )

  const rightContent = useMemo(() => {
    if (isNil(right) || isEmpty(right)) {
      return null
    }

    const items = isArray(right)
      ? right.map((item) => renderRightItem(item, uuid()))
      : renderRightItem(right)

    return (
      <Styled.RightContentWrapper
        className={rightWrapperClassName}
        interpolation={rightWrapperInterpolation}
      >
        { items }
      </Styled.RightContentWrapper>
    )
  }, [
    right,
    rightWrapperClassName,
    rightWrapperInterpolation,
    renderRightItem,
  ])

  return (
    <Styled.Wrapper
      className={wrapperClassName}
      variant={variant}
      size={size}
      hasError={hasError}
      disabled={disabled}
      focused={focused}
      interpolation={wrapperInterpolation}
      data-testid={testId}
      onMouseDown={focus}
    >
      { leftContent }
      <Styled.Input
        ref={inputRef}
        name={name}
        size={size}
        autoComplete={autoComplete}
        type={allowClear ? 'search' : type}
        readOnly={readOnly}
        disabled={disabled}
        value={normalizedValue}
        placeholder={placeholder}
        maxLength={maxLength}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        typo={Typography.Size14}
        {...otherProps}
      />
      { rightContent }
    </Styled.Wrapper>
  )
}

export default forwardRef(TextFieldComponent)
