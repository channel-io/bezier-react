import React, {
  useCallback,
  useState,
} from 'react'

import { useResizeDetector } from 'react-resize-detector'

import useMergeRefs from '~/src/hooks/useMergeRefs'

import * as Styled from './SegmentedControl.styled'

export function SegmentedControlIndicator({
  target,
  container,
  containerWidth,
}: {
  target: HTMLElement | null
  container: HTMLElement | null
  containerWidth?: number
}) {
  const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({})

  const updateIndicatorPosition = useCallback((node: HTMLElement | null) => {
    if (node && container && target) {
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

      setIndicatorStyle({
        '--bezier-react-segmented-control-indicator-transform': `translate(${left - containerLeft}px, ${top - containerTop}px)`,
        '--bezier-react-segmented-control-indicator-width': `${selectedElementWidth}px`,
        '--bezier-react-segmented-control-indicator-height': `${selectedElementHeight}px`,
      } as React.CSSProperties)
    }
    // NOTE: (@ed) to force update indicator position on container width change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    containerWidth,
    container,
    target,
  ])

  if (!target) { return null }

  return (
    <Styled.Indicator
      ref={updateIndicatorPosition}
      style={indicatorStyle}
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
  const [container, setContainer] = useState<HTMLElement | null>(null)

  const {
    width: containerWidth,
    ref: resizeDetectorRef,
  } = useResizeDetector<HTMLElement>()

  const containerRef = useMergeRefs(
    ...refs,
    resizeDetectorRef,
    setContainer as React.Ref<HTMLElement | null>,
  )

  const render = useCallback(() => (
    <SegmentedControlIndicator
      target={target}
      container={container}
      containerWidth={containerWidth}
    />
  ), [
    target,
    container,
    containerWidth,
  ])

  return {
    containerRef,
    render,
  }
}
