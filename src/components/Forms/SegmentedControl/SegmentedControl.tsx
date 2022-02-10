/* External dependencies */
import React, { Ref, forwardRef, useState, useEffect, useMemo, useCallback } from 'react'
import { v4 as uuid } from 'uuid'
import { noop, isNumber } from 'lodash-es'
import { useResizeDetector } from 'react-resize-detector'

/* Internal dependencies */
import useMergeRefs from 'Hooks/useMergeRefs'
import useFormFieldProps from 'Components/Forms/useFormFieldProps'
import SegmentedControlProps from './SegmentedControl.types'
import * as Styled from './SegmentedControl.styled'

export const SEGMENTED_CONTROL_TEST_ID = 'bezier-react-segmented-control'
const SEGMENTED_CONTROL_OPTION_ITEM_TEST_ID_PREFIX = 'bezier-react-segmented-control-option-item'
export const segmentedControlOptionItemTestId = (index: number) =>
  [SEGMENTED_CONTROL_OPTION_ITEM_TEST_ID_PREFIX, index.toString()].join('-')

function SegmentedControl(
  {
    testId = SEGMENTED_CONTROL_TEST_ID,
    width = '100%',
    height = 36,
    /*
    * OptionItemHost props
    */
    selectedOptionIndex = 0,
    onChangeOption = noop,
    /* HTMLAttribute props */
    children,
    ...rest
  }: SegmentedControlProps,
  forwardedRef: Ref<any>,
) {
  const {
    disabled,
    Wrapper,
    ...ownProps
  } = useFormFieldProps(rest)

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
    <Styled.OptionItemWrapper
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
    </Styled.OptionItemWrapper>
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
    <Styled.Indicator
      style={{
        width: optionItemWidth,
        height: wrapperHeight,
        transform: `translateX(${optionItemWidth * currentIndex}px)`,
      }}
    >
      <Styled.IndicatorBox />
    </Styled.Indicator>
  ), [
    currentIndex,
    wrapperHeight,
    optionItemWidth,
  ])

  return (
    <Wrapper>
      <Styled.Wrapper
        {...ownProps}
        ref={wrapperRef}
        disabled={disabled}
        wrapperWidth={width}
        wrapperHeight={height}
        data-testid={testId}
      >
        { IndicatorComponent }
        { Content }
      </Styled.Wrapper>
    </Wrapper>
  )
}

export default forwardRef(SegmentedControl)
