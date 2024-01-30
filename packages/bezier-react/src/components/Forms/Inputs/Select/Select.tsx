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

import { getZIndexClassName } from '~/src/utils/props'
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

// eslint-disable-next-line no-restricted-imports
import formStyles from '../../Form.module.scss'

import {
  type SelectProps,
  type SelectRef,
} from './Select.types'

import styles from './Select.module.scss'

export const SELECT_DROPDOWN_TEST_ID = 'bezier-react-select-dropdown'

export const Select = forwardRef<SelectRef, SelectProps>(function Select({
  children,
  style,
  className,
  size: sizeProps = 'm',
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
  dropdownPosition = OverlayPosition.BottomLeft,
  testId = 'bezier-react-select-container',
  triggerTestId = 'bezier-react-select-trigger',
  triggerTextTestId = 'bezier-react-select-trigger-text',
  dropdownTestId = SELECT_DROPDOWN_TEST_ID,
  onClickTrigger,
  onHideDropdown,
  ...rest
}, forwardedRef) {
  const {
    disabled,
    readOnly,
    hasError,
    size: formFieldSize,
    ...ownProps
  } = useFormFieldProps(rest)

  const containerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  const size = formFieldSize ?? sizeProps

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

  const handle = useMemo((): SelectRef => ({
    handleClickTrigger,
    handleHideDropdown,
    getDOMNode,
  }), [
    handleClickTrigger,
    handleHideDropdown,
    getDOMNode,
  ])

  useEffect(function handleDefaultFocus() {
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
          formStyles[`size-${size}`],
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
          getZIndexClassName(dropdownZIndex),
          dropdownClassName,
        )}
        testId={dropdownTestId}
        withTransition
        show={isDropdownOpened && !disabled}
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
