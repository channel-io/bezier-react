/* Internal dependencies */
import { BezierComponentProps, ChildrenProps } from 'Types/ComponentProps'

interface NavigationOptions {
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

export default interface NavigationProps extends
  Omit<BezierComponentProps, 'as'>,
  ChildrenProps,
  NavigationOptions {}
