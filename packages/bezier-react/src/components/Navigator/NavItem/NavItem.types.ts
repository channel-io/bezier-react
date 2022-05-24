/* External dependencies */
import { IconName } from '@channel.io/bezier-react-icons'

/* Internal dependencies */
import type {
  BezierComponentProps,
  ContentProps,
  LinkProps,
  SideContentProps,
  ActivatableProps,
} from 'Types/ComponentProps'

interface NavItemOptions {
  leftIcon?: IconName
  name: string
  target?: HTMLAnchorElement['target']
  onClick?: (e?: React.MouseEvent, name?: string) => void
}

export default interface NavItemProps extends
  BezierComponentProps,
  ContentProps,
  LinkProps,
  Pick<SideContentProps, 'rightContent'>,
  Pick<ActivatableProps, 'active'>,
  NavItemOptions {}
