import { type BezierIcon } from '@channel.io/bezier-icons'

import type {
  ActivatableProps,
  BezierComponentProps,
  ChildrenProps,
  ContentProps,
  InteractiveStyleProps,
  LinkProps,
  PolymorphicProps,
  SideContentProps,
} from '~/src/types/props'

export interface OutlineItemContextProps {
  indent: number
}

interface OutlineItemOwnProps {
  open?: boolean
  disableChevron?: boolean
}

/**
 * @deprecated These components are deprecated. Use beta components from `@channel.io/bezier-react/beta` instead.
 */
export interface OutlineItemProps
  extends Omit<BezierComponentProps, keyof ContentProps>,
    PolymorphicProps,
    ChildrenProps,
    ContentProps,
    SideContentProps<BezierIcon | React.ReactNode, React.ReactNode>,
    ActivatableProps,
    LinkProps,
    InteractiveStyleProps,
    OutlineItemOwnProps {}
