import type { RefObject } from 'react'
import { useEffect, useState } from 'react'

const useElementTruncated = <Element extends HTMLElement>(
  ref: RefObject<Element | null>
): boolean => {
  const [isTruncated, setTruncated] = useState(false)

  useEffect(
    function initResizeObserver() {
      if (ref.current) {
        const resizeObserver = new ResizeObserver((entries) => {
          const firstEntry = entries[0]
          if (firstEntry.target) {
            setTruncated(
              firstEntry.target.scrollWidth > firstEntry.target.clientWidth ||
                firstEntry.target.scrollHeight > firstEntry.target.clientHeight
            )
          }
        })
        resizeObserver.observe(ref.current)

        return function cleanup() {
          return resizeObserver.disconnect()
        }
      }

      return undefined
    },
    [ref]
  )

  return isTruncated
}

export default useElementTruncated
