/* External dependencies */
import React, { forwardRef, useCallback, useMemo, useState } from 'react'
import { flattenDeep, fromPairs, isArray, noop, values } from 'lodash-es'

/* Internal dependencies */
import { Typography, SemanticNames } from 'Foundation'
import { LegacyIcon, IconSize, isIconName } from 'Components/Icon'
import { Spinner, SpinnerSize } from 'Components/Spinner'
import ButtonProps, {
  SideContent,
  ButtonSize,
  ButtonStyleVariant,
  ButtonColorVariant,
  MouseEventHandler,
} from './Button.types'
import * as Styled from './Button.styled'

export const BUTTON_TEST_ID = 'bezier-react-button'
export const BUTTON_INNER_CONTENT_TEST_ID = 'bezier-react-button-inner-content'
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

export const Button = forwardRef(function Button(
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
    leftContent,
    rightContent,
    onClick = noop,
    onMouseEnter = noop,
    onMouseLeave = noop,
    onBlur = noop,
    ...rest
  }: ButtonProps,
  forwardedRef: React.Ref<HTMLElement>,
) {
  const [isHovered, setIsHovered] = useState(false)

  const typography = useMemo(() => {
    switch (size) {
      case ButtonSize.XS:
      case ButtonSize.S:
        return Typography.Size13
      case ButtonSize.L:
        return Typography.Size15
      case ButtonSize.XL:
        return Typography.Size18
      case ButtonSize.M:
      default:
        return Typography.Size14
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
      case ButtonSize.XS:
      case ButtonSize.S:
        return IconSize.XS
      case ButtonSize.XL:
        return IconSize.Normal
      case ButtonSize.M:
      case ButtonSize.L:
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

  const handleMouseEnter = useCallback<MouseEventHandler>((event) => {
    setIsHovered(true)
    onMouseEnter(event)
  }, [onMouseEnter])

  const handleMouseLeave = useCallback<MouseEventHandler>((event) => {
    setIsHovered(false)
    onMouseLeave(event)
  }, [onMouseLeave])

  const handleClick = useCallback<MouseEventHandler>((event) => {
    if (!disabled) { onClick(event) }
    return null
  }, [
    onClick,
    disabled,
  ])

  const renderSideContent = useCallback((content?: SideContent) => {
    if (isIconName(content)) {
      return (
        <LegacyIcon
          name={content}
          size={iconSize}
          color={overridedIconAndSpinnerColor}
        />
      )
    }

    return content
  }, [
    iconSize,
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
      {...rest}
    >
      <Styled.ButtonContents
        data-testid={BUTTON_INNER_CONTENT_TEST_ID}
        visible={!loading}
        buttonSize={size}
      >
        { renderSideContent(leftContent) }

        { text && (
          <Styled.ContentText
            testId={BUTTON_TEXT_TEST_ID}
            typo={typography}
            bold
            color={overridedTextColor}
            buttonSize={size}
          >
            { text }
          </Styled.ContentText>
        ) }

        { renderSideContent(rightContent) }
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
})
