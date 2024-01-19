import { type BezierIcon } from '@channel.io/bezier-icons'

import type {
  ActivatableProps,
  AlphaBezierComponentProps,
  ContentProps,
  LinkProps,
  SideContentProps,
} from '~/src/types/ComponentProps'

interface NavItemOwnProps {
  name: string
  target?: HTMLAnchorElement['target']
  onClick?: (e?: React.MouseEvent, name?: string) => void
}

export interface NavItemProps extends
  AlphaBezierComponentProps,
  ContentProps,
  LinkProps,
  SideContentProps<BezierIcon, React.ReactNode>,
  ActivatableProps,
  Omit<React.HTMLAttributes<HTMLAnchorElement>, 'onClick' | 'content'>,
  NavItemOwnProps {}
