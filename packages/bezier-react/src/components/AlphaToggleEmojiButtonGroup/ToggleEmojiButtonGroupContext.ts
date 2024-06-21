import { createContext } from '~/src/utils/react'

import { type ToggleEmojiButtonGroupProps } from '~/src/components/AlphaToggleEmojiButtonGroup/ToggleEmojiButtonGroup.types'

export const [ToggleEmojiButtonProvider, useToggleEmojiButtonContext] =
  createContext<{
    container: HTMLDivElement | null
    childrenSize: number
    fillDirection: ToggleEmojiButtonGroupProps['fillDirection']
  }>({
    container: null,
    childrenSize: -1,
    fillDirection: undefined,
  })
