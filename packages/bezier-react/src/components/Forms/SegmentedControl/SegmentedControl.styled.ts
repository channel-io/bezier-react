/* stylelint-disable declaration-block-semicolon-newline-after, rule-empty-line-before */
import {
  Transition,
  Typography,
  styled,
} from '~/src/foundation'

import DisabledOpacity from '~/src/constants/DisabledOpacity'
import { ZIndex } from '~/src/constants/ZIndex'

import { AlphaStack } from '~/src/components/AlphaStack'
import { focusedInputWrapperStyle } from '~/src/components/Forms/Inputs/mixins'
import { Text } from '~/src/components/Text'

import { SegmentedControlSize } from './SegmentedControl.types'

export const ItemContainer = styled(AlphaStack).attrs({
  direction: 'horizontal',
  align: 'center',
  spacing: 2,
})`
  z-index: ${ZIndex.Float};
`

export const ItemLabel = styled(Text).attrs({ bold: true })`
  padding: 1px 4px;
`

export const Item = styled.button`
  all: unset;

  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

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

export const indicatorTransitionMeta = {
  duration: Transition.TransitionDuration.M,
}

export const Indicator = styled.div`
  --bezier-react-segmented-control-indicator-transform: none;
  --bezier-react-segmented-control-indicator-width: auto;
  --bezier-react-segmented-control-indicator-height: auto;

  position: absolute;
  top: 0;
  left: 0;
  z-index: ${ZIndex.Float};

  width: var(--bezier-react-segmented-control-indicator-width);
  height: var(--bezier-react-segmented-control-indicator-height);

  ${({ foundation }) => foundation?.elevation.ev1()}
  /* NOTE: (@ed) Overrides the elevation mixin. Do not change the order! */
  background-color: var(--bg-white-high);

  transform: var(--bezier-react-segmented-control-indicator-transform);
  ${({ foundation }) => foundation?.transition?.getTransitionsCSS('transform', indicatorTransitionMeta.duration)}
`

export const Container = styled(AlphaStack).attrs({ direction: 'horizontal' })`
  --bezier-react-segmented-control-width: auto;

  position: relative;
  z-index: ${ZIndex.Base};
  box-sizing: border-box;
  width: var(--bezier-react-segmented-control-width);
  background-color: var(--bg-black-lighter);

  &.${SegmentedControlSize.XS} {
    height: 24px;
    padding: 1px;
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
    height: 28px;
    padding: 2px;
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
    height: 36px;
    padding: 2px;
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
    height: 44px;
    padding: 4px;
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
