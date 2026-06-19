import type { ReactNode } from 'react'

import type { ChildrenProps } from '~/src/types/props'
import type { CollapsibleProps } from '~/src/v3/Collapsible'
import type { SectionItemProps, SectionProps } from '~/src/v3/Section'
import type { SectionLabelProps } from '~/src/v3/Section/Section.types'

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
    'children' | 'onClick' | 'onKeyDown' | 'role' | 'tabIndex'
  > {
  /**
   * Whether the section trigger is disabled.
   * @default false
   */
  disabled?: boolean
}

export type CollapsibleSectionItemProps = SectionItemProps

export type CollapsibleSectionChild = ReactNode
