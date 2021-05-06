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

const ICON_MARGIN = 3
const TEXT_MARGIN = 4

function Button(
  {
    as,
    testId = BUTTON_TEST_ID,
    text,
    bold,
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
        marginRight={(text && !isRightIcon) ? ICON_MARGIN : 0}
        marginLeft={(text && isRightIcon) ? ICON_MARGIN : 0}
      />
    )
  ), [
    text,
    iconSize,
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
          bold={bold}
          italic={italic}
          marginRight={TEXT_MARGIN}
          marginLeft={TEXT_MARGIN}
        >
          { text }
        </Text>
      ) }

      { renderIcon(rightIcon, true) }
    </StyledBaseButton>
  )
}

export default forwardRef(Button)
