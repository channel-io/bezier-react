import React from 'react'

import {
  type SegmentedControlProps,
  type SegmentedControlType,
} from './SegmentedControl.types'

// TODO: (@ed) Evolve it into a commonly reusable function
function createContext<ContextValue>(
  providerName: string,
  defaultValue: ContextValue,
) {
  const Context = React.createContext<ContextValue>(defaultValue)

  function useContext(consumerName: string) {
    const contextValue = React.useContext(Context)

    if (!contextValue) {
      throw new Error(`\`${consumerName}\` must be used within \`${providerName}\``)
    }

    return contextValue
  }

  return [
    Context.Provider,
    useContext,
  ] as const
}

type SegmentedControlContextValue = Required<Pick<SegmentedControlProps<SegmentedControlType, string>, 'type' | 'size' | 'width'>>

export const [
  SegmentedControlContextProvider,
  useSegmentedControlContext,
] = createContext<SegmentedControlContextValue | null>('SegmentedControl', null)

interface SegmentedControlItemListContextValue {
  selectedElement: HTMLButtonElement | null
  setSelectedElement: (node: HTMLButtonElement | null) => void
}

export const [
  SegmentedControlItemListContextProvider,
  useSegmentedControlItemListContext,
] = createContext<SegmentedControlItemListContextValue | null>('SegmentedControlItemList', null)
