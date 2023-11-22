import React from 'react'

import {
  cssVarName,
  px,
} from '~/src/utils/css'

import { DIVIDER_THICKNESS } from '~/src/components/Divider'

import {
  useSegmentedControlContext,
  useSegmentedControlItemListContext,
} from './SegmentedControlContext'

import * as Styled from './SegmentedControl.styled'

const cv = cssVarName('segmented-control-indicator')

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
    [cv('translateX')]: `calc(${selectedItemIndex * 100}% + ${selectedItemIndex * DIVIDER_THICKNESS}px)`,
    [cv('width')]: `calc((100% - ${dividerTotalWidth} - ${containerHorizontalPadding}) / ${itemCount})`,
    [cv('height')]: px(containerHeight - (2 * containerPadding)),
    [cv('left')]: px(containerPadding),
  } as React.CSSProperties

  return (
    <Styled.Indicator
      data-testid={SEGMENTED_CONTROL_INDICATOR_TEST_ID}
      style={style}
    />
  )
}
