/* External dependencies */
import React, { Ref, forwardRef, useState, useEffect, useMemo, useCallback } from 'react'
import { v4 as uuid } from 'uuid'
import { noop, isNumber } from 'lodash-es'
import { useResizeDetector } from 'react-resize-detector'

/* Internal dependencies */
import useMergeRefs from '../../hooks/useMergeRefs'
import SegmentedControlProps from './SegmentedControl.types'
import { Wrapper, OptionItemWrapper, Indicator, IndicatorBox } from './SegmentedControl.styled'

export const SEGMENTED_CONTROL_TEST_ID = 'bezier-react-segmented-control'
const SEGMENTED_CONTROL_OPTION_ITEM_TEST_ID_PREFIX = 'bezier-react-segmented-control-option-item'
export const segmentedControlOptionItemTestId = (index: number) =>
  [SEGMENTED_CONTROL_OPTION_ITEM_TEST_ID_PREFIX, index.toString()].join('-')

function SegmentedControl(
  {
    as,
    testId = SEGMENTED_CONTROL_TEST_ID,
    disabled = false,
    width = '100%',
    height = 36,
    /* OptionItemHost props */
    selectedOptionIndex = 0,
    onChangeOption = noop,
    /* HTMLAttribute props */
    children,
  }: SegmentedControlProps,
  forwardedRef: Ref<any>,
) {
  const [currentIndex, setCurrentIndex] = useState<number>(selectedOptionIndex)
  const [wrapperHeight, setWrapperHeight] = useState<number>(0)
  const [wrapperWidth, setWrapperWidth] = useState<number>(0)

  const numItems = useMemo(() => React.Children.count(children), [children])
  const optionItemWidth = wrapperWidth / Math.max(1, numItems)

  const updateDimensions = useCallback((_width?: number, _height?: number) => {
    if (isNumber(_width)) { setWrapperWidth(_width) }
    if (isNumber(_height)) { setWrapperHeight(_height) }
  }, [])

  const { ref: resizeDetectorRef } = useResizeDetector({ onResize: updateDimensions })

  const wrapperRef = useMergeRefs(resizeDetectorRef, forwardedRef)

  useEffect(() => {
    if (isNumber(selectedOptionIndex)) {
      setCurrentIndex(selectedOptionIndex)
    }
  }, [selectedOptionIndex])

  const handleClickOptionItem = useCallback((index: number) => {
    setCurrentIndex(index)
    onChangeOption(index)
  }, [onChangeOption])

  const renderOption = useCallback((Element: React.ReactNode, index: number) => (
    <OptionItemWrapper
      key={uuid()}
      data-testid={segmentedControlOptionItemTestId(index)}
      disabled={disabled}
      active={index === currentIndex}
      style={{
        width: optionItemWidth,
        height: wrapperHeight,
        left: optionItemWidth * index,
      }}
      onClick={() => (disabled ? noop : handleClickOptionItem(index))}
    >
      { Element }
    </OptionItemWrapper>
  ), [
    disabled,
    currentIndex,
    wrapperHeight,
    optionItemWidth,
    handleClickOptionItem,
  ])

  const Content = useMemo(() => (
    React.Children.map(children, renderOption)
  ), [
    children,
    renderOption,
  ])

  const IndicatorComponent = useMemo(() => (
    <Indicator
      style={{
        width: optionItemWidth,
        height: wrapperHeight,
        transform: `translateX(${optionItemWidth * currentIndex}px)`,
      }}
    >
      <IndicatorBox />
    </Indicator>
  ), [
    currentIndex,
    wrapperHeight,
    optionItemWidth,
  ])

  return (
    <Wrapper
      ref={wrapperRef}
      as={as}
      disabled={disabled}
      wrapperWidth={width}
      wrapperHeight={height}
      data-testid={testId}
    >
      { IndicatorComponent }
      { Content }
    </Wrapper>
  )
}

export default forwardRef(SegmentedControl)
