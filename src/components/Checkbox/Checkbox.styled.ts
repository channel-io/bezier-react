/* Internal dependencies */
import DisabledOpacity from '../../constants/DisabledOpacity'
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
  background-color:
    ${({ foundation, checkStatus }) => (isTrueOrPartial(checkStatus)
    ? foundation?.theme?.['bgtxt-green-normal']
    : foundation?.theme?.['bg-white-normal'])};
  border-color: ${({ checkStatus }) => (isTrueOrPartial(checkStatus) ? 'transparent' : '')};

  &::after {
    ${absoluteCenter`translateY(-13%) rotate(42deg)`}
    display: ${({ checkStatus }) => (isTrueOrPartial(checkStatus) ? 'initial' : 'none')};
    width: 6px;
    height: 10px;
    content: '';
    ${({ foundation }) =>
    foundation?.border?.getBorder(
      CHECKER_ICON_THICKNESS,
      foundation?.theme?.['bgtxt-absolute-white-normal'],
      { top: false, left: false },
    )};
    ${({ foundation }) => foundation?.transition?.getTransitionsCSS('border')};
  }

  &:hover {
    background-color:
      ${({ foundation, disabled, checkStatus }) =>
    ((!disabled && isTrueOrPartial(checkStatus)) ? foundation?.theme?.['bgtxt-green-dark'] : '')};
  }
`

const partialChecked = css<StyledCheckerProps>`
  &::after {
    ${absoluteCenter`translateY(-36%) rotate(0)`}
    width: 10px;
    ${({ foundation }) =>
    foundation?.border?.getBorder(
      CHECKER_ICON_THICKNESS,
      foundation?.theme?.['bgtxt-absolute-white-normal'],
      { top: false, right: false, left: false },
    )};
  }
`

const disabledStyle = css<StyledCheckerProps>`
  opacity: ${DisabledOpacity};
`

export const Checker = styled.div<StyledCheckerProps>`
  position: relative;
  box-sizing: border-box !important;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${CHECKER_BOX_SIZE}px;
  min-width: ${CHECKER_BOX_SIZE}px;
  height: ${CHECKER_BOX_SIZE}px;
  min-height: ${CHECKER_BOX_SIZE}px;
  font-size: 10px;
  color: transparent;
  ${({ foundation }) =>
    foundation
      ?.border
      ?.getBorder(CHECKER_BORDER_THICKNESS, foundation?.theme?.['bdr-black-light'])};
  border-radius: 4px;

  ${({ foundation }) => foundation?.transition?.getTransitionsCSS(['background-color', 'opacity'])};

  ${({ foundation, disabled }) => (!disabled ? `
    &:hover {
      &::after {
        border-color: ${foundation?.theme?.['bdr-black-light']};
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
