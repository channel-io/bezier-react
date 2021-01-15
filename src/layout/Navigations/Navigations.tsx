/* External dependencies */
import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { isArray, isNil, set, size, toNumber } from 'lodash-es'
import { v4 as uuid } from 'uuid'

/* Internal dependencies */
import useLayoutDispatch from '../../hooks/useLayoutDispatch'
import { insertItem } from '../../utils/utils'
import { ActionType, NavigationState } from '../Client/utils/LayoutReducer'
import NavigationsProps, { NavigationRefsProps } from './Navigations.types'
import { NavigationsWrapper } from './Navigations.styled'
import { NavigationArea } from './NavigationArea'
import NavigationContentProps from './NavigationContent/NavigationContent.types'

// TODO-LAYOUT: z-index 명확화 하기
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
  const layoutDispatch = useLayoutDispatch()

  const [navOptions, setNavOptions] = useState<Array<NavigationState>>([])

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

      if (navOptions[currentIndex.current]?.disableResize) {
        return true
      }
    }

    for (const index in navigationRefs.current) {
      if (navigationRefs.current[index].target.clientWidth !== navigationRefs.current[index].minWidth) { return false }
    }

    return true
  }, [navOptions])

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

      if (navOptions[currentIndex.current]?.disableResize) {
        return
      }
    }
  }, [navOptions])

  useImperativeHandle(forwardedRef, () => ({
    handleMouseDownOutside,
    handleMouseMoveOutside,
  }), [handleMouseDownOutside, handleMouseMoveOutside])

  useLayoutEffect(() => {
    setNavOptions([])

    const childrens = React.Children.toArray(children)
    childrens.forEach((child, index) => {
      if (!React.isValidElement<NavigationContentProps>(child)) { return }

      setNavOptions(options => (insertItem(options, index, child.props.layoutOption)))

      if (child.props.showNavigation) {
        layoutDispatch({
          type: ActionType.SET_SHOW_NAVIGATION,
          payload: child.props.showNavigation,
        })
      }
    })
  }, [children, layoutDispatch])

  useLayoutEffect(() => {
    if (!isArray(navOptions)) { return }

    for (const index in navigationRefs.current) {
      if (!isNil(navigationRefs.current[index].target) && navOptions[index]) {
        navigationRefs.current[index].target.style.width = `${navOptions[index].initialWidth}px`
        navigationRefs.current[index].target.style.zIndex = `${MAX_NAV_Z_INDEX - toNumber(index)}`
      }
    }
  }, [navOptions])

  const NavigationAreasComponent = useMemo(() => {
    const childrens = React.Children.toArray(children)

    navigationRefs.current = {}

    return (
      childrens.map((navChildren, index) => {
        // TODO: instanceof 등으로 NavigationContent가 안 내려오면 warning을 띄워주는 것이 좋을 듯
        if (!navOptions[index] || !React.isValidElement<NavigationContentProps>(navChildren)) { return null }

        return (
          <NavigationArea
            key={uuid()}
            ref={(element: HTMLDivElement) => {
              set(navigationRefs.current, [index, 'target'], element)
              set(navigationRefs.current, [index, 'minWidth'], navOptions[index].minWidth)
              set(navigationRefs.current, [index, 'maxWidth'], navOptions[index].maxWidth)
            }}
            disableResize={navOptions[index].disableResize}
            hidable={navOptions[index].hidable}
            optionIndex={index}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
          >
            { navChildren }
          </NavigationArea>
        )
      })
    )
  }, [children, handleMouseDown, handleMouseMove, navOptions])

  return (
    <NavigationsWrapper>
      { NavigationAreasComponent }
    </NavigationsWrapper>
  )
}

export default forwardRef(Navigations)
