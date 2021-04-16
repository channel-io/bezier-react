/* Internal dependencies */
import { styled } from '../../foundation'
import { Transition } from '../../foundation/Transition'
import { UIComponentProps } from '../../types/ComponentProps'
import { toCSSUnit } from '../../utils/styleUtils'
import { SegmentedControlItemProps } from './SegmentedControl.types'

export interface StyledWrapperProps extends UIComponentProps {
  wrapperWidth: number | string
  wrapperHeight: number | string
}

export interface StyledOptionItemWrapperProps extends Pick<SegmentedControlItemProps, | 'disabled'> {
  active?: boolean
}

export const Wrapper = styled.div<StyledWrapperProps>`
  position: relative;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  width: ${({ wrapperWidth }) => toCSSUnit(wrapperWidth, '100%')};
  min-width: 50px;
  height: ${({ wrapperHeight }) => toCSSUnit(wrapperHeight, 'auto')};
  overflow: hidden;
  font-size: 14px;
  font-weight: bold;
  line-height: 18px;
  background-color: ${props => props.foundation?.theme?.['bg-black-lighter']};
  border-radius: 8px;
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
  color: ${props => {
    if (props.disabled) {
      return props.foundation?.theme?.['txt-black-light']
    }
    return props.active
      ? props.foundation?.theme?.['txt-black-darkest']
      : props.foundation?.theme?.['txt-black-dark']
  }};
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
