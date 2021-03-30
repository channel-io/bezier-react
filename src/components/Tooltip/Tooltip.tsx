/* External dependencies */
import React, { useState, useCallback, useMemo, useRef, forwardRef, Ref } from 'react'
import ReactDOM from 'react-dom'
import { isEmpty, isString } from 'lodash-es'

/* Internal dependencies */
import useMergeRefs from '../../hooks/useMergeRefs'
import { rootElement } from '../../utils/domUtils'
import { Typography } from '../../foundation'
import { Text } from '../Text'
import TooltipProps, { GetTooltipStyle, TooltipPosition } from './Tooltip.types'
import { Container, ContentWrapper, Content } from './Tooltip.styled'

export const TOOLTIP_TEST_ID = 'ch-design-system-tooltip'

/* TODO: (@daniel) keepInContainer스펙 추가필요 */
// function getOverflowPlacement({ placement, tooltip, keepInContainer }) {
//   if (!keepInContainer) {
//     return placement
//   }

//   const {
//     width: tooltipWidth,
//     height: tooltipHeight,
//     top: tooltipTop,
//     left: tooltipLeft,
//   } = tooltip.getBoundingClientRect()
//   const {
//     width: rootWidth,
//     height: rootHeight,
//     top: rootTop,
//     left: rootLeft,
//   } = rootElement.getBoundingClientRect()

//   const isOverTop = tooltipTop < rootTop
//   const isOverBottom = tooltipTop + tooltipHeight > rootTop + rootHeight
//   const isOverLeft = tooltipLeft < rootLeft
//   const isOverRight = tooltipLeft + tooltipWidth > rootLeft + rootWidth

//   if (isOverTop) {
//     if (isOverLeft) {
//       return TooltipPosition.BottomLeft
//     }
//     if (isOverRight) {
//       return TooltipPosition.BottomRight
//     }
//     return TooltipPosition.BottomCenter
//   }

//   if (isOverBottom) {
//     if (isOverLeft) {
//       return TooltipPosition.TopLeft
//     }
//     if (isOverRight) {
//       return TooltipPosition.TopRight
//     }
//     return TooltipPosition.TopCenter
//   }

//   if (isOverLeft) {
//     if (isOverTop) {
//       return TooltipPosition.RightTop
//     }
//     if (isOverBottom) {
//       return TooltipPosition.RightBottom
//     }
//     return TooltipPosition.RightCenter
//   }

//   if (isOverRight) {
//     if (isOverTop) {
//       return TooltipPosition.LeftTop
//     }
//     if (isOverBottom) {
//       return TooltipPosition.LeftBottom
//     }
//     return TooltipPosition.LeftCenter
//   }
// }

function getTooltipStyle({
  tooltipContainer,
  placement,
  offset,
  allowHover,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  keepInContainer,
}: GetTooltipStyle) {
  const {
    top: containerTop,
    left: containerLeft,
    width: containerWidth,
    height: containerHeight,
  } = tooltipContainer.getBoundingClientRect()

  let top = containerTop
  let left = containerLeft
  let translateX = 0
  let translateY = 0

  let offsetTop = 0
  let offsetRight = 0
  let offsetBottom = 0
  let offsetLeft = 0
  let offsetStyle = {}

  switch (placement) {
    case TooltipPosition.TopCenter:
    case TooltipPosition.TopLeft:
    case TooltipPosition.TopRight:
      translateY = -100
      offsetBottom = offset
      break
    case TooltipPosition.RightCenter:
    case TooltipPosition.RightTop:
    case TooltipPosition.RightBottom:
      left += containerWidth
      offsetLeft = offset
      break
    case TooltipPosition.BottomCenter:
    case TooltipPosition.BottomLeft:
    case TooltipPosition.BottomRight:
      top += containerHeight
      offsetTop = offset
      break
    case TooltipPosition.LeftCenter:
    case TooltipPosition.LeftTop:
    case TooltipPosition.LeftBottom:
      translateX = -100
      offsetRight = offset
      break
  }

  switch (placement) {
    case TooltipPosition.TopCenter:
    case TooltipPosition.BottomCenter:
      translateX = -50
      left += (containerWidth / 2)
      break
    case TooltipPosition.TopRight:
    case TooltipPosition.BottomRight:
      translateX = -100
      left += containerWidth
      break
    case TooltipPosition.RightCenter:
    case TooltipPosition.LeftCenter:
      translateY = -50
      top += (containerHeight / 2)
      break
    case TooltipPosition.RightBottom:
    case TooltipPosition.LeftBottom:
      translateY = -100
      top += containerHeight
      break
  }

  if (allowHover) {
    offsetStyle = {
      paddingTop: offsetTop,
      paddingRight: offsetRight,
      paddingBottom: offsetBottom,
      paddingLeft: offsetLeft,
    }
  } else {
    top += (offsetTop - offsetBottom)
    left += (offsetLeft - offsetRight)
  }

  return {
    position: 'fixed',
    top,
    left,
    transform: `translate(${translateX}%, ${translateY}%)`,
    ...offsetStyle,
  }
}

function Tooltip(
  {
    as,
    testId = TOOLTIP_TEST_ID,
    className,
    contentClassName,
    content = null,
    placement = TooltipPosition.BottomCenter,
    disabled = false,
    offset = 4,
    keepInContainer = false,
    allowHover = false,
    delayShow = 0,
    delayHide = 0,
    children,
    ...otherProps
  }: TooltipProps,
  forwardedRef: Ref<any>,
) {
  const [show, setShow] = useState(false)

  const tooltipRef = useRef<HTMLDivElement>(null)
  const tooltipWrapperRef = useRef<HTMLDivElement>(null)
  const tooltipContainerRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<number>()
  const mergedRef = useMergeRefs<HTMLDivElement>(tooltipRef, forwardedRef)

  const handleMouseEnter = useCallback(() => {
    if (disabled) {
      return
    }

    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    timerRef.current = setTimeout(() => {
      setShow(true)
    }, delayShow)
  }, [
    delayShow,
    disabled,
  ])

  const handleMouseLeave = useCallback(() => {
    if (disabled) {
      return
    }

    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    timerRef.current = setTimeout(() => {
      setShow(false)
    }, delayHide)
  }, [
    delayHide,
    disabled,
  ])

  const contentWrapperStyle = useMemo(() => {
    if (show && tooltipContainerRef.current) {
      return getTooltipStyle({
        tooltipContainer: tooltipContainerRef.current,
        placement,
        offset,
        allowHover,
        keepInContainer,
      })
    }

    return {}
  }, [
    show,
    placement,
    offset,
    allowHover,
    keepInContainer,
  ])

  const ContentComponent = useMemo(() => {
    if (isString(content)) {
      return (
        <Text type={Typography.Size14}>
          { content }
        </Text>
      )
    }

    return content
  }, [content])

  const TooltipComponent = useMemo(() => (
    <ContentWrapper
      ref={tooltipWrapperRef}
      disabled={disabled || isEmpty(content)}
      style={contentWrapperStyle}
    >
      <Content
        as={as}
        data-testid={testId}
        className={contentClassName}
        ref={mergedRef}
      >
        { ContentComponent }
      </Content>
    </ContentWrapper>
  ), [
    ContentComponent,
    as,
    content,
    contentClassName,
    contentWrapperStyle,
    disabled,
    mergedRef,
    testId,
  ])

  if (!children) {
    return null
  }

  return (
    <Container
      ref={tooltipContainerRef}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...otherProps}
    >
      { children }
      { show && ReactDOM.createPortal(TooltipComponent, rootElement) }
    </Container>
  )
}

export default forwardRef(Tooltip)
