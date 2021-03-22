/* External dependencies */
import React, { useEffect } from 'react'
import { noop } from 'lodash-es'

/* Internal dependencies */
import LayoutSideType from '../../../types/LayoutSideType'
import { SideArea } from '../SideArea'
import useLayoutDispatch from '../../../hooks/useLayoutDispatch'
import LayoutActions from '../../redux/LayoutActions'
import SideViewContentProps from './SideViewContent.types'

export const SIDE_VIEW_CONTENT_TEST_ID = 'ch-design-system-side-view-content'

function SideViewContent({
  testId = SIDE_VIEW_CONTENT_TEST_ID,
  children,
  onChangeSideWidth = noop,
}: SideViewContentProps) {
  const dispatch = useLayoutDispatch()

  useEffect(() => {
    dispatch(LayoutActions.setShowSide({
      showSideView: true,
    }))

    return function cleanup() {
      dispatch(LayoutActions.setShowSide({
        showSideView: false,
      }))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <SideArea
      data-testid={testId}
      sideType={LayoutSideType.SideView}
      onChangeSideWidth={onChangeSideWidth}
    >
      { children }
    </SideArea>
  )
}

export default SideViewContent
