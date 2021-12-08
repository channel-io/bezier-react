/* Internal dependencies */
import { ChildrenComponentProps } from 'Types/ComponentProps'

export default interface NavigationProps extends Omit<ChildrenComponentProps, 'as'> {
  currentKey?: string
  hidable?: boolean
  disableResize?: boolean
  allowMouseMove?: any
  setAllowMouseMove?: any
  setShowChevron?: any
  isHoveringOnPresenter?: any
  setIsHoveringOnPresenter?: any
  showNavigation?: boolean
}
