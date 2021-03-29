/* External dependencies */
import React, { useState, useCallback, useEffect, useMemo, useRef, forwardRef, Ref } from 'react'
import { isEmpty, isString } from 'lodash-es'

/* Internal dependencies */
import useMergeRefs from '../../hooks/useMergeRefs'
import { rootElement } from '../../utils/domUtils'
import { Typography } from '../../foundation'
import { Text } from '../Text'
import TooltipProps, { GetTooltipStyle, TooltipPosition } from './Tooltip.types'
import { Container, ContentWrapper, Content } from './Tooltip.styled'

export const TOOLTIP_TEST_ID = 'ch-design-system-tooltip'

function getTooltipStyle({ placement, offset, isOverHorizontal, isOverVertical, allowHover }: GetTooltipStyle) {
  let offsetTop = 0
  let offsetRight = 0
  let offsetBottom = 0
  let offsetLeft = 0
  let top = 0
  let left = 0
  let translateX = 0
  let translateY = 0

  switch (placement) {
    case TooltipPosition.TopCenter:
      offsetBottom = offset
      left = 50
      translateX = -50
      translateY = -100
      break
    case TooltipPosition.TopLeft:
      offsetBottom = offset
      translateY = -100
      break
    case TooltipPosition.TopRight:
      offsetBottom = offset
      left = 100
      translateX = -100
      translateY = -100
      break
    case TooltipPosition.RightCenter:
      offsetLeft = offset
      top = 50
      left = 100
      translateX = 0
      translateY = -50
      break
    case TooltipPosition.RightTop:
      offsetLeft = offset
      left = 100
      break
    case TooltipPosition.RightBottom:
      offsetLeft = offset
      top = 100
      left = 100
      translateY = -100
      break
    case TooltipPosition.BottomCenter:
      offsetTop = offset
      top = 100
      left = 50
      translateX = -50
      break
    case TooltipPosition.BottomLeft:
      offsetTop = offset
      top = 100
      break
    case TooltipPosition.BottomRight:
      offsetTop = offset
      top = 100
      left = 100
      translateX = -100
      break
      break
    case TooltipPosition.LeftCenter:
      offsetRight = offset
      top = 50
      translateX = -100
      translateY = -50
      break
    case TooltipPosition.LeftTop:
      offsetRight = offset
      translateX = -100
      break
    case TooltipPosition.LeftBottom:
      offsetRight = offset
      top = 100
      translateX = -100
      translateY = -100
      break
  }

  if (isOverHorizontal) {
    [left, translateX] = [-translateX, -left];
    [offsetLeft, offsetRight] = [offsetRight, offsetLeft]
  }
  if (isOverVertical) {
    [top, translateY] = [-translateY, -top];
    [offsetTop, offsetBottom] = [offsetBottom, offsetTop]
  }

  if (allowHover) {
    return {
      paddingTop: offsetTop,
      paddingRight: offsetRight,
      paddingBottom: offsetBottom,
      paddingLeft: offsetLeft,
      top,
      left,
      translateX,
      translateY,
    }
  }

  return {
    marginTop: offsetTop,
    marginRight: offsetRight,
    marginBottom: offsetBottom,
    marginLeft: offsetLeft,
    top,
    left,
    translateX,
    translateY,
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
  const [isOverHorizontal, setOverHorizontal] = useState(false)
  const [isOverVertical, setOverVertical] = useState(false)
  const [tooltipAbsoluteStyle, setTooltipAbsoluteStyle] = useState<React.CSSProperties | null>(null)
  const [rootPositioned, setRootPositioned] = useState(false)

  const tooltipRef = useRef<HTMLDivElement>(null)
  const tooltipWrapperRef = useRef<HTMLDivElement>(null)
  const tooltipContainerRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<number>()
  const mergedRef = useMergeRefs<HTMLDivElement>(tooltipRef, forwardedRef)

  const handleMouseEnter = useCallback(() => {
    if (disabled) {
      return
    }

    if (rootElement && tooltipWrapperRef.current && !rootPositioned) {
      const { top, left } = tooltipWrapperRef.current.getBoundingClientRect()
      setTooltipAbsoluteStyle({
        position: 'fixed',
        top,
        left,
      })
      setRootPositioned(true)
      rootElement.appendChild(tooltipWrapperRef.current)
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
    rootPositioned,
  ])

  const handleMouseLeave = useCallback(() => {
    if (disabled) {
      return
    }

    if (tooltipContainerRef.current && tooltipWrapperRef.current && rootPositioned) {
      setTooltipAbsoluteStyle(null)
      setRootPositioned(false)
      tooltipContainerRef.current.appendChild(tooltipWrapperRef.current)
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
    rootPositioned,
  ])

  const contentWrapperStyle = useMemo(() => {
    const {
      top,
      left,
      translateX,
      translateY,
      ...others
    } = getTooltipStyle({ placement, offset, isOverHorizontal, isOverVertical, allowHover })

    if (tooltipAbsoluteStyle) {
      if (allowHover) {
        return {
          ...others,
          ...tooltipAbsoluteStyle,
        }
      }

      return tooltipAbsoluteStyle
    }

    return {
      ...others,
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(${translateX}%, ${translateY}%)`,
    }
  }, [
    offset,
    placement,
    isOverHorizontal,
    isOverVertical,
    allowHover,
    tooltipAbsoluteStyle,
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

  useEffect(() => {
    if (keepInContainer && tooltipRef.current) {
      const {
        width: tooltipWidth,
        height: tooltipHeight,
        top: tooltipTop,
        left: tooltipLeft,
      } = tooltipRef.current.getBoundingClientRect()
      const {
        width: documentWidth,
        height: documentHeight,
        top: documentTop,
        left: documentLeft,
      } = document.documentElement.getBoundingClientRect()

      const isOverTop = tooltipTop < documentTop
      const isOverBottom = tooltipTop + tooltipHeight > documentTop + documentHeight
      const isOverLeft = tooltipLeft < documentLeft
      const isOverRight = tooltipLeft + tooltipWidth > documentLeft + documentWidth

      if (isOverTop || isOverBottom) {
        setOverVertical(true)
      }
      if (isOverLeft || isOverRight) {
        setOverHorizontal(true)
      }

      return
    }

    setOverVertical(false)
    setOverHorizontal(false)
  }, [
    keepInContainer,
    placement,
  ])

  useEffect(() => (
    function cleanup() {
      if (tooltipWrapperRef.current) {
        tooltipWrapperRef.current.remove()
      }
    }
  ), [])

  if (!children) {
    if (tooltipContainerRef.current && tooltipWrapperRef.current && rootPositioned) {
      setTooltipAbsoluteStyle(null)
      setRootPositioned(false)
      tooltipContainerRef.current.appendChild(tooltipWrapperRef.current)
    }

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
      <ContentWrapper
        ref={tooltipWrapperRef}
        show={show}
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
    </Container>
  )
}

export default forwardRef(Tooltip)
