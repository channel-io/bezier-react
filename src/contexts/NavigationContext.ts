/* External dependencies */
import { createContext } from 'react'
import { noop } from 'lodash-es'

export interface NavigationContextProps {
  key: string
  showChevron: boolean
  allowMouseMove: boolean
  isHoveringOnPresenter: boolean
  onClickClose: () => void
}

export const NavigationContext = createContext<NavigationContextProps>({
  key: '0',
  showChevron: false,
  allowMouseMove: false,
  isHoveringOnPresenter: false,
  onClickClose: noop,
})
