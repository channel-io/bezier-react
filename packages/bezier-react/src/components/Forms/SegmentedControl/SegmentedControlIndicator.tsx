import React, {
  useCallback,
  useLayoutEffect,
  useState,
} from 'react'

import { useResizeDetector } from 'react-resize-detector'

import useMergeRefs from '~/src/hooks/useMergeRefs'

import * as Styled from './SegmentedControl.styled'

export const SEGMENTED_CONTROL_INDICATOR_TEST_ID = 'bezier-react-segmented-control-indicator'

const SegmentedControlIndicator = function SegmentedControlIndicator({
  target,
  container,
  updateKey,
}: {
  target: HTMLElement | null
  container: HTMLElement | null
  updateKey?: string
}) {
  const [indicatorNode, setIndicatorNode] = useState<HTMLDivElement | null>(null)
  const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({})

  useLayoutEffect(function pauseTransitionOnMount() {
    let timer: NodeJS.Timeout | undefined

    if (indicatorNode) {
      setIndicatorStyle(prev => ({
        ...prev,
        transition: 'none',
      }))

      timer = setTimeout(() => {
        setIndicatorStyle(prev => ({
          ...prev,
          transition: undefined,
        }))
      }, Styled.indicatorTransitionMeta.duration)
    }

    return function cleanUp() {
      clearTimeout(timer)
    }
  }, [indicatorNode])

  useLayoutEffect(function updatePosition() {
    if (indicatorNode && container && target) {
      const {
        top,
        left,
        width: selectedElementWidth,
        height: selectedElementHeight,
      } = target.getBoundingClientRect()

      const {
        top: containerTop,
        left: containerLeft,
      } = container.getBoundingClientRect()

      setIndicatorStyle(prev => ({
        ...prev,
        '--bezier-react-segmented-control-indicator-transform': `translate(${left - containerLeft}px, ${top - containerTop}px)`,
        '--bezier-react-segmented-control-indicator-width': `${selectedElementWidth}px`,
        '--bezier-react-segmented-control-indicator-height': `${selectedElementHeight}px`,
      }))
    }
  }, [
    // NOTE: (@ed) to force update indicator position on container size change
    updateKey,
    indicatorNode,
    container,
    target,
  ])

  if (!target) { return null }

  return (
    <Styled.Indicator
      ref={setIndicatorNode}
      style={indicatorStyle}
      data-testid={SEGMENTED_CONTROL_INDICATOR_TEST_ID}
    />
  )
}

export function useSegmentedControlIndicator<Element extends HTMLElement>({
  target,
  refs,
}: {
  target: HTMLElement | null
  refs: React.Ref<Element>[]
}) {
  const [container, setContainer] = useState<Element | null>(null)

  const {
    width: containerWidth,
    height: containerHeight,
    ref: resizeDetectorRef,
  } = useResizeDetector<Element>()

  const containerSizeKey = `${containerWidth}-${containerHeight}`

  const containerRef = useMergeRefs(
    ...refs,
    resizeDetectorRef,
    setContainer,
  )

  const render = useCallback(() => (
    <SegmentedControlIndicator
      target={target}
      container={container}
      updateKey={containerSizeKey}
    />
  ), [
    target,
    container,
    containerSizeKey,
  ])

  return {
    containerRef,
    render,
  } as const
}
