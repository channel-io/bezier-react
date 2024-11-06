import { useCallback, useEffect, useState } from 'react'

export const EMOJI_BUTTON_GROUP_GAP = 6
export const EMOJI_BUTTON_SIZE = 54

interface UseResizeButtonProps {
  container: HTMLDivElement | null
  enable: boolean
  childrenSize: number
}

export function useResizeButton({
  container,
  enable,
  childrenSize,
}: UseResizeButtonProps) {
  const [buttonSize, setButtonSize] = useState(EMOJI_BUTTON_SIZE)

  const adjustButtonSize = useCallback(() => {
    if (!container || !enable) {
      return
    }

    const containerWidth = container.clientWidth
    const containerHeight = container.clientHeight
    const size = Math.max(
      Math.min(
        (containerWidth - EMOJI_BUTTON_GROUP_GAP * (childrenSize - 1)) /
          childrenSize,
        containerHeight - EMOJI_BUTTON_GROUP_GAP
      ),
      EMOJI_BUTTON_SIZE
    )

    setButtonSize(size)
  }, [childrenSize, container, enable])

  useEffect(
    function setResizeObserver() {
      let resizeObserver: ResizeObserver | null = null

      if (enable && container) {
        resizeObserver = new ResizeObserver(() => {
          adjustButtonSize()
        })

        resizeObserver.observe(container)
        container.addEventListener('resize', adjustButtonSize)
      }

      return () => {
        if (container) {
          resizeObserver?.unobserve(container)
          container?.removeEventListener('resize', adjustButtonSize)
        }
      }
    },
    [adjustButtonSize, container, enable]
  )

  return buttonSize
}
