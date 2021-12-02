/* External dependencies */
import React, {
  forwardRef,
  useCallback,
  useMemo,
  useState,
} from 'react'
import {
  flattenDeep,
  fromPairs,
  isArray,
  noop,
  values,
} from 'lodash-es'

/* Internal dependencies */
import {
  Icon,
  IconSize,
} from '../Icon'
import { isIconName } from '../Icon/utils'
import { Text } from '../Text'
import {
  Spinner,
  SpinnerSize,
} from '../Spinner'
import {
  Typography,
  SemanticNames,
} from '../../foundation'
import type { IconName } from '../Icon'
import ButtonProps, {
  ButtonSize,
  ButtonStyleVariant,
  ButtonColorVariant,
} from './Button.types'
import * as Styled from './Button.styled'

export const BUTTON_TEST_ID = 'bezier-react-button'
export const BUTTON_TEXT_TEST_ID = 'bezier-react-button-text'

type VariantTuple = `${ButtonColorVariant},${ButtonStyleVariant},${ButtonSize}`

function tupleKey(...[colorVariant, styleVariant, size]: [ButtonColorVariant, ButtonStyleVariant, ButtonSize]): VariantTuple {
  return `${colorVariant},${styleVariant},${size}` as const
}

function combinations(
  colors: ButtonColorVariant | ButtonColorVariant[],
  styles: ButtonStyleVariant | ButtonStyleVariant[],
  sizes: ButtonSize | ButtonSize[],
) : VariantTuple[] {
  function toArray<T>(items: T | T[]): T[] {
    return isArray(items) ? items : [items]
  }

  return flattenDeep(
    toArray(colors).map((color) =>
      toArray(styles).map((style) =>
        toArray(sizes).map((size) => tupleKey(color, style, size)))),
  )
}

const OVERRIDED_TEXT_DEFAULT_COLORS: { [key in VariantTuple]?: SemanticNames } = {
  ...fromPairs(
    combinations(
      ButtonColorVariant.Monochrome,
      [ButtonStyleVariant.Secondary, ButtonStyleVariant.Tertiary],
      [ButtonSize.S, ButtonSize.XS],
    )
      .map((key) => [key, 'txt-black-darker']),
  ),
}

const OVERRIDED_ICON_AND_SPINNER_DEFAULT_COLORS: { [key in VariantTuple]?: SemanticNames } = {
  ...fromPairs(
    combinations(
      ButtonColorVariant.Monochrome,
      [ButtonStyleVariant.Secondary, ButtonStyleVariant.Tertiary],
      [ButtonSize.XL, ButtonSize.L, ButtonSize.M],
    )
      .map((key) => [key, 'txt-black-darker']),
  ),
  ...fromPairs(
    combinations(
      ButtonColorVariant.Monochrome,
      [ButtonStyleVariant.Secondary, ButtonStyleVariant.Tertiary],
      [ButtonSize.S, ButtonSize.XS],
    )
      .map((key) => [key, 'txt-black-dark']),
  ),
  ...fromPairs(
    combinations(
      ButtonColorVariant.MonochromeLight,
      [ButtonStyleVariant.Secondary, ButtonStyleVariant.Tertiary, ButtonStyleVariant.Floating],
      values(ButtonSize),
    )
      .map((key) => [key, 'txt-black-dark']),
  ),
  ...fromPairs(
    combinations(
      ButtonColorVariant.MonochromeDark,
      [ButtonStyleVariant.Secondary, ButtonStyleVariant.Tertiary, ButtonStyleVariant.Floating],
      values(ButtonSize),
    )
      .map((key) => [key, 'txt-black-darker']),
  ),
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
    onMouseEnter = noop,
    onMouseLeave = noop,
    onBlur = noop,
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

  const overridedTextColor = useMemo(() => (
    (active || isHovered)
      ? undefined
      : OVERRIDED_TEXT_DEFAULT_COLORS[tupleKey(colorVariant, styleVariant, size)]
  ), [
    colorVariant,
    styleVariant,
    size,
    active,
    isHovered,
  ])

  const overridedIconAndSpinnerColor = useMemo(() => (
    (active || isHovered)
      ? undefined
      : OVERRIDED_ICON_AND_SPINNER_DEFAULT_COLORS[tupleKey(colorVariant, styleVariant, size)]
  ), [
    colorVariant,
    styleVariant,
    size,
    active,
    isHovered,
  ])

  const handleMouseEnter = useCallback((e: React.MouseEvent) => {
    setIsHovered(true)
    onMouseEnter(e)
  }, [onMouseEnter])
  const handleMouseLeave = useCallback((e: React.MouseEvent) => {
    setIsHovered(false)
    onMouseLeave(e)
  }, [onMouseLeave])

  const handleClick = useCallback((event: React.MouseEvent) => {
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
      onBlur={onBlur}
    >
      <Styled.ButtonContents visible={!loading}>
        { renderSideComponent(leftComponent, false) }

        { text && (
          <Text
            testId={BUTTON_TEXT_TEST_ID}
            typo={typography}
            bold
            color={overridedTextColor}
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
