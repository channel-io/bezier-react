/* External dependencies */
import React, {
  useState,
  useCallback,
  useMemo,
  useRef,
  forwardRef,
  Ref,
  useImperativeHandle,
  useEffect,
} from 'react'

/* Internal dependencies */
import { Typography } from 'Foundation'
import { ZIndex } from 'Constants/ZIndex'
import {
  isEmpty,
} from 'Utils/typeUtils'
import { noop } from 'Utils/functionUtils'
import { LegacyIcon, Icon, IconSize, isIconName, ChevronUpIcon, ChevronDownIcon } from 'Components/Icon'
import { OverlayPosition } from 'Components/Overlay'
import { Text } from 'Components/Text'
import useFormFieldProps from 'Components/Forms/useFormFieldProps'

import SelectProps, { SelectRef, SelectSize } from './Select.types'
import * as Styled from './Select.styled'

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
  as,
  style,
  className,
  interpolation,
  dropdownInterpolation,
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
    if (isIconName(leftContent)) {
      return (
        <LegacyIcon
          name={leftContent}
          size={IconSize.XS}
          color={iconColor}
          marginRight={6}
        />
      )
    }

    return leftContent
  }, [
    leftContent,
    iconColor,
  ])

  const RightComponent = useMemo(() => {
    if (isIconName(rightContent)) {
      return (
        <LegacyIcon
          name={rightContent}
          size={IconSize.XS}
          color={iconColor}
          marginRight={6}
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
    <Styled.Container
      data-testid={testId}
      ref={containerRef}
      style={style}
      className={className}
      interpolation={interpolation}
    >
      <Styled.Trigger
        type="button"
        data-testid={triggerTestId}
        as={as}
        ref={triggerRef}
        size={size}
        hasError={hasError}
        disabled={disabled}
        readOnly={readOnly}
        active={isDropdownOpened}
        onClick={handleClickTrigger}
        {...ownProps}
      >
        <Styled.MainContentWrapper>
          { LeftComponent }
          <Text
            testId={triggerTextTestId}
            typo={Typography.Size14}
            truncated
            color={hasContent ? textColor : 'txt-black-dark'}
          >
            { hasContent ? text : placeholder }
          </Text>
          { RightComponent }
        </Styled.MainContentWrapper>
        { !withoutChevron && (
        <Icon
          source={isDropdownOpened ? ChevronUpIcon : ChevronDownIcon}
          size={IconSize.XS}
          color={readOnly ? 'txt-black-dark' : 'txt-black-darker'}
          marginLeft={6}
        />
        ) }
      </Styled.Trigger>

      <Styled.Dropdown
        style={dropdownStyle}
        className={dropdownClassName}
        testId={dropdownTestId}
        withTransition
        show={isDropdownOpened && !disabled}
        zIndex={dropdownZIndex}
        marginX={dropdownMarginX}
        marginY={dropdownMarginY}
        target={triggerRef.current}
        container={dropdownContainer || containerRef.current}
        position={dropdownPosition}
        interpolation={dropdownInterpolation}
        onHide={handleHideDropdown}
      >
        { children }
      </Styled.Dropdown>
    </Styled.Container>
  )
}

export default forwardRef(Select)
