/* External dependencies */
import React, {
  forwardRef,
  useMemo,
  useLayoutEffect,
  useRef,
} from 'react'
import { v4 as uuid } from 'uuid'

/* Internal dependencies */
import useLayoutDispatch from '../../hooks/useLayoutDispatch'
import useMergeRefs from '../../hooks/useMergeRefs'
import { CONTENT_MIN_WIDTH } from '../../constants/LayoutSizes'
import { ActionType as LayoutActionType } from '../Client/utils/LayoutReducer'
import ColumnType from '../../types/ColumnType'
import ContentAreaProps from './ContentArea.types'
import { ContentAreaWrapper } from './ContentArea.styled'

export const CONTENT_AREA_TEST_ID = 'ch-design-system-content-area'

function ContentArea(
  {
    style,
    className,
    testId = CONTENT_AREA_TEST_ID,
    children,
    ...otherProps
  }: ContentAreaProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  const dispatch = useLayoutDispatch()

  const contentRef = useRef<HTMLDivElement | null>(null)
  const mergedContentRef = useMergeRefs<HTMLDivElement>(forwardedRef, contentRef)

  const currentKey = useMemo(() => uuid(), [])

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
    <ContentAreaWrapper
      style={style}
      className={className}
      data-testid={testId}
      ref={mergedContentRef}
      {...otherProps}
    >
      { children }
    </ContentAreaWrapper>
  )
}

export default forwardRef(ContentArea)
