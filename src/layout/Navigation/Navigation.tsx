/* External dependencies */
import React, {
  forwardRef,
  useState,
  useRef,
  useEffect,
  useCallback,
} from 'react'
import { clamp } from 'lodash-es'
import { document } from 'ssr-window'

/* Internal dependencies */
import useMergeRefs from '../../hooks/useMergeRefs'
import { Text } from '../../components/Text'
import Typography from '../../styling/Typography'
import {
  StyledNavigation,
  StyledTitleWrapper,
  StyledContentWrapper,
  StyledHandle,
} from './Navigation.styled'
import NavigationProps from './Navigation.types'

export const NAV_SCROLL_TEST_ID = 'ch-design-system-nav-scroll'

function Navigation(
  {
    scrollRef,
    testId,
    style,
    className,
    scrollClassName,
    title,
    fixedTitle = false,
    withScroll = false,
    width = 240,
    minWidth = 240,
    maxWidth = 540,
    disableResize = false,
    onChangeWidth,
    onScroll,
    children,
    ...otherProps
  }: NavigationProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  const navigationRef = useRef<HTMLDivElement | null>(null)
  const mergedRef = useMergeRefs<HTMLDivElement>(navigationRef, forwardedRef)
  const [currentWidth, setCurrentWidth] = useState<number>(clamp(width, minWidth, maxWidth))
  const [isDragging, setIsDragging] = useState(false)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (disableResize) { return }

    window.requestAnimationFrame(() => setCurrentWidth(
      clamp(
        e.pageX - (navigationRef.current?.offsetLeft || 0),
        minWidth,
        maxWidth,
      ),
    ))
  }, [
    navigationRef,
    disableResize,
    minWidth,
    maxWidth,
  ])

  const handleMouseDown = useCallback(() => {
    setIsDragging(true)
  }, [])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  useEffect(() => {
    if (onChangeWidth) {
      onChangeWidth(currentWidth)
    }
  }, [currentWidth, onChangeWidth])

  useEffect(() => {
    setCurrentWidth(clamp(width, minWidth, maxWidth))
  }, [width, minWidth, maxWidth])

  useEffect(() => {
    if (isDragging) {
      document.addEventListener!('mousemove', handleMouseMove, false)
    } else {
      document.removeEventListener!('mousemove', handleMouseMove, false)
    }
  }, [isDragging, handleMouseMove])

  document.addEventListener!('mouseup', handleMouseUp, false)

  return (
    <StyledNavigation
      ref={mergedRef}
      style={style}
      className={className}
      width={currentWidth}
      data-testid={testId}
      isDragging={isDragging}
      {...otherProps}
    >
      { (title && fixedTitle) && (
        <StyledTitleWrapper fixed>
          <Text
            bold
            typo={Typography.Size24}
          >
            { title }
          </Text>
        </StyledTitleWrapper>
      ) }
      <StyledContentWrapper
        ref={scrollRef}
        className={scrollClassName}
        withScroll={withScroll}
        data-testid={NAV_SCROLL_TEST_ID}
        onScroll={onScroll}
      >
        { (title && !fixedTitle) && (
          <StyledTitleWrapper>
            <Text
              bold
              typo={Typography.Size24}
            >
              { title }
            </Text>
          </StyledTitleWrapper>
        ) }
        { children }
      </StyledContentWrapper>
      <StyledHandle
        disable={disableResize}
        onMouseDown={handleMouseDown}
      />
    </StyledNavigation>
  )
}

export default forwardRef(Navigation)
