import React, {
  type Ref,
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'

import { useResizeDetector } from 'react-resize-detector'
import { v4 as uuid } from 'uuid'

import useMergeRefs from '~/src/hooks/useMergeRefs'
import { noop } from '~/src/utils/function'
import { range } from '~/src/utils/number'
import { isNumber } from '~/src/utils/type'

import { Divider } from '~/src/components/Divider'
import useFormFieldProps from '~/src/components/Forms/useFormFieldProps'
import { Text } from '~/src/components/Text'

import {
  DIVIDER_SIDE_MARGIN,
  DIVIDER_WIDTH,
  SIZE_TO_OPTION_TYPOGRAPHY,
  SIZE_TO_PADDING,
} from './LegacySegmentedControl.const'
import type LegacySegmentedControlProps from './LegacySegmentedControl.types'
import { LegacySegmentedControlSize } from './LegacySegmentedControl.types'

import * as Styled from './LegacySegmentedControl.styled'

export const SEGMENTED_CONTROL_TEST_ID = 'bezier-react-segmented-control'
const SEGMENTED_CONTROL_OPTION_ITEM_TEST_ID_PREFIX = 'bezier-react-segmented-control-option-item'
export const segmentedControlOptionItemTestId = (index: number) =>
  [SEGMENTED_CONTROL_OPTION_ITEM_TEST_ID_PREFIX, index.toString()].join('-')

const itemWidth = (width: number, numItems: number, size: LegacySegmentedControlSize): number =>
  (width - (2 * SIZE_TO_PADDING[size]) - ((numItems - 1) * DIVIDER_WIDTH)) / Math.max(1, numItems)

const itemLeft = (width: number, numItems: number, size: LegacySegmentedControlSize) =>
  (index: number): number => (
    SIZE_TO_PADDING[size]
      + (itemWidth(width, numItems, size) * index)
      + (DIVIDER_WIDTH * index)
  )

const dividerLeft = (width: number, numItems: number, size: LegacySegmentedControlSize) =>
  (index: number): number => (
    SIZE_TO_PADDING[size]
      + (itemWidth(width, numItems, size) * index)
      + (DIVIDER_WIDTH * (index - 1))
      - DIVIDER_SIDE_MARGIN
  )

function LegacySegmentedControl(
  {
    testId = SEGMENTED_CONTROL_TEST_ID,
    width = '100%',
    size = LegacySegmentedControlSize.M,
    /* OptionItemHost props */
    selectedOptionIndex = 0,
    onChangeOption = noop,
    /* HTMLAttribute props */
    children,
    ...rest
  }: LegacySegmentedControlProps,
  forwardedRef: Ref<any>,
) {
  const {
    disabled,
    ...ownProps
  } = useFormFieldProps(rest)

  const [currentIndex, setCurrentIndex] = useState<number>(selectedOptionIndex)
  const [wrapperWidth, setWrapperWidth] = useState<number>(0)

  const numItems = useMemo(() => React.Children.count(children), [children])

  const optionItemWidth = itemWidth(wrapperWidth, numItems, size)
  const optionItemLeft = useMemo(() => (
    itemLeft(wrapperWidth, numItems, size)
  ), [
    wrapperWidth,
    numItems,
    size,
  ])
  const dividerItemLeft = useMemo(() => (
    dividerLeft(wrapperWidth, numItems, size)
  ), [
    wrapperWidth,
    numItems,
    size,
  ])

  const updateDimensions = useCallback((_width?: number) => {
    if (isNumber(_width)) { setWrapperWidth(_width) }
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
      size={size}
      style={{
        width: optionItemWidth,
        left: optionItemLeft(index),
      }}
      onClick={() => (disabled ? noop : handleClickOptionItem(index))}
    >
      <Text
        typo={SIZE_TO_OPTION_TYPOGRAPHY[size]}
        bold
      >
        { Element }
      </Text>
    </Styled.OptionItemWrapper>
  ), [
    disabled,
    size,
    currentIndex,
    optionItemWidth,
    optionItemLeft,
    handleClickOptionItem,
  ])

  const Content = useMemo(() => (
    React.Children.map(children, renderOption)
  ), [
    children,
    renderOption,
  ])

  const Dividers = useMemo(() => (
    range(1, numItems)
      .map(index => (
        <Styled.DividerContainer
          key={`divider-${index.toString(36)}`}
          size={size}
          hidden={index === currentIndex || index === currentIndex + 1}
          style={{
            left: dividerItemLeft(index),
          }}
        >
          <Divider orientation="vertical" />
        </Styled.DividerContainer>
      ))
  ), [
    size,
    numItems,
    currentIndex,
    dividerItemLeft,
  ])

  const IndicatorComponent = useMemo(() => (
    <Styled.Indicator
      size={size}
      style={{
        width: optionItemWidth,
        transform: `translateX(${optionItemLeft(currentIndex)}px)`,
      }}
    >
      <Styled.IndicatorBox />
    </Styled.Indicator>
  ), [
    size,
    currentIndex,
    optionItemWidth,
    optionItemLeft,
  ])

  return (
    <Styled.Wrapper
      {...ownProps}
      ref={wrapperRef}
      disabled={disabled}
      size={size}
      wrapperWidth={width}
      data-testid={testId}
    >
      { IndicatorComponent }
      { Content }
      { Dividers }
    </Styled.Wrapper>
  )
}

export default forwardRef(LegacySegmentedControl)
