/* External dependencies */
import React, { useEffect } from 'react'
import { noop } from 'lodash-es'

/* Internal dependencies */
import LayoutSideType from '../../../constants/LayoutSideType'
import { SideArea } from '../SideArea'
import useLayoutDispatch from '../../../hooks/useLayoutDispatch'
import { ActionType } from '../../Client/utils/LayoutReducer'
import SideViewContentProps from './SideViewContent.types'

export const SIDE_VIEW_CONTENT_TEST_ID = 'ch-design-system-side-view-content'

function SideViewContent({
  testId = SIDE_VIEW_CONTENT_TEST_ID,
  children,
  onChangeSideWidth = noop,
}: SideViewContentProps) {
  const dispatch = useLayoutDispatch()

  useEffect(() => {
    dispatch({
      type: ActionType.SET_SHOW_SIDE,
      payload: {
        showSideView: true,
      },
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <SideArea
      data-testId={testId}
      sideType={LayoutSideType.SideView}
      onChangeSideWidth={onChangeSideWidth}
    >
      { children }
    </SideArea>
  )
}

export default SideViewContent
