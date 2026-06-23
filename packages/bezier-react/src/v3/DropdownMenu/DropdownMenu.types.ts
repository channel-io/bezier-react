import type { ReactElement, ReactNode } from 'react'

import type { BezierIcon } from '@channel.io/bezier-icons'

import type {
  BezierComponentProps,
  ChildrenProps,
  ContentProps,
  DisableProps,
  SizeProps,
  VariantProps,
} from '~/src/types/props'
import type {
  BaseItemSize,
  BaseItemVariant,
} from '~/src/v3/BaseItem/BaseItem.types'
import type { OverlayPosition, OverlayTarget } from '~/src/v3/Overlay'

export type DropdownMenuSize = BaseItemSize

export type DropdownMenuItemVariant = BaseItemVariant

type DropdownMenuItemSideContent = BezierIcon | ReactNode

interface DropdownMenuOwnProps {
  /**
   * The controlled open state of the dropdown menu.
   * Use with `target` when the trigger is managed outside of `DropdownMenu`.
   */
  show?: boolean
  /**
   * The open state of the dropdown menu when it is initially rendered.
   */
  defaultShow?: boolean
  /**
   * Specify a container element to portal the menu into.
   * @default document.body
   */
  container?: HTMLElement | null
  /**
   * Specify a target element to position the menu against.
   * Prefer `DropdownMenuTrigger` for ordinary usage because it wires trigger
   * ref, active state, and aria attributes automatically.
   *
   * Use `target` as an escape hatch for externally controlled triggers,
   * hover-open policies, or migration from lower-level `Overlay` usage.
   */
  target?: OverlayTarget | null
  /**
   * Position of the menu from the target.
   * @default 'bottom-left'
   */
  position?: OverlayPosition
  /**
   * Distance in pixels from the target.
   * @default 6
   */
  offset?: number
  /**
   * When `true`, keeps the menu inside its container.
   * @default false
   */
  keepInContainer?: boolean
  /**
   * Width of the menu surface.
   * @default 224
   */
  width?: React.CSSProperties['width']
  /**
   * Max height of the menu surface.
   */
  maxHeight?: React.CSSProperties['maxHeight']
  /**
   * Callback function to be called when the menu is opened.
   */
  onShow?: () => void
  /**
   * Callback function to be called when the menu is closed.
   */
  onHide?: () => void
}

type DropdownMenuItemSelectEvent =
  | React.MouseEvent<HTMLDivElement>
  | React.KeyboardEvent<HTMLDivElement>

interface DropdownMenuSubContentOwnProps {
  /**
   * Specify a container element to portal the submenu into.
   * @default document.body
   */
  container?: HTMLElement | null
  /**
   * Position of the submenu from the sub trigger.
   * @default 'right-top'
   */
  position?: OverlayPosition
  /**
   * Distance in pixels from the sub trigger.
   * @default 4
   */
  offset?: number
  /**
   * When `true`, keeps the submenu inside its container.
   * @default false
   */
  keepInContainer?: boolean
  /**
   * Width of the submenu surface.
   * @default 224
   */
  width?: React.CSSProperties['width']
  /**
   * Max height of the submenu surface.
   */
  maxHeight?: React.CSSProperties['maxHeight']
  /**
   * Callback function to be called when the submenu is closed.
   */
  onHide?: () => void
}

interface DropdownMenuItemContentProps extends ContentProps<ReactNode> {
  /**
   * Primary visible content of the menu item.
   *
   * Prefer a plain string when possible. ReactNode is supported for inline rich
   * text, but consumers should verify that the menu item still has a useful
   * accessible name.
   */
  content?: ReactNode
}

interface DropdownMenuItemOwnProps
  extends VariantProps<DropdownMenuItemVariant> {
  /**
   * Content below the main content.
   */
  description?: ReactNode
  /**
   * Content on the left.
   */
  leadingContent?: DropdownMenuItemSideContent
  /**
   * Content on the right.
   */
  trailingContent?: DropdownMenuItemSideContent
  /**
   * Whether selecting the item closes the menu.
   * @default true
   */
  closeOnSelect?: boolean
  /**
   * Callback function to be called when the item is selected by pointer or keyboard.
   *
   * Use this instead of `onClick` so Enter/Space keyboard selection follows the
   * same action path as pointer selection.
   */
  onSelect?: (event: DropdownMenuItemSelectEvent) => void
}

/**
 * Root action menu surface.
 *
 * `DropdownMenuItem` and `DropdownMenuSubTrigger` are the only children that
 * receive menu-item keyboard navigation and selection behavior. Other
 * ReactNode children can be rendered for non-interactive presentation, but
 * they are not treated as selectable menu items.
 */
export interface DropdownMenuProps
  extends Omit<BezierComponentProps<'div'>, 'children'>,
    ChildrenProps,
    SizeProps<DropdownMenuSize>,
    DropdownMenuOwnProps {}

/**
 * Wraps the element that opens the root menu.
 *
 * This is the default trigger API. It injects `aria-haspopup`,
 * `aria-expanded`, `aria-controls`, active state, and the target ref into its
 * only child. If the trigger cannot be rendered inside `DropdownMenu`, use the
 * controlled `show` + `target` props on `DropdownMenu` instead.
 *
 * The child element must accept ref, event, aria, and active-state props.
 */
export interface DropdownMenuTriggerProps extends ChildrenProps<ReactElement> {}

/**
 * Action row inside `DropdownMenu`.
 *
 * Keyboard navigation, Enter/Space selection, disabled state, and
 * close-on-select behavior are guaranteed for `DropdownMenuItem` and
 * `DropdownMenuSubTrigger`. Arbitrary children can be rendered inside
 * `DropdownMenu`, but they are not treated as menu items.
 */
export interface DropdownMenuItemProps
  extends Omit<
      BezierComponentProps<'div'>,
      | keyof DropdownMenuItemOwnProps
      | keyof DropdownMenuItemContentProps
      | 'children'
      | 'onClick'
    >,
    DropdownMenuItemContentProps,
    DisableProps,
    DropdownMenuItemOwnProps {}

export interface DropdownMenuGroupProps
  extends Omit<BezierComponentProps<'div'>, 'children'>,
    ChildrenProps {
  /**
   * Non-interactive label that describes the menu items inside this group.
   *
   * The label is connected to the group semantics and is not included in menu
   * item keyboard navigation or selection.
   */
  label: string
}

export interface DropdownMenuSeparatorProps
  extends BezierComponentProps<'div'> {}

/**
 * Scope for a nested submenu.
 *
 * Expected structure is `DropdownMenuSubTrigger` followed by
 * `DropdownMenuSubContent`. The trigger remains in the parent menu while the
 * content is rendered in a separate overlay.
 */
export interface DropdownMenuSubProps extends ChildrenProps {}

/**
 * Menu item that opens a nested submenu.
 *
 * This is not an action item, so use `DropdownMenuItem` when you need
 * `onSelect` handling.
 */
export interface DropdownMenuSubTriggerProps
  extends Omit<
    DropdownMenuItemProps,
    'trailingContent' | 'closeOnSelect' | 'onSelect'
  > {}

/**
 * Floating content boundary for nested submenu items.
 *
 * Unlike the root `DropdownMenu`, submenu content needs an explicit boundary
 * because the trigger remains in the parent menu while the submenu items are
 * rendered in a separate overlay surface.
 */
export interface DropdownMenuSubContentProps
  extends Omit<BezierComponentProps<'div'>, 'children'>,
    ChildrenProps,
    SizeProps<DropdownMenuSize>,
    DropdownMenuSubContentOwnProps {}
