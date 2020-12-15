/* External dependencies */
import React, { forwardRef, useCallback, useImperativeHandle, useRef } from 'react'
import { set, isNil } from 'lodash-es'

/* Internal dependencies */
import NavigationsProps, { NavigationRefsProps } from './Navigations.types'
import { NavigationsWrapper } from './Navigations.styled'

export interface NavigationHandles {
  shrinkLast: (deltaX: number) => void
}

function Navigations({ children }: NavigationsProps, forwardedRef: React.Ref<NavigationHandles>) {
  const navigationRefs = useRef<{ [i: number]: NavigationRefsProps }>({})
  const currentIndex = useRef(0)
  const initialIndex = useRef(0)
  const initialPosition = useRef(0)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleShrinkLast = useCallback((deltaX: number) => {
    //  To Be Implemented
  }, [])

  useImperativeHandle(forwardedRef, () => ({
    shrinkLast: (deltaX) => handleShrinkLast(deltaX),
  }), [handleShrinkLast])

  const handleMouseDown = useCallback((event: HTMLElementEventMap['mousedown'], optionIndex: number) => {
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
    let movedPosition = initialPosition.current - event.clientX
    currentIndex.current = initialIndex.current
    if (movedPosition < 0) {
      const { initialWidth, maxWidth } = navigationRefs.current[currentIndex.current]
      const willChangeWidth = initialWidth - movedPosition

      if (willChangeWidth <= maxWidth) {
        navigationRefs.current[currentIndex.current].target.style.width = `${willChangeWidth}px`
      }
      return
    }

    while (currentIndex.current >= 0 && movedPosition > 0) {
      const { initialWidth, minWidth, maxWidth } = navigationRefs.current[currentIndex.current]
      const willChangeWidth = Math.max(initialWidth - movedPosition, minWidth)

      if (initialWidth - movedPosition > minWidth) {
        movedPosition = 0
      } else {
        movedPosition = movedPosition - initialWidth + minWidth
      }

      if (willChangeWidth <= maxWidth) {
        navigationRefs.current[currentIndex.current].target.style.width = `${willChangeWidth}px`
      }
      currentIndex.current -= 1
    }
  }, [])

  const renderNavigationList = useCallback(navigations => (
    React.Children.map(navigations, (child, index) => (
      React.cloneElement(child, {
        ref: (nav: HTMLDivElement) => {
          if (!isNil(child.ref)) {
            set(child, 'ref.current', nav)
          }
          set(navigationRefs.current, [index, 'target'], nav)
          set(navigationRefs.current, [index, 'minWidth'], child.props.minWidth)
          set(navigationRefs.current, [index, 'maxWidth'], child.props.maxWidth)
        },
        optionIndex: index,
        onMouseDown: handleMouseDown,
        onMouseUp: handleMouseUp,
        onMouseMove: handleMouseMove,
      })),
    )
  ), [
    handleMouseDown,
    handleMouseUp,
    handleMouseMove,
  ])

  return (
    <NavigationsWrapper>
      { renderNavigationList(children) }
    </NavigationsWrapper>
  )
}

export default forwardRef(Navigations)
