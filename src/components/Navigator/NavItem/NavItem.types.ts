/* Internal dependencies */
import type {
  BezierComponentProps,
  ContentProps,
  SideContentProps,
  ActivatableProps,
  AdditionalColorProps,
} from 'Types/ComponentProps'
import { IconName } from 'Components/Icon'

interface NavItemOptions {
  leftIcon?: IconName
  name: string
  onClick?: (e?: React.MouseEvent, name?: string) => void
}

export default interface NavItemProps extends
  BezierComponentProps,
  ContentProps,
  Pick<SideContentProps, 'rightContent'>,
  AdditionalColorProps<'leftIcon'>,
  Pick<ActivatableProps, 'active'>,
  NavItemOptions {}
