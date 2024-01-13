import React, {
  type Ref,
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
import { noop } from '~/src/utils/function'
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

import type SelectProps from './Select.types'
import { type SelectRef } from './Select.types'
import { SelectSize } from './Select.types'

import styles from './Select.module.scss'

export const SELECT_CONTAINER_TEST_ID = 'bezier-react-select-container'
export const SELECT_TRIGGER_TEST_ID = 'bezier-react-select-trigger'
export const SELECT_TRIGGER_TEXT_TEST_ID = 'bezier-react-select-trigger-text'
export const SELECT_DROPDOWN_TEST_ID = 'bezier-react-select-dropdown'

const DEFAULT_DROPDOWN_MARGIN_Y = 6
const DEFAULT_DROPDOWN_Z_INDEX = ZIndex.Overlay

function Select({
  testId = SELECT_CONTAINER_TEST_ID,
  triggerTestId = SELECT_TRIGGER_TEST_ID,
  triggerTextTestId = SELECT_TRIGGER_TEXT_TEST_ID,
  dropdownTestId = SELECT_DROPDOWN_TEST_ID,
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
  dropdownMarginY = DEFAULT_DROPDOWN_MARGIN_Y,
  dropdownZIndex = DEFAULT_DROPDOWN_Z_INDEX,
  dropdownPosition = OverlayPosition.BottomLeft,
  onClickTrigger = noop,
  onHideDropdown = noop,
  children,
  ...rest
}: SelectProps,
forwardedRef: Ref<SelectRef>,
) {
  const {
    disabled,
    readOnly,
    hasError,
    ...ownProps
  } = useFormFieldProps(rest)

  const containerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)

  const [isDropdownOpened, setIsDropdownOpened] = useState(false)

  const LeftComponent = useMemo(() => {
    if (isBezierIcon(leftContent)) {
      return (
        <Icon
          source={leftContent}
          size={IconSize.XS}
          marginRight={6}
          color={iconColor}
        />
      )
    }

    return leftContent
  }, [
    leftContent,
    iconColor,
  ])

  const RightComponent = useMemo(() => {
    if (isBezierIcon(rightContent)) {
      return (
        <Icon
          source={rightContent}
          size={IconSize.XS}
          marginRight={6}
          color={iconColor}
        />
      )
    }

    return rightContent
  }, [
    rightContent,
    iconColor,
  ])

  const handleClickTrigger = useCallback((event: React.MouseEvent) => {
    if (!disabled && !readOnly) {
      setIsDropdownOpened(prevState => !prevState)
      onClickTrigger(event)
    }
  }, [
    disabled,
    readOnly,
    onClickTrigger,
  ])

  const handleHideDropdown = useCallback(() => {
    setIsDropdownOpened(false)
    onHideDropdown()
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
        type="button"
        ref={triggerRef}
        disabled={disabled}
        data-testid={triggerTestId}
        onClick={handleClickTrigger}
        {...ownProps}
      >
        <div className={styles.SelectMainContent}>
          { LeftComponent }
          <Text
            testId={triggerTextTestId}
            typo="14"
            truncated
            color={hasContent ? textColor : 'txt-black-dark'}
          >
            { hasContent ? text : placeholder }
          </Text>
          { RightComponent }
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
        // zIndex={dropdownZIndex}
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
}

export default forwardRef(Select)
