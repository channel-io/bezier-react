/* External dependencies */
import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
} from 'react'
import {
  isNil,
  set,
  size,
  toNumber,
  noop,
} from 'lodash-es'

/* Internal dependencies */
import useLayoutState from '../../hooks/useLayoutState'
import NavigationsProps, { NavigationRefsProps } from './Navigations.types'
import { NavigationsWrapper } from './Navigations.styled'
import { NavigationArea } from './NavigationArea'

// TODO-LAYOUT: z-index 명확화 하기
const MAX_NAV_Z_INDEX = 100

export interface NavigationHandles {
  handleMouseDownOutside: () => void
  handleMouseMoveOutside: (deltaX: number) => boolean
}

function Navigations({
  children,
  onChangeWidth = noop,
}: NavigationsProps,
forwardedRef: React.Ref<NavigationHandles>,
) {
  const { navOptions } = useLayoutState()

  const navigationRefs = useRef<Array<NavigationRefsProps>>([])
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

      onChangeWidth(navigationRefs.current.map(navigationRef => navigationRef.target.style.width))

      if (navOptions[currentIndex.current]?.disableResize) {
        return true
      }
    }

    for (const index in navigationRefs.current) {
      if (navigationRefs.current[index].target.clientWidth !== navigationRefs.current[index].minWidth) { return false }
    }

    return true
  }, [navOptions, onChangeWidth])

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

      onChangeWidth(navigationRefs.current.map(navigationRef => navigationRef.target.style.width))

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

      onChangeWidth(navigationRefs.current.map(navigationRef => navigationRef.target.style.width))

      if (navOptions[currentIndex.current]?.disableResize) {
        return
      }
    }
  }, [navOptions, onChangeWidth])

  useImperativeHandle(forwardedRef, () => ({
    handleMouseDownOutside,
    handleMouseMoveOutside,
  }), [handleMouseDownOutside, handleMouseMoveOutside])

  // NOTE: LAYOUTEFFECT를 사용하지 않으면 initial 값이 없을때 순간 렌더링이 된다
  useLayoutEffect(() => {
    for (const index in navigationRefs.current) {
      if (!isNil(navigationRefs.current[index].target) && navOptions[index]) {
        navigationRefs.current[index].target.style.width = `${navOptions[index].initialWidth}px`
        navigationRefs.current[index].target.style.zIndex = `${MAX_NAV_Z_INDEX - toNumber(index)}`
      }
    }
  }, [navOptions])

  const NavigationAreasComponent = useMemo(() => {
    // React.Children.map 으로 변환하면 안됨
    const childrens = React.Children.toArray(children)
    navigationRefs.current = []

    return childrens.map((navChildren, index) => (
      <NavigationArea
        /* eslint-disable-next-line react/no-array-index-key */
        key={`navigation-area-${index}`}
        ref={(element: HTMLDivElement) => {
          set(navigationRefs.current, [index, 'target'], element)
          set(navigationRefs.current, [index, 'minWidth'], navOptions[index]?.minWidth)
          set(navigationRefs.current, [index, 'maxWidth'], navOptions[index]?.maxWidth)
        }}
        disableResize={navOptions[index]?.disableResize || false}
        hidable={navOptions[index]?.hidable || false}
        optionIndex={index}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
      >
        { navChildren }
      </NavigationArea>
    ))
  }, [children, handleMouseDown, handleMouseMove, navOptions])

  return (
    <NavigationsWrapper>
      { NavigationAreasComponent }
    </NavigationsWrapper>
  )
}

export default forwardRef(Navigations)
