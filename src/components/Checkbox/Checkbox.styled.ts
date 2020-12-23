/* Internal dependencies */
import { styled, css, absoluteCenter } from '../../foundation'
import { StyledWrapperProps, StyledCheckerProps, StyledContentProps } from './Checkbox.types'
import CheckType from './CheckType'

const CHECKER_BOX_SIZE = 18
const CHECKER_ICON_THICKNESS = 2
const CHECKER_BORDER_THICKNESS = 2

export const Wrapper = styled.div<StyledWrapperProps>`
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  ${props => (props.disabled
    ? 'cursor: not-allowed;'
    : ''
  )}
`

function isTrueOrPartial(checkStatus: CheckType = CheckType.False) {
  return checkStatus === CheckType.True || checkStatus === CheckType.Partial
}

const checkerBase = css<StyledCheckerProps>`
  &::after {
    ${absoluteCenter`translateY(-13%) rotate(42deg)`}
    width: 4px;
    height: 9px;
    border-right: solid ${CHECKER_ICON_THICKNESS}px transparent;
    border-bottom: solid ${CHECKER_ICON_THICKNESS}px transparent;
    border-color: ${({ foundation }) => foundation?.theme?.['text-hover-blue']};
    content: '';
    transition: ${({ foundation }) => foundation?.transition?.getTransitionCSS('border')};
  }

  background-color:
    ${({ foundation, checkStatus }) =>
    (isTrueOrPartial(checkStatus) ? foundation?.theme?.['text-hover-blue'] : '')};
  border-color: ${({ checkStatus }) => (isTrueOrPartial(checkStatus) ? 'transparent' : '')};

  &:hover {
    background-color:
      ${({ foundation, disabled, checkStatus }) =>
    ((!disabled && isTrueOrPartial(checkStatus)) ? foundation?.theme?.['text-hover-blue'] : '')};
  }
`

const partialChecked = css<StyledCheckerProps>`
  &::after {
    ${absoluteCenter`translateY(-36%) rotate(0)`}
    width: 10px;
    border-right: none;
    border-bottom: solid 2px ${({ foundation }) => foundation?.theme?.['text-hover-blue']};
  }
`

const disabledStyle = css<StyledCheckerProps>`
  background-color: ${({ foundation }) => foundation?.theme?.['text-hover-blue']};

  &::after {
    border-color:
      ${({ foundation, checkStatus }) =>
    (checkStatus === CheckType.False ? foundation?.theme?.['text-hover-blue'] : 'transparent')};
  }
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
  background-color: ${({ foundation }) => foundation?.theme?.['text-hover-blue']};
  border: ${CHECKER_BORDER_THICKNESS}px solid ${({ foundation }) => foundation?.theme?.['text-hover-blue']};
  border-radius: 4px;

  ${({ foundation }) => foundation?.transition?.getTransitionCSS(['background-color'])};

  ${({ foundation, disabled }) => (!disabled ? `
    &:hover {
      &::after {
        border-color: ${foundation?.theme?.['text-hover-blue']};
      }
    }
  ` : '')}

  ${checkerBase}

  ${({ checkStatus }) => (checkStatus === CheckType.Partial ? partialChecked : '')}

  ${({ disabled }) => (disabled ? disabledStyle : '')}
`

export const Content = styled.div<StyledContentProps>`
  box-sizing: border-box;
  padding: ${CHECKER_BORDER_THICKNESS}px 0;
  margin-left: 9px;
  user-select: none;
`
