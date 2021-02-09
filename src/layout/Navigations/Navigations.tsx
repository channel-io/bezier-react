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
import { window } from 'ssr-window'

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
        const widthChangeTarget = navigationRefs.current[currentIndex.current].target

        window.requestAnimationFrame!(() => {
          widthChangeTarget.style.width = `${willChangeWidth}px`
        })
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
        const widthChangeTarget = navigationRefs.current[currentIndex.current].target

        window.requestAnimationFrame!(() => {
          widthChangeTarget.style.width = `${willChangeWidth}px`
        })
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
        const widthChangeTarget = navigationRefs.current[currentIndex.current].target

        window.requestAnimationFrame!(() => {
          widthChangeTarget.style.width = `${willChangeWidth}px`
        })
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

  const setNavigationRef = useCallback((element: HTMLDivElement, index: number) => {
    set(navigationRefs.current, [index, 'target'], element)
    set(navigationRefs.current, [index, 'minWidth'], navOptions[index]?.minWidth)
    set(navigationRefs.current, [index, 'maxWidth'], navOptions[index]?.maxWidth)
  }, [navOptions])

  // NOTE: LAYOUTEFFECT를 사용하지 않으면 initial 값이 없을때 순간 깜빡임이 발생한다
  useLayoutEffect(() => {
    for (const index in navigationRefs.current) {
      if (!isNil(navigationRefs.current[index].target) && navOptions[index]) {
        navigationRefs.current[index].target.style.width = `${navOptions[index].initialWidth}px`
        navigationRefs.current[index].target.style.zIndex = `${MAX_NAV_Z_INDEX - toNumber(index)}`
      }
    }
  }, [navOptions])

  const NavigationAreasComponent = useMemo(() => {
    navigationRefs.current = []
    // NOTE: React.Children.toArray 와 React.Children.map 의 차이점은
    // toArray의 경우에는 null child는 무시한 array를 만든다
    // Map으로 하면 null child 도 iterate을 수행한다
    return React.Children.map(children, (navChildren, index) => {
      if (!navChildren) { return null }
      return (
        <NavigationArea
          /* eslint-disable-next-line react/no-array-index-key */
          key={`navigation-area-${index}`}
          ref={(element: HTMLDivElement) => setNavigationRef(element, index)}
          optionIndex={index}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
        >
          { navChildren }
        </NavigationArea>
      )
    })
  }, [children, handleMouseDown, handleMouseMove, setNavigationRef])

  return (
    <NavigationsWrapper>
      { NavigationAreasComponent }
    </NavigationsWrapper>
  )
}

export default forwardRef(Navigations)
