/* External dependencies */
import React, { useEffect } from 'react'
import { noop } from 'lodash-es'

/* Internal dependencies */
import LayoutSideType from '../../../types/LayoutSideType'
import { SideArea } from '../SideArea'
import useLayoutDispatch from '../../../hooks/useLayoutDispatch'
import LayoutActions from '../../redux/LayoutActions'
import SidePanelContentProps from './SidePanelContent.types'

export const SIDE_PANEL_CONTENT_TEST_ID = 'ch-bezier-react-side-panel-content'

function SidePanelContent({
  testId = SIDE_PANEL_CONTENT_TEST_ID,
  children,
  onChangeSideWidth = noop,
}: SidePanelContentProps) {
  const dispatch = useLayoutDispatch()

  useEffect(() => {
    dispatch(LayoutActions.setShowSide({
      showSidePanel: true,
    }))

    return function cleanup() {
      dispatch(LayoutActions.setShowSide({
        showSidePanel: false,
      }))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <SideArea
      sideType={LayoutSideType.SidePanel}
      data-testid={testId}
      onChangeSideWidth={onChangeSideWidth}
    >
      { children }
    </SideArea>
  )
}

export default SidePanelContent
