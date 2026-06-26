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

/**
 * @deprecated These components are deprecated. Use beta components from `@channel.io/bezier-react/beta` instead.
 */
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
