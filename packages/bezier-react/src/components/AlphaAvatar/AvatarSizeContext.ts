import { createContext } from '~/src/utils/react'

import { type AvatarProps } from './Avatar.types'

const [AvatarContextProvider, useAvatarContext] = createContext<
  Pick<AvatarProps, 'size'>
>({ size: undefined })

export { AvatarContextProvider, useAvatarContext }
