import React, {
  forwardRef,
  useMemo,
} from 'react'

import { OpenInNewIcon } from '@channel.io/bezier-icons'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import * as ToolbarPrimitive from '@radix-ui/react-toolbar'
import classNames from 'classnames'

import { createContext } from '~/src/utils/react'
import { isNil } from '~/src/utils/type'

import { BaseButton } from '~/src/components/BaseButton'
import { Button } from '~/src/components/Button'
import {
  Icon,
  IconSize,
} from '~/src/components/Icon'
import {
  type TabActionElement,
  type TabActionProps,
  type TabActionsProps,
  type TabContentProps,
  type TabItemProps,
  type TabItemsProps,
  type TabListContextValue,
  type TabListProps,
  TabSize,
  type TabsProps,
} from '~/src/components/Tabs/Tabs.types'
import { Text } from '~/src/components/Text'

import styles from './Tabs.module.scss'

/**
 * `Tabs` is a set of layered section of content.
 *
 * `Tabs` is a context of the Tab-related components and gives accessibility properties to Tab-related components.
 * @example
 *
 * ```tsx
 * <Tabs>
 *  <TabList>
 *    <TabItems>
 *      <TabItem />
 *    <TabItems />
 *    <TabActions>
 *      <TabAction />
 *    </TabActions>
 *  </TabList>
 *  <TabContent />
 * </Tabs>
 * ```
 */

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(function Tabs({
  className,
  activationMode = 'automatic',
  dir,
  children,
  ...rest
}, forwardedRef) {
  return (
    <TabsPrimitive.Root
      className={classNames(
        styles.Tabs,
        className,
      )}
      activationMode={activationMode}
      ref={forwardedRef}
      dir={dir as 'ltr' | 'rtl'}
      {...rest}
    >
      { children }
    </TabsPrimitive.Root>
  )
})

const [
  TabListContextProvider,
  useTabListContext,
] = createContext<TabListContextValue>({
  size: TabSize.M,
})

/**
 * `TabList` gives size context to its children and decides the layout of `TabItems` and `TabActions`.
 */
export const TabList = forwardRef<HTMLDivElement, TabListProps>(function TabList({
  className,
  children,
  size = TabSize.M,
  ...rest
}, forwardedRef) {
  const heightContextValue = useMemo(() => ({
    size,
  }), [size])

  return (
    <TabListContextProvider value={heightContextValue}>
      <div
        className={classNames(
          styles.TabList,
          styles[`size-${size}`],
        )}
        ref={forwardedRef}
        {...rest}
      >
        { children }
      </div>
    </TabListContextProvider>
  )
})

/**
 * `TabItems` is a flex container which has `TabItem` flex items.
 */
export const TabItems = forwardRef<HTMLDivElement, TabItemsProps>(function TabItems({
  className,
  children,
  ...rest
}, forwardedRef) {
  return (
    <TabsPrimitive.TabsList
      className={classNames(
        styles.TabItems,
        className,
      )}
      ref={forwardedRef}
      {...rest}
    >
      { children }
    </TabsPrimitive.TabsList>
  )
})

function getButtonSizeBy(size: TabSize) {
  return ({
    [TabSize.L]: 'l',
    [TabSize.M]: 'm',
    [TabSize.S]: 's',
  } as const)[size]
}

/**
 * `TabItem` is a button that activates its associated content.
 */
export const TabItem = forwardRef<HTMLButtonElement, TabItemProps>(function TabItem({
  className,
  disabled,
  value,
  children,
  ...rest
}, forwardedRef) {
  const { size } = useTabListContext()

  if (typeof children !== 'string') {
    return null
  }

  return (
    <TabsPrimitive.TabsTrigger
      disabled={disabled}
      value={value}
      asChild
    >
      <Button
        className={classNames(
          styles.TabItem,
          className,
        )}
        disabled={disabled}
        text={children}
        size={getButtonSizeBy(size)}
        colorVariant="monochrome-light"
        styleVariant="tertiary"
        ref={forwardedRef}
        {...rest}
      />
    </TabsPrimitive.TabsTrigger>
  )
})

/**
 * `TabContent` has content associated with `TabItem`.
 */
export const TabContent = forwardRef<HTMLDivElement, TabContentProps>(function TabContent({
  children,
  value,
  ...rest
}, forwardedRef) {
  return (
    <TabsPrimitive.Content
      value={value}
      ref={forwardedRef}
      {...rest}
    >
      { children }
    </TabsPrimitive.Content>
  )
})

/**
 * `TabActions` is a flex container which has `TabAction` flex items.
 *  It also gives accessibility properties to its children.
 */
export const TabActions = forwardRef<HTMLDivElement, TabActionsProps>(function TabActions({
  className,
  dir,
  children,
  ...rest
}, forwardedRef) {
  return (
    <ToolbarPrimitive.Root
      className={classNames(
        styles.TabActions,
        className,
      )}
      aria-label="More actions"
      ref={forwardedRef}
      dir={dir as 'ltr' | 'rtl'}
      {...rest}
    >
      { children }
    </ToolbarPrimitive.Root>
  )
})

function getTypoBy(size: TabSize) {
  return ({
    [TabSize.L]: '14',
    [TabSize.M]: '14',
    [TabSize.S]: '13',
  } as const)[size]
}

function getIconSizeBy(size: TabSize) {
  return ({
    [TabSize.L]: IconSize.S,
    [TabSize.M]: IconSize.XS,
    [TabSize.S]: IconSize.XS,
  } as const)[size]
}

/**
 * `TabAction` is a button for more action to open a new link or navigate to a different url.
 * If it has `href` props, it should act as a link.
 */
export const TabAction = forwardRef<TabActionElement<string | undefined>, TabActionProps<string | undefined>>(function TabAction({
  className: classNameProp,
  href,
  children,
  onClick,
  ...rest
}, forwardedRef,
) {
  const { size } = useTabListContext()
  const className = classNames(
    styles.TabAction,
    styles[`size-${size}`],
    classNameProp,
  )

  return (
    isNil(href) ? (
      <ToolbarPrimitive.Button
        asChild
        className={className}
        onClick={onClick}
        ref={forwardedRef}
        {...rest}
      >
        <BaseButton>
          <Text
            bold
            typo={getTypoBy(size)}
          >
            { children }
          </Text>
        </BaseButton>
      </ToolbarPrimitive.Button>
    ) : (
      <ToolbarPrimitive.Link
        className={className}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        // @ts-expect-error
        ref={forwardedRef}
        {...rest}
      >
        <Text
          bold
          typo={getTypoBy(size)}
        >
          { children }
        </Text>
        <Icon
          source={OpenInNewIcon}
          size={getIconSizeBy(size)}
          marginLeft={5}
        />
      </ToolbarPrimitive.Link>
    )
  )
}) as <Link extends string | undefined>(
  props: TabActionProps<Link> & {
    ref?: React.ForwardedRef<TabActionElement<Link>>
  }
) => JSX.Element
