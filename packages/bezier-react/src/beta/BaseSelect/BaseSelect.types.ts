import type { ReactNode } from 'react'

import type { BezierIcon } from '@channel.io/bezier-icons'

import type { OverlayPosition } from '~/src/beta/Overlay'
import type {
  BezierComponentProps,
  ChildrenProps,
  DisableProps,
  FormFieldProps,
} from '~/src/types/props'

export type BaseSelectValue = string

export type BaseSelectTriggerSize = 'm' | 'l'

export type BaseSelectOptionSideContent = BezierIcon | ReactNode

export interface BaseSelectOptionData<
  Value extends BaseSelectValue = BaseSelectValue,
> {
  /**
   * Stable selection identity.
   *
   * This is the value used by `value`, `defaultValue`, and `onValueChange`.
   * It is also used as the fallback label when `label` is not provided.
   */
  value: Value
  /**
   * Plain user-facing text for this option.
   *
   * Used for the default trigger display, accessible name, and future
   * text-based interactions such as typeahead. Defaults to `value`.
   */
  label: string
  disabled?: boolean
}

export interface BaseSelectOverlayProps {
  /**
   * The controlled open state of the select dropdown.
   */
  show?: boolean
  /**
   * The open state of the select dropdown when it is initially rendered.
   */
  defaultShow?: boolean
  /**
   * Specify a container element to portal the dropdown into.
   * @default document.body
   */
  container?: HTMLElement | null
  /**
   * Position of the dropdown from the trigger.
   * @default 'bottom-left'
   */
  position?: OverlayPosition
  /**
   * Distance in pixels from the trigger.
   * @default 6
   */
  offset?: number
  /**
   * When `true`, keeps the dropdown inside its container.
   * @default false
   */
  keepInContainer?: boolean
  /**
   * Width of the dropdown surface.
   * @default 'target'
   */
  dropdownWidth?: React.CSSProperties['width']
  /**
   * Max height of the dropdown surface.
   */
  dropdownMaxHeight?: React.CSSProperties['maxHeight']
  /**
   * Callback function to be called when the dropdown is opened.
   */
  onShow?: () => void
  /**
   * Callback function to be called when the dropdown is closed.
   */
  onHide?: () => void
}

export interface BaseSelectTriggerVisualProps {
  /**
   * Placeholder shown when no option is selected.
   */
  placeholder?: ReactNode
  /**
   * Content on the left side of the default trigger.
   */
  leadingContent?: BezierIcon | ReactNode
  /**
   * When `true`, hides the default chevron icon.
   */
  withoutChevron?: boolean
}

export interface BaseSelectCommonProps
  extends Omit<
      BezierComponentProps<'button'>,
      'children' | 'defaultValue' | 'onChange' | 'value'
    >,
    ChildrenProps,
    FormFieldProps,
    BaseSelectOverlayProps {
  /**
   * Size of the default trigger.
   *
   * Option rows are fixed to the design-system item size. This value is only
   * used by the built-in trigger, and is passed to custom trigger render
   * functions for consumers that want to mirror the same sizing.
   */
  triggerSize?: BaseSelectTriggerSize
}

interface BaseSelectOptionCommonProps<Value extends BaseSelectValue>
  extends DisableProps {
  /**
   * Stable selection identity.
   * Used as the controlled/uncontrolled selected value.
   */
  value: Value
  /**
   * Content below the main option content.
   */
  description?: ReactNode
  /**
   * Content on the left. When the option is selected, the design-system
   * selected indicator is shown on the right side and does not replace this
   * content.
   */
  leadingContent?: BaseSelectOptionSideContent
}

type BaseSelectOptionContentProps =
  | {
      /**
       * Plain user-facing text.
       *
       * Defaults to `value`. Used for the default trigger display, accessible
       * name, and future text-based interactions such as typeahead.
       */
      label?: string
      /**
       * Use `content` only when the option row differs from the plain `label`.
       */
      content?: never
    }
  | {
      /**
       * Plain option row text.
       *
       * This is also used as the option label for trigger display, accessible
       * name, and future text-based interactions such as typeahead.
       */
      content: string
      /**
       * String `content` already serves as the option label.
       */
      label?: never
    }
  | {
      /**
       * Plain user-facing text.
       *
       * Required when rich `content` is provided because rich content only
       * controls the option row visuals. `label` remains the source for trigger
       * display, accessible name, and future text-based interactions such as
       * typeahead.
       */
      label: string
      /**
       * Visual option row content.
       *
       * Use this only when the option row needs richer visual composition than
       * plain text. This does not replace `value` or `label`.
       */
      content: Exclude<ReactNode, string>
    }

type BaseSelectOptionOwnProps<Value extends BaseSelectValue> =
  BaseSelectOptionCommonProps<Value> & BaseSelectOptionContentProps

type BaseSelectOptionOwnPropKeys =
  | keyof BaseSelectOptionCommonProps<BaseSelectValue>
  | 'label'
  | 'content'

export type BaseSelectOptionProps<
  Value extends BaseSelectValue = BaseSelectValue,
> = Omit<
  BezierComponentProps<'div'>,
  BaseSelectOptionOwnPropKeys | 'children' | 'onClick'
> &
  BaseSelectOptionOwnProps<Value>

export interface BaseSelectGroupProps
  extends Omit<BezierComponentProps<'div'>, 'children'>,
    ChildrenProps {
  /**
   * Non-selectable label that describes the options inside this group.
   *
   * The label is connected to the group semantics and is not included in
   * option keyboard navigation or selection.
   */
  label: string
}

export interface BaseSelectTriggerRenderProps<
  Value extends BaseSelectValue = BaseSelectValue,
> {
  triggerProps: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    ref: (element: HTMLButtonElement | null) => void
    'data-state': 'open' | 'closed'
  }
  open: boolean
  selectedOption: BaseSelectOptionData<Value> | null
  placeholder: ReactNode
  triggerSize: NonNullable<BaseSelectCommonProps['triggerSize']>
}

export interface BaseMultiSelectTriggerRenderProps<
  Value extends BaseSelectValue = BaseSelectValue,
> extends Omit<BaseSelectTriggerRenderProps<Value>, 'selectedOption'> {
  value: readonly Value[]
  selectedOptions: readonly BaseSelectOptionData<Value>[]
  onValueChange: (value: readonly Value[]) => void
}

export interface BaseSelectTriggerProps<
  Value extends BaseSelectValue = BaseSelectValue,
> {
  children: (props: BaseSelectTriggerRenderProps<Value>) => ReactNode
}

export interface BaseMultiSelectTriggerProps<
  Value extends BaseSelectValue = BaseSelectValue,
> {
  children: (props: BaseMultiSelectTriggerRenderProps<Value>) => ReactNode
}

export interface BaseSelectRenderTriggerProps<
  Value extends BaseSelectValue = BaseSelectValue,
> {
  trigger: React.ReactElement<
    BaseSelectTriggerProps<Value> | BaseMultiSelectTriggerProps<Value>
  > | null
  triggerProps: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    ref: (element: HTMLButtonElement | null) => void
    'data-state': 'open' | 'closed'
  }
  open: boolean
  selectedOption: BaseSelectOptionData<Value> | null
  selectedOptions: readonly BaseSelectOptionData<Value>[]
  triggerSize: NonNullable<BaseSelectCommonProps['triggerSize']>
  disabled: boolean
  readOnly: boolean
  hasError: boolean
}

export interface BaseSelectProps<Value extends BaseSelectValue = BaseSelectValue>
  extends BaseSelectCommonProps {
  selectedValues: readonly Value[]
  onOptionSelect: (value: Value) => void
  closeOnOptionSelect?: boolean
  ariaMultiselectable?: boolean
  renderTrigger: (props: BaseSelectRenderTriggerProps<Value>) => ReactNode
}
