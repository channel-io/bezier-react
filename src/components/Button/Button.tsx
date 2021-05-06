/* External dependencies */
import React, {
  forwardRef,
  useCallback,
  useMemo,
} from 'react'
import { noop } from 'lodash-es'

/* Internal dependencies */
import { Icon, IconSize } from '../Icon'
import type { IconName } from '../Icon'
import { Text } from '../Text'
import { Typography } from '../../foundation'
import {
  ButtonProps,
  ButtonSize,
  ButtonStyleVariant,
  ButtonColorVariant,
} from './Button.types'
import { StyledBaseButton } from './Button.styled'

export const BUTTON_TEST_ID = 'ch-design-system-button'

function Button(
  {
    as,
    testId = BUTTON_TEST_ID,
    text,
    disabled = false,
    active = false,
    size = ButtonSize.M,
    styleVariant = ButtonStyleVariant.Primary,
    colorVariant = ButtonColorVariant.Blue,
    leftIcon,
    rightIcon,
    onClick = noop,
  }: ButtonProps,
  forwardedRef: React.Ref<HTMLElement>,
) {
  const textMargin = useMemo(() => {
    switch (size) {
      case ButtonSize.S:
      case ButtonSize.XS:
        return 3
      case ButtonSize.XL:
      case ButtonSize.L:
      case ButtonSize.M:
      default:
        return 4
    }
  }, [size])

  const typography = useMemo(() => {
    switch (size) {
      case ButtonSize.XS:
      case ButtonSize.S:
        return Typography.Size13
      case ButtonSize.XL:
        return Typography.Size16
      case ButtonSize.L:
      case ButtonSize.M:
      default:
        return Typography.Size14
    }
  }, [size])

  const iconMargin = useMemo(() => {
    switch (size) {
      case ButtonSize.S:
      case ButtonSize.XS:
        return 0
      case ButtonSize.XL:
      case ButtonSize.L:
      case ButtonSize.M:
      default:
        return 3
    }
  }, [size])

  const iconSize = useMemo(() => {
    switch (size) {
      case ButtonSize.S:
      case ButtonSize.XS:
        return IconSize.XS
      case ButtonSize.XL:
      case ButtonSize.L:
      case ButtonSize.M:
      default:
        return IconSize.S
    }
  }, [size])

  const handleClick = useCallback((event: MouseEvent) => {
    if (!disabled) { onClick(event) }
    return null
  }, [
    onClick,
    disabled,
  ])

  const renderIcon = useCallback((icon?: IconName, isRightIcon?: boolean) => (
    icon && (
      <Icon
        name={icon}
        size={iconSize}
        marginRight={(text && !isRightIcon) ? iconMargin : 0}
        marginLeft={(text && isRightIcon) ? iconMargin : 0}
      />
    )
  ), [
    text,
    iconSize,
    iconMargin,
  ])

  return (
    <StyledBaseButton
      as={as}
      ref={forwardedRef}
      size={size}
      disabled={disabled}
      active={active}
      styleVariant={styleVariant}
      colorVariant={colorVariant}
      text={text}
      data-testid={testId}
      onClick={handleClick}
    >
      { renderIcon(leftIcon, false) }

      { text && (
        <Text
          inheritColor
          typo={typography}
          bold
          marginRight={textMargin}
          marginLeft={textMargin}
        >
          { text }
        </Text>
      ) }

      { renderIcon(rightIcon, true) }
    </StyledBaseButton>
  )
}

export default forwardRef(Button)
