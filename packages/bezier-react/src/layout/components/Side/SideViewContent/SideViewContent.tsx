/* External dependencies */
import React from 'react'
import { noop } from 'lodash-es'

/* Internal dependencies */
import LayoutSideType from '~/src/layout/types/LayoutSideType'
import { SideArea } from '~/src/layout/components/Side/SideArea'
import SideViewContentProps from './SideViewContent.types'

// TODO: 테스트 코드 작성
const SIDE_VIEW_CONTENT_TEST_ID = 'bezier-react-side-view-content'

function SideViewContent({
  testId = SIDE_VIEW_CONTENT_TEST_ID,
  children,
  onChangeSideWidth = noop,
}: SideViewContentProps) {
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
