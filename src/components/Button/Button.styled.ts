/* External dependencies */
import { isEmpty } from 'lodash-es'

/* Internal dependencies */
import { styled, css } from '../../foundation'
import {
  ButtonProps,
  ButtonSize,
  ButtonStyleVariant,
  ButtonColorVariant,
} from './Button.types'

function getSizeCSSFromButtonSize(size?: ButtonSize, text?: string) {
  switch (size) {
    case ButtonSize.XS:
      return css`
        height: 20px;
        padding: 2px;
      `
    case ButtonSize.S:
      return css`
        height: 24px;
        padding: 3px ${isEmpty(text) ? 3 : 4}px;
      `
    case ButtonSize.L:
      return css`
        height: 44px;
        padding: 12px ${isEmpty(text) ? 12 : 10}px;
      `
    case ButtonSize.XL:
      return css`
        height: 54px;
        padding: 15px ${isEmpty(text) ? 15 : 14}px;
      `
    case ButtonSize.M:
    default:
      return css`
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
        ${({ foundation }) => foundation?.transition?.getTransitionsCSS('box-shadow')};

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

function getCSSFromVariant(colorVariant?: ButtonColorVariant, styleVariant?: ButtonStyleVariant, size?: ButtonSize) {
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

          &:hover {
            color: ${({ foundation }) => foundation?.theme?.[`bgtxt-${colorVariant}-dark`]};
            background-color: ${({ foundation }) => foundation?.theme?.[`bgtxt-${colorVariant}-light`]};
          }
        `
      case ButtonStyleVariant.Tertiary:
        return css`
          color: ${({ foundation }) => foundation?.theme?.[`bgtxt-${colorVariant}-normal`]};
          background-color: transparent;

          &:hover {
            color: ${({ foundation }) => foundation?.theme?.[`bgtxt-${colorVariant}-dark`]};
            background-color: ${({ foundation }) => foundation?.theme?.[`bgtxt-${colorVariant}-lightest`]};
          }
        `
      case ButtonStyleVariant.Floating:
      case ButtonStyleVariant.Primary:
      default:
        return css`
          color: ${({ foundation }) => foundation?.theme?.['bgtxt-absolute-white-dark']};
          background-color: ${({ foundation }) => foundation?.theme?.[`bgtxt-${colorVariant}-normal`]};

          &:hover {
            background-color: ${({ foundation }) => foundation?.theme?.[`bgtxt-${colorVariant}-dark`]};
          }
        `
    }
  })()

  return [
    effectCSS,
    colorCSS,
  ]
}

export const StyledBaseButton = styled.button<ButtonProps>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  border-radius: 6px;
  outline: none;

  ${({ foundation }) => foundation?.transition?.getTransitionsCSS(['background-color', 'box-shadow'])};

  ${({ size, text }) => getSizeCSSFromButtonSize(size, text)};
  ${({ styleVariant, colorVariant, size }) => getCSSFromVariant(colorVariant, styleVariant, size)};
`
