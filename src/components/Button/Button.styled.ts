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

function sizeConverter(size?: ButtonSize, text?: string) {
  switch (size) {
    case ButtonSize.XXS:
      return css`
        height: 20px;
        padding: 2px;
      `
    case ButtonSize.XS:
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
        background-color: ${({ foundation }) => foundation?.theme?.['bg-white-high']};

        &:hover {
          background-color: ${({ foundation }) => foundation?.theme?.['bgtxt-absolute-black-lightest']};
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

function styleVariantConverter(styleVariant?: ButtonStyleVariant) {
  switch (styleVariant) {
    case ButtonStyleVariant.Floating:
      return css`
        ${({ foundation }) => foundation?.elevation?.ev3()};
        /* NOTE: height 기반의 100% border-radius 를 사용하기 위해, foundation rounding 을 무시한 hack */
        border-radius: 1000px;
      `
    case ButtonStyleVariant.Tertiary:
    case ButtonStyleVariant.Secondary:
    case ButtonStyleVariant.Primary:
    default:
      return css`
        ${({ foundation }) => foundation?.rounding?.round8};
      `
  }
}

function colorVariantConverter(colorVariant?: ButtonColorVariant, styleVariant?: ButtonStyleVariant) {
  const convertedStyleVariant = styleVariantConverter(styleVariant)

  const convertedColorVariant = (() => {
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
    convertedStyleVariant,
    convertedColorVariant,
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

  ${({ foundation }) => foundation?.transition?.getTransitionsCSS(['background-color', 'color'])};

  ${({ size, text }) => sizeConverter(size, text)};
  ${({ styleVariant, colorVariant }) => colorVariantConverter(colorVariant, styleVariant)};
`
