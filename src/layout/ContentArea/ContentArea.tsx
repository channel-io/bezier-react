/* External dependencies */
import React, {
  useCallback,
  useState,
  forwardRef,
  useEffect,
} from 'react'
import { noop } from 'lodash-es'
import { document } from 'ssr-window'

/* Internal dependencies */
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

  useEffect(() => {
    if (isDragging) {
      document.addEventListener!('mousemove', handleMouseMove, false)
    } else {
      document.removeEventListener!('mousemove', handleMouseMove, false)
    }
  }, [isDragging, handleMouseMove])

  document.addEventListener!('mouseup', handleMouseUp, false)

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
