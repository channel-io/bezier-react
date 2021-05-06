/* External dependencies */
import { isEmpty } from 'lodash-es'

/* Internal dependencies */
import { styled, css } from '../../foundation'
import DisabledOpacity from '../../constants/DisabledOpacity'
import {
  ButtonProps,
  ButtonSize,
  ButtonStyleVariant,
  ButtonColorVariant,
} from './Button.types'

interface GetSizeCSSFromButtonSizeArgs {
  size?: ButtonSize
  text?: string
}

function getSizeCSSFromButtonSize({ size, text }: GetSizeCSSFromButtonSizeArgs) {
  switch (size) {
    case ButtonSize.XS:
      return css`
        min-width: 20px;
        height: 20px;
        padding: 2px;
      `
    case ButtonSize.S:
      return css`
        min-width: 24px;
        height: 24px;
        padding: 3px ${isEmpty(text) ? 3 : 4}px;
      `
    case ButtonSize.L:
      return css`
        min-width: 44px;
        height: 44px;
        padding: 12px ${isEmpty(text) ? 12 : 10}px;
      `
    case ButtonSize.XL:
      return css`
        min-width: 54px;
        height: 54px;
        padding: 15px ${isEmpty(text) ? 15 : 14}px;
      `
    case ButtonSize.M:
    default:
      return css`
        min-width: 36px;
        height: 36px;
        padding: 8px ${isEmpty(text) ? 8 : 10}px;
      `
  }
}

function monochromeVariantConverter(styleVariant?: ButtonStyleVariant) {
  switch (styleVariant) {
    case ButtonStyleVariant.Secondary:
      return css`
        color: ${({ foundation }) => foundation?.theme?.['txt-black-darkest']};
        background-color: ${({ foundation }) => foundation?.theme?.['bg-black-lighter']};

        &:hover {
          background-color: ${({ foundation }) => foundation?.theme?.['bg-black-light']};
        }
      `
    case ButtonStyleVariant.Tertiary:
      return css`
        color: ${({ foundation }) => foundation?.theme?.['txt-black-darkest']};
        background-color: transparent;

        &:hover {
          background-color: ${({ foundation }) => foundation?.theme?.['bg-black-lightest']};
        }
      `
    case ButtonStyleVariant.Floating:
      return css`
        color: ${({ foundation }) => foundation?.theme?.['txt-black-darkest']};
        ${({ foundation }) => foundation?.elevation?.ev3()};

        &:hover {
          ${({ foundation }) => foundation?.elevation?.ev4()};
        }
      `
    case ButtonStyleVariant.Primary:
    default:
      return css`
        color: ${({ foundation }) => foundation?.theme?.['bgtxt-absolute-white-dark']};
        background-color: ${({ foundation }) => foundation?.theme?.['bgtxt-absolute-black-lightest']};

        &:hover {
          background-color: ${({ foundation }) => foundation?.theme?.['bgtxt-absolute-black-lighter']};
        }
      `
  }
}

function getEffectCSSFromVariant(styleVariant?: ButtonStyleVariant, size?: ButtonSize) {
  switch (styleVariant) {
    case ButtonStyleVariant.Floating:
      return css`
        ${({ foundation }) => foundation?.elevation?.ev3()};
        /* NOTE: height 기반의 100% border-radius 를 사용하기 위해, foundation rounding 을 무시한 hack */
        border-radius: 1000px;

        &:hover {
          ${({ foundation }) => foundation?.elevation?.ev4()};
        }
      `
    case ButtonStyleVariant.Tertiary:
    case ButtonStyleVariant.Secondary:
    case ButtonStyleVariant.Primary:
    default: {
      switch (size) {
        case ButtonSize.XS:
          return css`
            ${({ foundation }) => foundation?.rounding?.round6};
          `
        case ButtonSize.XL:
          return css`
            ${({ foundation }) => foundation?.rounding?.round12};
          `
        case ButtonSize.S:
        case ButtonSize.L:
        case ButtonSize.M:
        default:
          return css`
            ${({ foundation }) => foundation?.rounding?.round8};
          `
      }
    }
  }
}

interface GetCSSFromVariantArgs {
  colorVariant?: ButtonColorVariant
  styleVariant?: ButtonStyleVariant
  size?: ButtonSize
  disabled?: boolean
  active?: boolean
}

function getCSSFromVariant({
  colorVariant,
  styleVariant,
  size,
  disabled,
  active,
}: GetCSSFromVariantArgs) {
  const effectCSS = getEffectCSSFromVariant(styleVariant, size)

  const colorCSS = (() => {
    if (colorVariant === ButtonColorVariant.Monochrome) {
      return monochromeVariantConverter(styleVariant)
    }

    switch (styleVariant) {
      case ButtonStyleVariant.Secondary:
        return css`
          color: ${({ foundation }) => foundation?.theme?.[`bgtxt-${colorVariant}-normal`]};
          background-color: ${({ foundation }) => foundation?.theme?.[`bgtxt-${colorVariant}-lightest`]};
        `
      case ButtonStyleVariant.Tertiary:
        return css`
          color: ${({ foundation }) => foundation?.theme?.[`bgtxt-${colorVariant}-normal`]};
          background-color: transparent;
        `
      case ButtonStyleVariant.Floating:
      case ButtonStyleVariant.Primary:
      default:
        return css`
          color: ${({ foundation }) => foundation?.theme?.['bgtxt-absolute-white-dark']};
          background-color: ${({ foundation }) => foundation?.theme?.[`bgtxt-${colorVariant}-normal`]};
        `
    }
  })()

  const hoverCSS = (() => {
    if (disabled) return css``

    switch (styleVariant) {
      case ButtonStyleVariant.Secondary:
        return css`
          background-color: ${({ foundation }) => foundation?.theme?.[`bgtxt-${colorVariant}-lighter`]};
        `
      case ButtonStyleVariant.Tertiary:
        return css`
          color: ${({ foundation }) => foundation?.theme?.[`bgtxt-${colorVariant}-dark`]};
          background-color: ${({ foundation }) => foundation?.theme?.[`bgtxt-${colorVariant}-lightest`]};
        `
      case ButtonStyleVariant.Floating:
      case ButtonStyleVariant.Primary:
      default:
        return css`
          background-color: ${({ foundation }) => foundation?.theme?.[`bgtxt-${colorVariant}-dark`]};
        `
    }
  })

  return css`
    ${effectCSS};
    ${colorCSS};
    ${active && hoverCSS};

    &:hover {
      ${hoverCSS};
    }
  `
}

export const StyledBaseButton = styled.button<ButtonProps>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  border: none;
  border-radius: 6px;
  outline: none;
  opacity: ${({ disabled }) => (disabled ? DisabledOpacity : 1)};

  ${({ foundation }) => foundation?.transition?.getTransitionsCSS(['background-color', 'box-shadow'])};

  ${getSizeCSSFromButtonSize};
  ${getCSSFromVariant};
`
