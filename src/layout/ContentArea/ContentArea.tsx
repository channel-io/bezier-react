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

function ContentArea(
  {
    children,
    onResizing = noop,
    // FIXME: layoutDispatch로 이동
    // onOpenSplitView = noop,
    onResizerMouseDown = noop,
    onResizerMouseUp = noop,
    ...otherProps
  }: ContentAreaProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  const [isDragging, setIsDragging] = useState(false)

  const handleMouseMove = useCallback((e: HTMLElementEventMap['mousemove']) => {
    onResizing(e)
  }, [onResizing])

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true)
    onResizerMouseDown(e)
  }, [onResizerMouseDown])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
    onResizerMouseUp()
  }, [onResizerMouseUp])

  useEffect(() => {
    if (isDragging) {
      document.addEventListener!('mousemove', handleMouseMove, false)
    } else {
      document.removeEventListener!('mousemove', handleMouseMove, false)
    }
  }, [isDragging, handleMouseMove])

  document.addEventListener!('mouseup', handleMouseUp, false)

  return (
    <ContentAreaWrapper ref={forwardedRef} {...otherProps}>
      { /* <button type="button" onClick={onOpenSplitView}>스플릿 뷰 열기</button> */ }
      { children }
      <StyledHandle onMouseDown={handleMouseDown}/>
    </ContentAreaWrapper>
  )
}

export default forwardRef(ContentArea)
