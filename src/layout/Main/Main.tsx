/* External dependencies */
import React, {
  forwardRef,
  useRef,
  useMemo,
  useLayoutEffect,
} from 'react'
import { isNil } from 'lodash-es'
import { v4 as uuid } from 'uuid'

/* Internal dependencies */
import useLayoutDispatch from '../../hooks/useLayoutDispatch'
import useLayoutState from '../../hooks/useLayoutState'
import { CONTENT_MIN_WIDTH } from '../../constants/LayoutSizes'
import { HeaderArea } from '../HeaderArea'
import { ContentArea } from '../ContentArea'
import { ActionType as LayoutActionType } from '../Client/utils/LayoutReducer'
import ColumnType from '../../types/ColumnType'
import { MainWrapper } from './Main.styled'
import MainProps from './Main.types'

export const LAYOUT_MAIN_TEST_ID = 'ch-design-system-main'

function Main(
  {
    testId = LAYOUT_MAIN_TEST_ID,
    content,
    ContentHeaderComponent,
    CoverableHeaderComponent,
    SidePanelComponent,
    SideViewComponent,
    children,
    ...otherProps
  }: MainProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  const dispatch = useLayoutDispatch()
  const { sideWidth, showSideView } = useLayoutState()

  const currentKey = useMemo(() => uuid(), [])

  const contentRef = useRef<HTMLDivElement | null>(null)

  const hasSide = !isNil(SidePanelComponent) || showSideView
  const hasHeader = !isNil(ContentHeaderComponent || CoverableHeaderComponent)

  useLayoutEffect(() => {
    if (contentRef.current) {
      dispatch({
        type: LayoutActionType.ADD_COLUMN_REF,
        payload: {
          key: currentKey,
          ref: {
            target: contentRef.current,
            minWidth: CONTENT_MIN_WIDTH,
            // NOTE: maxWidth, initialWidth 는 존재하지 않음
            maxWidth: 0,
            initialWidth: 0,
          },
          columnType: ColumnType.Content,
        },
      })
    }

    return function cleanUp() {
      dispatch({
        type: LayoutActionType.REMOVE_COLUMN_REF,
        payload: {
          key: currentKey,
        },
      })
    }
  }, [
    dispatch,
    currentKey,
  ])

  return (
    <MainWrapper
      data-testId={testId}
      ref={forwardedRef}
      hasHeader={hasHeader}
      hasSide={hasSide}
      sideWidth={sideWidth}
      {...otherProps}
    >
      <HeaderArea
        hasHeader={hasHeader}
        ContentHeaderComponent={ContentHeaderComponent}
        CoverableHeaderComponent={CoverableHeaderComponent}
      />
      <ContentArea
        ref={contentRef}
      >
        { children }
      </ContentArea>

      <SidePanelComponent />
      <SideViewComponent />
    </MainWrapper>
  )
}

export default forwardRef(Main)
