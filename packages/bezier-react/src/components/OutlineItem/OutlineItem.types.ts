import { type BezierIcon } from '@channel.io/bezier-icons'

import type {
  ActivatableProps,
  AdditionalColorProps,
  AdditionalStylableProps,
  AdditionalTestIdProps,
  BezierComponentProps,
  ChildrenProps,
  ContentProps,
  LinkProps,
  OptionItemProps,
  SideContentProps,
} from '~/src/types/ComponentProps'

export enum ChevronIconType {
  Normal = 'chevron',
  Small = 'chevron-small',
}

interface OutlineItemOptions {
  open?: boolean
  active?: boolean
  focused?: boolean
  leftIcon?: BezierIcon
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
