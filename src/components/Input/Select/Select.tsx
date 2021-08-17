/* External dependencies */
import React, {
  useState,
  useCallback,
  useMemo,
  useRef,
  forwardRef,
  Ref,
  useImperativeHandle,
} from 'react'
import _ from 'lodash'

/* Internal dependencies */
import {
  Icon,
  IconSize,
  isIconName,
} from '../../Icon'
import { Text } from '../../Text'
import { OverlayPosition } from '../../Overlay'
import { Typography } from '../../../foundation'
import SelectProps, {
  SelectRef,
  SelectSize,
} from './Select.types'
import * as Styled from './Select.styled'

export const SELECT_CONTAINER_TEST_ID = 'bezier-react-select-container'
export const SELECT_TRIGGER_TEST_ID = 'bezier-react-select-trigger'
export const SELECT_DROPDOWN_TEST_ID = 'bezier-react-select-dropdown'

function Select(
  {
    testId = SELECT_CONTAINER_TEST_ID,
    triggerTestId = SELECT_TRIGGER_TEST_ID,
    dropdownTestId = SELECT_DROPDOWN_TEST_ID,
    as,
    style,
    className,
    interpolation,
    dropdownInterpolation,
    size = SelectSize.M,
    disabled = false,
    defaultFocus = false,
    placeholder = '',
    iconComponent,
    iconColor = 'txt-black-dark',
    text,
    textColor = 'txt-black-darkest',
    withoutChevron = false,
    chevronColor = 'txt-black-darker',
    hasError = false,
    dropdownContainer,
    dropdownPosition = OverlayPosition.BottomLeft,
    onClickTrigger = _.noop,
    onHideDropdown = _.noop,
    children,
  }: SelectProps,
  forwardedRef: Ref<SelectRef>,
) {
  const containerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)

  const [isDropdownOpened, setIsDropdownOpened] = useState(defaultFocus)

  const LeftComponent = useMemo(() => {
    if (isIconName(iconComponent)) {
      return (
        <Icon
          name={iconComponent}
          size={IconSize.XS}
          color={iconColor}
          marginRight={6}
        />
      )
    }

    return iconComponent
  }, [
    iconComponent,
    iconColor,
  ])

  const handleClickTrigger = useCallback((event: React.MouseEvent) => {
    if (!disabled) {
      setIsDropdownOpened(prevState => !prevState)
      onClickTrigger(event)
    }
  }, [
    disabled,
    onClickTrigger,
  ])

  const handleHideDropdown = useCallback(() => {
    setIsDropdownOpened(false)
    onHideDropdown()
  }, [onHideDropdown])

  const getDOMNode = useCallback(() => triggerRef.current, [])

  useImperativeHandle(forwardedRef, () => ({
    handleClickTrigger,
    handleHideDropdown,
    getDOMNode,
  }))

  return (
    <Styled.Container
      data-testid={testId}
      ref={containerRef}
      style={style}
      className={className}
      interpolation={interpolation}
    >
      <Styled.Trigger
        data-testid={triggerTestId}
        as={as}
        ref={triggerRef}
        size={size}
        focus={isDropdownOpened && !disabled}
        error={hasError}
        disabled={disabled}
        onClick={handleClickTrigger}
      >
        <Styled.MainContentWrapper>
          { LeftComponent }
          <Text
            typo={Typography.Size14}
            color={textColor}
          >
            { text || placeholder }
          </Text>
        </Styled.MainContentWrapper>
        { !withoutChevron && (
          <Icon
            name={`chevron-${isDropdownOpened ? 'up' : 'down'}` as const}
            size={IconSize.XS}
            color={chevronColor}
            marginLeft={6}
          />
        ) }
      </Styled.Trigger>

      <Styled.Dropdown
        testId={dropdownTestId}
        withTransition
        show={isDropdownOpened && !disabled}
        marginY={6}
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
