/* External dependencies */
import styled from 'styled-components'

/* Internal dependencies */
import { absoluteCenter } from '../../styling/Mixins'
import Palette from '../../styling/Palette'
import { StyledWrapperProps, StyledCheckerProps, StyledContentProps } from './Checkbox.types'
import CheckType from './CheckType'

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

const checkerBase = (props: StyledCheckerProps) => `
  &::after {
    ${absoluteCenter`translateY(-13%) rotate(42deg)`}
    width: 4px;
    height: 9px;
    border-right: solid ${CHECKER_ICON_THICKNESS}px transparent;
    border-bottom: solid ${CHECKER_ICON_THICKNESS}px transparent;
    border-color: ${Palette.white};
    content: '';
    transition: border-color ${TRANSITION_DURATION} ${TRANSITION_FUNCTION};
  }

  ${(props.checkStatus === CheckType.True || props.checkStatus === CheckType.Partial) ? `
    background-color: ${Palette.green400};
    border-color: transparent;

    ${!props.disabled ? `
      &:hover {
        background-color: ${Palette.green500};
      }
    ` : ''}
  ` : ''}
`

const partialChecked = (props: StyledCheckerProps) => ((props.checkStatus === CheckType.Partial) ? `
  &::after {
    ${absoluteCenter`translateY(-36%) rotate(0)`}
    width: 10px;
    border-right: none;
    border-bottom: solid 2px ${Palette.white};
  }
` : '')

const disabled = (props: StyledCheckerProps) => ((props.disabled) ? `
  background-color: ${props.theme?.colors?.disabled3};

  ${(props.checkStatus === CheckType.False) ? `
    &::after {
      border-color: transparent;
    }
  ` : `
    &::after {
      border-color: ${Palette.grey500};
    }
  `}
` : '')

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

  ${props => (!props.disabled ? `
    &:hover {
      &::after {
        border-color: ${Palette.grey200};
      }
    }
  ` : '')}

  ${checkerBase}

  ${partialChecked}

  ${disabled}
`

export const Content = styled.div<StyledContentProps>`
  box-sizing: border-box;
  padding: ${CHECKER_BORDER_THICKNESS}px 0;
  margin-left: 2px;
  user-select: none;
`
