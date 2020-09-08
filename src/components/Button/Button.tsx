/* External dependencies */
import React, { forwardRef, useMemo } from 'react'

/* Internal dependencies */
import { Icon, IconSize } from '../Icon'
import type { IconName } from '../Icon'
import { Text } from '../Text'
import type { ButtonProps } from './Button.types'
import { ButtonIconPosition } from './Button.types'
import { StyledButton } from './Button.styled'
import ButtonTheme from './ButtonTheme'

export const BUTTON_TEST_ID = 'ch-design-system-button'

const ICON_MARGIN = 1
const TEXT_MARGIN = 5

function iconPositionValidation(
  icon: string | undefined,
  iconPosition: ButtonIconPosition,
  targetPosition: ButtonIconPosition,
) {
  if (icon && iconPosition === targetPosition) { return true }
  return false
}

function Button(
  {
    as,
    testId = BUTTON_TEST_ID,
    text,
    typo,
    bold,
    italic,
    buttonTheme = ButtonTheme.Primary,
    icon,
    iconPosition = ButtonIconPosition.Left,
    onClick,
  }: ButtonProps,
  forwardedRef: React.Ref<HTMLElement>,
) {
  const ViewableIcon = useMemo(() => (
    <Icon
      name={icon as IconName}
      size={IconSize.S}
      marginRight={ICON_MARGIN}
      marginLeft={ICON_MARGIN}
    />
  ), [icon])

  return (
    <StyledButton
      as={as}
      ref={forwardedRef}
      buttonTheme={buttonTheme}
      text={text}
      data-testid={testId}
      onClick={onClick}
    >
      { iconPositionValidation(icon, iconPosition, ButtonIconPosition.Left) && ViewableIcon }

      { text && (
        <Text
          inheritColor
          typo={typo}
          bold={bold}
          italic={italic}
          marginRight={TEXT_MARGIN}
          marginLeft={TEXT_MARGIN}
        >
          { text }
        </Text>
      ) }

      { iconPositionValidation(icon, iconPosition, ButtonIconPosition.Right) && ViewableIcon }
    </StyledButton>
  )
}

export default forwardRef(Button)
