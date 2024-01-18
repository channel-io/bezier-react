import { type BezierIcon } from '@channel.io/bezier-icons'

import type {
  ActivatableProps,
  AlphaBezierComponentProps,
  ChildrenProps,
  ContentProps,
  SideContentProps,
} from '~/src/types/ComponentProps'

interface NavGroupOwnProps {
  open?: boolean
  leftIcon: BezierIcon
  name: string
  onClick?: (e?: React.MouseEvent, name?: string) => void
}

export interface NavGroupProps extends
  AlphaBezierComponentProps,
  ChildrenProps,
  ContentProps,
  Pick<SideContentProps, 'rightContent'>,
  ActivatableProps,
  Omit<React.HTMLAttributes<HTMLButtonElement>, 'onClick' | 'content'>,
  NavGroupOwnProps {}
