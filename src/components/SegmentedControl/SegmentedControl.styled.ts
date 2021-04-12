/* External dependencies */
import { get } from 'lodash-es'

/* Internal dependencies */
import { styled } from '../../foundation'
import { toCSSNumberType } from '../../utils/styleUtils'
import { StyledWrapperProps, StyledSegmentedControlItemProps } from './SegmentedControl.types'

export const Wrapper = styled.div<StyledWrapperProps>`
  position: relative;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  width: ${props => toCSSNumberType(get(props, 'wrapperWidth'), '100%')};
  min-width: 50px;
  height: ${props => toCSSNumberType(get(props, 'wrapperHeight'), 'auto')};
  overflow: hidden;
  font-size: 14px;
  font-weight: bold;
  line-height: 18px;
  background-color: ${props => props.foundation?.theme?.['bg-black-lighter']};
  border-radius: 8px;
  ${({ foundation }) => foundation?.transition?.getTransitionsCSS('background-color')};
`

export const OptionItemWrapper = styled.div<StyledSegmentedControlItemProps>`
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
  transition: transform 0.2s ease-in-out, width 0.25s ease-in-out;
  will-change: transform;
`

export const IndicatorBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.foundation?.theme?.['bg-white-high']};
  border-radius: 6px;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.05),
    0 1px 2px rgba(0, 0, 0, 0.08),
    inset 0 0 2px rgba(255, 255, 255, 0.12);
`
