/* stylelint-disable declaration-block-semicolon-newline-after, rule-empty-line-before */
import {
  Transition,
  Typography,
  styled,
} from '~/src/foundation'

import { ZIndex } from '~/src/constants/ZIndex'

import { AlphaStack } from '~/src/components/AlphaStack'
import { Text } from '~/src/components/Text'

import { SegmentedControlSize } from './SegmentedControl.types'

export const ItemLabel = styled(Text).attrs({ bold: true })`
  z-index: ${ZIndex.Float};
  padding: 1px 4px;
`

export const Item = styled.button`
  all: unset;

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

  &:not([data-checked]):hover {
    background-color: var(--bg-black-light);
  }
`

export const Indicator = styled.div`
  --bezier-react-segmented-control-indicator-transform: initial;
  --bezier-react-segmented-control-indicator-width: initial;
  --bezier-react-segmented-control-indicator-height: initial;

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
  ${({ foundation }) => foundation?.transition?.getTransitionsCSS('transform', Transition.TransitionDuration.M)}
`

export const Container = styled(AlphaStack).attrs({ direction: 'horizontal' })`
  --bezier-react-segmented-control-width: initial;

  position: relative;
  z-index: ${ZIndex.Base};
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

  &:disabled {
    ${Item},
    ${Indicator} {
      cursor: not-allowed;
    }
  }
`
