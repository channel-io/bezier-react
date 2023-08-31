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

  if (index === null) { return null }

  const containerPadding = Styled.paddingBySegmentedControlSize[size]
  const containerHeight = Styled.heightBySegmentedControlSize[size]

  const dividerTotalWidth = `${length - 1}px`
  const containerHorizontalPadding = `${2 * containerPadding}px`

  const style = {
    '--bezier-react-segmented-control-indicator-translateX': `calc(${index * 100}% + ${index}px)`,
    '--bezier-react-segmented-control-indicator-width': `calc((100% - ${dividerTotalWidth} - ${containerHorizontalPadding}) / ${length})`,
    '--bezier-react-segmented-control-indicator-height': `${containerHeight - (2 * containerPadding)}px`,
    '--bezier-react-segmented-control-indicator-left': `${containerPadding}px`,
  } as React.CSSProperties

  return (
    <Styled.Indicator
      data-testid={SEGMENTED_CONTROL_INDICATOR_TEST_ID}
      style={style}
    />
  )
}
