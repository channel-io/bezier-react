/* External dependencies */
import React, { useCallback } from 'react'

/* Internal dependencies */
import { styled } from 'Foundation'
import { Text } from 'Components/Text'
import { LayoutActions } from 'Layout/redux'
import useLayoutDispatch from 'Layout/hooks/useLayoutDispatch'
import useLayoutState from 'Layout/hooks/useLayoutState'

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`

interface ContentProps {
  showSidePanel: boolean
  showSideView: boolean
  onOpenSideView: () => void
  onCloseSideView: () => void
}

function Content({
  showSidePanel,
  showSideView,
  onOpenSideView,
  onCloseSideView,
}: ContentProps) {
  const dispatch = useLayoutDispatch()

  const {
    showContentHeader,
    showCoverableHeader,
    showNavigation,
    sideWidth,
  } = useLayoutState()

  const handleToggleNavigation = useCallback(() => {
    dispatch(LayoutActions.setShowNavigation(!showNavigation))
  }, [
    dispatch,
    showNavigation,
  ])

  return (
    <Div>
      <div>
        <Text as="div">{ `showContentHeader: ${showContentHeader ? 'true' : 'false'}` }</Text>
        <Text as="div">{ `showCoverableHeader: ${showCoverableHeader ? 'true' : 'false'}` }</Text>
        <Text as="div">{ `sideWidth: ${sideWidth}px` }</Text>
        <Text as="div">{ `showSideView: ${showSideView ? 'true' : 'false'}` }</Text>
        <Text as="div">{ `showSidePanel: ${showSidePanel ? 'true' : 'false'}` }</Text>
      </div>
      <button type="button" onClick={onOpenSideView}>사이드뷰 열기</button>
      <button type="button" onClick={onCloseSideView}>사이드뷰 닫기</button>
      <button type="button" onClick={handleToggleNavigation}>네비게이션 토글</button>
    </Div>
  )
}

export default Content
