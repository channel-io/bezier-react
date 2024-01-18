import { type BezierIcon } from '@channel.io/bezier-icons'

import type {
  ActivatableProps,
  AlphaBezierComponentProps,
  ChildrenProps,
  ContentProps,
  LinkProps,
  PolymorphicProps,
  SideContentProps,
} from '~/src/types/ComponentProps'

export interface OutlineItemContextProps {
  paddingLeft: number
}

interface OutlineItemOwnProps {
  open?: boolean
  focused?: boolean
  disableChevron?: boolean
  paddingLeft?: number
}

export interface OutlineItemProps extends
  AlphaBezierComponentProps,
  PolymorphicProps,
  ChildrenProps,
  ContentProps,
  SideContentProps<BezierIcon | React.ReactNode, React.ReactNode>,
  ActivatableProps,
  LinkProps,
  Omit<React.HTMLAttributes<HTMLElement>, 'content'>,
  OutlineItemOwnProps {}
