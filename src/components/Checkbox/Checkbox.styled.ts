/* External dependencies */
import styled from 'styled-components'

/* Internal dependencies */
import { absoluteCenter } from '../../styling/Mixins'
import Palette from '../../styling/Palette'
import { StyledWrapperProps, StyledCheckerProps, StyledContentProps } from './Checkbox.types'

const CHECKER_BOX_SIZE = 18
const CHECKER_ICON_THICKNESS = 2
const CHECKER_BORDER_THICKNESS = 2

const TRANSITION_DURATION = '.15s'
const TRANSITION_FUNCTION = 'ease-in-out'

export const Wrapper = styled.div<StyledWrapperProps>`
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  ${props => (props.disabled
    ? 'cursor: not-allowed;'
    : ''
  )}
`

export const Checker = styled.div<StyledCheckerProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box !important;
  width: ${CHECKER_BOX_SIZE}px;
  height: ${CHECKER_BOX_SIZE}px;
  min-width: ${CHECKER_BOX_SIZE}px;
  min-height: ${CHECKER_BOX_SIZE}px;
  font-size: 10px;
  color: transparent;
  background-color: ${Palette.white};
  border: ${CHECKER_BORDER_THICKNESS}px solid ${props => props.theme?.colors?.border3};
  border-radius: 4px;
  transition:
    ${`color ${TRANSITION_DURATION} ${TRANSITION_FUNCTION}`},
    ${`background ${TRANSITION_DURATION} ${TRANSITION_FUNCTION}`};

  &::after {
    ${absoluteCenter`translateY(-13%) rotate(42deg)`}
    width: 4px;
    height: 9px;
    border-right: solid ${CHECKER_ICON_THICKNESS}px transparent;
    border-bottom: solid ${CHECKER_ICON_THICKNESS}px transparent;
    content: '';
    transition: ${`border-color ${TRANSITION_DURATION} ${TRANSITION_FUNCTION}`};
  }

  &:not(.disabled) {
    &:hover {
      &::after {
        border-color: ${Palette.grey200};
      }
    }
  }

  &.partialChecked {
    &::after {
      ${absoluteCenter`translateY(-36%) rotate(0)`}
      width: 10px;
      border-right: none;
      border-bottom: solid 2px ${Palette.white};
    }
  }

  &.checked,
  &.partialChecked {
    background-color: ${Palette.green400};
    border-color: transparent;

    &::after {
      border-color: ${Palette.white};
    }

    &:not(.disabled) {
      &:hover {
        background-color: ${Palette.green500};
      }
    }
  }

  &.disabled {
    background-color: ${props => props.theme?.colors?.disabled3};

    &.checked,
    &.partialChecked {
      &::after {
        border-color: ${Palette.grey500};
      }
    }
  }
`

export const Content = styled.div<StyledContentProps>`
  box-sizing: border-box;
  padding: ${CHECKER_BORDER_THICKNESS}px 0;
  margin-left: 2px;
  user-select: none;
`
