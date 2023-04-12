/* External dependencies */
import React, {
  forwardRef,
  useState,
  useMemo,
} from 'react'

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import classNames from 'classnames'

import { Divider } from '~/src/components/Divider'
import useFormFieldProps from '~/src/components/Forms/useFormFieldProps'

import {
  type SegmentedControlRootProps,
  type SegmentedControlProps,
  SegmentedControlSize,
  type SegmentedControlTabContentProps,
  type SegmentedControlTabListProps,
  type SegmentedControlType,
} from './SegmentedControl.types'
import {
  SegmentedControlContextProvider,
  SegmentedControlItemListContextProvider,
  useSegmentedControlContext,
} from './SegmentedControlContext'
import { useSegmentedControlIndicator } from './SegmentedControlIndicator'

import * as Styled from './SegmentedControl.styled'

function SegmentedControlItemListImpl<
  Type extends SegmentedControlType,
  Value extends string,
>({
  children,
  style: styleProp,
  className: classNameProp,
  ...rest
}: SegmentedControlRootProps<Type, Value>, forwardedRef: React.Ref<HTMLDivElement>) {
  const [selectedElement, setSelectedElement] = useState<HTMLButtonElement | null>(null)

  const {
    type,
    size,
    width,
  } = useSegmentedControlContext('SegmentedControlItemList')

  const {
    containerRef: ref,
    render: renderIndicator,
  } = useSegmentedControlIndicator({
    target: selectedElement,
    refs: [forwardedRef],
  })

  const contextValue = useMemo(() => ({
    selectedElement,
    setSelectedElement,
  }), [selectedElement])

  const style = useMemo(() => ({
    ...styleProp,
    '--bezier-react-segmented-control-width': width,
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
      ref={ref}
      style={style}
      className={className}
      {...rest}
    >
      <Styled.Container>
        <SegmentedControlItemListContextProvider value={contextValue}>
          { renderIndicator() }

          { React.Children.map(children, (child, index) => {
            if (index === 0) {
              return child
            }

            return (
              <>
                <Divider
                  withoutParallelIndent
                  orientation="vertical"
                />
                { child }
              </>
            )
          }) }
        </SegmentedControlItemListContextProvider>
      </Styled.Container>
    </SegmentedControlItemList>
  )
}

const SegmentedControlItemList = forwardRef(SegmentedControlItemListImpl) as <
  Type extends SegmentedControlType,
  Value extends string,
>(
  props: SegmentedControlProps<Type, Value> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => JSX.Element

function SegmentedControlRadioGroupImpl<Value extends string>({
  children,
  ...rest
}: SegmentedControlRootProps<'radiogroup', Value>, forwardedRef: React.Ref<HTMLDivElement>) {
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
  props: SegmentedControlRootProps<'radiogroup', Value> & { ref?: React.ForwardedRef<HTMLDivElement> }
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
  props: SegmentedControlRootProps<'tabs', Value> & { ref?: React.ForwardedRef<HTMLDivElement> }
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
