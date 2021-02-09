/* External dependencies */
import {
  useRef,
  useCallback,
} from 'react'
import { isEmpty } from 'lodash-es'
import { window } from 'ssr-window'

/* Internal dependencies */
import useLayoutState from './useLayoutState'

export default function useResizingHandlers() {
  const {
    columnRefs,
    columnOptions,
    orderedColumnKeys,
  } = useLayoutState()

  const currentKey = useRef('')
  const initialKey = useRef('')
  const initialPosition = useRef(0)

  const handleResizeStart = useCallback((event: HTMLElementEventMap['mousedown'], key: string) => {
    Object.values(columnRefs).forEach(ref => {
      const currentNode = ref
      currentNode.initialWidth = currentNode.target.clientWidth
    })

    currentKey.current = key
    initialKey.current = key
    initialPosition.current = event.clientX
  }, [columnRefs])

  const handleResizing = useCallback((event: HTMLElementEventMap['mousemove']) => {
    let movedPosition = event.clientX - initialPosition.current

    currentKey.current = initialKey.current

    if (
      (movedPosition > 0) &&
      columnRefs[currentKey.current]
    ) {
      const { initialWidth, maxWidth } = columnRefs[currentKey.current]
      const resultWidth = initialWidth + movedPosition

      if (resultWidth <= maxWidth) {
        const widthChageTarget = columnRefs[currentKey.current].target

        window.requestAnimationFrame!(() => {
          widthChageTarget.style.width = `${resultWidth}px`
        })
      }

      // onChangeWidth

      return true
    }

    while (
      (currentKey.current) &&
      (movedPosition < 0)
    ) {
      const { initialWidth, minWidth, maxWidth, target } = columnRefs[currentKey.current]
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

      currentKey.current = orderedColumnKeys[orderedColumnKeys.indexOf(currentKey.current) - 1]

      // onChangeWidth

      if (columnOptions[currentKey.current]?.disableResize) {
        return true
      }
    }

    return !isEmpty(Object.values(columnRefs).filter(ref => {
      if (ref.target.clientWidth !== ref.minWidth) {
        return true
      }
      return false
    }))
  }, [
    columnOptions,
    columnRefs,
    orderedColumnKeys,
  ])

  return {
    handleResizeStart,
    handleResizing,
  }
}
