/* External dependencies */
import { isEmpty } from 'lodash-es'

/* Internal dependencies */
import {
  styled,
  css,
} from '../../foundation'
import DisabledOpacity from '../../constants/DisabledOpacity'
import ButtonProps, {
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

function monochromeVariantConverter(styleVariant?: ButtonStyleVariant, disabled?: boolean, active?: boolean) {
  const colorCSS = (() => {
    switch (styleVariant) {
      case ButtonStyleVariant.Secondary:
        return css`
          color: ${({ foundation }) => foundation?.theme?.['txt-black-darkest']};
          background-color: ${({ foundation }) => foundation?.theme?.['bg-black-lighter']};

          ${!disabled && css`
            &:hover,
            &:focus {
              background-color: ${({ foundation }) => foundation?.theme?.['bg-black-light']};
            }
          `}
        `
      case ButtonStyleVariant.Tertiary:
        return css`
          color: ${({ foundation }) => foundation?.theme?.['txt-black-darker']};
          background-color: transparent;

          ${!disabled && css`
            &:hover,
            &:focus {
              background-color: ${({ foundation }) => foundation?.theme?.['bg-black-lightest']};
            }
          `}
        `
      case ButtonStyleVariant.Floating:
        return css`
          color: ${({ foundation }) => foundation?.theme?.['txt-black-darkest']};
          ${({ foundation }) => foundation?.elevation?.ev3()};

          ${!disabled && css`
            &:hover,
            &:focus {
              ${({ foundation }) => foundation?.elevation?.ev4()};
            }
          `}
        `
      case ButtonStyleVariant.Primary:
      default:
        return css`
          color: ${({ foundation }) => foundation?.theme?.['bgtxt-absolute-white-dark']};
          background-color: ${({ foundation }) => foundation?.theme?.['bgtxt-absolute-black-lightest']};

          ${!disabled && css`
            &:hover,
            &:focus {
              background-color: ${({ foundation }) => foundation?.theme?.['bgtxt-absolute-black-lighter']};
            }
          `}
        `
    }
  })()

  const activeCSS = (() => {
    if (disabled) { return css`` }

    switch (styleVariant) {
      case ButtonStyleVariant.Secondary:
        return css`
          background-color: ${({ foundation }) => foundation?.theme?.['bg-black-light']};
        `
      case ButtonStyleVariant.Tertiary:
        return css`
          background-color: ${({ foundation }) => foundation?.theme?.['bg-black-lightest']};
        `
      case ButtonStyleVariant.Floating:
        return css`
          ${({ foundation }) => foundation?.elevation?.ev4()};
        `
      case ButtonStyleVariant.Primary:
      default:
        return css`
          background-color: ${({ foundation }) => foundation?.theme?.['bgtxt-absolute-black-lighter']};
        `
    }
  })()

  return css`
    ${colorCSS};
    ${active && activeCSS};

    &:hover,
    &:focus {
      ${activeCSS};
    }
  `
}

function getEffectCSSFromVariant(styleVariant?: ButtonStyleVariant, size?: ButtonSize) {
  switch (styleVariant) {
    case ButtonStyleVariant.Floating:
      return css`
        ${({ foundation }) => foundation?.elevation?.ev3()};
        /* NOTE: height 기반의 100% border-radius 를 사용하기 위해, foundation rounding 을 무시한 hack */
        overflow: hidden;
        border-radius: 1000px;

        &:hover,
        &:focus {
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
      return monochromeVariantConverter(styleVariant, disabled, active)
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

  const activeCSS = (() => {
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
    ${active && activeCSS};

    &:hover,
    &:focus {
      ${activeCSS};
    }
  `
}

interface ButtonContentsProps {
  visible?: boolean
}

export const ButtonContents = styled.div<ButtonContentsProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
`

export const ButtonLoader = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ButtonWrapper = styled.button<ButtonProps>`
  position: relative;
  box-sizing: border-box;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  border: none;
  outline: none;
  opacity: ${({ disabled }) => (disabled ? DisabledOpacity : 1)};

  ${({ foundation }) => foundation?.transition?.getTransitionsCSS(['background-color', 'box-shadow'])};

  ${getSizeCSSFromButtonSize};
  ${getCSSFromVariant};

  ${({ interpolation }) => interpolation};
`
