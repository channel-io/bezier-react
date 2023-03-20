/* Internal dependencies */
import type {
  BezierComponentProps,
  ChildrenProps,
  ContentProps,
  SideContentProps,
  LinkProps,
  ActivatableProps,
  OptionItemProps,
  AdditionalStylableProps,
  AdditionalTestIdProps,
  AdditionalColorProps,
} from '~/src/types/ComponentProps'
import { BezierIcon, IconName } from '~/src/components/Icon'

export enum ChevronIconType {
  Normal = 'chevron',
  Small = 'chevron-small',
}

interface OutlineItemOptions {
  open?: boolean
  active?: boolean
  focused?: boolean
  leftIcon?: IconName | BezierIcon
  hide?: boolean
  disableIconActive?: boolean
  disableChevron?: boolean
  paddingLeft?: number
  name?: string
  onOpen?: (name?: string) => void
  onClick?: (e?: React.MouseEvent, name?: string) => void
  onClickArrow?: (name?: string) => void
  /* OptionItemHost for Sidebar Menu - nullable selectedOutlineItemIndex */
  selectedOutlineItemIndex?: number | null
  onChangeOption?: (name?: string, optionKey?: string, optionIndex?: number) => void
}

export default interface OutlineItemProps extends
  BezierComponentProps,
  ChildrenProps,
  LinkProps,
  ContentProps,
  SideContentProps,
  AdditionalStylableProps<['content', 'icon']>,
  AdditionalColorProps<'leftIcon'>,
  AdditionalTestIdProps<'leftIcon'>,
  Pick<ActivatableProps, 'active'>,
  OptionItemProps,
  OutlineItemOptions {}
