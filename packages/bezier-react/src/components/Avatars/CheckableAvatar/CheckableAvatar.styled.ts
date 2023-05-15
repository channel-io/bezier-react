import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

import {
  absoluteCenter,
  css,
  styled,
} from '~/src/foundation'

import { ZIndex } from '~/src/constants/ZIndex'
import { touchableHover } from '~/src/utils/styleUtils'

import {
  AvatarSize,
  Avatar as BaseAvatar,
} from '~/src/components/Avatars/Avatar'
import {
  CheckIcon as CheckIconSource,
  Icon,
} from '~/src/components/Icon'

export const Avatar = styled(BaseAvatar)``

export const CheckIcon = styled(Icon).attrs({
  source: CheckIconSource,
  color: 'bgtxt-absolute-white-normal',
})`
  position: absolute;
  z-index: ${ZIndex.Float};
  visibility: hidden;

  ${absoluteCenter()}

  &.size-${AvatarSize.Size20} {
    width: 14px;
    height: 14px;
  }

  &.size-${AvatarSize.Size24} {
    width: 16px;
    height: 16px;
  }

  &.size-${AvatarSize.Size30} {
    width: 20px;
    height: 20px;
  }

  &.size-${AvatarSize.Size36} {
    width: 22px;
    height: 22px;
  }

  &.size-${AvatarSize.Size42} {
    width: 24px;
    height: 24px;
  }

  &.size-${AvatarSize.Size48} {
    width: 28px;
    height: 28px;
  }

  &.size-${AvatarSize.Size72} {
    width: 42px;
    height: 42px;
  }

  &.size-${AvatarSize.Size90} {
    width: 52px;
    height: 52px;
  }

  &.size-${AvatarSize.Size120} {
    width: 68px;
    height: 68px;
  }
`

const focusStyles = {
  common: css`
    ${CheckIcon} {
      visibility: visible;
    }

    /* stylelint-disable declaration-block-semicolon-newline-after, rule-empty-line-before */
    ${Avatar} > div {
      --bezier-alpha-smooth-corners-box-background-image: none !important;
    }
  `,
  unchecked: css`
    ${Avatar} > div {
      --bezier-alpha-smooth-corners-box-background-color: var(--bg-grey-dark) !important;
    }
  `,
  checked: css`
    ${Avatar} > div {
      --bezier-alpha-smooth-corners-box-background-color: var(--bgtxt-green-dark) !important;
    }
    /* stylelint-enable declaration-block-semicolon-newline-after, rule-empty-line-before */
  `,
}

/**
 * NOTE: Using the `!important` keyword to override a local CSS variable of `AlphaSmoothCorners`.
 * Improvements are needed to the styling when using the `AlphaSmoothCorners` component.
 */
export const CheckboxPrimitiveRoot = styled(CheckboxPrimitive.Root)`
  all: unset;
  position: relative;
  z-index: ${ZIndex.Base};
  cursor: pointer;
  outline: none;

  &[data-disabled] {
    cursor: not-allowed;
  }

  &:not([data-state='unchecked']) {
    ${CheckIcon} {
      visibility: visible;
    }

    /* stylelint-disable declaration-block-semicolon-newline-after, rule-empty-line-before */
    ${Avatar} > div {
      --bezier-alpha-smooth-corners-box-background-image: none !important;
      --bezier-alpha-smooth-corners-box-background-color: var(--bgtxt-green-normal) !important;
    }
    /* stylelint-enable declaration-block-semicolon-newline-after, rule-empty-line-before */
  }

  &:not([data-disabled]) {
    ${touchableHover(focusStyles.common)}

    &:focus-visible {
      ${focusStyles.common}
    }

    &[data-state='unchecked'] {
      ${touchableHover(focusStyles.unchecked)}

      &:focus-visible {
        ${focusStyles.unchecked}
      }
    }

    &:not([data-state='unchecked']) {
      ${touchableHover(focusStyles.checked)}

      &:focus-visible {
        ${focusStyles.checked}
      }
    }
  }
`
