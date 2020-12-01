/* External dependencies */
import React, {
  useRef,
  useCallback,
  useEffect,
  useState,
  forwardRef,
  useMemo,
} from 'react'
import { throttle } from 'lodash-es'
import { document } from 'ssr-window'

/* Internal dependencies */
import { Icon } from '../../components/Icon'
import { Text } from '../../components/Text'
import useMergeRefs from '../../hooks/useMergeRefs'
import Typography from '../../styling/Typography'
import {
  StyledSidebarContainer,
  StyledSidebarPositioner,
  StyledSidebarPresenter,
  StyledTitleWrapper,
  TitleItemWrapper,
} from './Sidebar.styled'

const SIDEBAR_SCROLL_TEST_ID = 'ch-design-system-sidebar-scroll'

// extend(document, {
//   requestAnimationFrame() {},
// })

function Sidebar(
  {
    scrollRef,
    testId,
    className,
    scrollClassName,
    title,
    onScroll,
    children,
    // Added Props
    canClose,
    showSidebar,
    setShowSidebar,
    ...otherProps
  },
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const mergedContainerRef = useMergeRefs<HTMLDivElement>(containerRef, forwardedRef)
  const presenterRef = useRef<HTMLDivElement | null>(null)
  const [showChevron, setShowChevron] = useState(false)
  const [hoverPresenter, setHoverPresenter] = useState(false)
  // const sidebarRef = useRef<HTMLDivElement | null>(null)
  // const mergedRef = useMergeRef<HTMLDivElement>(SidebarRef, forwardedRef)

  // const [currendWidth, setCurrentWidth] = useState<number>(clamp(width, minWidth, maxWidth))

  const handlePresenterMouseEnter = useCallback(() => {
    if (showSidebar) {
      setShowChevron(true)
    }
  }, [
    showSidebar,
  ])

  const handlePresenterMouseLeave = useCallback(() => {
    setShowChevron(false)
  }, [
  ])

  const handleClickClose = useCallback(() => {
    setShowSidebar(false)
    setShowChevron(false)
    setHoverPresenter(true)
  }, [
    setShowSidebar,
  ])

  const TitleComponent = useMemo(() => (
    <TitleItemWrapper>
      <Text
        bold
        typo={Typography.Size24}
      >
        { title }
      </Text>
    </TitleItemWrapper>
  ), [
    title,
  ])

  const SwitcherComponent = useMemo(() => (
    <Icon
      name="chevron-left-double"
      onClick={handleClickClose}
    />
  ),
  [
    handleClickClose,
  ])

  const handleMouseMove = useCallback((ev) => {
    const mouseX = ev.clientX
    const containerLeft = containerRef.current?.getBoundingClientRect().right || 0
    const presenterRight = presenterRef.current?.getBoundingClientRect().right || 0

    if (mouseX < presenterRight && mouseX > containerLeft) {
      setHoverPresenter(true)
    } else {
      setHoverPresenter(false)
    }
  }, [])

  useEffect(() => {
    const throttledMove = throttle(handleMouseMove, 100)
    if (!showSidebar) {
      document.addEventListener!('mousemove', throttledMove, false)
    } else {
      document.removeEventListener!('mousemove', throttledMove, false)
    }
  }, [
    handleMouseMove,
    showSidebar,
  ])

  return (
    <StyledSidebarContainer
      ref={mergedContainerRef}
      data-testid={SIDEBAR_SCROLL_TEST_ID}
      width="240"
      showSidebar={showSidebar}
      {...otherProps}
    >
      <StyledSidebarPositioner>
        <StyledSidebarPresenter
          ref={presenterRef}
          showSidebar={showSidebar}
          isHover={hoverPresenter}
          width="240"
          onMouseEnter={handlePresenterMouseEnter}
          onMouseLeave={handlePresenterMouseLeave}
        >
          <StyledTitleWrapper>
            { TitleComponent }
            { showChevron && SwitcherComponent }
          </StyledTitleWrapper>
          <div>
            { children }
          </div>
        </StyledSidebarPresenter>
      </StyledSidebarPositioner>
    </StyledSidebarContainer>
  )
}

export default forwardRef(Sidebar)
