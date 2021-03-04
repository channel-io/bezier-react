/* Internal dependencies */
import { UIComponentProps } from '../../types/ComponentProps'
import OptionItemHost from '../../types/OptionItemHost'

export enum TabsSize {
  L = 53,
  Normal = 45,
  XS = 33,
}

export default interface TabsProps extends UIComponentProps, OptionItemHost {
  height?: TabsSize | number
  optionsWrapperClassName?: string
  withIndicator?: boolean
  indicatorThickness?: number
}

export interface StyledWrapperProps extends UIComponentProps {}

export interface StyledTabItemWrapperProps extends UIComponentProps {}
