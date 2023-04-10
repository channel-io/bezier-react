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
  type SegmentedControlType,
} from './SegmentedControl.types'
import { useSegmentedControlIndicator } from './SegmentedControlIndicator'

import * as Styled from './SegmentedControl.styled'

function Separator({
  children,
}: React.PropsWithChildren) {
  return (
    <>
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
    </>
  )
}

type SegmentedControlContextValue = Required<Pick<SegmentedControlProps<SegmentedControlType, string>, 'type' | 'size'>> & {
  setSelectedElement: (node: HTMLButtonElement | null) => void
}

const SegmentedControlContext = createContext<SegmentedControlContextValue | null>(null)

// TODO: (@ed) Evolve it into a commonly reusable hook
export function useSegmentedControlContext(consumerName: string) {
  const contextValue = useContext(SegmentedControlContext)

  if (!contextValue) {
    throw new Error(`\`${consumerName}\` must be used within \`SegmentedControl\``)
  }

  return contextValue
}

type SegmentedControlRadioGroupProps<Value extends string> = Omit<SegmentedControlProps<'radiogroup', Value>, 'type'>

function SegmentedControlRadioGroupImpl<Value extends string>({
  children,
  size,
  ...rest
}: SegmentedControlRadioGroupProps<Value>, forwardedRef: React.Ref<HTMLDivElement>) {
  return (
    <RadioGroupPrimitive.Root
      asChild
      ref={forwardedRef}
      {...rest}
    >
      <Styled.Container direction="horizontal">
        { children }
      </Styled.Container>
    </RadioGroupPrimitive.Root>
  )
}

const SegmentedControlRadioGroup = forwardRef(SegmentedControlRadioGroupImpl) as <Value extends string>(
  props: SegmentedControlRadioGroupProps<Value> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof SegmentedControlRadioGroupImpl<Value>>

type SegmentedControlTabsProps<Value extends string> = Omit<SegmentedControlProps<'tabs', Value>, 'type'>

function SegmentedControlTabsImpl<Value extends string>({
  children,
  onValueChange,
  ...rest
}: SegmentedControlTabsProps<Value>, forwardedRef: React.Ref<HTMLDivElement>) {
  return (
    <TabsPrimitive.Root
      ref={forwardedRef}
      onValueChange={onValueChange as TabsPrimitive.TabsProps['onValueChange']}
      {...rest}
    >
      { /* TODO: Isolate TabList */ }
      <TabsPrimitive.List>
        { children }
      </TabsPrimitive.List>
    </TabsPrimitive.Root>
  )
}

const SegmentedControlTabs = forwardRef(SegmentedControlTabsImpl) as <Value extends string>(
  props: SegmentedControlTabsProps<Value> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof SegmentedControlTabsImpl<Value>>

function SegmentedControlImpl<
  Type extends SegmentedControlType,
  Value extends string,
>({
  type = 'radiogroup' as Type,
  size = SegmentedControlSize.M,
  width = '100%',
  style: styleProp,
  className: classNameProp,
  onValueChange,
  children,
  ...rest
}: SegmentedControlProps<Type, Value>, forwardedRef: React.Ref<HTMLDivElement>) {
  const [selectedElement, setSelectedElement] = useState<HTMLButtonElement | null>(null)

  const {
    containerRef: ref,
    render: renderIndicator,
  } = useSegmentedControlIndicator({
    target: selectedElement,
    refs: [forwardedRef],
  })

  const SegmentedControl = type === 'radiogroup'
    ? SegmentedControlRadioGroup
    : SegmentedControlTabs

  const contextValue = useMemo(() => ({
    type,
    size,
    setSelectedElement,
  }), [
    type,
    size,
  ])

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

  return (
    <SegmentedControl
      ref={ref}
      style={style}
      className={className}
      size={size}
      onValueChange={onValueChange}
      {...rest}
    >
      <SegmentedControlContext.Provider value={contextValue}>
        { renderIndicator() }
        <Separator>
          { children }
        </Separator>
      </SegmentedControlContext.Provider>
    </SegmentedControl>
  )
}

export const SegmentedControl = forwardRef(SegmentedControlImpl) as <
  Type extends SegmentedControlType,
  Value extends string,
>(
  props: SegmentedControlProps<Type, Value> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof SegmentedControlImpl<Type, Value>>
