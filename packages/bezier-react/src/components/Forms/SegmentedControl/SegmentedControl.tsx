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
  type SegmentedControlItemListProps,
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
}: SegmentedControlItemListProps<Type, Value>, forwardedRef: React.Ref<HTMLDivElement>) {
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
) => ReturnType<typeof SegmentedControlItemListImpl<Type, Value>>

function SegmentedControlRadioGroupImpl<Value extends string>({
  children,
  ...rest
}: SegmentedControlItemListProps<'radiogroup', Value>, forwardedRef: React.Ref<HTMLDivElement>) {
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
  props: SegmentedControlItemListProps<'radiogroup', Value> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof SegmentedControlRadioGroupImpl<Value>>

export const SegmentedControlTabList = SegmentedControlItemList as (
  props: SegmentedControlTabListProps & { ref?: React.ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof SegmentedControlItemListImpl<'tabs', string>>

function SegmentedControlTabContentImpl<Value extends string>({
  children,
  ...rest
}: SegmentedControlTabContentProps<Value>, forwardedRef: React.Ref<HTMLDivElement>) {
  return (
    <TabsPrimitive.Content
      ref={forwardedRef}
      {...rest}
    >
      { children }
    </TabsPrimitive.Content>
  )
}

export const SegmentedControlTabContent = forwardRef(SegmentedControlTabContentImpl) as <Value extends string>(
  props: SegmentedControlTabContentProps<Value> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof SegmentedControlTabContentImpl<Value>>

function SegmentedControlTabsImpl<Value extends string>({
  children,
  value,
  defaultValue,
  onValueChange,
  ...rest
}: SegmentedControlItemListProps<'tabs', Value>, forwardedRef: React.Ref<HTMLDivElement>) {
  return (
    <TabsPrimitive.Root
      ref={forwardedRef}
      value={value}
      defaultValue={defaultValue}
      onValueChange={onValueChange as TabsPrimitive.TabsProps['onValueChange']}
      {...rest}
    >
      { children }
    </TabsPrimitive.Root>
  )
}

const SegmentedControlTabs = forwardRef(SegmentedControlTabsImpl) as <Value extends string>(
  props: SegmentedControlItemListProps<'tabs', Value> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof SegmentedControlTabsImpl<Value>>

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
  const SegmentedControl = type === 'radiogroup'
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
      <SegmentedControl
        ref={forwardedRef}
        onValueChange={onValueChange}
        {...rest}
      >
        { children }
      </SegmentedControl>
    </SegmentedControlContextProvider>
  )
}

export const SegmentedControl = forwardRef(SegmentedControlImpl) as <
  Type extends SegmentedControlType,
  Value extends string,
>(
  props: SegmentedControlProps<Type, Value> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof SegmentedControlImpl<Type, Value>>
