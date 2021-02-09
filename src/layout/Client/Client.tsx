/* External dependencies */
import React, {
  forwardRef,
  useReducer,
  useCallback,
  useRef,
  useMemo,
} from 'react'
import { window } from 'ssr-window'

/* Internal dependencies */
import {
  ResizingContext,
  LayoutDispatchContext,
  LayoutStateContext,
} from '../../contexts/LayoutContext'
import { ClientWrapper } from './Client.styled'
import ClientProps from './Client.types'
import LayoutReducer, { defaultState } from './utils/LayoutReducer'

export const CLIENT_TEST_ID = 'ch-design-system-client'

function Client(
  {
    style,
    className,
    testId = CLIENT_TEST_ID,
    children,
    ...otherProps
  }: ClientProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  const [state, dispatch] = useReducer(LayoutReducer, defaultState)

  const keyArray = useMemo(() => Array.from(state.columnRefs.keys()), [state])

  const currentKey = useRef('')
  const initialKey = useRef('')
  const initialPosition = useRef(0)

  const handleMouseDown = useCallback((event: HTMLElementEventMap['mousedown'], key: string) => {
    state.columnRefs.forEach(ref => {
      const currentNode = ref
      currentNode.initialWidth = currentNode.target.clientWidth
    })

    currentKey.current = key
    initialKey.current = key
    initialPosition.current = event.clientX
  }, [state])

  const handleMouseMove = useCallback((event: HTMLElementEventMap['mousemove']) => {
    let movedPosition = event.clientX - initialPosition.current
    currentKey.current = initialKey.current

    if (
      (movedPosition > 0) &&
      state.columnRefs.has(currentKey.current)
    ) {
      const { initialWidth, maxWidth } = state.columnRefs.get(currentKey.current)!
      const resultWidth = initialWidth + movedPosition

      if (resultWidth <= maxWidth) {
        const widthChageTarget = state.columnRefs.get(currentKey.current)!.target

        window.requestAnimationFrame!(() => {
          widthChageTarget.style.width = `${resultWidth}px`
        })
      }

      // onChangeWidth

      return
    }

    while (
      (currentKey.current) &&
      (movedPosition < 0)
    ) {
      const { initialWidth, minWidth, maxWidth, target } = state.columnRefs.get(currentKey.current)!
      const resultWidth = Math.max(initialWidth + movedPosition, minWidth)

      if ((initialWidth + movedPosition) > minWidth) {
        movedPosition = 0
      } else {
        movedPosition = movedPosition + initialWidth - minWidth
      }

      if (resultWidth <= maxWidth) {
        const widthChangeTarget = target

        window.requestAnimationFrame!(() => {
          widthChangeTarget.style.width = `${resultWidth}px`
        })
      }

      currentKey.current = keyArray[keyArray.indexOf(currentKey.current) - 1]

      // onChangeWidth

      if (state.columnOptions[currentKey.current]?.disableResize) {
        return
      }
    }
  }, [
    initialPosition,
    state,
    keyArray,
  ])

  const resizingHandlers = useMemo(() => ({
    onMouseDown: handleMouseDown,
    onMouseMove: handleMouseMove,
  }), [
    handleMouseDown,
    handleMouseMove,
  ])

  return (
    <LayoutStateContext.Provider value={state}>
      <LayoutDispatchContext.Provider value={dispatch}>
        <ResizingContext.Provider value={resizingHandlers}>
          <ClientWrapper
            ref={forwardedRef}
            style={style}
            className={className}
            testId={testId}
            {...otherProps}
          >
            { children }
          </ClientWrapper>
        </ResizingContext.Provider>
      </LayoutDispatchContext.Provider>
    </LayoutStateContext.Provider>

  )
}

export default forwardRef(Client)
