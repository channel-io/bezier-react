/* External dependencies */
import React from 'react'

/* Internal dependencies */
import NavigationsProps from './Navigations.types'
import { NavigationsWrapper } from './Navigations.styled'

function Navigations({
  children,
}: NavigationsProps,
) {
  // const navigationRefs = useRef<Array<NavigationRefsProps>>([])
  // const currentIndex = useRef(0)

  // const handleMouseMoveOutside = useCallback((deltaX: number) => {
  //   let movedPosition = deltaX
  //   const lastIndex = size(navigationRefs.current) - 1

  //   currentIndex.current = lastIndex

  //   while (currentIndex.current >= 0 && movedPosition < 0) {
  //     const { initialWidth, minWidth, maxWidth } = navigationRefs.current[currentIndex.current]
  //     const willChangeWidth = Math.max(initialWidth + movedPosition, minWidth)
  //     if (initialWidth + movedPosition > minWidth) {
  //       movedPosition = 0
  //     } else {
  //       movedPosition = movedPosition + initialWidth - minWidth
  //     }

  //     if (willChangeWidth <= maxWidth) {
  //       const widthChangeTarget = navigationRefs.current[currentIndex.current].target

  //       window.requestAnimationFrame!(() => {
  //         widthChangeTarget.style.width = `${willChangeWidth}px`
  //       })
  //     }

  //     currentIndex.current -= 1

  //     onChangeWidth(navigationRefs.current.map(navigationRef => navigationRef.target.style.width))

  //     if (columnOptions[currentIndex.current]?.disableResize) {
  //       return true
  //     }
  //   }

  //   for (const index in navigationRefs.current) {
  //     if (navigationRefs.current[index].target.clientWidth !== navigationRefs.current[index].minWidth) { return false }
  //   }

  //   return true
  // }, [columnOptions, onChangeWidth])

  return (
    <NavigationsWrapper>
      { children }
    </NavigationsWrapper>
  )
}

export default Navigations
