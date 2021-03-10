/* External dependencies */
import React, { useEffect } from 'react'
import { noop } from 'lodash-es'

/* Internal dependencies */
import LayoutSideType from '../../../constants/LayoutSideType'
import { SideArea } from '../SideArea'
import { ActionType } from '../../Client/utils/LayoutReducer'
import useLayoutDispatch from '../../../hooks/useLayoutDispatch'
import SidePanelContentProps from './SidePanelContent.types'

export const SIDE_PANEL_CONTENT_TEST_ID = 'ch-design-system-side-panel-content'

function SidePanelContent({
  testId = SIDE_PANEL_CONTENT_TEST_ID,
  children,
  onChangeSideWidth = noop,
}: SidePanelContentProps) {
  const dispatch = useLayoutDispatch()

  useEffect(() => {
    dispatch({
      type: ActionType.SET_SHOW_SIDE,
      payload: {
        showSidePanel: true,
      },
    })

    return function cleanup() {
      dispatch({
        type: ActionType.SET_SHOW_SIDE,
        payload: {
          showSidePanel: false,
        },
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <SideArea
      sideType={LayoutSideType.SidePanel}
      data-testId={testId}
      onChangeSideWidth={onChangeSideWidth}
    >
      { children }
    </SideArea>
  )
}

export default SidePanelContent
