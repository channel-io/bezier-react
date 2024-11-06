import { useCallback, useEffect, useState } from 'react'

export const EMOJI_BUTTON_GROUP_GAP = 6
export const EMOJI_BUTTON_SIZE = 54

interface UseToggleEmojiButtonSizeProps {
  container: HTMLDivElement | null
  enabled: boolean
  buttonCount: number
}

export function useToggleEmojiButtonSize({
  container,
  enabled,
  buttonCount,
}: UseToggleEmojiButtonSizeProps) {
  const [buttonSize, setButtonSize] = useState(EMOJI_BUTTON_SIZE)

  const adjustButtonSize = useCallback(() => {
    if (!container || !enabled) {
      return
    }

    const containerWidth = container.clientWidth
    const containerHeight = container.clientHeight
    const size = Math.max(
      Math.min(
        (containerWidth - EMOJI_BUTTON_GROUP_GAP * (buttonCount - 1)) /
          buttonCount,
        containerHeight - EMOJI_BUTTON_GROUP_GAP
      ),
      EMOJI_BUTTON_SIZE
    )

    setButtonSize(size)
  }, [buttonCount, container, enabled])

  useEffect(
    function setResizeObserver() {
      let resizeObserver: ResizeObserver | null = null

      if (enabled && container) {
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
    [adjustButtonSize, container, enabled]
  )

  return buttonSize
}
