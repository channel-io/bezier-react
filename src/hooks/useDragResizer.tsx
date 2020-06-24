/* External dependencies */
import React, { useRef, useState, useCallback } from 'react'
import styled from 'styled-components'
import _ from 'lodash'

interface StyledWrapperProps {
  isDragging: boolean
  width: number
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  position: relative;
  flex: none;
  height: 100%;
  user-select: ${props => (props.isDragging ? 'none' : 'auto')};
  width: ${props => props.width}px;
`

const StyledHandle = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: -8px;
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

export default function useDragResizer(minWidth, maxWidth) {
  return function Wrapper({ children }) {
    const wrapperRef = useRef(null)
    const [width, setWidth] = useState<number>(minWidth)
    const [isDragging, setIsDragging] = useState(false)

    const handleMouseMove = useCallback((e: MouseEvent) => {
      window.requestAnimationFrame(() => setWidth(
        _.clamp(
          e.pageX - wrapperRef.current?.offsetLeft,
          minWidth,
          maxWidth,
        ),
      ))
    }, [wrapperRef])

    const handleMouseDown = useCallback(() => {
      setIsDragging(true)
      document.addEventListener('mousemove', handleMouseMove, false)
    }, [handleMouseMove])

    const handleMouseUp = useCallback(() => {
      setIsDragging(false)
      document.removeEventListener('mousemove', handleMouseMove, false)
    }, [handleMouseMove])

    document.addEventListener('mouseup', handleMouseUp, false)

    return (
      <StyledWrapper
        ref={wrapperRef}
        width={width}
        isDragging={isDragging}
      >
        { children }
        <StyledHandle onMouseDown={handleMouseDown}/>
      </StyledWrapper>
    )
  }
}
