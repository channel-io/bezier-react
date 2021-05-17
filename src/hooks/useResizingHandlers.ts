/* External dependencies */
import {
  useRef,
  useCallback,
} from 'react'
import { isEmpty, noop } from 'lodash-es'

/* Internal dependencies */
import { window } from '../utils/domUtils'
import useLayoutState from './useLayoutState'

export default function useResizingHandlers() {
  const {
    columnRefs,
    columnStates,
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

  const handleResizing = useCallback((event: HTMLElementEventMap['mousemove'], onChangeWidth: (width: number) => void = noop) => {
    let movedPosition = event.clientX - initialPosition.current
    currentKey.current = initialKey.current

    if (
      (movedPosition > 0) &&
      columnRefs[currentKey.current]
    ) {
      const { initialWidth, maxWidth } = columnRefs[currentKey.current]
      const resultWidth = initialWidth + movedPosition

      if (resultWidth <= maxWidth) {
        const widthChangeTarget = columnRefs[currentKey.current].target

        window.requestAnimationFrame!(() => {
          widthChangeTarget.style.width = `${resultWidth}px`

          onChangeWidth(resultWidth)
        })
      }

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

          onChangeWidth(resultWidth)
        })
      }

      currentKey.current = orderedColumnKeys[orderedColumnKeys.indexOf(currentKey.current) - 1]

      if (columnStates[currentKey.current]?.disableResize) {
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
    columnStates,
    columnRefs,
    orderedColumnKeys,
  ])

  return {
    handleResizeStart,
    handleResizing,
  }
}
