import { type BezierIcon } from '@channel.io/bezier-icons'

import type {
  ActivatableProps,
  BezierComponentProps,
  ChildrenProps,
  ContentProps,
  SideContentProps,
} from '~/src/types/props'

interface NavGroupOwnProps {
  open?: boolean
  name: string
  onClick?: (e?: React.MouseEvent, name?: string) => void
}

export interface NavGroupProps extends
  Omit<BezierComponentProps<'button'>, keyof ContentProps | keyof NavGroupOwnProps>,
  ChildrenProps,
  ContentProps,
  Required<Pick<SideContentProps<BezierIcon>, 'leftContent'>>,
  Pick<SideContentProps, 'rightContent'>,
  ActivatableProps,
  NavGroupOwnProps {}
