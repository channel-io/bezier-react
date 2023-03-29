/* Internal dependencies */
import type {
  BezierComponentProps,
  ChildrenProps,
  ContentProps,
  SideContentProps,
  ActivatableProps,
} from '~/src/types/ComponentProps'
import { type IconName } from '~/src/components/Icon'

interface NavGroupOptions {
  open?: boolean
  leftIcon: IconName
  name: string
  onClick?: (e?: React.MouseEvent, name?: string) => void
}

export default interface NavGroupProps extends
  BezierComponentProps,
  ChildrenProps,
  ContentProps,
  Pick<SideContentProps, 'rightContent'>,
  Pick<ActivatableProps, 'active'>,
  NavGroupOptions {}
