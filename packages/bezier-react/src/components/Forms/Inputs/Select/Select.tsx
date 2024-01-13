import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'

import {
  ChevronDownIcon,
  ChevronUpIcon,
  isBezierIcon,
} from '@channel.io/bezier-icons'
import classNames from 'classnames'

import { ZIndex } from '~/src/constants/ZIndex'
import { isEmpty } from '~/src/utils/type'

import useFormFieldProps from '~/src/components/Forms/useFormFieldProps'
import {
  Icon,
  IconSize,
} from '~/src/components/Icon'
import {
  Overlay,
  OverlayPosition,
} from '~/src/components/Overlay'
import { Text } from '~/src/components/Text'

import {
  type SelectProps,
  type SelectRef,
  SelectSize,
} from './Select.types'

import styles from './Select.module.scss'

export const SELECT_CONTAINER_TEST_ID = 'bezier-react-select-container'
export const SELECT_TRIGGER_TEST_ID = 'bezier-react-select-trigger'
export const SELECT_TRIGGER_TEXT_TEST_ID = 'bezier-react-select-trigger-text'
export const SELECT_DROPDOWN_TEST_ID = 'bezier-react-select-dropdown'

const DEFAULT_DROPDOWN_Z_INDEX = ZIndex.Overlay

export const Select = forwardRef<SelectRef, SelectProps>(function Select({
  children,
  style,
  className,
  size = SelectSize.M,
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
  dropdownZIndex = DEFAULT_DROPDOWN_Z_INDEX,
  dropdownPosition = OverlayPosition.BottomLeft,
  testId = SELECT_CONTAINER_TEST_ID,
  triggerTestId = SELECT_TRIGGER_TEST_ID,
  triggerTextTestId = SELECT_TRIGGER_TEXT_TEST_ID,
  dropdownTestId = SELECT_DROPDOWN_TEST_ID,
  onClickTrigger,
  onHideDropdown,
  ...rest
}, forwardedRef) {
  const {
    disabled,
    readOnly,
    hasError,
    ...ownProps
  } = useFormFieldProps(rest)

  const containerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  const [isDropdownOpened, setIsDropdownOpened] = useState(false)

  const handleClickTrigger = useCallback((event: React.MouseEvent) => {
    if (!disabled && !readOnly) {
      setIsDropdownOpened(prevState => !prevState)
      onClickTrigger?.(event)
    }
  }, [
    disabled,
    readOnly,
    onClickTrigger,
  ])

  const handleHideDropdown = useCallback(() => {
    setIsDropdownOpened(false)
    onHideDropdown?.()
  }, [onHideDropdown])

  const getDOMNode = useCallback(() => triggerRef.current, [])

  const handle = useMemo((): SelectRef => ({ handleClickTrigger, handleHideDropdown, getDOMNode }), [
    handleClickTrigger,
    handleHideDropdown,
    getDOMNode,
  ])

  useEffect(() => {
    if (defaultFocus && !disabled && !readOnly) {
      setIsDropdownOpened(true)
    }
  }, [
    defaultFocus,
    disabled,
    readOnly,
  ])

  useImperativeHandle(forwardedRef, () => handle)

  const hasContent = !isEmpty(text)

  return (
    <div
      style={style}
      className={classNames(
        styles.SelectContainer,
        className,
      )}
      ref={containerRef}
      data-testid={testId}
    >
      <button
        className={classNames(
          styles.SelectTrigger,
          size && styles[`size-${size}`],
          hasError && styles.invalid,
          readOnly && styles.readonly,
          isDropdownOpened && styles.active,
        )}
        ref={triggerRef}
        type="button"
        disabled={disabled}
        data-testid={triggerTestId}
        onClick={handleClickTrigger}
        {...ownProps}
      >
        <div className={styles.SelectMainContent}>
          { isBezierIcon(leftContent)
            ? (
              <Icon
                source={leftContent}
                size={IconSize.XS}
                marginRight={6}
                color={iconColor}
              />
            )
            : leftContent }

          <Text
            testId={triggerTextTestId}
            typo="14"
            truncated
            color={hasContent ? textColor : 'txt-black-dark'}
          >
            { hasContent ? text : placeholder }
          </Text>

          { isBezierIcon(rightContent)
            ? (
              <Icon
                source={rightContent}
                size={IconSize.XS}
                marginRight={6}
                color={iconColor}
              />
            )
            : rightContent }
        </div>

        { !withoutChevron && (
          <Icon
            source={isDropdownOpened ? ChevronUpIcon : ChevronDownIcon}
            size={IconSize.XS}
            color={readOnly ? 'txt-black-dark' : 'txt-black-darker'}
            marginLeft={6}
          />
        ) }
      </button>

      <Overlay
        style={dropdownStyle}
        className={classNames(
          styles.SelectDropdown,
          dropdownClassName,
        )}
        testId={dropdownTestId}
        withTransition
        show={isDropdownOpened && !disabled}
        zIndex={dropdownZIndex}
        marginX={dropdownMarginX}
        marginY={dropdownMarginY}
        target={triggerRef.current}
        container={dropdownContainer || containerRef.current}
        position={dropdownPosition}
        onHide={handleHideDropdown}
      >
        { children }
      </Overlay>
    </div>
  )
})
