/* Internal dependencies */
import { css, styled, Transition } from 'Foundation'
import disabledOpacity from 'Constants/DisabledOpacity'
import { toLength } from 'Utils/styleUtils'
import type { BezierComponentProps } from 'Types/ComponentProps'
import {
  SIZE_TO_DIVIDER_VERTICAL_MARGIN,
  SIZE_TO_HEIGHT,
  SIZE_TO_PADDING,
} from './SegmentedControl.const'
import { SegmentedControlSize } from './SegmentedControl.types'
import type { SegmentedControlItemProps } from './SegmentedControl.types'

interface StyledWrapperProps extends BezierComponentProps {
  disabled?: boolean
  size: SegmentedControlSize
  wrapperWidth: number | string
}

interface StyledOptionItemWrapperProps extends SegmentedControlItemProps {
  size: SegmentedControlSize
}

interface StyledIndicatorProps {
  size: SegmentedControlSize
}

interface StyledDividerProps {
  size: SegmentedControlSize
  hidden: boolean
}

const heightStyle = css<{ size: SegmentedControlSize }>`
  height: ${({ size }) => SIZE_TO_HEIGHT[size]}px;
`

const verticalPaddingStyle = css<{ size: SegmentedControlSize }>`
  padding: ${({ size }) => SIZE_TO_PADDING[size]}px 0;
`

const wrapperRoundingStyle = css<{ size: SegmentedControlSize }>`
  ${({ foundation, size }) => ({
    [SegmentedControlSize.XS]: foundation?.rounding.round6,
    [SegmentedControlSize.S]: foundation?.rounding.round8,
    [SegmentedControlSize.M]: foundation?.rounding.round8,
    [SegmentedControlSize.L]: foundation?.rounding.round12,
  })[size]}
`

const itemRoundingStyle = css<{ size: SegmentedControlSize }>`
  ${({ foundation, size }) => ({
    [SegmentedControlSize.XS]: foundation?.rounding.round4,
    [SegmentedControlSize.S]: foundation?.rounding.round6,
    [SegmentedControlSize.M]: foundation?.rounding.round6,
    [SegmentedControlSize.L]: foundation?.rounding.round6,
  })[size]}
`

const indicatorRoundingStyle = css<{ size: SegmentedControlSize }>`
  ${({ foundation, size }) => ({
    [SegmentedControlSize.XS]: foundation?.rounding.round4,
    [SegmentedControlSize.S]: foundation?.rounding.round6,
    [SegmentedControlSize.M]: foundation?.rounding.round6,
    [SegmentedControlSize.L]: foundation?.rounding.round8,
  })[size]}
`

export const Wrapper = styled.div<StyledWrapperProps>`
  position: relative;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  width: ${({ wrapperWidth }) => toLength(wrapperWidth, '100%')};
  min-width: 50px;
  overflow: hidden;
  background-color: ${props => props.foundation?.theme?.['bg-black-lighter']};
  ${({ disabled }) => disabled && `
    opacity: ${disabledOpacity};
  `}
  ${({ foundation }) => foundation?.transition?.getTransitionsCSS('background-color')};

  ${heightStyle}
  ${wrapperRoundingStyle}
  ${verticalPaddingStyle}
`

export const OptionItemWrapper = styled.div<StyledOptionItemWrapperProps>`
  position: absolute;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow: hidden;
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

  ${heightStyle}
  ${itemRoundingStyle}
`

export const Indicator = styled.div<StyledIndicatorProps>`
  position: absolute;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: default;
  ${({ foundation }) => (
    foundation?.transition?.getTransitionsCSS('transform', Transition.TransitionDuration.M)
  )};
  will-change: transform;

  ${heightStyle}
  ${indicatorRoundingStyle}
`

export const IndicatorBox = styled.div`
  ${({ foundation }) => foundation?.elevation?.ev1()};
  width: 100%;
  height: 100%;
  background-color: ${({ foundation }) => foundation?.theme?.['bg-white-high']};
`

export const DividerContainer = styled.div<StyledDividerProps>`
  position: absolute;
  top: ${({ size }) => SIZE_TO_DIVIDER_VERTICAL_MARGIN[size]}px;
  bottom: ${({ size }) => SIZE_TO_DIVIDER_VERTICAL_MARGIN[size]}px;

  ${({ hidden }) => hidden && `
    visibility: hidden;
  `}
`
