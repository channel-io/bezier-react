/* External dependencies */
import React, { Ref, forwardRef, useState, useEffect, useLayoutEffect, useMemo, useCallback } from 'react'
import { v4 as uuid } from 'uuid'
import { noop, isNumber } from 'lodash-es'
import { ResizeObserver, ResizeObserverEntry } from '@juggle/resize-observer'

/* Internal dependencies */
import useReusableForwardedRef from '../../hooks/useReusableForwardedRef'
import SegmentedControlProps from './SegmentedControl.types'
import { Wrapper, OptionItemWrapper, Indicator, IndicatorBox } from './SegmentedControl.styled'

// TODO: 테스트 코드 작성
const SEGMENTED_CONTROL_TEST_ID = 'bezier-react-segmented-control'

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
  const wrapperRef = useReusableForwardedRef<HTMLDivElement>(forwardedRef)

  const [currentIndex, setCurrentIndex] = useState<number>(selectedOptionIndex)
  const [wrapperHeight, setWrapperHeight] = useState<number>(0)
  const [optionItemWidth, setOptionItemWidth] = useState<number>(0)

  const resizeObserver = useMemo(() => (
    new ResizeObserver((entries: ResizeObserverEntry[]) => {
      const entry = entries[0]
      setWrapperHeight(entry.contentRect.height)
      setOptionItemWidth(entry.contentRect.width / React.Children.count(children))
    })
  ), [children])

  useLayoutEffect(() => {
    resizeObserver.observe(wrapperRef.current!)
    return function cleanup() {
      resizeObserver.disconnect()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resizeObserver])

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
