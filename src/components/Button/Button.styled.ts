/* Internal dependencies */
import { styled, css } from '../../foundation'
import {
  ButtonProps,
  // ButtonSize,
  ButtonStyleVariant,
  ButtonColorVariant,
} from './Button.types'

// function sizeVariantConverter(size?: ButtonSize) {
//   switch (size) {
//     case ButtonSize.XXS:
//     case ButtonSize.XS:
//     case ButtonSize.L:
//     case ButtonSize.XL:
//     case ButtonSize.M:
//     default:
//       return css``
//   }
// }

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
        ${({ foundation }) => foundation?.rounding?.round16}; /* FIXME: (@leo) 동적 계산 필요 (height 의 100%) */
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
            background-color: ${({ foundation }) => foundation?.theme?.[`bgtxt-${colorVariant}-light`]};
          }
        `
      case ButtonStyleVariant.Tertiary:
        return css`
          color: ${({ foundation }) => foundation?.theme?.[`bgtxt-${colorVariant}-normal`]};
          background-color: transparent;

          &:hover {
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
  box-sizing: content-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  padding: 0 ${({ text }) => (!text ? 7 : 9)}px;
  cursor: pointer;
  border: none;
  border-radius: 6px;
  outline: none;

  ${({ foundation }) => foundation?.transition?.getTransitionsCSS(['background-color', 'color'])};

  ${({ styleVariant, colorVariant }) => colorVariantConverter(colorVariant, styleVariant)};
`
