import {
  css,
  type SemanticNames,
  styled,
} from '~/src/foundation'

import DisabledOpacity from '~/src/constants/DisabledOpacity'
import { gap } from '~/src/utils/styleUtils'
import { isEmpty } from '~/src/utils/typeUtils'

import { Text } from '~/src/components/Text'

import type ButtonProps from './Button.types'
import {
  ButtonColorVariant,
  ButtonSize,
  ButtonStyleVariant,
} from './Button.types'

// NOTE: ButtonSize 에 따른 버튼의 min-width, height
const BUTTON_SIZE_VALUE = {
  [ButtonSize.XS]: 20,
  [ButtonSize.S]: 24,
  [ButtonSize.M]: 36,
  [ButtonSize.L]: 44,
  [ButtonSize.XL]: 54,
}

interface GetSizeCSSFromButtonSizeArgs {
  size: ButtonSize
}

function getSizeCSSFromButtonSize({
  size,
}: GetSizeCSSFromButtonSizeArgs) {
  return css`
    min-width: ${BUTTON_SIZE_VALUE[size]}px;
    height: ${BUTTON_SIZE_VALUE[size]}px;
  `
}

// NOTE: ButtonSize에 따른 버튼 내 텍스트의 margin
export const TEXT_PADDING_VALUE: Record<ButtonSize, number> = {
  [ButtonSize.XS]: 3,
  [ButtonSize.S]: 3,
  [ButtonSize.M]: 4,
  [ButtonSize.L]: 4,
  [ButtonSize.XL]: 4,
}

const BUTTON_CONTENT_GAP_VALUE: Record<ButtonSize, number> = {
  [ButtonSize.XS]: 0,
  [ButtonSize.S]: 0,
  [ButtonSize.M]: 2,
  [ButtonSize.L]: 2,
  [ButtonSize.XL]: 2,
}

// NOTE: 버튼의 padding 값을 결정하는 경우 4가지 중 위의 3가지 key
// 1. 기본
// 2. styleVariant 가 Floating 인 경우 - floating
// 3. 버튼에 텍스트 없이 컨텐트만 있을 경우 => buttonSize 에 관계없이 padding 이 0 이라 이 경우만 따로 분기 처리
type ButtonPaddingVariantKey = 'default' | 'floating'

// NOTE: floating 은 padding 이 버튼의 size value 의 절반에서 Text padding 값 만큼 빼줘야 스펙과 일치
export const BUTTON_HORIZONTAL_PADDING_VALUE: Record<ButtonSize, Record<ButtonPaddingVariantKey, number>> = {
  [ButtonSize.XS]: {
    default: 2,
    floating: (BUTTON_SIZE_VALUE[ButtonSize.XS] / 2) - TEXT_PADDING_VALUE[ButtonSize.XS],
  },
  [ButtonSize.S]: {
    default: 4,
    floating: (BUTTON_SIZE_VALUE[ButtonSize.S] / 2) - TEXT_PADDING_VALUE[ButtonSize.S],
  },
  [ButtonSize.M]: {
    default: 10,
    floating: (BUTTON_SIZE_VALUE[ButtonSize.M] / 2) - TEXT_PADDING_VALUE[ButtonSize.M],
  },
  [ButtonSize.L]: {
    default: 12,
    floating: (BUTTON_SIZE_VALUE[ButtonSize.L] / 2) - TEXT_PADDING_VALUE[ButtonSize.L],
  },
  [ButtonSize.XL]: {
    default: 20,
    floating: (BUTTON_SIZE_VALUE[ButtonSize.XL] / 2) - TEXT_PADDING_VALUE[ButtonSize.XL],
  },
}

interface GetPaddingCSSFromSizeAndContentsArgs extends Pick<ButtonProps, 'text'>{
  styleVariant: ButtonStyleVariant
  size: ButtonSize
}

function getPaddingCSSFromSizeAndContents({
  styleVariant,
  text,
  size,
}: GetPaddingCSSFromSizeAndContentsArgs) {
  const hasOnlyContent = isEmpty(text)

  // NOTE: text 가 없는 경우 버튼은 정사각형이기에 padding 이 0
  if (hasOnlyContent) {
    return css`
      padding: 0;
    `
  }

  const paddingVariant = [ButtonStyleVariant.Floating, ButtonStyleVariant.FloatingAlt].includes(styleVariant)
    ? 'floating'
    : 'default'

  const paddingValue = BUTTON_HORIZONTAL_PADDING_VALUE[size][paddingVariant]

  return css`
    padding:
      0
      ${paddingValue}px
      0
      ${paddingValue}px;
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

    [ButtonStyleVariant.FloatingAlt]: {
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

  [ButtonStyleVariant.FloatingAlt]: {
    color: 'txt-black-darkest',
  },
}

const MONOCHROME_LIGHT_SEMANTIC_NAMES: Record<ButtonStyleVariant, ButtonSemanticNames> = {
  [ButtonStyleVariant.Primary]: {
    color: 'bgtxt-absolute-white-dark',
    backgroundColor: 'bg-black-darker',
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

  [ButtonStyleVariant.FloatingAlt]: {
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

  [ButtonStyleVariant.FloatingAlt]: {
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

function getEffectCSSFromVariant(styleVariant: ButtonProps['styleVariant'], size: ButtonProps['size']) {
  switch (styleVariant) {
    case ButtonStyleVariant.Floating:
      return css`
        ${({ foundation }) => foundation?.elevation?.ev2()};
        /* NOTE: height 기반의 100% border-radius 를 사용하기 위해, foundation rounding 을 무시한 hack */
        overflow: hidden;
        border-radius: 1000px;

        &:hover {
          ${({ foundation }) => foundation?.elevation?.ev3()};
        }
      `
    case ButtonStyleVariant.FloatingAlt:
      return css`
        ${({ foundation }) => foundation?.elevation?.ev2()};
        ${({ foundation }) => foundation?.rounding?.round8};

        &:hover {
          ${({ foundation }) => foundation?.elevation?.ev3()};
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
        case ButtonSize.L:
          return css`
            ${({ foundation }) => foundation?.rounding?.round12};
          `
        case ButtonSize.XL:
          return css`
            ${({ foundation }) => foundation?.rounding?.round16};
          `
        case ButtonSize.S:
        case ButtonSize.M:
        default:
          return css`
            ${({ foundation }) => foundation?.rounding?.round8};
          `
      }
    }
  }
}

interface GetCSSFromVariantArgs extends Pick<ButtonProps, 'disabled' | 'active'> {
  size: ButtonSize
  styleVariant: ButtonStyleVariant
  colorVariant: ButtonColorVariant
}

function getCSSFromVariant({
  colorVariant,
  styleVariant,
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
  buttonSize: ButtonSize
}

export const ButtonContents = styled.div<ButtonContentsProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  ${({ buttonSize }) => gap(BUTTON_CONTENT_GAP_VALUE[buttonSize])}
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

interface ButtonWrapperProps extends Pick<
ButtonProps,
'as' | 'interpolation' | 'disabled' | 'active' | 'text'
>{
  size: ButtonSize
  styleVariant: ButtonStyleVariant
  colorVariant: ButtonColorVariant
}

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  position: relative;
  box-sizing: border-box;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  border: none;
  outline: none;
  opacity: ${({ disabled }) => (disabled ? DisabledOpacity : 1)};

  &:focus:not(:disabled) {
    box-shadow: 0 0 0 3px var(--bgtxt-cobalt-light);
  }

  &:focus:not(:focus-visible) {
    box-shadow: none;
  }

  ${({ foundation }) => foundation?.transition?.getTransitionsCSS(['background-color', 'box-shadow'])};

  ${getSizeCSSFromButtonSize}
  ${getPaddingCSSFromSizeAndContents}
  ${getCSSFromVariant}

  ${({ interpolation }) => interpolation}
`

interface ContentTextProps {
  buttonSize: ButtonSize
}

export const ContentText = styled(Text)<ContentTextProps>`
  padding: 0 ${({ buttonSize }) => TEXT_PADDING_VALUE[buttonSize]}px;
`
