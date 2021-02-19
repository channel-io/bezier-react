/* External dependencies */
import React, {
  useCallback,
  useState,
  forwardRef,
} from 'react'
import { noop } from 'lodash-es'
import { document } from 'ssr-window'

/* Internal dependencies */
import useLayoutState from '../../hooks/useLayoutState'
import useEventHandler from '../../hooks/useEventHandler'
import ContentAreaProps from './ContentArea.types'
import { ContentAreaWrapper } from './ContentArea.styled'

export const CONTENT_AREA_TEST_ID = 'ch-design-system-content-area'

function ContentArea(
  {
    style,
    className,
    testId = CONTENT_AREA_TEST_ID,
    children,
    onResizerMouseDown = noop,
    onResizerMouseMove = noop,
    ...otherProps
  }: ContentAreaProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { showSideView } = useLayoutState()

  const [isDragging, setIsDragging] = useState(false)

  const handleMouseMove = useCallback((e: HTMLElementEventMap['mousemove']) => {
    onResizerMouseMove(e)
  }, [onResizerMouseMove])

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true)
    onResizerMouseDown(e)
  }, [onResizerMouseDown])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  useEventHandler(document, 'mousemove', handleMouseMove, isDragging)
  useEventHandler(document, 'mouseup', handleMouseUp)

  return (
    <ContentAreaWrapper
      style={style}
      className={className}
      data-testid={testId}
      ref={forwardedRef}
      {...otherProps}
    >
      { children }
      { /* <StyledHandle
        withSideView={showSideView}
        onMouseDown={handleMouseDown}
      /> */ }
    </ContentAreaWrapper>
  )
}

export default forwardRef(ContentArea)
