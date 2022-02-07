/* Internal dependencies */
import type {
  BezierComponentProps,
  ChildrenProps,
  ContentProps,
  SideContentProps,
  ActivatableProps,
  AdditionalColorProps,
} from 'Types/ComponentProps'
import { IconName } from 'Components/Icon'

interface NavItemOptions {
  open?: boolean
  leftIcon?: IconName
  name?: string
  indent?: number
  onClick?: (e?: React.MouseEvent, name?: string) => void
}

export default interface NavItemProps extends
  BezierComponentProps,
  ChildrenProps,
  ContentProps,
  Pick<SideContentProps, 'rightContent'>,
  AdditionalColorProps<'leftIcon'>,
  Pick<ActivatableProps, 'active'>,
  NavItemOptions {}
