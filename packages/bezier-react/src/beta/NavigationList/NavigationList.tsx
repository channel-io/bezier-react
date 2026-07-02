'use client'

import {
  forwardRef,
  useCallback,
  useId,
  useState,
} from 'react'
import * as React from 'react'

import {
  ChevronSmallDownIcon,
  ChevronSmallRightIcon,
  isBezierIcon,
} from '@channel.io/bezier-icons'
import classNames from 'classnames'

import { Text } from '~/src/beta/Text'
import { isNil } from '~/src/utils/type'

import type {
  NavigationGroupProps,
  NavigationItemProps,
  NavigationListContent,
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
  content?: NavigationListContent
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
    const Component = (isLink ? 'a' : 'button') as React.ElementType
    const hasLeadingContent = leadingContent != null

    const handleDisabledLinkClick = (
      event: React.MouseEvent<HTMLAnchorElement>
    ) => {
      if (disabled) {
        event.preventDefault()
        event.stopPropagation()
      }
    }

    return (
      <Component
        ref={forwardedRef}
        className={classNames(
          styles.NavigationItem,
          active && styles.active,
          disabled && styles.disabled,
          styles.interactive,
          className
        )}
        style={style}
        data-testid={NAVIGATION_ITEM_TEST_ID}
        aria-disabled={disabled || undefined}
        {...rest}
        {...(isLink && {
          draggable: false,
          tabIndex: disabled ? -1 : rest.tabIndex,
          onClick: handleDisabledLinkClick,
        })}
        {...(!isLink && {
          type: rest.type ?? 'button',
          disabled,
        })}
      >
        <div
          className={classNames(
            styles.ItemContent,
            !hasLeadingContent && styles['without-leading-content']
          )}
        >
          {hasLeadingContent && (
            <div className={styles.LeadingContent}>
              <NavigationSideContent content={leadingContent} />
            </div>
          )}

          <div className={styles.MainContent}>
            <NavigationContentText content={content} />
          </div>
        </div>

        {trailingContent != null && (
          <div className={styles.TrailingContent}>
            <NavigationSideContent content={trailingContent} />
          </div>
        )}
      </Component>
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
    content,
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
  const hasLeadingContent = leadingContent != null

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
        <div
          className={classNames(
            styles.GroupTriggerContent,
            !hasLeadingContent && styles['without-leading-content']
          )}
        >
          {hasLeadingContent && (
            <div className={styles.LeadingContent}>
              <NavigationSideContent content={leadingContent} />
            </div>
          )}

          <div className={styles.MainContent}>
            <NavigationContentText content={content} />
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
          className={styles.NavigationGroupContent}
          data-testid={NAVIGATION_GROUP_CONTENT_TEST_ID}
        >
          {children}
        </div>
      )}
    </div>
  )
})
