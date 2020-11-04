/* Internal dependencies */
import { styled } from '../../styling/Theme'
import { absoluteCenter } from '../../styling/Mixins'
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

const checkerBase = (props: StyledCheckerProps) => `
  &::after {
    ${absoluteCenter`translateY(-13%) rotate(42deg)`}
    width: 4px;
    height: 9px;
    border-right: solid ${CHECKER_ICON_THICKNESS}px transparent;
    border-bottom: solid ${CHECKER_ICON_THICKNESS}px transparent;
    border-color: ${props.theme?.colors?.border0};
    content: '';
    transition: ${props.theme?.transition?.BorderTransition};
  }

  ${(props.checkStatus === CheckType.True || props.checkStatus === CheckType.Partial) ? `
    background-color: ${props.theme?.colors?.success1};
    border-color: transparent;

    ${!props.disabled ? `
      &:hover {
        background-color: ${props.theme?.colors.success1Hover};
      }
    ` : ''}
  ` : ''}
`

const partialChecked = (props: StyledCheckerProps) => ((props.checkStatus === CheckType.Partial) ? `
  &::after {
    ${absoluteCenter`translateY(-36%) rotate(0)`}
    width: 10px;
    border-right: none;
    border-bottom: solid 2px ${props.theme?.colors?.border0};
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
      border-color: ${props.theme?.colors?.border5}
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
  background-color: ${props => props.theme?.colors?.background0};
  border: ${CHECKER_BORDER_THICKNESS}px solid ${props => props.theme?.colors?.border3};
  border-radius: 4px;
  transition: ${props => props.theme?.transition?.BackgroundTransition}, ${props => props.theme?.transition?.ColorTransition};

  ${props => (!props.disabled ? `
    &:hover {
      &::after {
        border-color: ${props.theme?.colors?.border2};
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
  margin-left: 9px;
  user-select: none;
`
