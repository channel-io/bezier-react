/* External dependencies */
import React, { useCallback } from 'react'

/* Internal dependencies */
import { styled } from '../../styling/Theme'
import { useLayoutDispatch, useLayoutState } from '../Client'
import { SideState } from '../Client/Client.types'
import { ActionType } from '../Client/utils/LayoutReducer'

const Div = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid orange;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  background-color: white;
`

function Content() {
  const dispatch = useLayoutDispatch()

  const { showNavigation } = useLayoutState()

  const handleCloseSidebar = useCallback(() => {
    dispatch({
      type: ActionType.SET_SIDE_STATE,
      payload: SideState.None,
    })
  }, [dispatch])

  const handleOpenSplitView = useCallback(() => {
    dispatch({
      type: ActionType.SET_SIDE_STATE,
      payload: SideState.SplitView,
    })
  }, [dispatch])

  const handleOpenSidePanel = useCallback(() => {
    dispatch({
      type: ActionType.SET_SIDE_STATE,
      payload: SideState.SidePanel,
    })
  }, [dispatch])

  const handleToggleNavigation = useCallback(() => {
    dispatch({
      type: ActionType.SET_SHOW_NAVIGATION,
      payload: !showNavigation,
    })
  }, [dispatch, showNavigation])

  return (
    <Div>
      <button type="button" onClick={handleCloseSidebar}>사이드바 닫기</button>
      <button type="button" onClick={handleOpenSplitView}>스플릭 뷰 열기</button>
      <button type="button" onClick={handleOpenSidePanel}>사이드 패널 열기</button>
      <button type="button" onClick={handleToggleNavigation}>네비게이션 토글</button>
    </Div>
  )
}

export default Content
