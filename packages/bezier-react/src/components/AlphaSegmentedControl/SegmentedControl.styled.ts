import {
  Typography,
  styled,
} from '~/src/foundation'

import { ZIndex } from '~/src/constants/ZIndex'

import { AlphaCenter } from '~/src/components/AlphaCenter'
import { AlphaStack } from '~/src/components/AlphaStack'
import { Text } from '~/src/components/Text'

import { SegmentedControlSize } from './SegmentedControl.types'

export const ItemLabel = styled(Text).attrs({ bold: true })`
  z-index: ${ZIndex.Float};
`

export const Item = styled(AlphaCenter)`
  flex: 1;

  &[data-state='checked'] {
    color: var(--txt-black-darkest);
    cursor: default;
  }

  &:not([data-state='checked']) {
    color: var(--txt-black-dark);
    cursor: pointer;
  }

  &:not([data-state='checked']):hover {
    background-color: var(--bg-black-light);
  }
`

export const Indicator = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${ZIndex.Float};

  /* start temps */
  width: 100px;
  height: 100%;
  /* end temps */

  ${({ foundation }) => foundation?.elevation.ev1()}
  /* NOTE: (@ed) Overrides the elevation mixin. Do not change the order! */
  background-color: var(--bg-white-high);
`

export const Container = styled(AlphaStack)`
  --bezier-react-segmented-control-width: initial;

  position: relative;
  z-index: ${ZIndex.Base};
  width: var(--bezier-react-segmented-control-width);
  background-color: var(--bg-black-lighter);

  &.${SegmentedControlSize.XS} {
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
