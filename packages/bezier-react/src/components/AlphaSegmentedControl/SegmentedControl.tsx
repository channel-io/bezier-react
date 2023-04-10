import React, {
  createContext,
  forwardRef,
  useContext,
  useMemo,
  useState,
} from 'react'

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import classNames from 'classnames'

import { Divider } from '~/src/components/Divider'

import {
  type SegmentedControlProps,
  SegmentedControlSize,
  type SegmentedControlTabListProps,
  type SegmentedControlType,
} from './SegmentedControl.types'
import { useSegmentedControlIndicator } from './SegmentedControlIndicator'

import * as Styled from './SegmentedControl.styled'

type SegmentedControlContextValue = Required<Pick<SegmentedControlProps<SegmentedControlType, string>, 'type' | 'size' | 'width'>>

const SegmentedControlContext = createContext<SegmentedControlContextValue | null>(null)

// TODO: (@ed) Evolve it into a commonly reusable hook
export function useSegmentedControlContext(consumerName: string) {
  const contextValue = useContext(SegmentedControlContext)

  if (!contextValue) {
    throw new Error(`\`${consumerName}\` must be used within \`SegmentedControl\``)
  }

  return contextValue
}

type SegmentedControlItemListContextValue = {
  selectedElement: HTMLButtonElement | null
  setSelectedElement: (node: HTMLButtonElement | null) => void
}

const SegmentedControlItemListContext = createContext<SegmentedControlItemListContextValue | null>(null)

export function useSegmentedControlItemListContext(consumerName: string) {
  const contextValue = useContext(SegmentedControlItemListContext)

  if (!contextValue) {
    throw new Error(`\`${consumerName}\` must be used within \`SegmentedControl\``)
  }

  return contextValue
}

type SegmentedControlTabsProps<Value extends string> = Omit<SegmentedControlProps<'tabs', Value>, 'type' | 'width'>

function SegmentedControlTabsImpl<Value extends string>({
  children,
  value,
  defaultValue,
  onValueChange,
  ...rest
}: SegmentedControlTabsProps<Value>, forwardedRef: React.Ref<HTMLDivElement>) {
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
  props: SegmentedControlTabsProps<Value> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof SegmentedControlTabsImpl<Value>>

function SegmentedControlItemListImpl({
  children,
  style: styleProp,
  className: classNameProp,
  ...rest
}: any, forwardedRef: React.Ref<HTMLDivElement>) {
  const [selectedElement, setSelectedElement] = useState<HTMLButtonElement | null>(null)

  const {
    type,
    size,
    width,
  } = useSegmentedControlContext('SegmentedControlTabs')

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
  }), [
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
        <SegmentedControlItemListContext.Provider value={contextValue}>
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
        </SegmentedControlItemListContext.Provider>
      </Styled.Container>
    </SegmentedControlItemList>
  )
}

// TODO: type declaration
const SegmentedControlItemList = forwardRef(SegmentedControlItemListImpl) as (
  props: any & { ref?: React.ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof SegmentedControlItemListImpl>

type SegmentedControlRadioGroupProps<Value extends string> = Omit<SegmentedControlProps<'radiogroup', Value>, 'type' | 'width'>

function SegmentedControlRadioGroupImpl<Value extends string>({
  children,
  ...rest
}: SegmentedControlRadioGroupProps<Value>, forwardedRef: React.Ref<HTMLDivElement>) {
  return (
    <SegmentedControlItemList
      ref={forwardedRef}
      {...rest}
    >
      { children }
    </SegmentedControlItemList>
  )
}

const SegmentedControlRadioGroup = forwardRef(SegmentedControlRadioGroupImpl) as <Value extends string>(
  props: SegmentedControlRadioGroupProps<Value> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof SegmentedControlRadioGroupImpl<Value>>

export const SegmentedControlTabList = forwardRef<HTMLDivElement, SegmentedControlTabListProps>(function SegmentedControlTabList({
  children,
  ...rest
}, forwardedRef) {
  return (
    <SegmentedControlItemList
      ref={forwardedRef}
      {...rest}
    >
      { children }
    </SegmentedControlItemList>
  )
})

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
    <SegmentedControlContext.Provider value={contextValue}>
      <SegmentedControl
        ref={forwardedRef}
        onValueChange={onValueChange}
        {...rest}
      >
        { children }
      </SegmentedControl>
    </SegmentedControlContext.Provider>
  )
}

export const SegmentedControl = forwardRef(SegmentedControlImpl) as <
  Type extends SegmentedControlType,
  Value extends string,
>(
  props: SegmentedControlProps<Type, Value> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof SegmentedControlImpl<Type, Value>>
