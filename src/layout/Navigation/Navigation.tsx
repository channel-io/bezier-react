/* External dependencies */
import React, {
  forwardRef,
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from 'react'
import { clamp } from 'lodash-es'

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
    testId,
    style,
    className,
    title,
    fixedTitle = false,
    withScroll = false,
    width = 240,
    minWidth = 240,
    maxWidth = 540,
    disableResize = false,
    onChangeWidth,
    children,
  }: NavigationProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  const navigationRef = useRef<HTMLDivElement | null>(null)
  const mergedRef = useMergeRefs<HTMLDivElement>(navigationRef, forwardedRef)
  const [currentWidth, setCurrentWidth] = useState<number>(clamp(width, minWidth, maxWidth))
  const [isDragging, setIsDragging] = useState(false)

  const ContentWrapper = useMemo(() => {
    if (!withScroll) {
      return (props) => props.children
    }
    return StyledContentWrapper
  }, [withScroll])

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
      document.addEventListener('mousemove', handleMouseMove, false)
    } else {
      document.removeEventListener('mousemove', handleMouseMove, false)
    }
  }, [isDragging, handleMouseMove])

  document.addEventListener('mouseup', handleMouseUp, false)

  return (
    <StyledNavigation
      ref={mergedRef}
      style={style}
      className={className}
      width={currentWidth}
      data-testid={testId}
      isDragging={isDragging}
    >
      <StyledHandle
        disable={disableResize}
        onMouseDown={handleMouseDown}
      />
      <ContentWrapper
        data-testid={NAV_SCROLL_TEST_ID}
      >
        { title && (
          <StyledTitleWrapper sticky={fixedTitle}>
            <Text
              bold
              typo={Typography.Size24}
              content={title}
            />
          </StyledTitleWrapper>
        ) }
        { children }
      </ContentWrapper>
    </StyledNavigation>
  )
}

export default forwardRef(Navigation)
