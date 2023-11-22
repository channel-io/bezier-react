/* stylelint-disable declaration-block-semicolon-newline-after, rule-empty-line-before */
import {
  TransitionDuration,
  Typography,
  styled,
} from '~/src/foundation'

import DisabledOpacity from '~/src/constants/DisabledOpacity'
import { ZIndex } from '~/src/constants/ZIndex'

import { AlphaStack } from '~/src/components/AlphaStack'
import { focusedInputWrapperStyle } from '~/src/components/Forms/Inputs/mixins'
import { Text } from '~/src/components/Text'

import { SegmentedControlSize } from './SegmentedControl.types'

export const heightBySegmentedControlSize = {
  [SegmentedControlSize.XS]: 24,
  [SegmentedControlSize.S]: 28,
  [SegmentedControlSize.M]: 36,
  [SegmentedControlSize.L]: 44,
}

export const paddingBySegmentedControlSize = {
  [SegmentedControlSize.XS]: 1,
  [SegmentedControlSize.S]: 2,
  [SegmentedControlSize.M]: 2,
  [SegmentedControlSize.L]: 4,
}

export const Indicator = styled.div`
  --bezier-segmented-control-indicator-translateX: none;
  --bezier-segmented-control-indicator-left: auto;
  --bezier-segmented-control-indicator-width: auto;
  --bezier-segmented-control-indicator-height: auto;

  position: absolute;
  top: 50%;
  left: var(--bezier-segmented-control-indicator-left);
  width: var(--bezier-segmented-control-indicator-width);
  height: var(--bezier-segmented-control-indicator-height);

  ${({ foundation }) => foundation?.elevation.ev1()}
  /* NOTE: (@ed) Overrides the elevation mixin. Do not change the order! */
  background-color: var(--bg-white-high);

  transform: translateX(var(--bezier-segmented-control-indicator-translateX)) translateY(-50%);
  ${({ foundation }) => foundation?.transition?.getTransitionsCSS('transform', TransitionDuration.M)}
`

export const ItemContainer = styled(AlphaStack).attrs({
  direction: 'horizontal',
  align: 'center',
  spacing: 2,
})`
  z-index: ${ZIndex.Float};
  overflow: hidden;
`

export const ItemLabel = styled(Text).attrs({
  bold: true,
  truncated: true,
})`
  padding: 1px 4px;
`

export const Item = styled.button`
  all: unset;

  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  min-width: 0;

  ${({ foundation }) => foundation?.transition?.getTransitionsCSS('background-color')}

  &[data-checked] {
    color: var(--txt-black-darkest);
    cursor: default;
  }

  &:not([data-checked]) {
    color: var(--txt-black-dark);
    cursor: pointer;
  }

  &:disabled {
    cursor: not-allowed;
  }

  /* NOTE: (@ed) focus indicator */
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    z-index: ${ZIndex.Float};
    display: block;
    width: 100%;
    height: 100%;
    content: '';
    border-radius: inherit;
    ${({ foundation }) => foundation?.transition?.getTransitionsCSS(['box-shadow'])}
  }

  &:focus-visible {
    &::after {
      ${focusedInputWrapperStyle}
    }
  }

  &:not([data-checked]):not(&:disabled):hover {
    background-color: var(--bg-black-light);
  }
`

export const Container = styled(AlphaStack).attrs({ direction: 'horizontal' })`
  --bezier-segmented-control-width: auto;

  position: relative;
  z-index: ${ZIndex.Base};
  box-sizing: border-box;
  width: var(--bezier-segmented-control-width);
  background-color: var(--bg-black-lighter);

  &.${SegmentedControlSize.XS} {
    height: ${heightBySegmentedControlSize[SegmentedControlSize.XS]}px;
    padding: ${paddingBySegmentedControlSize[SegmentedControlSize.XS]}px;
    border-radius: 6px;
    ${Typography.Size13}

    ${Item},
    ${Indicator} {
      border-radius: 5px;
    }

    ${Item} {
      padding: 1px 0;
    }
  }

  &.${SegmentedControlSize.S} {
    height: ${heightBySegmentedControlSize[SegmentedControlSize.S]}px;
    padding: ${paddingBySegmentedControlSize[SegmentedControlSize.S]}px;
    border-radius: 8px;
    ${Typography.Size14}

    ${Item},
    ${Indicator} {
      border-radius: 6px;
    }

    ${Item} {
      padding: 2px 0;
    }
  }

  &.${SegmentedControlSize.M} {
    height: ${heightBySegmentedControlSize[SegmentedControlSize.M]}px;
    padding: ${paddingBySegmentedControlSize[SegmentedControlSize.M]}px;
    border-radius: 8px;
    ${Typography.Size14}

    ${Item},
    ${Indicator} {
      border-radius: 6px;
    }

    ${Item} {
      padding: 6px 0;
    }
  }

  &.${SegmentedControlSize.L} {
    height: ${heightBySegmentedControlSize[SegmentedControlSize.L]}px;
    padding: ${paddingBySegmentedControlSize[SegmentedControlSize.L]}px;
    border-radius: 12px;
    ${Typography.Size14}

    ${Item},
    ${Indicator} {
      border-radius: 8px;
    }

    ${Item} {
      padding: 8px 0;
    }
  }

  &[data-disabled] {
    opacity: ${DisabledOpacity};

    ${Item},
    ${Indicator} {
      cursor: not-allowed;
    }
  }
`
