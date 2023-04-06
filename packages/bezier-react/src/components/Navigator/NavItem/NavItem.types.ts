/* Internal dependencies */
import type {
  ActivatableProps,
  BezierComponentProps,
  ContentProps,
  LinkProps,
  SideContentProps,
} from '~/src/types/ComponentProps'

import { type IconName } from '~/src/components/Icon'

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
