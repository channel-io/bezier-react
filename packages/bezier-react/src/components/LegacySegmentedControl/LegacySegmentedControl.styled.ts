import {
  Transition,
  css,
  styled,
} from '~/src/foundation'

import disabledOpacity from '~/src/constants/DisabledOpacity'
import type { BezierComponentProps } from '~/src/types/ComponentProps'
import { toLength } from '~/src/utils/styleUtils'

import {
  SIZE_TO_DIVIDER_VERTICAL_MARGIN,
  SIZE_TO_HEIGHT,
  SIZE_TO_PADDING,
} from './LegacySegmentedControl.const'
import { LegacySegmentedControlSize } from './LegacySegmentedControl.types'
import type { LegacySegmentedControlItemProps } from './LegacySegmentedControl.types'

interface StyledWrapperProps extends BezierComponentProps {
  disabled?: boolean
  size: LegacySegmentedControlSize
  wrapperWidth: number | string
}

interface StyledOptionItemWrapperProps extends LegacySegmentedControlItemProps {
  size: LegacySegmentedControlSize
}

interface StyledIndicatorProps {
  size: LegacySegmentedControlSize
}

interface StyledDividerProps {
  size: LegacySegmentedControlSize
  hidden: boolean
}

const heightStyle = css<{ size: LegacySegmentedControlSize }>`
  height: ${({ size }) => SIZE_TO_HEIGHT[size]}px;
`

const indicatorHeightStyle = css<{ size: LegacySegmentedControlSize }>`
  height: ${({ size }) => SIZE_TO_HEIGHT[size] - (SIZE_TO_PADDING[size] * 2)}px;
`

const verticalPaddingStyle = css<{ size: LegacySegmentedControlSize }>`
  padding: ${({ size }) => SIZE_TO_PADDING[size]}px 0;
`

const wrapperRoundingStyle = css<{ size: LegacySegmentedControlSize }>`
  ${({ foundation, size }) => ({
    [LegacySegmentedControlSize.XS]: foundation?.rounding.round6,
    [LegacySegmentedControlSize.S]: foundation?.rounding.round8,
    [LegacySegmentedControlSize.M]: foundation?.rounding.round8,
    [LegacySegmentedControlSize.L]: foundation?.rounding.round12,
  })[size]}
`

const itemRoundingStyle = css<{ size: LegacySegmentedControlSize }>`
  ${({ foundation, size }) => ({
    [LegacySegmentedControlSize.XS]: foundation?.rounding.round4,
    [LegacySegmentedControlSize.S]: foundation?.rounding.round6,
    [LegacySegmentedControlSize.M]: foundation?.rounding.round6,
    [LegacySegmentedControlSize.L]: foundation?.rounding.round6,
  })[size]}
`

const indicatorRoundingStyle = css<{ size: LegacySegmentedControlSize }>`
  ${({ foundation, size }) => ({
    [LegacySegmentedControlSize.XS]: foundation?.rounding.round4,
    [LegacySegmentedControlSize.S]: foundation?.rounding.round6,
    [LegacySegmentedControlSize.M]: foundation?.rounding.round6,
    [LegacySegmentedControlSize.L]: foundation?.rounding.round8,
  })[size]}
`

export const Wrapper = styled.div<StyledWrapperProps>`
  position: relative;
  box-sizing: border-box;
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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: default;
  ${({ foundation }) => (
    foundation?.transition?.getTransitionsCSS('transform', Transition.TransitionDuration.M)
  )};
  will-change: transform;

  ${indicatorHeightStyle}
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
