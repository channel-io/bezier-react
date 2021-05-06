/* External dependencies */
import React, {
  forwardRef,
  useCallback,
  useMemo,
} from 'react'

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
    italic,
    size = ButtonSize.M,
    styleVariant = ButtonStyleVariant.Primary,
    colorVariant = ButtonColorVariant.Blue,
    leftIcon,
    rightIcon,
    onClick,
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
      styleVariant={styleVariant}
      colorVariant={colorVariant}
      text={text}
      data-testid={testId}
      onClick={onClick}
    >
      { renderIcon(leftIcon, false) }

      { text && (
        <Text
          inheritColor
          typo={Typography.Size14}
          bold
          italic={italic}
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
