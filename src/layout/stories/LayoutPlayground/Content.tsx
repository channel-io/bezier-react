/* External dependencies */
import React, { useCallback } from 'react'

/* Internal dependencies */
import useLayoutDispatch from '../../../hooks/useLayoutDispatch'
import useLayoutState from '../../../hooks/useLayoutState'
import { styled } from '../../../foundation'
import { ActionType } from '../../Client/utils/LayoutReducer'

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  background-color: white;
`

function Content() {
  const dispatch = useLayoutDispatch()

  const { showNavigation } = useLayoutState()

  const handleOpenSideView = useCallback(() => {
    dispatch({
      type: ActionType.OPEN_SIDE_VIEW,
    })
  }, [dispatch])

  const handleCloseSideView = useCallback(() => {
    dispatch({
      type: ActionType.CLOSE_SIDE_VIEW,
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
      <button type="button" onClick={handleOpenSideView}>사이드뷰 열기</button>
      <button type="button" onClick={handleCloseSideView}>사이드뷰 닫기</button>
      <button type="button" onClick={handleToggleNavigation}>네비게이션 토글</button>
    </Div>
  )
}

export default Content
