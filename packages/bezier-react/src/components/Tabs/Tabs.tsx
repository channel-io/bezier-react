import React, {
  forwardRef,
  useMemo,
} from 'react'

import { OpenInNewIcon } from '@channel.io/bezier-icons'
import * as TabsPrimitive from '@radix-ui/react-tabs'

import { createContext } from '~/src/utils/react'
import { px } from '~/src/utils/style'
import { isNil } from '~/src/utils/type'

import {
  ButtonColorVariant,
  ButtonSize,
  ButtonStyleVariant,
} from '~/src/components/Button'
import { IconSize } from '~/src/components/Icon'
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

import * as Styled from './TabAction.styled'
import * as Styled from './TabActions.styled'
import * as Styled from './TabItem.styled'
import * as Styled from './TabItems.styled'
import * as Styled from './Tabs.styled'

/**
 * `Tabs` is a set of layered section of content.
 *
 * `Tabs` is a context of the Tab-related components and gives accessibility properties to Tab-related components.
 *
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

export const Tabs = forwardRef(function Tabs({
  activationMode = 'automatic',
  children,
  ...rest
}: TabsProps, forwardedRef: React.Ref<HTMLDivElement>) {
  return (
    <Styled.Tabs
      activationMode={activationMode}
      ref={forwardedRef}
      {...rest}
    >
      { children }
    </Styled.Tabs>
  )
})

const heightBy = (size: TabSize) => {
  switch (size) {
    case TabSize.L:
      return 53
    case TabSize.M:
      return 45
    case TabSize.S:
    default:
      return 33
  }
}

export const [
  TabListContextProvider,
  useTabListContext,
] = createContext<TabListContextValue>({
  size: TabSize.M,
})

/**
 * `TabList` gives size context to its children and decides the layout of `TabItems` and `TabActions`.
 */
export const TabList = forwardRef(function TabList({
  children,
  size = TabSize.M,
  ...rest
}: TabListProps, forwardedRef: React.Ref<HTMLDivElement>) {
  const heightContextValue = useMemo(() => ({
    size,
  }), [size])

  return (
    <TabListContextProvider value={heightContextValue}>
      <Styled.TabList
        size={size}
        ref={forwardedRef}
        style={{
          '--b-tabs-size': px(heightBy(size)),
        } as React.CSSProperties}
        {...rest}
      >
        { children }
      </Styled.TabList>
    </TabListContextProvider>
  )
})

/**
 * `TabItems` is a flex container which has `TabItem` flex items.
 */
export const TabItems = forwardRef(function TabItems({
  children,
}: TabItemsProps, forwardedRef: React.Ref<HTMLDivElement>) {
  return (
    <Styled.TabItems ref={forwardedRef}>
      { children }
    </Styled.TabItems>
  )
})

const getButtonSizeBy = (size: TabSize) => {
  switch (size) {
    case TabSize.L:
      return ButtonSize.L
    case TabSize.M:
      return ButtonSize.M
    default:
    case TabSize.S:
      return ButtonSize.S
  }
}

/**
 * `TabItem` is a button that activates its associated content.
 */
export const TabItem = forwardRef(function TabItem({
  disabled,
  value,
  children,
  ...rest
}: TabItemProps, forwardedRef: React.Ref<HTMLButtonElement>) {
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
      <Styled.Button
        disabled={disabled}
        text={children}
        size={getButtonSizeBy(size)}
        colorVariant={ButtonColorVariant.MonochromeLight}
        styleVariant={ButtonStyleVariant.Tertiary}
        ref={forwardedRef}
        {...rest}
      />
    </TabsPrimitive.TabsTrigger>
  )
})

/**
 * `TabContent` has content associated with `TabItem`.
 */
export const TabContent = forwardRef(function TabContent({
  children,
  value,
  ...rest
}: TabContentProps, forwardedRef: React.Ref<HTMLDivElement>) {
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
export const TabActions = forwardRef(function TabActions({
  children,
}: TabActionsProps, forwardedRef: React.Ref<HTMLDivElement>) {
  return (
    <Styled.TabActions
      aria-label="More actions"
      ref={forwardedRef}
    >
      { children }
    </Styled.TabActions>
  )
})

const getTypoBy = (size: TabSize) => {
  switch (size) {
    case TabSize.L:
      return '14'
    case TabSize.M:
    case TabSize.S:
    default:
      return '13'
  }
}

const getIconSizeBy = (size: TabSize) => {
  switch (size) {
    case TabSize.L:
      return IconSize.S
    default:
      return IconSize.XS
  }
}

/**
 * `TabAction` is a button for more action to open a new link or navigate to a different url.
 * If it has `href` props, it should act as a link.
 */
export const TabAction = forwardRef(function TabAction({
  href,
  children,
  onClick,
  ...rest
}, forwardedRef,
) {
  const { size } = useTabListContext()

  return (
    isNil(href) ? (
      <Styled.ToolbarButton
        size={size}
        onClick={onClick}
        ref={forwardedRef}
        {...rest}
      >
        <Text
          bold
          typo={getTypoBy(size)}
        >
          { children }
        </Text>
      </Styled.ToolbarButton>
    ) : (
      <Styled.ToolbarLink
        size={size}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        ref={forwardedRef}
        {...rest}
      >
        <Text
          bold
          typo={getTypoBy(size)}
        >
          { children }
        </Text>
        <Styled.LinkIcon
          source={OpenInNewIcon}
          size={getIconSizeBy(size)}
        />
      </Styled.ToolbarLink>
    )
  )
}) as <Link extends string | undefined>(
  props: TabActionProps<Link> & {
    ref?: React.ForwardedRef<TabActionElement<Link>>
  }
) => JSX.Element
