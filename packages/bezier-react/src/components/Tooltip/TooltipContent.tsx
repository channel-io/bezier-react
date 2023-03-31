/* External dependencies */
import React, {
  useState,
  useCallback,
  useMemo,
  useRef,
  useEffect,
} from 'react'
import ReactDOM from 'react-dom'

/* Internal dependencies */
import { Typography } from '~/src/foundation'
import useMergeRefs from '~/src/hooks/useMergeRefs'
import useEventHandler from '~/src/hooks/useEventHandler'
import {
  isArray,
  isString,
  isEmpty,
} from '~/src/utils/typeUtils'
import { getRootElement } from '~/src/utils/domUtils'
import { Text } from '~/src/components/Text'
import {
  type TooltipContentProps,
  TooltipPosition,
} from './Tooltip.types'
import {
  getReplacement,
  getTooltipStyle,
} from './utils'
import {
  ContentWrapper,
  Content,
  EllipsisableContent,
} from './Tooltip.styled'

function getNewLineComponent(strContent: string) {
  return (
    strContent.split('\n').map((str, index) => {
      if (index === 0) {
        return (
          <Text key={str} typo={Typography.Size14}>
            { str }
          </Text>
        )
      }

      return (
        <React.Fragment key={str}>
          <br />
          <Text typo={Typography.Size14}>
            { str }
          </Text>
        </React.Fragment>
      )
    })
  )
}

function getContentComponent(content?: React.ReactNode) {
  if (isArray(content)) {
    return content.map(item => {
      if (isString(item)) {
        return getNewLineComponent(item)
      }

      return item
    })
  }

  if (isString(content)) {
    return getNewLineComponent(content)
  }

  return content
}

const TooltipContent: React.FC<TooltipContentProps> = ({
  as,
  content,
  contentClassName,
  contentInterpolation,
  disabled = false,
  container: givenContainer,
  keepInContainer = false,
  placement = TooltipPosition.BottomCenter,
  tooltipContainer,
  offset = 4,
  allowHover = false,
  testId,
  forwardedRef,
}) => {
  const tooltipRef = useRef<HTMLDivElement>(null)
  const tooltipWrapperRef = useRef<HTMLDivElement>(null)
  const mergedRef = useMergeRefs<HTMLDivElement>(tooltipRef, forwardedRef)
  const [replacement, setReplacement] = useState(placement)

  const container = givenContainer || getRootElement()

  const handleClickTooltip = useCallback((event: HTMLElementEventMap['click']) => {
    event.stopPropagation()
  }, [])

  useEventHandler(tooltipRef.current, 'click', handleClickTooltip)

  useEffect(() => {
    if (!tooltipRef.current) { return }
    const newPlacement = getReplacement({
      tooltip: tooltipRef.current,
      container,
      keepInContainer,
      placement,
    })
    setReplacement(newPlacement)
  }, [
    container,
    keepInContainer,
    placement,
  ])

  const ContentComponent = useMemo(() => getContentComponent(content), [content])

  const contentWrapperStyle = useMemo(() => {
    if (tooltipContainer) {
      return getTooltipStyle({
        tooltipContainer,
        placement: replacement,
        offset,
        allowHover,
      })
    }

    return {}
  }, [
    tooltipContainer,
    replacement,
    offset,
    allowHover,
  ])

  return (
    ReactDOM.createPortal(
      <ContentWrapper
        ref={tooltipWrapperRef}
        disabled={disabled || isEmpty(content)}
        style={contentWrapperStyle}
      >
        <Content
          as={as}
          data-testid={testId}
          className={contentClassName}
          interpolation={contentInterpolation}
          ref={mergedRef}
        >
          <EllipsisableContent>
            { ContentComponent }
          </EllipsisableContent>
        </Content>
      </ContentWrapper>,
      container,
    )
  )
}

export default TooltipContent
