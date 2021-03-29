/* External dependencies */
import React, { useState, useCallback, useEffect, useMemo, useRef, forwardRef, Ref } from 'react'
import { isEmpty } from 'lodash-es'

/* Internal dependencies */
import useMergeRefs from '../../hooks/useMergeRefs'
import { rootElement } from '../../utils/domUtils'
import TooltipProps, { GetTooltipStyle, TooltipPosition } from './Tooltip.types'
import { Container, ContentWrapper, Content } from './Tooltip.styled'

export const TOOLTIP_TEST_ID = 'ch-design-system-tooltip'

function getTooltipStyle({ placement, offset, isOverHorizontal, isOverVertical }: GetTooltipStyle) {
  let paddingTop = 0
  let paddingRight = 0
  let paddingBottom = 0
  let paddingLeft = 0
  let top = 0
  let left = 0
  let translateX = 0
  let translateY = 0

  switch (placement) {
    case TooltipPosition.TopCenter:
      paddingBottom = offset
      left = 50
      translateX = -50
      translateY = -100
      break
    case TooltipPosition.TopLeft:
      paddingBottom = offset
      translateY = -100
      break
    case TooltipPosition.TopRight:
      paddingBottom = offset
      left = 100
      translateX = -100
      translateY = -100
      break
    case TooltipPosition.RightCenter:
      paddingLeft = offset
      top = 50
      left = 100
      translateX = 0
      translateY = -50
      break
    case TooltipPosition.RightTop:
      paddingLeft = offset
      left = 100
      break
    case TooltipPosition.RightBottom:
      paddingLeft = offset
      top = 100
      left = 100
      translateY = -100
      break
    case TooltipPosition.BottomCenter:
      paddingTop = offset
      top = 100
      left = 50
      translateX = -50
      break
    case TooltipPosition.BottomLeft:
      paddingTop = offset
      top = 100
      break
    case TooltipPosition.BottomRight:
      paddingTop = offset
      top = 100
      left = 100
      translateX = -100
      break
      break
    case TooltipPosition.LeftCenter:
      paddingRight = offset
      top = 50
      translateX = -100
      translateY = -50
      break
    case TooltipPosition.LeftTop:
      paddingRight = offset
      translateX = -100
      break
    case TooltipPosition.LeftBottom:
      paddingRight = offset
      top = 100
      translateX = -100
      translateY = -100
      break
  }

  if (isOverHorizontal) {
    [left, translateX] = [-translateX, -left];
    [paddingLeft, paddingRight] = [paddingRight, paddingLeft]
  }
  if (isOverVertical) {
    [top, translateY] = [-translateY, -top];
    [paddingTop, paddingBottom] = [paddingBottom, paddingTop]
  }

  return {
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
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
  const [tooltipAbsoluteStyle, setTooltipAbsoluteStyle] = useState<any>(null)
  const [absolutePositioned, setAbsolutePositioned] = useState(false)

  const tooltipRef = useRef<HTMLDivElement>(null)
  const tooltipWrapperRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<number>()
  const mergedRef = useMergeRefs<HTMLDivElement>(tooltipRef, forwardedRef)

  const handleMouseEnter = useCallback(() => {
    if (disabled) {
      return
    }

    if (rootElement && tooltipWrapperRef.current && !absolutePositioned) {
      const { top, left } = tooltipWrapperRef.current.getBoundingClientRect()
      setTooltipAbsoluteStyle({
        position: 'fixed',
        top,
        left,
      })
      setAbsolutePositioned(true)
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
    absolutePositioned,
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
    const {
      top,
      left,
      translateX,
      translateY,
      ...others
    } = getTooltipStyle({ placement, offset, isOverHorizontal, isOverVertical })

    if (tooltipAbsoluteStyle) {
      return {
        ...others,
        ...tooltipAbsoluteStyle,
      }
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
    tooltipAbsoluteStyle,
  ])

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

  if (!children) {
    return null
  }

  return (
    <Container
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
          { content }
        </Content>
      </ContentWrapper>
    </Container>
  )
}

export default forwardRef(Tooltip)
