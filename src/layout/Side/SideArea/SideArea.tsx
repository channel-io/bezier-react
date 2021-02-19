/* External dependencies */
import React, { forwardRef, useMemo } from 'react'

/* Internal dependencies */
import LayoutSideType from '../../../constants/LayoutSideType'
import useLayoutState from '../../../hooks/useLayoutState'
import { SideAreaWrapper } from './SideArea.styled'
import SideAreaProps from './SideArea.types'

export const SIDE_AREA_TEST_ID = 'ch-design-system-side-area'

function SidePanelArea(
  {
    testId = SIDE_AREA_TEST_ID,
    children,
    sideType,
    ...otherProps
  }: SideAreaProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  const { showSideView } = useLayoutState()
  // const [resizeBarRef, setResizeBarRef] = useState<HTMLDivElement | null>(null)

  const hideSideView = useMemo(() => (
    sideType === LayoutSideType.SideView && !showSideView
  ), [showSideView, sideType])

  if (hideSideView) {
    return null
  }

  return (
    <SideAreaWrapper
      data-testId={testId}
      sideType={sideType}
      ref={forwardedRef}
      {...otherProps}
    >
      { children }
    </SideAreaWrapper>
  )
}

export default forwardRef(SidePanelArea)
