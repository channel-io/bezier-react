import type { ReactElement, ReactNode } from 'react'

import type {
  BezierComponentProps,
  ChildrenProps,
  DisableProps,
} from '~/src/types/props'

export type CollapsibleState = 'open' | 'closed'

export interface CollapsibleProps
  extends Omit<BezierComponentProps<'div'>, 'children'>,
    ChildrenProps {
  /**
   * The controlled open state.
   */
  open?: boolean
  /**
   * The open state when initially rendered.
   * @default false
   */
  defaultOpen?: boolean
  /**
   * Whether the collapsible trigger is disabled.
   * @default false
   */
  disabled?: boolean
  /**
   * Callback function to be called when the open state changes.
   */
  onOpenChange?: (open: boolean) => void
}

export interface CollapsibleTriggerRenderProps {
  open: boolean
  disabled: boolean
  triggerProps: BezierComponentProps<'button'> & {
    'data-state': CollapsibleState
    'data-active': boolean
  }
}

export interface CollapsibleTriggerProps
  extends Omit<BezierComponentProps<'button'>, 'children'>,
    DisableProps {
  children:
    | ReactElement
    | ((props: CollapsibleTriggerRenderProps) => ReactNode)
}

export interface CollapsibleContentProps
  extends Omit<BezierComponentProps<'div'>, 'children'>,
    ChildrenProps {
  /**
   * When true, content remains mounted while closed.
   * @default false
   */
  forceMount?: boolean
}

export interface CollapsibleCloseProps
  extends Omit<BezierComponentProps<'button'>, 'children'> {
  children: ReactElement
}
