import React, {
  forwardRef,
  useMemo,
  useState,
} from 'react'

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import classNames from 'classnames'

import {
  cssVarName,
  px,
} from '~/src/utils/styleUtils'
import { isNumber } from '~/src/utils/typeUtils'

import { Divider } from '~/src/components/Divider'
import useFormFieldProps from '~/src/components/Forms/useFormFieldProps'

import {
  type SegmentedControlItemListProps,
  type SegmentedControlProps,
  type SegmentedControlRadioGroupProps,
  SegmentedControlSize,
  type SegmentedControlTabContentProps,
  type SegmentedControlTabListProps,
  type SegmentedControlTabsProps,
  type SegmentedControlType,
} from './SegmentedControl.types'
import {
  SegmentedControlContextProvider,
  SegmentedControlItemContextProvider,
  SegmentedControlItemListContextProvider,
  type SegmentedControlItemListContextValue,
  useSegmentedControlContext,
} from './SegmentedControlContext'
import { SegmentedControlIndicator } from './SegmentedControlIndicator'

import * as Styled from './SegmentedControl.styled'

const cv = cssVarName('segmented-control')

function SegmentedControlItemListImpl<
  Type extends SegmentedControlType,
  Value extends string,
>({
  children,
  style: styleProp,
  className: classNameProp,
  ...rest
}: SegmentedControlItemListProps<Type, Value>) {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null)

  const {
    type,
    size,
    width,
  } = useSegmentedControlContext('SegmentedControlItemList')

  const contextValue: SegmentedControlItemListContextValue = useMemo(() => ({
    selectedItemIndex,
    itemCount: React.Children.count(children),
    setSelectedItemIndex,
  }), [
    children,
    selectedItemIndex,
  ])

  const style = useMemo(() => ({
    ...styleProp,
    [cv('width')]: isNumber(width) ? px(width) : width,
  } as React.CSSProperties), [
    styleProp,
    width,
  ])

  const className = classNames(
    classNameProp,
    size,
  )

  const SegmentedControlItemList = type === 'radiogroup'
    ? RadioGroupPrimitive.Root
    : TabsPrimitive.List

  return (
    <SegmentedControlItemList
      asChild
      style={style}
      className={className}
      {...rest}
    >
      <Styled.Container>
        <SegmentedControlItemListContextProvider value={contextValue}>
          { React.Children.map(children, (child, index) => (
            <>
              { index !== 0 && (
                <Divider
                  withoutParallelIndent
                  orientation="vertical"
                />
              ) }
              <SegmentedControlItemContextProvider value={index}>
                { child }
              </SegmentedControlItemContextProvider>
            </>
          )) }
          <SegmentedControlIndicator />
        </SegmentedControlItemListContextProvider>
      </Styled.Container>
    </SegmentedControlItemList>
  )
}

const SegmentedControlItemList = forwardRef(SegmentedControlItemListImpl) as <
  Type extends SegmentedControlType,
  Value extends string,
>(
  props: SegmentedControlItemListProps<Type, Value> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => JSX.Element

function SegmentedControlRadioGroupImpl<Value extends string>({
  children,
  ...rest
}: SegmentedControlRadioGroupProps<Value>, forwardedRef: React.Ref<HTMLDivElement>) {
  return (
    <SegmentedControlItemList
      ref={forwardedRef}
      {...useFormFieldProps(rest)}
    >
      { children }
    </SegmentedControlItemList>
  )
}

const SegmentedControlRadioGroup = forwardRef(SegmentedControlRadioGroupImpl) as <Value extends string>(
  props: SegmentedControlRadioGroupProps<Value> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => JSX.Element

/**
 * `SegmentedControlTabList` is the component that wraps `SegmentedControlItem`.
 * It can be used only when `SegmentedControl` component is used as the `tabs` type.
 *
 * It must be used as a child of `SegmentedControl`.
 */
export const SegmentedControlTabList = SegmentedControlItemList as (
  props: SegmentedControlTabListProps & { ref?: React.ForwardedRef<HTMLDivElement> }
) => JSX.Element

/**
 * `SegmentedControlTabContent` is the component that wraps the content that corresponds to a specific value of `SegmentedControlItem`.
 * It can be used only when `SegmentedControl` component is used as the `tabs` type.
 *
 * It must be used as a child of `SegmentedControl`.
 */
export const SegmentedControlTabContent = TabsPrimitive.Content as <Value extends string>(
  props: SegmentedControlTabContentProps<Value> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => JSX.Element

const SegmentedControlTabs = TabsPrimitive.Root as <Value extends string>(
  props: SegmentedControlTabsProps<Value> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => JSX.Element

function SegmentedControlImpl<
  Type extends SegmentedControlType,
  Value extends string,
>({
  type = 'radiogroup' as Type,
  size = SegmentedControlSize.M,
  width = '100%',
  onValueChange,
  children,
  ...rest
}: SegmentedControlProps<Type, Value>, forwardedRef: React.Ref<HTMLDivElement>) {
  const SegmentedControlRoot = type === 'radiogroup'
    ? SegmentedControlRadioGroup
    : SegmentedControlTabs

  const contextValue = useMemo(() => ({
    type,
    size,
    width,
  }), [
    type,
    size,
    width,
  ])

  return (
    <SegmentedControlContextProvider value={contextValue}>
      <SegmentedControlRoot
        ref={forwardedRef}
        onValueChange={onValueChange}
        {...rest}
      >
        { children }
      </SegmentedControlRoot>
    </SegmentedControlContextProvider>
  )
}

/**
 * `SegmentedControl` is component that looks like a combination of a radio and a button.
 * They can be used in place of tabs and as input elements in modals.
 * If you have more than five items, use a different element, such as a dropdown.
 *
 * `SegmentedControl` can be used as a radio group, tabs element depending on its `type`.
 *
 * @example
 *
 * ```tsx
 * // Anatomy of the SegmentedControl type="radiogroup"
 * <SegmentedControl type="radiogroup">
 *  <SegmentedControlItem />
 * </SegmentedControl>
 *
 * // Anatomy of the SegmentedControl type="tabs"
 * <SegmentedControl type="tabs">
 *  <SegmentedControlTabList>
 *   <SegmentedControlItem />
 *  </SegmentedControlTabList>
 *
 *  <SegmentedControlTabContent />
 * </SegmentedControl>
 * ```
 */
export const SegmentedControl = forwardRef(SegmentedControlImpl) as <
  Type extends SegmentedControlType,
  Value extends string,
>(
  props: SegmentedControlProps<Type, Value> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => JSX.Element
