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
    size = SelectSize.M,
    disabled = false,
    defaultFocus = false,
    placeholder = '',
    iconComponent,
    text,
    withoutChevron = false,
    hasError = false,
    dropdownContainer,
    dropdownPosition = OverlayPosition.BottomLeft,
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
          marginRight={6}
        />
      )
    }

    return iconComponent
  }, [iconComponent])

  const handleClickTrigger = useCallback(() => {
    if (!disabled) {
      setIsDropdownOpened(prevState => !prevState)
    }
  }, [disabled])

  const handleHideDropdown = useCallback(() => {
    setIsDropdownOpened(false)
  }, [])

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
          <Text typo={Typography.Size14}>
            { text || placeholder }
          </Text>
        </Styled.MainContentWrapper>
        { !withoutChevron && (
          <Icon
            name={isDropdownOpened ? 'chevron-up' : 'chevron-down'}
            size={IconSize.XS}
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
        onHide={handleHideDropdown}
      >
        { children }
      </Styled.Dropdown>
    </Styled.Container>
  )
}

export default forwardRef(Select)
