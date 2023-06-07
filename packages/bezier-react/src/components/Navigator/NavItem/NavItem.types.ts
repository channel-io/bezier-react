import { type IconName } from '@channel.io/bezier-icons'

import type {
  ActivatableProps,
  BezierComponentProps,
  ContentProps,
  LinkProps,
  SideContentProps,
} from '~/src/types/ComponentProps'

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
