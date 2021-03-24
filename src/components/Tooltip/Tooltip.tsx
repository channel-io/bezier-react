/* External dependencies */
import React, { useState, useCallback, useMemo, useRef, forwardRef, Ref } from 'react'
import { isEmpty } from 'lodash-es'

/* Internal dependencies */
import useMergeRefs from '../../hooks/useMergeRefs'
import { Text } from '../Text'
import { Typography } from '../../foundation'
import TooltipProps, { GetTooltipStyle, TooltipPosition } from './Tooltip.types'
import { Container, ContentWrapper, Content } from './Tooltip.styled'

export const TOOLTIP_TEST_ID = 'ch-design-system-tooltip'

function getTooltipStyle({ placement, offset }: GetTooltipStyle) {
  let paddingTop = 0
  let paddingRight = 0
  let paddingBottom = 0
  let paddingLeft = 0
  let top = '0'
  let left = '0'
  let transform = 'translate(0, 0)'

  switch (placement) {
    case TooltipPosition.TopCenter:
      paddingBottom = offset
      left = '50%'
      transform = 'translate(-50%, -100%)'
      break
    case TooltipPosition.TopLeft:
      paddingBottom = offset
      transform = 'translate(0, -100%)'
      break
    case TooltipPosition.TopRight:
      paddingBottom = offset
      left = '100%'
      transform = 'translate(-100%, -100%)'
      break
    case TooltipPosition.RightCenter:
      paddingLeft = offset
      top = '50%'
      left = '100%'
      transform = 'translate(0, -50%)'
      break
    case TooltipPosition.RightTop:
      paddingLeft = offset
      left = '100%'
      break
    case TooltipPosition.RightBottom:
      paddingLeft = offset
      top = '100%'
      left = '100%'
      transform = 'translate(0, -100%)'
      break
    case TooltipPosition.BottomCenter:
      paddingTop = offset
      top = '100%'
      left = '50%'
      transform = 'translate(-50%, 0)'
      break
    case TooltipPosition.BottomLeft:
      paddingTop = offset
      top = '100%'
      break
    case TooltipPosition.BottomRight:
      paddingTop = offset
      top = '100%'
      left = '100%'
      transform = 'translate(-100%, 0)'
      break
    case TooltipPosition.LeftCenter:
      paddingRight = offset
      top = '50%'
      transform = 'translate(-100%, -50%)'
      break
    case TooltipPosition.LeftTop:
      paddingRight = offset
      transform = 'translate(-100%, 0)'
      break
    case TooltipPosition.LeftBottom:
      paddingRight = offset
      top = '100%'
      transform = 'translate(-100%, -100%)'
      break
  }

  return {
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    top,
    left,
    transform,
  }
}

function Tooltip(
  {
    as,
    testId = TOOLTIP_TEST_ID,
    className,
    content = null,
    placement = TooltipPosition.BottomCenter,
    disabled = false,
    offset = 5,
    children,
  }: TooltipProps,
  forwardedRef: Ref<any>,
) {
  const [show, setShow] = useState(false)

  const tooltipRef = useRef<HTMLDivElement>(null)
  const mergedRef = useMergeRefs<HTMLDivElement>(tooltipRef, forwardedRef)

  const handleMouseEnter = useCallback(() => {
    setShow(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setShow(false)
  }, [])

  const contentWrapperStyle = useMemo(() => (
    getTooltipStyle({ placement, offset })
  ), [
    offset,
    placement,
  ])

  return (
    <Container
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      { children }
      <ContentWrapper
        show={show}
        disabled={disabled || isEmpty(content)}
        style={contentWrapperStyle}
      >
        <Content
          as={as}
          className={className}
          data-testid={testId}
          ref={mergedRef}
        >
          <Text type={Typography.Size13}>
            { content }
          </Text>
        </Content>
      </ContentWrapper>
    </Container>
  )
}

export default forwardRef(Tooltip)
