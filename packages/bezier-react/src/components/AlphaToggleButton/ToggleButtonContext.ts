import { createContext } from '~/src/utils/react'

import { type ToggleButtonProps } from '~/src/components/AlphaToggleButton/ToggleButton.types'

const [ToggleButtonProvider, useToggleButtonContext] = createContext<
  Pick<ToggleButtonProps, 'shape'>
>({ shape: undefined })

export { ToggleButtonProvider, useToggleButtonContext }
