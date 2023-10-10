import React from 'react'

import { DIVIDER_THICKNESS } from '~/src/components/Divider'

import {
  useSegmentedControlContext,
  useSegmentedControlItemListContext,
} from './SegmentedControlContext'

import * as Styled from './SegmentedControl.styled'

export const SEGMENTED_CONTROL_INDICATOR_TEST_ID = 'bezier-react-segmented-control-indicator'

export function SegmentedControlIndicator() {
  const { selectedItemIndex, itemCount } = useSegmentedControlItemListContext('SegmentedControlIndicator')
  const { size } = useSegmentedControlContext('SegmentedControlIndicator')

  if (selectedItemIndex === null) { return null }

  const containerPadding = Styled.paddingBySegmentedControlSize[size]
  const containerHeight = Styled.heightBySegmentedControlSize[size]

  const dividerTotalWidth = `${(itemCount - 1) * DIVIDER_THICKNESS}px`
  const containerHorizontalPadding = `${2 * containerPadding}px`

  const style = {
    '--bezier-react-segmented-control-indicator-translateX': `calc(${selectedItemIndex * 100}% + ${selectedItemIndex * DIVIDER_THICKNESS}px)`,
    '--bezier-react-segmented-control-indicator-width': `calc((100% - ${dividerTotalWidth} - ${containerHorizontalPadding}) / ${itemCount})`,
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
