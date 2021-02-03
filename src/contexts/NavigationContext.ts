/* External dependencies */
import { createContext } from 'react'
import { noop } from 'lodash-es'

export interface NavigationContextProps {
  optionIndex: number
  showChevron: boolean
  allowMouseMove: boolean
  isHoveringOnPresenter: boolean
  onClickClose: () => void
}

export const NavigationContext = createContext<NavigationContextProps>({
  optionIndex: -1,
  showChevron: false,
  allowMouseMove: false,
  isHoveringOnPresenter: false,
  onClickClose: noop,
})
