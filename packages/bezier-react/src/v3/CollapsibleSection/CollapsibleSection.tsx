'use client'

import { Children, Fragment, forwardRef, isValidElement } from 'react'
import * as React from 'react'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '~/src/v3/Collapsible'
import { Section, SectionItem, SectionLabel } from '~/src/v3/Section'

import type {
  CollapsibleSectionItemProps,
  CollapsibleSectionProps,
  CollapsibleSectionTriggerProps,
} from './CollapsibleSection.types'

function isCollapsibleSectionTriggerElement(
  child: React.ReactNode
): child is React.ReactElement<CollapsibleSectionTriggerProps> {
  return isValidElement(child) && child.type === CollapsibleSectionTrigger
}

function flattenChildren(children: React.ReactNode): React.ReactNode[] {
  return Children.toArray(children).flatMap((child) => {
    if (
      isValidElement<{ children?: React.ReactNode }>(child) &&
      child.type === Fragment
    ) {
      return flattenChildren(child.props.children)
    }

    return [child]
  })
}

function splitCollapsibleSectionChildren(children: React.ReactNode) {
  return flattenChildren(children).reduce<{
    trigger: React.ReactNode | null
    content: React.ReactNode[]
  }>(
    (result, child) => {
      if (isCollapsibleSectionTriggerElement(child)) {
        result.trigger = child
      } else {
        result.content.push(child)
      }

      return result
    },
    {
      trigger: null,
      content: [],
    }
  )
}

export const CollapsibleSection = forwardRef<
  HTMLElement,
  CollapsibleSectionProps
>(function CollapsibleSection(
  {
    children,
    open,
    defaultOpen,
    disabled,
    onOpenChange,
    ...sectionProps
  },
  forwardedRef
) {
  const { trigger, content } = splitCollapsibleSectionChildren(children)

  return (
    <Collapsible
      open={open}
      defaultOpen={defaultOpen}
      disabled={disabled}
      onOpenChange={onOpenChange}
    >
      <Section
        ref={forwardedRef}
        {...sectionProps}
      >
        {trigger}
        <CollapsibleContent>{content}</CollapsibleContent>
      </Section>
    </Collapsible>
  )
})

export function CollapsibleSectionTrigger({
  disabled: disabledProp = false,
  ...labelProps
}: CollapsibleSectionTriggerProps) {
  return (
    <CollapsibleTrigger disabled={disabledProp}>
      {({ disabled, triggerProps }) => {
        const {
          onClick,
          onKeyDown,
          id,
          'aria-controls': ariaControls,
          'aria-expanded': ariaExpanded,
          'aria-disabled': ariaDisabled,
          'data-state': dataState,
          'data-active': dataActive,
        } = triggerProps

        return (
          <SectionLabel
            {...labelProps}
            id={id}
            aria-controls={ariaControls}
            aria-expanded={ariaExpanded}
            aria-disabled={ariaDisabled}
            data-state={dataState}
            data-active={dataActive}
            role="button"
            tabIndex={disabled ? -1 : 0}
            onClick={(event: React.MouseEvent<HTMLElement>) => {
              onClick?.(
                event as unknown as React.MouseEvent<HTMLButtonElement>
              )
            }}
            onKeyDown={(event: React.KeyboardEvent<HTMLElement>) => {
              onKeyDown?.(
                event as unknown as React.KeyboardEvent<HTMLButtonElement>
              )

              if (event.defaultPrevented || disabled) {
                return
              }

              if (event.key === 'Enter' || event.key === ' ') {
                onClick?.(
                  event as unknown as React.MouseEvent<HTMLButtonElement>
                )
                event.preventDefault()
              }
            }}
          />
        )
      }}
    </CollapsibleTrigger>
  )
}

/**
 * `CollapsibleSectionItem` is a row inside `CollapsibleSection`.
 *
 * It shares the same implementation as `SectionItem`; this alias keeps the
 * `CollapsibleSection` component family self-contained without duplicating row
 * behavior or styles.
 */
export const CollapsibleSectionItem = SectionItem as React.ForwardRefExoticComponent<
  CollapsibleSectionItemProps & React.RefAttributes<HTMLElement>
>
