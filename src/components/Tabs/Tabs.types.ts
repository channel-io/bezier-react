/* Internal dependencies */
import { UIComponentProps } from '../../types/ComponentProps'
import OptionItemHost from '../../types/OptionItemHost'

export default interface TabsProps extends UIComponentProps, OptionItemHost {
  height?: number
  optionsWrapperClassName?: string
  withIndicator?: boolean
  indicatorThickness?: number
}

export interface StyledWrapperProps extends UIComponentProps {}

export interface StyledTabItemWrapperProps extends UIComponentProps {}
