/* External dependencies */
import React from 'react'

/* Internal dependencies */
import useLayoutState from '../../../hooks/useLayoutState'
import useNavigationShowHandler from '../../../hooks/useNavigationShowHandler'
import useSideView from '../../../hooks/useSideView'
import { styled } from '../../../foundation'
import { Text } from '../../../components/Text'

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`

function Content() {
  const {
    showContentHeader,
    showCoverableHeader,
    sideWidth,
    showSideView,
    showSidePanel,
  } = useLayoutState()

  const [handleOpenSideView, handleCloseSideView] = useSideView()

  const handleToggleNavigation = useNavigationShowHandler()

  return (
    <Div>
      <div>
        <Text as="div">{ `showContentHeader: ${showContentHeader ? 'true' : 'false'}` }</Text>
        <Text as="div">{ `showCoverableHeader: ${showCoverableHeader ? 'true' : 'false'}` }</Text>
        <Text as="div">{ `sideWidth: ${sideWidth}px` }</Text>
        <Text as="div">{ `showSideView: ${showSideView ? 'true' : 'false'}` }</Text>
        <Text as="div">{ `showSidePanel: ${showSidePanel ? 'true' : 'false'}` }</Text>
      </div>
      <button type="button" onClick={handleOpenSideView}>사이드뷰 열기</button>
      <button type="button" onClick={handleCloseSideView}>사이드뷰 닫기</button>
      <button type="button" onClick={handleToggleNavigation}>네비게이션 토글</button>
    </Div>
  )
}

export default Content
