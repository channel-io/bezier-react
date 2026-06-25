'use client'

import {
  Children,
  type ForwardedRef,
  Fragment,
  type JSX,
  forwardRef,
  isValidElement,
  useEffect,
  useMemo,
  useState,
} from 'react'
import * as React from 'react'

import { isBezierIcon } from '@channel.io/bezier-icons'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import classNames from 'classnames'



import { BaseButton } from '~/src/beta/BaseButton'
import { useFormFieldContext } from '~/src/beta/Form'
import { Text } from '~/src/beta/Text'
import useMergeRefs from '~/src/hooks/useMergeRefs'
import { ariaAttr } from '~/src/utils/aria'
import { createContext } from '~/src/utils/react'
import { cssDimension } from '~/src/utils/style'
import { isNil } from '~/src/utils/type'

import {
  type SegmentedControlContextValue,
  type SegmentedControlItemIconContent,
  type SegmentedControlItemListProps,
  type SegmentedControlItemProps,
  type SegmentedControlItemSideContent,
  type SegmentedControlProps,
  type SegmentedControlRadioGroupProps,
  type SegmentedControlSize,
  type SegmentedControlTabContentProps,
  type SegmentedControlTabListProps,
  type SegmentedControlTabsProps,
  type SegmentedControlType,
} from './SegmentedControl.types'

import styles from './SegmentedControl.module.scss'



const [SegmentedControlContextProvider, useSegmentedControlContext] =
  createContext<SegmentedControlContextValue>({
    size: 'm',
    type: 'radiogroup',
    width: '100%',
  })

type SegmentedControlItemListContextValue = {
  setSelectedItemIndex: (index: number | null) => void
}

interface SegmentedControlItemContextValue {
  index: number | null
}

const [SegmentedControlItemContextProvider, useSegmentedControlItemContext] =
  createContext<SegmentedControlItemContextValue>({
    index: null,
  })

const [
  SegmentedControlItemListContextProvider,
  useSegmentedControlItemListContext,
] = createContext<SegmentedControlItemListContextValue>({
  setSelectedItemIndex: () => {},
})

function getTypography(size: SegmentedControlSize) {
  return (
    {
      s: '13',
      m: '13',
    } as const
  )[size]
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

function SegmentedControlDivider({
  index,
  selectedItemIndex,
}: {
  index: number
  selectedItemIndex: number | null
}) {
  const isAdjacentToSelectedItem =
    !isNil(selectedItemIndex) &&
    (selectedItemIndex + 1 === index || selectedItemIndex === index)

  return (
    <div
      className={classNames(
        styles.SegmentedControlDivider,
        isAdjacentToSelectedItem && styles.hidden
      )}
      aria-hidden
    />
  )
}

function SegmentedControlItemListImpl<
  Type extends SegmentedControlType,
  Value extends string,
>(
  {
    children,
    style,
    className,
    ...rest
  }: SegmentedControlItemListProps<Type, Value>,
  forwardedRef: ForwardedRef<HTMLDivElement>
) {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(
    null
  )

  const { type, size, width } = useSegmentedControlContext()
  const childrenArray = flattenChildren(children)

  const contextValue: SegmentedControlItemListContextValue = useMemo(
    () => ({
      setSelectedItemIndex,
    }),
    []
  )

  const SegmentedControlItemList =
    type === 'radiogroup' ? RadioGroupPrimitive.Root : TabsPrimitive.List

  return (
    <SegmentedControlItemList
      asChild
      ref={forwardedRef}
      {...rest}
    >
      <div
        style={
          {
            '--b-beta-segmented-control-width': cssDimension(width),
            '--b-beta-segmented-control-item-index': selectedItemIndex,
            '--b-beta-segmented-control-item-count': childrenArray.length,
            ...style,
          } as React.CSSProperties
        }
        className={classNames(
          styles.SegmentedControl,
          styles[`size-${size}`],
          className
        )}
      >
        <SegmentedControlItemListContextProvider value={contextValue}>
          {childrenArray.map((child, index) => (
            <React.Fragment key={isValidElement(child) ? child.key : index}>
              {index !== 0 && (
                <SegmentedControlDivider
                  index={index}
                  selectedItemIndex={selectedItemIndex}
                />
              )}
              <SegmentedControlItemContextProvider value={{ index }}>
                {child}
              </SegmentedControlItemContextProvider>
            </React.Fragment>
          ))}
          {!isNil(selectedItemIndex) && (
            <div className={styles.SegmentedControlIndicator} />
          )}
        </SegmentedControlItemListContextProvider>
      </div>
    </SegmentedControlItemList>
  )
}

const SegmentedControlItemList = forwardRef(SegmentedControlItemListImpl) as <
  Type extends SegmentedControlType,
  Value extends string,
>(
  props: SegmentedControlItemListProps<Type, Value> & {
    ref?: React.ForwardedRef<HTMLDivElement>
  }
) => JSX.Element

function SegmentedControlRadioGroupImpl<Value extends string>(
  { children, size, ...rest }: SegmentedControlRadioGroupProps<Value>,
  forwardedRef: React.Ref<HTMLDivElement>
) {
  const formFieldContext = useFormFieldContext()
  const {
    disabled = formFieldContext?.disabled ?? false,
    hasError = formFieldContext?.hasError ?? false,
    required = formFieldContext?.required ?? false,
    readOnly = formFieldContext?.readOnly ?? false,
    ...restProps
  } = rest
  const { ref: formFieldRef, ...ownProps } = (formFieldContext?.getGroupProps(
    restProps
  ) ?? restProps) as typeof restProps & {
    ref?: React.RefCallback<HTMLElement>
  }
  const mergedRef = useMergeRefs(
    forwardedRef,
    formFieldRef as React.RefCallback<HTMLDivElement> | undefined
  )

  return (
    <SegmentedControlItemList
      ref={mergedRef}
      {...ownProps}
      aria-disabled={ariaAttr(disabled)}
      aria-invalid={ariaAttr(hasError)}
      aria-readonly={ariaAttr(readOnly)}
      aria-required={ariaAttr(required)}
      disabled={disabled}
      size={size}
    >
      {children}
    </SegmentedControlItemList>
  )
}

const SegmentedControlRadioGroup = forwardRef(
  SegmentedControlRadioGroupImpl
) as <Value extends string>(
  props: SegmentedControlRadioGroupProps<Value> & {
    ref?: React.ForwardedRef<HTMLDivElement>
  }
) => JSX.Element

/**
 * `SegmentedControlTabList` lays out the tab triggers of a tabs-type segmented control.
 */
export const SegmentedControlTabList = SegmentedControlItemList as (
  props: SegmentedControlTabListProps & {
    ref?: React.ForwardedRef<HTMLDivElement>
  }
) => JSX.Element

/**
 * `SegmentedControlTabContent` renders content associated with a tabs-type segmented control item.
 */
export const SegmentedControlTabContent = TabsPrimitive.Content as <
  Value extends string,
>(
  props: SegmentedControlTabContentProps<Value> & {
    ref?: React.ForwardedRef<HTMLDivElement>
  }
) => JSX.Element

const SegmentedControlTabs = TabsPrimitive.Root as <Value extends string>(
  props: SegmentedControlTabsProps<Value> & {
    ref?: React.ForwardedRef<HTMLDivElement>
  }
) => JSX.Element

function SegmentedControlImpl<
  Type extends SegmentedControlType,
  Value extends string,
>(
  {
    type = 'radiogroup' as Type,
    size = 'm',
    width = '100%',
    onValueChange,
    children,
    ...rest
  }: SegmentedControlProps<Type, Value>,
  forwardedRef: React.Ref<HTMLDivElement>
) {
  const SegmentedControlRoot =
    type === 'radiogroup' ? SegmentedControlRadioGroup : SegmentedControlTabs

  const contextValue = useMemo(
    () => ({
      type,
      size,
      width,
    }),
    [type, size, width]
  )

  return (
    <SegmentedControlContextProvider value={contextValue}>
      <SegmentedControlRoot
        ref={forwardedRef}
        onValueChange={onValueChange}
        {...rest}
      >
        {children}
      </SegmentedControlRoot>
    </SegmentedControlContextProvider>
  )
}

/**
 * `SegmentedControl` lets users select one option from 2 to 5 options or switch views.
 */
export const SegmentedControl = forwardRef(SegmentedControlImpl) as <
  Type extends SegmentedControlType,
  Value extends string,
>(
  props: SegmentedControlProps<Type, Value> & {
    ref?: React.ForwardedRef<HTMLDivElement>
  }
) => JSX.Element

type ItemProps = {
  children?: React.ReactNode
  icon?: SegmentedControlItemIconContent
  leadingContent?: SegmentedControlItemSideContent
  trailingContent?: SegmentedControlItemSideContent
} & (
  | { 'data-state'?: 'unchecked' | 'checked' }
  | { 'data-state'?: 'inactive' | 'active' }
) &
  React.HTMLAttributes<HTMLButtonElement>

function SegmentedControlItemContentElement({
  className,
  content,
}: {
  className?: string
  content?: SegmentedControlItemIconContent | SegmentedControlItemSideContent
}) {
  if (isBezierIcon(content)) {
    const SourceElement = content

    return (
      <SourceElement
        className={classNames(styles.SegmentedControlItemIcon, className)}
        aria-hidden
      />
    )
  }

  return content ? (
    <span
      className={classNames(styles.SegmentedControlItemAdornment, className)}
    >
      {content}
    </span>
  ) : null
}

const Item = forwardRef<HTMLButtonElement, ItemProps>(function Item(
  { children, icon, leadingContent, trailingContent, className, ...rest },
  forwardedRef
) {
  const { type, size } = useSegmentedControlContext()
  const { setSelectedItemIndex } = useSegmentedControlItemListContext()
  const { index } = useSegmentedControlItemContext()
  const iconOnly = !isNil(icon)
  const hasAdornment =
    iconOnly || !isNil(leadingContent) || !isNil(trailingContent)

  const checked =
    type === 'radiogroup'
      ? (rest as Extract<ItemProps, { 'data-state'?: 'checked' }>)?.[
          'data-state'
        ] === 'checked'
      : (rest as Extract<ItemProps, { 'data-state'?: 'active' }>)?.[
          'data-state'
        ] === 'active'

  useEffect(
    function setSelectedItem() {
      if (checked) {
        setSelectedItemIndex(index)
      }
    },
    [checked, index, setSelectedItemIndex]
  )

  return (
    <BaseButton
      {...rest}
      ref={forwardedRef}
      data-selected={ariaAttr(checked)}
      className={classNames(
        styles.SegmentedControlItem,
        styles[`size-${size}`],
        iconOnly && styles['icon-only'],
        className
      )}
    >
      <span
        className={classNames(
          styles.SegmentedControlItemContainer,
          hasAdornment && styles['has-adornment']
        )}
      >
        {iconOnly ? (
          <SegmentedControlItemContentElement
            content={icon}
            className={styles.IconOnlyContent}
          />
        ) : (
          <>
            <SegmentedControlItemContentElement content={leadingContent} />

            <Text
              className={styles.SegmentedControlItemLabel}
              typo={getTypography(size)}
              fontWeight="700"
              truncated
            >
              {children}
            </Text>

            <SegmentedControlItemContentElement content={trailingContent} />
          </>
        )}
      </span>
    </BaseButton>
  )
})

function SegmentedControlItemImpl<Value extends string>(
  {
    children,
    icon,
    leadingContent,
    trailingContent,
    ...rest
  }: SegmentedControlItemProps<Value>,
  forwardedRef: React.Ref<HTMLButtonElement>
) {
  const { type } = useSegmentedControlContext()
  const SegmentedControlItem =
    type === 'radiogroup' ? RadioGroupPrimitive.Item : TabsPrimitive.Trigger

  return (
    <SegmentedControlItem
      asChild
      ref={forwardedRef}
      {...rest}
    >
      <Item
        icon={icon}
        leadingContent={leadingContent}
        trailingContent={trailingContent}
      >
        {children}
      </Item>
    </SegmentedControlItem>
  )
}

/**
 * `SegmentedControlItem` is an individual option in `SegmentedControl`.
 */
export const SegmentedControlItem = forwardRef(SegmentedControlItemImpl) as <
  Value extends string,
>(
  props: SegmentedControlItemProps<Value> & {
    ref?: React.ForwardedRef<HTMLButtonElement>
  }
) => JSX.Element
