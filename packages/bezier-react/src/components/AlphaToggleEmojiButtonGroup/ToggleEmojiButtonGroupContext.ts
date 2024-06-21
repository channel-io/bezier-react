import { createContext } from '~/src/utils/react'

export const [ToggleEmojiButtonProvider, useToggleEmojiButtonContext] =
  createContext<{
    container: HTMLDivElement | null
    childrenSize: number
  }>({
    container: null,
    childrenSize: -1,
  })
