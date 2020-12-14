/* External dependencies */
import React, { useCallback, useState, forwardRef, useEffect } from 'react'
import { noop } from 'lodash-es'
import { document } from 'ssr-window'

/* Internal dependencies */
import { styled } from '../../styling/Theme'

const Div = styled.div`
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: flex;
  flex-direction: colunmn;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 30px;
`

const ContentWrapper = styled(Div)`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  position: relative;
`

export const StyledHandle = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: -8px;
  z-index: 10000;
  width: 16px;
  height: 100%;
  margin: 0 auto;
  cursor: col-resize;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 7px;
    width: 2px;
    height: 100%;
    opacity: 0;
    background-color: ${props => props.theme?.colors?.background3};
    transition: opacity 0.2s;
  }
  &:hover::before {
    opacity: 1;
  }
`

function ContentArea({
  onResizing = noop,
  onOpenSplitView = noop,
}, forwardedRef: React.Ref<HTMLDivElement>) {
  const [isDragging, setIsDragging] = useState(false)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    onResizing(e)
  }, [onResizing])

  const handleMouseDown = useCallback(() => {
    setIsDragging(true)
  }, [])

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
    <ContentWrapper ref={forwardedRef}>
      Content
      <button type="button" onClick={onOpenSplitView}>스플릿 뷰 열기</button>
      <StyledHandle onMouseDown={handleMouseDown}/>
    </ContentWrapper>
  )
}

export default forwardRef(ContentArea)
