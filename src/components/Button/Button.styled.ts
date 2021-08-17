/* External dependencies */
import { isEmpty } from 'lodash-es'

/* Internal dependencies */
import {
  styled,
  css,
  SemanticNames,
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

interface ButtonSemanticNames {
  color?: SemanticNames
  activeColor?: SemanticNames
  backgroundColor?: SemanticNames | 'transparent'
  activeBackgroundColor?: SemanticNames | 'transparent'
}

function defaultSemanticNames(colorVariant: ButtonColorVariant): Record<ButtonStyleVariant, ButtonSemanticNames> {
  if (colorVariant === ButtonColorVariant.Monochrome ||
      colorVariant === ButtonColorVariant.MonochromeLight ||
      colorVariant === ButtonColorVariant.MonochromeDark) {
    throw new Error('unreached code')
  }

  return {
    [ButtonStyleVariant.Primary]: {
      color: 'bgtxt-absolute-white-dark',
      backgroundColor: `bgtxt-${colorVariant}-normal` as const,
      activeBackgroundColor: `bgtxt-${colorVariant}-dark` as const,
    },

    [ButtonStyleVariant.Secondary]: {
      color: `bgtxt-${colorVariant}-normal` as const,
      backgroundColor: `bgtxt-${colorVariant}-lightest` as const,
      activeBackgroundColor: `bgtxt-${colorVariant}-lighter` as const,
    },

    [ButtonStyleVariant.Tertiary]: {
      color: `bgtxt-${colorVariant}-normal` as const,
      backgroundColor: 'transparent',
      activeColor: `bgtxt-${colorVariant}-dark` as const,
      activeBackgroundColor: `bgtxt-${colorVariant}-lightest` as const,
    },

    [ButtonStyleVariant.Floating]: {
      color: 'bgtxt-absolute-white-dark',
      backgroundColor: `bgtxt-${colorVariant}-normal` as const,
      activeBackgroundColor: `bgtxt-${colorVariant}-dark` as const,
    },
  }
}

const MONOCHROME_SEMANTIC_NAMES: Record<ButtonStyleVariant, ButtonSemanticNames> = {
  [ButtonStyleVariant.Primary]: {
    color: 'bgtxt-absolute-white-dark',
    backgroundColor: 'bgtxt-absolute-black-lightest',
    activeBackgroundColor: 'bgtxt-absolute-black-lighter',
  },

  [ButtonStyleVariant.Secondary]: {
    color: 'txt-black-darkest',
    backgroundColor: 'bg-black-lighter',
    activeBackgroundColor: 'bg-black-light',
  },

  [ButtonStyleVariant.Tertiary]: {
    color: 'txt-black-darkest',
    backgroundColor: 'transparent',
    activeBackgroundColor: 'bg-black-lightest',
  },

  [ButtonStyleVariant.Floating]: {
    color: 'txt-black-darkest',
  },
}

const MONOCHROME_LIGHT_SEMANTIC_NAMES: Record<ButtonStyleVariant, ButtonSemanticNames> = {
  [ButtonStyleVariant.Primary]: {
    color: 'bgtxt-absolute-white-dark',
    backgroundColor: 'bg-black-darkest',
  },

  [ButtonStyleVariant.Secondary]: {
    color: 'txt-black-darker',
    backgroundColor: 'bg-black-lighter',
    activeBackgroundColor: 'bg-black-light',
  },

  [ButtonStyleVariant.Tertiary]: {
    color: 'txt-black-darker',
    backgroundColor: 'transparent',
    activeBackgroundColor: 'bg-black-lightest',
  },

  [ButtonStyleVariant.Floating]: {
    color: 'txt-black-darker',
    backgroundColor: 'bg-white-high',
  },
}

const MONOCHROME_DARK_SEMANTIC_NAMES: Record<ButtonStyleVariant, ButtonSemanticNames> = {
  [ButtonStyleVariant.Primary]: {
    color: 'bgtxt-absolute-white-dark',
    backgroundColor: 'bg-grey-darkest',
  },

  [ButtonStyleVariant.Secondary]: {
    color: 'txt-black-darkest',
    backgroundColor: 'bg-black-lighter',
    activeBackgroundColor: 'bg-black-light',
  },

  [ButtonStyleVariant.Tertiary]: {
    color: 'txt-black-darkest',
    backgroundColor: 'transparent',
    activeBackgroundColor: 'bg-black-lightest',
  },

  [ButtonStyleVariant.Floating]: {
    color: 'txt-black-darkest',
    backgroundColor: 'bg-white-high',
  },
}

function getColorCSS(
  semanticNames: Record<ButtonStyleVariant, ButtonSemanticNames>,
  styleVariant: ButtonStyleVariant,
  disabled?: boolean,
  active?: boolean,
) {
  const colorCSS = (color?: SemanticNames) => {
    if (!color) { return css`` }

    return css`
      color: ${({ foundation }) => foundation?.theme?.[color]};
    `
  }

  const backgroundColorCSS = (backgroundColor?: SemanticNames | 'transparent') => {
    if (!backgroundColor) { return css`` }

    if (backgroundColor === 'transparent') {
      return css`
        background-color: transparent;
      `
    }

    return css`
      background-color: ${({ foundation }) => foundation?.theme?.[backgroundColor]};
    `
  }

  const idleColorCSS = css`
    ${colorCSS(semanticNames[styleVariant].color)}
    ${backgroundColorCSS(semanticNames[styleVariant].backgroundColor)}
  `

  const activeColorCSS = disabled ? css`` : css`
    ${colorCSS(semanticNames[styleVariant].activeColor)}
    ${backgroundColorCSS(semanticNames[styleVariant].activeBackgroundColor)}
  `

  return css`
    ${idleColorCSS};
    ${active && activeColorCSS};

    &:hover {
      ${activeColorCSS};
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
  colorVariant = ButtonColorVariant.Blue,
  styleVariant = ButtonStyleVariant.Primary,
  size,
  disabled,
  active,
}: GetCSSFromVariantArgs) {
  const effectCSS = getEffectCSSFromVariant(styleVariant, size)

  const semanticNames = (() => {
    switch (colorVariant) {
      case ButtonColorVariant.Monochrome:
        return MONOCHROME_SEMANTIC_NAMES
      case ButtonColorVariant.MonochromeLight:
        return MONOCHROME_LIGHT_SEMANTIC_NAMES
      case ButtonColorVariant.MonochromeDark:
        return MONOCHROME_DARK_SEMANTIC_NAMES
      default:
        return defaultSemanticNames(colorVariant)
    }
  })()

  const colorCSS = getColorCSS(semanticNames, styleVariant, disabled, active)

  return css`
    ${effectCSS}
    ${colorCSS}
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

  ${getSizeCSSFromButtonSize}
  ${getCSSFromVariant}

  ${({ interpolation }) => interpolation}
`
