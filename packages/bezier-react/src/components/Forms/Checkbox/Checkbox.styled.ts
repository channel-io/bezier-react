/* External dependencies */
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

/* Internal dependencies */
import {
  styled,
  css,
  Typography,
} from '~/src/foundation'
import DisabledOpacity from '~/src/constants/DisabledOpacity'
import { touchableHover } from '~/src/utils/styleUtils'
import { Icon } from '~/src/components/Icon'
import {
  focusedInputWrapperStyle,
  erroredInputWrapperStyle,
} from '~/src/components/Forms/Inputs/mixins'
import { type CheckboxProps } from './Checkbox.types'

const CHECKBOX_SIZE = 18
const CHECKBOX_MARGIN = 1

export const CheckIcon = styled(Icon)`
  /* NOTE: Reset Icon's default transition style  */
  transition: none;

  &[data-state='unchecked'] {
    visibility: hidden;
  }
`

const backgroundFocusStyle = css`
  &:not([data-disabled]):not([data-state='unchecked']) {
    background-color: var(--bgtxt-green-dark);
  }
`

const checkIconFocusStyle = css`
  &:not([data-disabled])[data-state='unchecked'] {
    ${CheckIcon} {
      visibility: visible;
    }
  }
`

const focusStyle = css`
  ${backgroundFocusStyle}
  ${checkIconFocusStyle}
`

export const CheckboxPrimitiveRoot = styled(CheckboxPrimitive.Root)<CheckboxProps<any>>`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${CHECKBOX_SIZE}px;
  height: ${CHECKBOX_SIZE}px;
  margin: ${CHECKBOX_MARGIN}px;
  background-color: var(--bg-white-normal);
  border-radius: 7px;
  box-shadow: inset 0 0 0 2px var(--bdr-black-dark);

  &[data-disabled] {
    background-color: var(--bg-black-dark);
    box-shadow: none;
  }

  &[data-invalid] {
    ${erroredInputWrapperStyle}
  }

  &[data-state='checked'],
  &[data-state='indeterminate'] {
    background-color: var(--bgtxt-green-normal);

    &:not([data-invalid]) {
      box-shadow: none;
    }
  }

  ${touchableHover(focusStyle)}

  && {
    &:focus-visible {
      ${checkIconFocusStyle}
      ${focusedInputWrapperStyle}
    }
  }

  ${({ interpolation }) => interpolation}
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  height: var(--bezier-checkbox-height);
  cursor: pointer;

  &[data-disabled] {
    cursor: not-allowed;
    opacity: ${DisabledOpacity};
  }
`

/**
 * NOTE: When using the `Text` component in combination with the `as` prop,
 * radix-ui lib does not bind the mouse-enter(hover) and click handler.
 */
export const Label = styled.label`
  ${Typography.Size14}
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: 12px;
  color: var(--txt-black-darkest);
  cursor: inherit;
`
