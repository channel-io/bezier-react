import React, {
  createContext,
  forwardRef,
  useContext,
  useMemo,
} from 'react'

import {
  type SegmentedControlProps,
  SegmentedControlSize,
  type SegmentedControlType,
} from './SegmentedControl.types'
import { SegmentedControlRadioGroup } from './SegmentedControlRadioGroup'
import { SegmentedControlTabs } from './SegmentedControlTabs'

type SegmentedControlContextValue = Pick<SegmentedControlProps<SegmentedControlType, string>, 'type' | 'size'>

const SegmentedControlContext = createContext<SegmentedControlContextValue | null>(null)

// TODO: (@ed) Evolve it into a commonly reusable hook
export function useSegmentedControlContext(consumerName: string) {
  const contextValue = useContext(SegmentedControlContext)

  if (!contextValue) {
    throw new Error(`\`${consumerName}\` must be used within \`SegmentedControl\``)
  }

  return contextValue
}

function SegmentedControlImpl<
  Type extends SegmentedControlType,
  Value extends string,
>({
  type = 'radiogroup' as Type,
  size = SegmentedControlSize.M,
  name: nameProp,
  children,
  ...rest
}: SegmentedControlProps<Type, Value>, forwardedRef: React.Ref<HTMLDivElement>) {
  const [SegmentedControl, name] = useMemo(() => (
    type === 'radiogroup'
      ? [SegmentedControlRadioGroup, nameProp]
      : [SegmentedControlTabs, undefined]
  ), [
    type,
    nameProp,
  ])

  const contextValue = useMemo(() => ({
    type,
    size,
  }), [
    type,
    size,
  ])

  return (
    <SegmentedControl
      ref={forwardedRef}
      // @ts-ignore
      name={name}
      {...rest}
    >
      <SegmentedControlContext.Provider value={contextValue}>
        { children }
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
