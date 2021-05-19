/* External dependencies */
import React, {
  forwardRef,
  useCallback,
  useMemo,
  useState,
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
import {
  Typography,
  SemanticNames,
} from '../../foundation'
import ButtonProps, {
  ButtonSize,
  ButtonStyleVariant,
  ButtonColorVariant,
} from './Button.types'
import * as Styled from './Button.styled'

export const BUTTON_TEST_ID = 'bezier-react-button'
export const BUTTON_TEXT_TEST_ID = 'bezier-react-button-text'

const monochromeIconAndSpinnerDefaultColors: {
  [color in ButtonColorVariant]?: {
    [style in ButtonStyleVariant]?: SemanticNames
  }
} = {
  [ButtonColorVariant.Monochrome]: {
    [ButtonStyleVariant.Secondary]: 'txt-black-darker',
    [ButtonStyleVariant.Tertiary]: 'txt-black-dark',
    [ButtonStyleVariant.Floating]: 'txt-black-dark',
  },
}

function Button(
  {
    as,
    className,
    style,
    interpolation,
    testId = BUTTON_TEST_ID,
    type = 'button',
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
  const [isHovered, setIsHovered] = useState(false)

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

  const overridedIconAndSpinnerColor = useMemo(() => (
    (active || isHovered)
      ? undefined
      : monochromeIconAndSpinnerDefaultColors[colorVariant]?.[styleVariant]
  ), [
    colorVariant,
    styleVariant,
    active,
    isHovered,
  ])

  const handleMouseEnter = useCallback(() => { setIsHovered(true) }, [])
  const handleMouseLeave = useCallback(() => { setIsHovered(false) }, [])

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
          color={overridedIconAndSpinnerColor}
        />
      )
    }

    return component
  }, [
    text,
    iconSize,
    iconMargin,
    overridedIconAndSpinnerColor,
  ])

  return (
    <Styled.ButtonWrapper
      as={as}
      type={type}
      style={style}
      className={className}
      interpolation={interpolation}
      ref={forwardedRef}
      size={size}
      disabled={disabled}
      active={active}
      styleVariant={styleVariant}
      colorVariant={colorVariant}
      text={text}
      data-testid={testId}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
            color={overridedIconAndSpinnerColor}
          />
        </Styled.ButtonLoader>
      ) }
    </Styled.ButtonWrapper>
  )
}

export default forwardRef(Button)
