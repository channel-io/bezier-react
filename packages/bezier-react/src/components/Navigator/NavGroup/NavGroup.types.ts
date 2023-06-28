import { type BezierIcon } from '@channel.io/bezier-icons'

import type {
  ActivatableProps,
  BezierComponentProps,
  ChildrenProps,
  ContentProps,
  SideContentProps,
} from '~/src/types/ComponentProps'

interface NavGroupOptions {
  open?: boolean
  leftIcon: BezierIcon
  name: string
  onClick?: (e?: React.MouseEvent, name?: string) => void
}

export default interface NavGroupProps extends
  BezierComponentProps,
  ChildrenProps,
  ContentProps,
  Pick<SideContentProps, 'rightContent'>,
  Pick<ActivatableProps, 'active'>,
  Omit<React.HTMLAttributes<HTMLButtonElement>, 'onClick' | 'content'>,
  NavGroupOptions {}
