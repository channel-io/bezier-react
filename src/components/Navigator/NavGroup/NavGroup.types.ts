/* Internal dependencies */
import type {
  BezierComponentProps,
  ChildrenProps,
  ContentProps,
  SideContentProps,
  ActivatableProps,
  AdditionalColorProps,
} from 'Types/ComponentProps'
import { IconName } from 'Components/Icon'

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
  AdditionalColorProps<'leftIcon'>,
  Pick<ActivatableProps, 'active'>,
  NavGroupOptions {}
