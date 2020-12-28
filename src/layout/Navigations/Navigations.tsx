/* External dependencies */
import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useRef } from 'react'
import { set, size, toNumber } from 'lodash-es'

/* Internal dependencies */
import { useLayoutState } from '../Client'
import NavigationsProps, { NavigationRefsProps } from './Navigations.types'
import { NavigationsWrapper } from './Navigations.styled'
import { NavigationArea } from './NavigationArea'

const MAX_NAV_Z_INDEX = 100

export interface NavigationHandles {
  handleMouseDownOutside: () => void
  handleMouseMoveOutside: (deltaX: number) => boolean
}

function Navigations({
  children,
}: NavigationsProps,
forwardedRef: React.Ref<NavigationHandles>,
) {
  const { navigations } = useLayoutState()

  const navigationRefs = useRef<{ [i: number]: NavigationRefsProps }>({})
  const currentIndex = useRef(0)
  const initialIndex = useRef(0)
  const initialPosition = useRef(0)

  const handleMouseDownOutside = useCallback(() => {
    const lastIndex = size(navigationRefs.current) - 1

    for (const index in navigationRefs.current) {
      if (navigationRefs.current[index]) {
        const currentNode = navigationRefs.current[index]
        currentNode.initialWidth = currentNode.target.clientWidth
      }
    }

    currentIndex.current = lastIndex
    initialIndex.current = lastIndex
  }, [])

  const handleMouseMoveOutside = useCallback((deltaX: number) => {
    let movedPosition = deltaX
    const lastIndex = size(navigationRefs.current) - 1

    currentIndex.current = lastIndex

    while (currentIndex.current >= 0 && movedPosition < 0) {
      const { initialWidth, minWidth, maxWidth } = navigationRefs.current[currentIndex.current]
      const willChangeWidth = Math.max(initialWidth + movedPosition, minWidth)
      if (initialWidth + movedPosition > minWidth) {
        movedPosition = 0
      } else {
        movedPosition = movedPosition + initialWidth - minWidth
      }

      if (willChangeWidth <= maxWidth) {
        navigationRefs.current[currentIndex.current].target.style.width = `${willChangeWidth}px`
      }
      currentIndex.current -= 1
    }

    for (const index in navigationRefs.current) {
      if (navigationRefs.current[index].target.clientWidth !== navigationRefs.current[index].minWidth) { return false }
    }

    return true
  }, [])

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

  const handleMouseMove = useCallback((event: HTMLElementEventMap['mousemove']) => {
    let movedPosition = event.clientX - initialPosition.current
    currentIndex.current = initialIndex.current
    if (movedPosition > 0) {
      const { initialWidth, maxWidth } = navigationRefs.current[currentIndex.current]
      const willChangeWidth = initialWidth + movedPosition

      if (willChangeWidth <= maxWidth) {
        navigationRefs.current[currentIndex.current].target.style.width = `${willChangeWidth}px`
      }
      return
    }

    while (currentIndex.current >= 0 && movedPosition < 0) {
      const { initialWidth, minWidth, maxWidth } = navigationRefs.current[currentIndex.current]
      const willChangeWidth = Math.max(initialWidth + movedPosition, minWidth)

      if (initialWidth + movedPosition > minWidth) {
        movedPosition = 0
      } else {
        movedPosition = movedPosition + initialWidth - minWidth
      }

      if (willChangeWidth <= maxWidth) {
        navigationRefs.current[currentIndex.current].target.style.width = `${willChangeWidth}px`
      }
      currentIndex.current -= 1
    }
  }, [])

  useImperativeHandle(forwardedRef, () => ({
    handleMouseDownOutside: () => handleMouseDownOutside(),
    handleMouseMoveOutside: (deltaX) => handleMouseMoveOutside(deltaX),
  }), [handleMouseDownOutside, handleMouseMoveOutside])

  const renderNavigationAreas = useCallback((navLayouts) => {
    const childrens = React.Children.toArray(children)
    return (
      // eslint-disable-next-line arrow-body-style
      navLayouts.map((navLayout, index) => {
        return (
          <NavigationArea
            ref={(element: HTMLDivElement) => {
              set(navigationRefs.current, [index, 'target'], element)
              set(navigationRefs.current, [index, 'minWidth'], navLayout.minWidth)
              set(navigationRefs.current, [index, 'maxWidth'], navLayout.maxWidth)
            }}
            hidable={navLayout.hidable}
            optionIndex={index}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
          >
            { childrens[index] }
          </NavigationArea>
        )
      })
    )
  }, [children, handleMouseDown, handleMouseMove])

  useEffect(() => {
    for (const index in navigationRefs.current) {
      if (navigationRefs.current[index] && navigations[index]) {
        navigationRefs.current[index].target.style.width = `${navigations[index].initialWidth}px`
        navigationRefs.current[index].target.style.zIndex = `${MAX_NAV_Z_INDEX - toNumber(index)}`
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <NavigationsWrapper>
      { renderNavigationAreas(navigations) }
    </NavigationsWrapper>
  )
}

export default forwardRef(Navigations)
