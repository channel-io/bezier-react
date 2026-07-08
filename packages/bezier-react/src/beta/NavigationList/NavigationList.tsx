'use client'

import {
  forwardRef,
  useCallback,
  useId,
  useState,
} from 'react'
import * as React from 'react'

import {
  type BezierIcon,
  ChevronSmallDownIcon,
  ChevronSmallRightIcon,
  isBezierIcon,
} from '@channel.io/bezier-icons'
import classNames from 'classnames'

import { BaseItem } from '~/src/beta/BaseItem/BaseItem'
import { Text } from '~/src/beta/Text'
import { isNil } from '~/src/utils/type'

import type {
  NavigationGroupProps,
  NavigationItemProps,
  NavigationListProps,
} from './NavigationList.types'

import styles from './NavigationList.module.scss'

export const NAVIGATION_LIST_TEST_ID = 'bezier-beta-navigation-list'
export const NAVIGATION_ITEM_TEST_ID = 'bezier-beta-navigation-item'
export const NAVIGATION_GROUP_TEST_ID = 'bezier-beta-navigation-group'
export const NAVIGATION_GROUP_CONTENT_TEST_ID =
  'bezier-beta-navigation-group-content'

function NavigationSideContent({
  content,
}: {
  content?: BezierIcon | React.ReactNode
}) {
  if (isBezierIcon(content)) {
    const SourceElement = content

    return (
      <SourceElement
        className={styles.Icon}
        aria-hidden
      />
    )
  }

  return content
}

function NavigationContentText({ content }: { content: React.ReactNode }) {
  if (typeof content !== 'string') {
    return content
  }

  return (
    <Text
      typo="14"
      fontWeight="500"
      truncated
    >
      {content}
    </Text>
  )
}

export const NavigationList = forwardRef<HTMLElement, NavigationListProps>(
  function NavigationList({ className, children, ...rest }, forwardedRef) {
    return (
      <nav
        ref={forwardedRef}
        className={classNames(styles.NavigationList, className)}
        data-testid={NAVIGATION_LIST_TEST_ID}
        {...rest}
      >
        {children}
      </nav>
    )
  }
)

export const NavigationItem = forwardRef<HTMLElement, NavigationItemProps>(
  function NavigationItem(props, forwardedRef) {
    const {
      className,
      style,
      content,
      leadingContent,
      trailingContent,
      active = false,
      disabled = false,
      ...rest
    } = props
    const isLink = 'href' in rest && rest.href != null

    const handleDisabledLinkClick = (
      event: React.MouseEvent<HTMLAnchorElement>
    ) => {
      if (disabled) {
        event.preventDefault()
        event.stopPropagation()
      }
    }

    if (isLink) {
      const { href, ...anchorRest } = rest

      return (
        <BaseItem
          as="a"
          ref={forwardedRef as React.Ref<HTMLAnchorElement>}
          className={className}
          style={style}
          data-testid={NAVIGATION_ITEM_TEST_ID}
          aria-disabled={disabled || undefined}
          href={href}
          draggable={false}
          active={active}
          interactive
          contentMaxLines={1}
          leadingContent={leadingContent}
          trailingContent={trailingContent}
          disabled={disabled}
          {...anchorRest}
          tabIndex={disabled ? -1 : anchorRest.tabIndex}
          onClick={handleDisabledLinkClick}
        >
          {content}
        </BaseItem>
      )
    }

    return (
      <BaseItem
        as="button"
        ref={forwardedRef as React.Ref<HTMLButtonElement>}
        className={className}
        style={style}
        data-testid={NAVIGATION_ITEM_TEST_ID}
        aria-disabled={disabled || undefined}
        type={rest.type ?? 'button'}
        active={active}
        interactive
        contentMaxLines={1}
        leadingContent={leadingContent}
        trailingContent={trailingContent}
        disabled={disabled}
        {...rest}
      >
        {content}
      </BaseItem>
    )
  }
)

export const NavigationGroup = forwardRef<
  HTMLButtonElement,
  NavigationGroupProps
>(function NavigationGroup(
  {
    className,
    style,
    children,
    label,
    leadingContent,
    trailingContent,
    disabled = false,
    open: openProp,
    defaultOpen = false,
    onOpenChange,
    onClick,
    ...rest
  },
  forwardedRef
) {
  const contentId = useId()
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen)
  const controlled = !isNil(openProp)
  const open = controlled ? Boolean(openProp) : uncontrolledOpen
  const ChevronIcon = open ? ChevronSmallDownIcon : ChevronSmallRightIcon

  const setOpen = useCallback(
    (nextOpen: boolean) => {
      if (disabled) {
        return
      }

      if (!controlled) {
        setUncontrolledOpen(nextOpen)
      }

      onOpenChange?.(nextOpen)
    },
    [controlled, disabled, onOpenChange]
  )

  return (
    <div
      className={styles.NavigationGroup}
      data-testid={NAVIGATION_GROUP_TEST_ID}
      data-state={open ? 'open' : 'closed'}
    >
      <button
        ref={forwardedRef}
        className={classNames(
          styles.NavigationGroupTrigger,
          disabled && styles.disabled,
          styles.interactive,
          className
        )}
        style={style}
        type="button"
        {...rest}
        disabled={disabled}
        aria-disabled={disabled || undefined}
        aria-controls={contentId}
        aria-expanded={open}
        data-state={open ? 'open' : 'closed'}
        onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
          onClick?.(event)
          if (!event.defaultPrevented) {
            setOpen(!open)
          }
        }}
      >
        <div className={styles.GroupTriggerContent}>
          {leadingContent != null && (
            <div className={styles.LeadingContent}>
              <NavigationSideContent content={leadingContent} />
            </div>
          )}

          <div className={styles.MainContent}>
            <NavigationContentText content={label} />
          </div>

          <div className={styles.ContentSuffix}>
            <ChevronIcon
              className={styles.Chevron}
              aria-hidden
            />
          </div>
        </div>

        {trailingContent != null && (
          <div className={styles.TrailingContent}>
            <NavigationSideContent content={trailingContent} />
          </div>
        )}
      </button>

      {open && (
        <div
          id={contentId}
          className={classNames(
            styles.NavigationGroupContent,
            leadingContent != null && styles['has-leading-content']
          )}
          data-testid={NAVIGATION_GROUP_CONTENT_TEST_ID}
        >
          {children}
        </div>
      )}
    </div>
  )
})
