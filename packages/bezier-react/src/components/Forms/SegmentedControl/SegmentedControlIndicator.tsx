import React from 'react'

import {
  useSegmentedControlContext,
  useSegmentedControlItemListContext,
} from './SegmentedControlContext'

import * as Styled from './SegmentedControl.styled'

export const SEGMENTED_CONTROL_INDICATOR_TEST_ID = 'bezier-react-segmented-control-indicator'

export function SegmentedControlIndicator() {
  const { index, length } = useSegmentedControlItemListContext('SegmentedControlIndicator')
  const { size } = useSegmentedControlContext('SegmentedControlIndicator')

  const style = {
    '--bezier-react-segmented-control-indicator-translateX': `${index * 100}%`,
    '--bezier-react-segmented-control-indicator-width': `${index !== null ? `calc((100% - ${length - 1}px) / ${length})` : 0} `,
    '--bezier-react-segmented-control-indicator-height': `${Styled.heightBySegmentedControlSize[size] - (Styled.paddingBySegmentedControlSize[size] * 2)}px`,
    '--bezier-react-segmented-control-indicator-top': `${Styled.paddingBySegmentedControlSize[size]}px`,
  } as React.CSSProperties

  return (
    <Styled.Indicator
      data-testid={SEGMENTED_CONTROL_INDICATOR_TEST_ID}
      style={style}
    />
  )
}
