import { type BezierIcon } from '@channel.io/bezier-icons'

import type {
  ActivatableProps,
  BezierComponentProps,
  ContentProps,
  LinkProps,
  SideContentProps,
} from '~/src/types/props'

interface NavItemOwnProps {
  name: string
  target?: HTMLAnchorElement['target']
  onClick?: (e?: React.MouseEvent, name?: string) => void
}

export interface NavItemProps
  extends Omit<
      BezierComponentProps<'a'>,
      keyof ContentProps | keyof NavItemOwnProps
    >,
    ContentProps,
    LinkProps,
    SideContentProps<BezierIcon, React.ReactNode>,
    ActivatableProps,
    NavItemOwnProps {}
