import { useCallback, useEffect } from 'react'

import { useToggleEmojiButtonContext } from '~/src/components/AlphaToggleEmojiButtonGroup/ToggleEmojiButtonGroupContext'

export const EMOJI_BUTTON_GROUP_GAP = 6
export const EMOJI_BUTTON_SIZE = 54

interface UseResizeButtonProps {
  button: HTMLButtonElement | null
}

export function useResizeButton({ button }: UseResizeButtonProps) {
  const { container, childrenSize, fillDirection } =
    useToggleEmojiButtonContext()

  const adjustButtonSize = useCallback(() => {
    if (!container || !button || fillDirection !== 'all') {
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

    button.style.width = `${size}px`
    button.style.height = `${size}px`
  }, [button, childrenSize, container, fillDirection])

  useEffect(
    function setResizeObserver() {
      if (fillDirection !== 'all') {
        return
      }

      const resizeObserver = new ResizeObserver(() => {
        adjustButtonSize()
      })

      if (container) {
        resizeObserver.observe(container)
        container.addEventListener('resize', adjustButtonSize)
      }

      return () => {
        if (container) {
          resizeObserver.unobserve(container)
          container.removeEventListener('resize', adjustButtonSize)
        }
      }
    },
    [adjustButtonSize, container, fillDirection]
  )

  return { adjustButtonSize }
}
