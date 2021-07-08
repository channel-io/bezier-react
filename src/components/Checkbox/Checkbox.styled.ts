/* Internal dependencies */
import DisabledOpacity from '../../constants/DisabledOpacity'
import { styled, css, absoluteCenter } from '../../foundation'
import { Icon as BaseIcon } from '../Icon'
import CheckType from './CheckType'

const CHECKER_BOX_SIZE = 18
const CHECKER_BORDER_THICKNESS = 2

interface StyledWrapperProps {
  disabled?: boolean
}

interface StyledCheckerProps extends StyledWrapperProps {
  checkStatus?: CheckType
}

export const Wrapper = styled.div<StyledWrapperProps>`
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  ${({ disabled }) => disabled && css`
    cursor: not-allowed;
  `};
`

function isTrueOrPartial(checkStatus: CheckType = CheckType.False) {
  return checkStatus === CheckType.True || checkStatus === CheckType.Partial
}

const disabledStyle = css`
  opacity: ${DisabledOpacity};
`

const checkerBaseStyle = css<StyledCheckerProps>`
  position: relative;
  box-sizing: border-box !important;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${CHECKER_BOX_SIZE}px;
  min-width: ${CHECKER_BOX_SIZE}px;
  height: ${CHECKER_BOX_SIZE}px;
  min-height: ${CHECKER_BOX_SIZE}px;
  margin: 1px;
  border-radius: ${({ foundation }) => foundation?.rounding.round6};

  ${({ foundation }) => foundation?.transition?.getTransitionsCSS(['background-color', 'opacity'])};

  ${({ disabled }) => disabled && disabledStyle};
`

const checkerDynamicStyle = css<StyledCheckerProps>`
  ${({ foundation, checkStatus, disabled }) => (isTrueOrPartial(checkStatus)
    ? css`
        border-color: transparent;
        background-color: ${foundation?.theme?.['bgtxt-green-normal']};

        &:hover {
          background-color: ${!disabled && foundation?.theme?.['bgtxt-green-dark']};
        }
      `
    : css`
        ${foundation?.border?.getBorder(CHECKER_BORDER_THICKNESS, foundation?.theme?.['bg-black-dark'])};
        background-color: ${foundation?.theme?.['bg-white-normal']};
      `
  )}
`

export const Icon = styled(BaseIcon)`
  ${absoluteCenter('')}
`

export const Checker = styled.div`
  ${checkerBaseStyle};
  ${checkerDynamicStyle};
`

export const Content = styled.div`
  box-sizing: border-box;
  padding: ${CHECKER_BORDER_THICKNESS}px 0;
  margin-left: 8px;
  user-select: none;
`
