'use client'

import {
  Children,
  Fragment,
  type JSX,
  type ReactElement,
  type ReactNode,
  forwardRef,
  isValidElement,
  useMemo,
  useRef,
} from 'react'
import * as React from 'react'

import { OpenInNewIcon, isBezierIcon } from '@channel.io/bezier-icons'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import * as ToolbarPrimitive from '@radix-ui/react-toolbar'
import classNames from 'classnames'



import { BaseButton } from '~/src/beta/BaseButton'
import { Icon } from '~/src/beta/Icon'
import { Text } from '~/src/beta/Text'
import useElementTruncated from '~/src/hooks/useElementTruncated'
import { createContext } from '~/src/utils/react'
import { isNil } from '~/src/utils/type'

import {
  type TabActionElement,
  type TabActionProps,
  type TabActionsProps,
  type TabContentProps,
  type TabItemLeadingContent,
  type TabItemProps,
  type TabItemTrailingContent,
  type TabListProps,
  type TabSize,
  type TabsContextValue,
  type TabsProps,
} from './Tabs.types'

import styles from './Tabs.module.scss'



const [TabsContextProvider, useTabsContext] = createContext<TabsContextValue>({
  size: 'm',
})

function getTypography(size: TabSize) {
  return (
    {
      s: '13',
      m: '14',
    } as const
  )[size]
}

function getActionTypography(size: TabSize) {
  return (
    {
      s: '13',
      m: '14',
    } as const
  )[size]
}

function getActionIconSize(size: TabSize) {
  return (
    {
      s: '16',
      m: '16',
    } as const
  )[size]
}

function flattenChildren(children: ReactNode): ReactNode[] {
  return Children.toArray(children).flatMap((child) => {
    if (
      isValidElement<{ children?: ReactNode }>(child) &&
      child.type === Fragment
    ) {
      return flattenChildren(child.props.children)
    }

    return [child]
  })
}

function isTabActionsElement(
  child: ReactNode
): child is ReactElement<TabActionsProps> {
  return isValidElement(child) && child.type === TabActions
}

function splitTabListChildren(children: ReactNode) {
  return flattenChildren(children).reduce<{
    tabItems: ReactNode[]
    tabActions: ReactNode[]
  }>(
    (result, child) => {
      if (isTabActionsElement(child)) {
        result.tabActions.push(child.props.children)
      } else {
        result.tabItems.push(child)
      }

      return result
    },
    {
      tabItems: [],
      tabActions: [],
    }
  )
}

function TabItemSideContentElement({
  content,
}: {
  content?: TabItemLeadingContent | TabItemTrailingContent
}) {
  if (isBezierIcon(content)) {
    const SourceElement = content

    return (
      <SourceElement
        className={classNames(styles.TabItemAdornment, styles.TabItemIcon)}
        aria-hidden
      />
    )
  }

  return content ? (
    <span className={styles.TabItemAdornment}>{content}</span>
  ) : null
}

/**
 * `Tabs` is a set of layered sections of content.
 * @example
 *
 * ```tsx
 * <Tabs defaultValue="all">
 *   <TabList>
 *     <TabItem value="all">All</TabItem>
 *     <TabItem value="open">Open</TabItem>
 *   </TabList>
 *   <TabContent value="all">All content</TabContent>
 * </Tabs>
 * ```
 */
export const Tabs = forwardRef<HTMLDivElement, TabsProps>(function Tabs(
  {
    className,
    activationMode = 'automatic',
    dir,
    children,
    size = 'm',
    ...rest
  },
  forwardedRef
) {
  const contextValue = useMemo(
    () => ({
      size,
    }),
    [size]
  )

  return (
    <TabsContextProvider value={contextValue}>
      <TabsPrimitive.Root
        className={classNames(styles.Tabs, className)}
        activationMode={activationMode}
        ref={forwardedRef}
        dir={dir as 'ltr' | 'rtl'}
        {...rest}
      >
        {children}
      </TabsPrimitive.Root>
    </TabsContextProvider>
  )
})

/**
 * `TabList` lays out tab triggers and optional tab actions.
 */
export const TabList = forwardRef<HTMLDivElement, TabListProps>(
  function TabList({ className, children, ...rest }, forwardedRef) {
    const { size } = useTabsContext()
    const { tabItems, tabActions } = splitTabListChildren(children)

    return (
      <div
        className={classNames(
          styles.TabList,
          styles[`size-${size}`],
          className
        )}
        ref={forwardedRef}
        {...rest}
      >
        <TabsPrimitive.List className={styles.TabItems}>
          {tabItems}
        </TabsPrimitive.List>

        {tabActions.length > 0 && (
          <ToolbarPrimitive.Root
            className={styles.TabActions}
            aria-label="More actions"
          >
            {tabActions}
          </ToolbarPrimitive.Root>
        )}
      </div>
    )
  }
)

/**
 * `TabItem` is a button that activates its associated content.
 */
export const TabItem = forwardRef<HTMLButtonElement, TabItemProps>(
  function TabItem(
    {
      className,
      disabled,
      value,
      children,
      leadingContent,
      trailingContent,
      maxWidth,
      style,
      ...rest
    },
    forwardedRef
  ) {
    const contentRef = useRef<HTMLElement>(null)
    const isTruncated = useElementTruncated(contentRef)
    const { size } = useTabsContext()

    return (
      <TabsPrimitive.Trigger
        disabled={disabled}
        value={value}
        asChild
      >
        <BaseButton
          className={classNames(
            styles.TabItem,
            styles[`size-${size}`],
            className
          )}
          disabled={disabled}
          ref={forwardedRef}
          style={{ maxWidth, ...style }}
          {...rest}
        >
          <TabItemSideContentElement content={leadingContent} />

          <Text
            ref={contentRef}
            className={styles.TabItemText}
            typo={getTypography(size)}
            fontWeight="600"
            truncated
            title={isTruncated && typeof children === 'string' ? children : undefined}
          >
            {children}
          </Text>

          <TabItemSideContentElement content={trailingContent} />
        </BaseButton>
      </TabsPrimitive.Trigger>
    )
  }
)

/**
 * `TabActions` groups actions displayed on the right side of `TabList`.
 */
export function TabActions({ children }: TabActionsProps) {
  return <>{children}</>
}

/**
 * `TabAction` is a button for more action to open a new link or navigate to a different url.
 * If it has `href` props, it should act as a link.
 */
export const TabAction = forwardRef<
  TabActionElement<string | undefined>,
  TabActionProps<string | undefined>
>(function TabAction(
  { className: classNameProp, href, children, onClick, ...rest },
  forwardedRef
) {
  const { size } = useTabsContext()
  const className = classNames(
    styles.TabAction,
    styles[`size-${size}`],
    classNameProp
  )

  return isNil(href) ? (
    <ToolbarPrimitive.Button asChild>
      <BaseButton
        className={className}
        onClick={onClick}
        ref={forwardedRef}
        {...rest}
      >
        <Text
          fontWeight="600"
          typo={getActionTypography(size)}
        >
          {children}
        </Text>
      </BaseButton>
    </ToolbarPrimitive.Button>
  ) : (
    <ToolbarPrimitive.Link asChild>
      <a
        className={className}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        // @ts-expect-error -- The element type depends on the presence of href.
        ref={forwardedRef}
        {...rest}
      >
        <Text
          fontWeight="600"
          typo={getActionTypography(size)}
        >
          {children}
        </Text>
        <Icon
          source={OpenInNewIcon}
          size={getActionIconSize(size)}
          color="icon-accent-blue"
          marginLeft={5}
        />
      </a>
    </ToolbarPrimitive.Link>
  )
}) as <Link extends string | undefined>(
  props: TabActionProps<Link> & {
    ref?: React.ForwardedRef<TabActionElement<Link>>
  }
) => JSX.Element

/**
 * `TabContent` has content associated with `TabItem`.
 */
export const TabContent = forwardRef<HTMLDivElement, TabContentProps>(
  function TabContent({ children, value, ...rest }, forwardedRef) {
    return (
      <TabsPrimitive.Content
        value={value}
        ref={forwardedRef}
        {...rest}
      >
        {children}
      </TabsPrimitive.Content>
    )
  }
)
