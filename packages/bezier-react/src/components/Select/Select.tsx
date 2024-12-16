'use client'

import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import * as React from 'react'

import {
  ChevronDownIcon,
  ChevronUpIcon,
  isBezierIcon,
} from '@channel.io/bezier-icons'
import classNames from 'classnames'

import {
  getFormFieldSizeClassName,
  getZIndexClassName,
} from '~/src/types/props-helpers'
import { isEmpty } from '~/src/utils/type'

import { BaseButton } from '~/src/components/BaseButton'
import { useFormFieldProps } from '~/src/components/FormControl'
import { Icon } from '~/src/components/Icon'
import { Overlay } from '~/src/components/Overlay'
import { Text } from '~/src/components/Text'

import { type SelectProps, type SelectRef } from './Select.types'

import styles from './Select.module.scss'

export const SELECT_DROPDOWN_TEST_ID = 'bezier-select-dropdown'

export const Select = forwardRef<SelectRef, SelectProps>(function Select(
  {
    children,
    style,
    className,
    size: sizeProps,
    defaultFocus = false,
    placeholder = '',
    leftContent,
    rightContent,
    iconColor = 'txt-black-dark',
    text,
    textColor = 'txt-black-darkest',
    withoutChevron = false,
    dropdownStyle,
    dropdownClassName,
    dropdownContainer,
    dropdownMarginX,
    dropdownMarginY = 6,
    dropdownZIndex = 'overlay',
    dropdownPosition = 'bottom-left',
    dropdownKeepInContainer = false,
    onClickTrigger,
    onHideDropdown,
    ...rest
  },
  forwardedRef
) {
  const {
    disabled,
    readOnly,
    hasError,
    size: formFieldSize,
    ...ownProps
  } = useFormFieldProps(rest)

  const containerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  const size = sizeProps ?? formFieldSize ?? 'm'

  const [isDropdownOpened, setIsDropdownOpened] = useState(false)

  const handleClickTrigger = useCallback(
    (event: React.MouseEvent) => {
      if (!disabled && !readOnly) {
        setIsDropdownOpened((prevState) => !prevState)
        onClickTrigger?.(event)
      }
    },
    [disabled, readOnly, onClickTrigger]
  )

  const handleHideDropdown = useCallback(() => {
    setIsDropdownOpened(false)
    onHideDropdown?.()
  }, [onHideDropdown])

  const getDOMNode = useCallback(() => triggerRef.current, [])

  const handle = useMemo(
    (): SelectRef => ({
      handleClickTrigger,
      handleHideDropdown,
      getDOMNode,
    }),
    [handleClickTrigger, handleHideDropdown, getDOMNode]
  )

  useEffect(
    function handleDefaultFocus() {
      if (defaultFocus && !disabled && !readOnly) {
        setIsDropdownOpened(true)
      }
    },
    [defaultFocus, disabled, readOnly]
  )

  useImperativeHandle(forwardedRef, () => handle)

  const hasContent = !isEmpty(text)

  return (
    <div
      style={style}
      className={classNames(styles.SelectContainer, className)}
      ref={containerRef}
    >
      <BaseButton
        className={classNames(
          styles.SelectTrigger,
          getFormFieldSizeClassName(size),
          hasError && styles.invalid,
          readOnly && styles.readonly,
          isDropdownOpened && styles.active
        )}
        ref={triggerRef}
        disabled={disabled}
        onClick={handleClickTrigger}
        {...ownProps}
      >
        <div className={styles.SelectMainContent}>
          {isBezierIcon(leftContent) ? (
            <Icon
              source={leftContent}
              size="xs"
              marginRight={6}
              color={iconColor}
            />
          ) : (
            leftContent
          )}

          <Text
            data-testid="bezier-select-trigger-text"
            typo="14"
            truncated
            color={hasContent ? textColor : 'txt-black-dark'}
          >
            {hasContent ? text : placeholder}
          </Text>

          {isBezierIcon(rightContent) ? (
            <Icon
              source={rightContent}
              size="xs"
              marginRight={6}
              color={iconColor}
            />
          ) : (
            rightContent
          )}
        </div>

        {!withoutChevron && (
          <Icon
            source={isDropdownOpened ? ChevronUpIcon : ChevronDownIcon}
            size="xs"
            color={readOnly ? 'txt-black-dark' : 'txt-black-darker'}
            marginLeft={6}
          />
        )}
      </BaseButton>

      <Overlay
        style={dropdownStyle}
        className={classNames(
          styles.SelectDropdown,
          getZIndexClassName(dropdownZIndex),
          dropdownClassName
        )}
        withTransition
        show={isDropdownOpened && !disabled}
        marginX={dropdownMarginX}
        marginY={dropdownMarginY}
        target={triggerRef.current}
        container={dropdownContainer || containerRef.current}
        position={dropdownPosition}
        keepInContainer={dropdownKeepInContainer}
        data-testid={SELECT_DROPDOWN_TEST_ID}
        onHide={handleHideDropdown}
      >
        {children}
      </Overlay>
    </div>
  )
})
