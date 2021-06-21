/* Internal dependencies */
import { ChildrenComponentProps } from '../../../types/ComponentProps'

export default interface NavigationProps extends Omit<ChildrenComponentProps, 'as'> {
  currentKey?: string
  hidable?: boolean
  disableResize?: boolean
  allowMouseMove?: any
  setAllowMouseMove?: any
  setShowChevron?: any
  isHoveringOnPresenter?: any
  setIsHoveringOnPresenter?: any
}
