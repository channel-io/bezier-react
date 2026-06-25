import type { ReactNode } from 'react'

import type { CollapsibleProps } from '~/src/beta/Collapsible'
import type { SectionItemProps, SectionProps } from '~/src/beta/Section'
import type { SectionLabelProps } from '~/src/beta/Section/Section.types'
import type { ChildrenProps } from '~/src/types/props'

export interface CollapsibleSectionProps
  extends Omit<SectionProps, 'children'>,
    Pick<
      CollapsibleProps,
      'open' | 'defaultOpen' | 'disabled' | 'onOpenChange'
    >,
    ChildrenProps {}

export interface CollapsibleSectionTriggerProps
  extends Omit<
    SectionLabelProps,
    | 'children'
    | 'onClick'
    | 'onKeyDown'
    | 'role'
    | 'tabIndex'
  > {
  /**
   * Whether the section trigger is disabled.
   * @default false
   */
  disabled?: boolean
}

export type CollapsibleSectionItemProps = SectionItemProps

export type CollapsibleSectionChild = ReactNode
