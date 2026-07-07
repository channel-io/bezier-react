'use client'

import { Children, Fragment, forwardRef, isValidElement } from 'react'
import * as React from 'react'

import {
  ChevronSmallDownIcon,
  ChevronSmallUpIcon,
  isBezierIcon,
} from '@channel.io/bezier-icons'
import classNames from 'classnames'



import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '~/src/beta/Collapsible'
import { Help } from '~/src/beta/Help'
import { Section, SectionItem, SectionLabel } from '~/src/beta/Section'
import type { SectionLabelSideContent } from '~/src/beta/Section/Section.types'

import type {
  CollapsibleSectionItemProps,
  CollapsibleSectionProps,
  CollapsibleSectionTriggerProps,
} from './CollapsibleSection.types'

import styles from './CollapsibleSection.module.scss'



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

function CollapsibleSectionTriggerTrailingContentElement({
  content,
}: {
  content: SectionLabelSideContent
}) {
  if (isBezierIcon(content)) {
    const SourceElement = content

    return (
      <SourceElement
        className={styles.TriggerTrailingIcon}
        aria-hidden
      />
    )
  }

  return content
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
  className,
  content,
  disabled: disabledProp = false,
  help,
  trailingContent,
  variant = 'neutral-dark',
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
        const ChevronIcon =
          dataState === 'open' ? ChevronSmallUpIcon : ChevronSmallDownIcon

        return (
          <SectionLabel
            {...labelProps}
            id={id}
            className={classNames(styles.Trigger, className)}
            aria-controls={ariaControls}
            aria-expanded={ariaExpanded}
            aria-disabled={ariaDisabled}
            data-state={dataState}
            data-active={dataActive}
            content={
              <span className={styles.TriggerContent}>
                <span className={styles.TriggerMainContent}>{content}</span>
                {help != null && (
                  <span className={styles.TriggerHelp}>
                    <Help>{help}</Help>
                  </span>
                )}
                <span className={styles.TriggerContentSuffix}>
                  <ChevronIcon
                    className={styles.TriggerChevron}
                    aria-hidden
                  />
                </span>
              </span>
            }
            variant={variant}
            trailingContent={
              trailingContent != null ? (
                <span className={styles.TriggerTrailingContent}>
                  <CollapsibleSectionTriggerTrailingContentElement
                    content={trailingContent}
                  />
                </span>
              ) : undefined
            }
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
 * It delegates to `SectionItem`; the wrapper keeps the `CollapsibleSection`
 * component family self-contained without changing `SectionItem`'s component
 * identity in Storybook source previews.
 */
export const CollapsibleSectionItem = forwardRef<
  HTMLElement,
  CollapsibleSectionItemProps
>(function CollapsibleSectionItem(props, forwardedRef) {
  return (
    <SectionItem
      ref={forwardedRef}
      {...props}
    />
  )
})
