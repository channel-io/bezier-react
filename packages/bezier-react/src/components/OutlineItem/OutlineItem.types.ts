import { type BezierIcon } from '@channel.io/bezier-icons'

import type {
  ActivatableProps,
  BezierComponentProps,
  ChildrenProps,
  ContentProps,
  LinkProps,
  PolymorphicProps,
  SideContentProps,
} from '~/src/types/props'

export interface OutlineItemContextProps {
  indent: number
}

interface OutlineItemOwnProps {
  open?: boolean
  focused?: boolean
  disableChevron?: boolean
}

export interface OutlineItemProps extends
  Omit<BezierComponentProps, keyof ContentProps>,
  PolymorphicProps,
  ChildrenProps,
  ContentProps,
  SideContentProps<BezierIcon | React.ReactNode, React.ReactNode>,
  ActivatableProps,
  LinkProps,
  OutlineItemOwnProps {}
