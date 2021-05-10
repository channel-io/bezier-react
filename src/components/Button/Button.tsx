/* External dependencies */
import React, {
  forwardRef,
  useCallback,
  useMemo,
} from 'react'
import { noop } from 'lodash-es'

/* Internal dependencies */
import {
  Icon,
  IconSize,
} from '../Icon'
import { isIconName } from '../Icon/util'
import type { IconName } from '../Icon'
import { Text } from '../Text'
import {
  Spinner,
  SpinnerSize,
} from '../Spinner'
import { Typography } from '../../foundation'
import {
  ButtonProps,
  ButtonSize,
  ButtonStyleVariant,
  ButtonColorVariant,
} from './Button.types'
import * as Styled from './Button.styled'

export const BUTTON_TEST_ID = 'ch-design-system-button'
export const BUTTON_TEXT_TEST_ID = 'ch-design-system-button-text'

function Button(
  {
    as,
    testId = BUTTON_TEST_ID,
    text,
    disabled = false,
    loading = false,
    active = false,
    size = ButtonSize.M,
    styleVariant = ButtonStyleVariant.Primary,
    colorVariant = ButtonColorVariant.Blue,
    leftComponent,
    rightComponent,
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
        return 2
    }
  }, [size])

  const ButtonSpinnerSize = useMemo(() => {
    switch (size) {
      case ButtonSize.S:
      case ButtonSize.XS:
        return SpinnerSize.XS
      case ButtonSize.XL:
      case ButtonSize.L:
      case ButtonSize.M:
      default:
        return SpinnerSize.S
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

  const iconAndSpinnerColor = useMemo(() => {
    if (
      (colorVariant !== ButtonColorVariant.Monochrome) ||
      (
        (styleVariant !== ButtonStyleVariant.Secondary) &&
        (styleVariant !== ButtonStyleVariant.Tertiary)
      )
    ) {
      return undefined
    }

    return 'txt-black-darker'
  }, [
    colorVariant,
    styleVariant,
  ])

  const handleClick = useCallback((event: MouseEvent) => {
    if (!disabled) { onClick(event) }
    return null
  }, [
    onClick,
    disabled,
  ])

  const renderSideComponent = useCallback((component?: IconName | React.ReactNode, isRightIcon?: boolean) => {
    if (isIconName(component)) {
      return (
        <Icon
          name={component}
          size={iconSize}
          marginRight={(text && !isRightIcon) ? iconMargin : 0}
          marginLeft={(text && isRightIcon) ? iconMargin : 0}
          color={iconAndSpinnerColor}
        />
      )
    }

    return component
  }, [
    text,
    iconSize,
    iconMargin,
    iconAndSpinnerColor,
  ])

  return (
    <Styled.ButtonWrapper
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
      <Styled.ButtonContents visible={!loading}>
        { renderSideComponent(leftComponent, false) }

        { text && (
          <Text
            testId={BUTTON_TEXT_TEST_ID}
            typo={typography}
            bold
            marginRight={textMargin}
            marginLeft={textMargin}
          >
            { text }
          </Text>
        ) }

        { renderSideComponent(rightComponent, true) }
      </Styled.ButtonContents>

      { loading && (
        <Styled.ButtonLoader>
          <Spinner
            size={ButtonSpinnerSize}
            color={iconAndSpinnerColor}
          />
        </Styled.ButtonLoader>
      ) }
    </Styled.ButtonWrapper>
  )
}

export default forwardRef(Button)
