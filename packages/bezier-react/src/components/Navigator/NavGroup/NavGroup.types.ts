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
  name: string
  onClick?: (e?: React.MouseEvent, name?: string) => void
}

export interface NavGroupProps extends
  AlphaBezierComponentProps,
  ChildrenProps,
  ContentProps,
  Required<Pick<SideContentProps<BezierIcon>, 'leftContent'>>,
  Pick<SideContentProps, 'rightContent'>,
  Pick<ActivatableProps, 'active'>,
  Omit<React.HTMLAttributes<HTMLButtonElement>, 'onClick' | 'content'>,
  NavGroupOwnProps {}
