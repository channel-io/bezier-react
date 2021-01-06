/* External dependencies */
import React, {
  useCallback,
  useState,
  forwardRef,
} from 'react'
import { noop } from 'lodash-es'
import { document } from 'ssr-window'

/* Internal dependencies */
import useEventHandler from '../../hooks/useEventHandler'
import ContentAreaProps from './ContentArea.types'
import { ContentAreaWrapper, StyledHandle } from './ContentArea.styled'

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
  const [isDragging, setIsDragging] = useState(false)

  const handleMouseMove = useCallback((e: HTMLElementEventMap['mousemove']) => {
    onResizerMouseMove(e)
  }, [onResizerMouseMove])

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
      <StyledHandle onMouseDown={handleMouseDown}/>
    </ContentAreaWrapper>
  )
}

export default forwardRef(ContentArea)
