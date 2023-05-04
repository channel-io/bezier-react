import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

import {
  absoluteCenter,
  styled,
} from '~/src/foundation'

import { ZIndex } from '~/src/constants/ZIndex'

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

    ${Avatar} {
      --bezier-alpha-smooth-corners-box-background-image: none !important;
      --bezier-alpha-smooth-corners-box-background-color: var(--bgtxt-green-normal) !important;
    }
  }

  &:not([data-disabled]) {
    &:hover,
    &:focus-visible {
      ${CheckIcon} {
        visibility: visible;
      }

      ${Avatar} {
        --bezier-alpha-smooth-corners-box-background-image: none !important;
      }
    }

    &[data-state='unchecked'] {
      &:hover,
      &:focus-visible {
        ${Avatar} {
          --bezier-alpha-smooth-corners-box-background-color: var(--bg-grey-dark) !important;
        }
      }
    }

    &:not([data-state='unchecked']) {
      &:hover,
      &:focus-visible {
        ${Avatar} {
          --bezier-alpha-smooth-corners-box-background-color: var(--bgtxt-green-dark) !important;
        }
      }
    }
  }
`
