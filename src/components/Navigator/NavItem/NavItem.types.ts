/* Internal dependencies */
import type {
  BezierComponentProps,
  ContentProps,
  LinkProps,
  SideContentProps,
  ActivatableProps,
  AdditionalColorProps,
} from 'Types/ComponentProps'
import { IconName } from 'Components/Icon'

interface NavItemOptions {
  leftIcon?: IconName
  name: string
  target?: string
  onClick?: (e?: React.MouseEvent, name?: string) => void
}

export default interface NavItemProps extends
  BezierComponentProps,
  ContentProps,
  LinkProps,
  Pick<SideContentProps, 'rightContent'>,
  AdditionalColorProps<'leftIcon'>,
  Pick<ActivatableProps, 'active'>,
  NavItemOptions {}
