/* External dependencies */
import { isEmpty } from 'lodash-es'

/* Internal dependencies */
import { styled, css, SemanticNames } from 'Foundation'
import DisabledOpacity from 'Constants/DisabledOpacity'
import ButtonProps, { ButtonSize, ButtonStyleVariant, ButtonColorVariant } from './Button.types'

const BUTTON_SIZE_VALUE = {
  [ButtonSize.XS]: 20,
  [ButtonSize.S]: 24,
  [ButtonSize.M]: 36,
  [ButtonSize.L]: 44,
  [ButtonSize.XL]: 54,
}

interface GetSizeCSSFromButtonSizeArgs extends Pick<
ButtonProps,
'size'
> {}

function getSizeCSSFromButtonSize({
  size = ButtonSize.M,
}: GetSizeCSSFromButtonSizeArgs) {
  return css`
    min-width: ${BUTTON_SIZE_VALUE[size]}px;
    height: ${BUTTON_SIZE_VALUE[size]}px;
  `
}

export const TEXT_MARGIN_VALUE: Record<ButtonSize, number> = {
  [ButtonSize.XS]: 3,
  [ButtonSize.S]: 3,
  [ButtonSize.M]: 4,
  [ButtonSize.L]: 4,
  [ButtonSize.XL]: 4,
}

type ButtonPaddingVariantKey = 'textSide' | 'contentSide' | 'floating'

function getButtonPaddingVariantKey(styleVariant: ButtonStyleVariant, hasContent: boolean): ButtonPaddingVariantKey {
  if (styleVariant === ButtonStyleVariant.Floating) {
    return 'floating'
  }
  if (hasContent) {
    return 'contentSide'
  }
  return 'textSide'
}

const BUTTON_HORIZONTAL_PADDING_VALUE: Record<ButtonSize, Record<ButtonPaddingVariantKey, number>> = {
  [ButtonSize.XS]: {
    textSide: 4 - TEXT_MARGIN_VALUE[ButtonSize.XS],
    contentSide: 2,
    floating: (BUTTON_SIZE_VALUE[ButtonSize.XS] / 2) - TEXT_MARGIN_VALUE[ButtonSize.XS],
  },
  [ButtonSize.S]: {
    textSide: 7 - TEXT_MARGIN_VALUE[ButtonSize.S],
    contentSide: 4,
    floating: (BUTTON_SIZE_VALUE[ButtonSize.S] / 2) - TEXT_MARGIN_VALUE[ButtonSize.S],
  },
  [ButtonSize.M]: {
    textSide: 14 - TEXT_MARGIN_VALUE[ButtonSize.M],
    contentSide: 10,
    floating: (BUTTON_SIZE_VALUE[ButtonSize.M] / 2) - TEXT_MARGIN_VALUE[ButtonSize.M],
  },
  [ButtonSize.L]: {
    textSide: 14 - TEXT_MARGIN_VALUE[ButtonSize.L],
    contentSide: 10,
    floating: (BUTTON_SIZE_VALUE[ButtonSize.L] / 2) - TEXT_MARGIN_VALUE[ButtonSize.L],
  },
  [ButtonSize.XL]: {
    textSide: 18 - TEXT_MARGIN_VALUE[ButtonSize.XL],
    contentSide: 14,
    floating: (BUTTON_SIZE_VALUE[ButtonSize.XL] / 2) - TEXT_MARGIN_VALUE[ButtonSize.XL],
  },
}

interface GetPaddingCSSFromSizeAndContentsArgs extends Pick<
ButtonWrapperProps,
'styleVariant' | 'text' | 'size' | 'hasLeftContent' | 'hasRightContent'
> {}

function getPaddingCSSFromSizeAndContents({
  styleVariant = ButtonStyleVariant.Primary,
  text,
  size = ButtonSize.M,
  hasLeftContent,
  hasRightContent,
}: GetPaddingCSSFromSizeAndContentsArgs) {
  const hasOnlyContent = isEmpty(text)

  if (hasOnlyContent) {
    return css`
      padding: 0;
    `
  }

  const paddingRightValue = BUTTON_HORIZONTAL_PADDING_VALUE[size][getButtonPaddingVariantKey(styleVariant, hasRightContent)]
  const paddingLeftValue = BUTTON_HORIZONTAL_PADDING_VALUE[size][getButtonPaddingVariantKey(styleVariant, hasLeftContent)]
  return css`
    padding:
      0
      ${paddingRightValue}px
      0
      ${paddingLeftValue}px;
  `
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
    activeBackgroundColor: 'bg-black-lighter',
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
    activeBackgroundColor: 'bg-black-lighter',
  },

  [ButtonStyleVariant.Floating]: {
    color: 'txt-black-darkest',
    backgroundColor: 'bg-white-high',
  },
}

function getColorCSS(
  semanticNames: Record<ButtonStyleVariant, ButtonSemanticNames>,
  styleVariant: NonNullable<ButtonProps['styleVariant']>,
  disabled?: ButtonProps['disabled'],
  active?: ButtonProps['active'],
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

function getEffectCSSFromVariant(styleVariant?: ButtonProps['styleVariant'], size?: ButtonProps['size']) {
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

interface GetCSSFromVariantArgs extends Pick<ButtonProps, 'colorVariant' | 'styleVariant' | 'size' | 'disabled' | 'active'> {}

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

interface ButtonWrapperProps extends ButtonProps {
  hasLeftContent: boolean
  hasRightContent: boolean
}

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  position: relative;
  box-sizing: border-box;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  border: none;
  outline: none;
  opacity: ${({ disabled }) => (disabled ? DisabledOpacity : 1)};

  ${({ foundation }) => foundation?.transition?.getTransitionsCSS(['background-color', 'box-shadow'])};

  ${getSizeCSSFromButtonSize}
  ${getPaddingCSSFromSizeAndContents}
  ${getCSSFromVariant}

  ${({ interpolation }) => interpolation}
`
