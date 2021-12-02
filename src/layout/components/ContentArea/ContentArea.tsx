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
import useMergeRefs from '../../../hooks/useMergeRefs'
import { CONTENT_MIN_WIDTH } from '../../LayoutSizes'
import ColumnType from '../../types/ColumnType'
import LayoutActions from '../../redux/LayoutActions'
import ContentAreaProps from './ContentArea.types'
import { ContentAreaWrapper } from './ContentArea.styled'

// TODO: 테스트 코드 작성
const CONTENT_AREA_TEST_ID = 'bezier-react-content-area'

function ContentArea(
  {
    style,
    className,
    testId = CONTENT_AREA_TEST_ID,
    children,
    onFocus,
    onBlur,
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
      const payload = {
        key: currentKey,
        ref: {
          target: contentRef.current,
          minWidth: CONTENT_MIN_WIDTH,
          // NOTE: maxWidth, initialWidth 는 존재하지 않음
          maxWidth: 0,
          initialWidth: 0,
        },
        columnType: ColumnType.Content,
      }

      dispatch(LayoutActions.addColumnRef(payload))
    }

    return function cleanUp() {
      const payload = {
        key: currentKey,
      }

      dispatch(LayoutActions.removeColumnRef(payload))
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
      onFocus={onFocus}
      onBlur={onBlur}
      {...otherProps}
    >
      { children }
    </ContentAreaWrapper>
  )
}

export default forwardRef(ContentArea)
