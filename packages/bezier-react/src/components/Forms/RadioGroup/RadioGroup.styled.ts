/* External dependencies */
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

/* Internal dependencies */
import {
  styled,
  css,
  Typography,
} from '~/src/foundation'
import DisabledOpacity from '~/src/constants/DisabledOpacity'
import { touchableHover } from '~/src/utils/styleUtils'
import { Text } from '~/src/components/Text'
import { FormFieldSize } from '~/src/components/Forms'
import { focusedInputWrapperStyle } from '~/src/components/Forms/Inputs/mixins'
import { type RadioProps } from './RadioGroup.types'

const OUTER_INDICATOR_SIZE = 18
const OUTER_INDICATOR_MARGIN = 1
const INNER_INDICATOR_SIZE = 8

export const RadioGroupPrimitiveItem = styled(RadioGroupPrimitive.Item)<RadioProps<string>>`
  all: unset;
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: ${FormFieldSize.M}px;
  cursor: pointer;

  /* Outer Indicator */
  &::before {
    position: relative;
    box-sizing: border-box;
    width: ${OUTER_INDICATOR_SIZE}px;
    height: ${OUTER_INDICATOR_SIZE}px;
    margin: ${OUTER_INDICATOR_MARGIN}px;
    content: '';
    background-color: var(--bg-white-normal);
    border-radius: 50%;
    box-shadow: inset 0 0 0 2px var(--bdr-black-dark);
  }

  /* Inner Indicator */
  &::after {
    position: absolute;
    top: 50%;
    left: ${(OUTER_INDICATOR_SIZE / 2) + OUTER_INDICATOR_MARGIN}px;
    width: ${INNER_INDICATOR_SIZE}px;
    height: ${INNER_INDICATOR_SIZE}px;
    content: '';
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }

  &[data-disabled] {
    cursor: not-allowed;
    opacity: ${DisabledOpacity};

    &::before {
      background-color: var(--bg-black-dark);
      box-shadow: none;
    }
  }

  &[data-state='checked'] {
    &::before {
      background-color: var(--bgtxt-green-normal);
      box-shadow: none;
    }

    &::after {
      background-color: var(--bgtxt-absolute-white-dark);
    }
  }

  ${touchableHover(css`
    &:not([data-disabled])[data-state='checked']::before {
      background-color: var(--bgtxt-green-dark);
    }

    &:not([data-disabled]):not([data-state='checked'])::after {
      background-color: var(--bg-black-dark);
    }
  `)}

  &:focus-visible {
    &::before {
      ${focusedInputWrapperStyle}
    }
  }

  ${({ interpolation }) => interpolation}
`

export const Label = styled(Text).attrs({
  forwardedAs: 'label',
  typo: Typography.Size14,
  color: 'txt-black-darkest',
})`
  padding-left: 12px;
  pointer-events: none;
`
