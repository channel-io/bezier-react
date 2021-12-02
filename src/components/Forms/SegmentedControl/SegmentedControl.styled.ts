/* Internal dependencies */
import { styled, Transition } from '../../../foundation'
import disabledOpacity from '../../../constants/DisabledOpacity'
import { BezierComponentProps } from '../../../types/ComponentProps'
import { toLength } from '../../../utils/styleUtils'
import { SegmentedControlItemProps } from './SegmentedControl.types'

interface StyledWrapperProps extends BezierComponentProps {
  disabled?: boolean
  wrapperWidth: number | string
  wrapperHeight: number | string
}

interface StyledOptionItemWrapperProps extends SegmentedControlItemProps {}

export const Wrapper = styled.div<StyledWrapperProps>`
  position: relative;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  width: ${({ wrapperWidth }) => toLength(wrapperWidth, '100%')};
  min-width: 50px;
  height: ${({ wrapperHeight }) => toLength(wrapperHeight, 'auto')};
  overflow: hidden;
  font-size: 14px;
  font-weight: bold;
  line-height: 18px;
  background-color: ${props => props.foundation?.theme?.['bg-black-lighter']};
  border-radius: 8px;
  ${({ disabled }) => disabled && `
    opacity: ${disabledOpacity};
  `}
  ${({ foundation }) => foundation?.transition?.getTransitionsCSS('background-color')};
`

export const OptionItemWrapper = styled.div<StyledOptionItemWrapperProps>`
  position: absolute;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
  overflow: hidden;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  color: ${props => (
    props.active
      ? props.foundation?.theme?.['txt-black-darkest']
      : props.foundation?.theme?.['txt-black-dark']
  )};
  cursor: ${props => {
    if (props.disabled) { return 'not-allowed' }
    if (props.active) { return 'auto' }
    return 'pointer'
  }};
  ${({ foundation }) => foundation?.transition?.getTransitionsCSS(['background-color', 'color'])};
  user-select: none;

  &:hover {
    ${props => ((!props.disabled && !props.active) ? `
      background-color: ${props.foundation?.theme?.['bg-black-lighter']};
    ` : '')}
  }
`

export const Indicator = styled.div`
  position: absolute;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 2px;
  cursor: default;
  ${({ foundation }) => (
    foundation?.transition?.getTransitionsCSS('transform', Transition.TransitionDuration.M)
  )};
  will-change: transform;
`

export const IndicatorBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ foundation }) => foundation?.theme?.['bg-white-high']};
  border-radius: 6px;
  ${({ foundation }) => foundation?.elevation?.ev1()};
`
