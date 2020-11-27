/* External dependencies */
import React, { useState, useCallback, useRef } from 'react'
import { set } from 'lodash-es'

/* Internal dependencies */
import NavigationsProps, { NavigationRefsProps } from './Navigations.types'
import { NavigationsWrapper } from './Navigations.styled'

function Navigations({ children }: NavigationsProps) {
  const [allowMouseMove, setAllowMouseMove] = useState(false)
  const navigationRefs = useRef<{ [i: number]: NavigationRefsProps }>({})
  const currentIndex = useRef(0)
  const initialIndex = useRef(0)
  const initialPosition = useRef(0)

  const handleMouseDown = useCallback((event: HTMLElementEventMap['mousedown'], optionIndex: number) => {
    setAllowMouseMove(true)

    for (const index in navigationRefs.current) {
      if (navigationRefs.current[index]) {
        const currentNode = navigationRefs.current[index]
        currentNode.initialWidth = currentNode.target.clientWidth
      }
    }

    currentIndex.current = optionIndex
    initialIndex.current = optionIndex
    initialPosition.current = event.clientX
  }, [])

  const handleMouseUp = useCallback(() => {
    setAllowMouseMove(false)

    for (const index in navigationRefs.current) {
      if (navigationRefs.current[index]) {
        const currentNode = navigationRefs.current[index]
        currentNode.initialWidth = currentNode.target.clientWidth
      }
    }

    currentIndex.current = 0
    initialIndex.current = 0
    initialPosition.current = 0
  }, [])

  const handleMouseMove = useCallback((event: HTMLElementEventMap['mousemove']) => {
    if (!allowMouseMove) return

    let movedPosition = initialPosition.current - event.clientX
    currentIndex.current = initialIndex.current

    if (movedPosition < 0) {
      const { initialWidth } = navigationRefs.current[currentIndex.current]
      navigationRefs.current[currentIndex.current].target.style.width = `${initialWidth - movedPosition}px`
      return
    }

    while (currentIndex.current >= 0 && movedPosition > 0) {
      const { initialWidth, minWidth } = navigationRefs.current[currentIndex.current]

      const willChangeWidth = Math.max(initialWidth - movedPosition, minWidth)

      if (initialWidth - movedPosition > minWidth) {
        movedPosition = 0
      } else {
        movedPosition = movedPosition - initialWidth + minWidth
      }

      navigationRefs.current[currentIndex.current].target.style.width = `${willChangeWidth}px`
      currentIndex.current -= 1
    }
  }, [allowMouseMove])

  const renderNavigationList = useCallback(navigations => (
    React.Children.map(navigations, (child, index) => (
      React.cloneElement(child, {
        ref: (nav: HTMLDivElement) => {
          set(navigationRefs.current, [index, 'target'], nav)
          set(navigationRefs.current, [index, 'minWidth'], child.props.minWidth)
        },
        optionIndex: index,
        onMouseDown: handleMouseDown,
        onMouseUp: handleMouseUp,
        onMouseMove: handleMouseMove,
      })),
    )
  ), [handleMouseDown, handleMouseUp, handleMouseMove])

  return (
    <NavigationsWrapper>{ renderNavigationList(children) }</NavigationsWrapper>
  )
}

export default Navigations
