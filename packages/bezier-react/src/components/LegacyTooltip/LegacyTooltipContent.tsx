'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import * as React from 'react'
import ReactDOM from 'react-dom'

import classNames from 'classnames'

import useEventHandler from '~/src/hooks/useEventHandler'
import useMergeRefs from '~/src/hooks/useMergeRefs'
import { isArray, isEmpty, isString } from '~/src/utils/type'

import { Text } from '~/src/components/Text'
import { InvertedThemeProvider } from '~/src/components/ThemeProvider'
import { useRootElement } from '~/src/components/WindowProvider'

import { type LegacyTooltipContentProps } from './LegacyTooltip.types'
import { getReplacement, getTooltipStyle } from './utils'

import styles from './LegacyTooltip.module.scss'

function getNewLineComponent(strContent: string) {
  return strContent.split('\n').map((str, index) => {
    if (index === 0) {
      return (
        <Text
          key={str}
          typo="14"
        >
          {str}
        </Text>
      )
    }

    return (
      <React.Fragment key={str}>
        <br />
        <Text typo="14">{str}</Text>
      </React.Fragment>
    )
  })
}

function getContentComponent(content?: React.ReactNode) {
  if (isArray(content)) {
    return content.map((item) => {
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

export const LegacyTooltipContent: React.FC<LegacyTooltipContentProps> = ({
  as,
  content,
  contentStyle,
  contentClassName,
  contentWrapperClassName,
  contentWrapperStyle: givenContentWrapperStyle,
  disabled = false,
  keepInContainer = false,
  placement = 'bottom-center',
  tooltipContainer,
  offset = 4,
  allowHover = false,
  forwardedRef,
  ...rest
}) => {
  const rootElement = useRootElement()

  const tooltipRef = useRef<HTMLDivElement>(null)
  const tooltipWrapperRef = useRef<HTMLDivElement>(null)
  const mergedRef = useMergeRefs<HTMLDivElement>(tooltipRef, forwardedRef)
  const [replacement, setReplacement] = useState(placement)

  const handleClickTooltip = useCallback(
    (event: HTMLElementEventMap['click']) => {
      event.stopPropagation()
    },
    []
  )

  useEventHandler(tooltipRef.current, 'click', handleClickTooltip)

  useEffect(() => {
    if (!tooltipRef.current) {
      return
    }
    const newPlacement = getReplacement({
      tooltip: tooltipRef.current,
      keepInContainer,
      placement,
      rootElement,
    })
    setReplacement(newPlacement)
  }, [rootElement, keepInContainer, placement])

  const ContentComponent = useMemo(
    () => getContentComponent(content),
    [content]
  )

  const contentWrapperStyle = useMemo(() => {
    if (tooltipContainer) {
      return {
        ...givenContentWrapperStyle,
        ...getTooltipStyle({
          tooltipContainer,
          placement: replacement,
          offset,
          allowHover,
        }),
      }
    }

    return {}
  }, [
    tooltipContainer,
    givenContentWrapperStyle,
    replacement,
    offset,
    allowHover,
  ])

  const Comp = as ?? 'div'

  return ReactDOM.createPortal(
    <InvertedThemeProvider>
      <div
        style={contentWrapperStyle}
        className={classNames(
          styles.LegacyTooltipContentWrapper,
          (disabled || isEmpty(content)) && styles.disabled,
          contentWrapperClassName
        )}
        ref={tooltipWrapperRef}
      >
        <Comp
          style={contentStyle}
          className={classNames(styles.LegacyTooltipContent, contentClassName)}
          ref={mergedRef}
          {...rest}
        >
          <Text
            color="text-neutral"
            truncated={20}
            typo="13"
          >
            {ContentComponent}
          </Text>
        </Comp>
      </div>
    </InvertedThemeProvider>,
    rootElement
  )
}
