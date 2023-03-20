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
import { Typography } from '~/src/foundation'
import { ZIndex } from '~/src/constants/ZIndex'
import {
  isEmpty,
} from '~/src/utils/typeUtils'
import { noop } from '~/src/utils/functionUtils'
import {
  Icon,
  ChevronUpIcon,
  ChevronDownIcon,
  IconSize,
  isBezierIcon,
  isIconName,
  LegacyIcon,
} from '~/src/components/Icon'
import { OverlayPosition } from '~/src/components/Overlay'
import { Text } from '~/src/components/Text'
import useFormFieldProps from '~/src/components/Forms/useFormFieldProps'

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
