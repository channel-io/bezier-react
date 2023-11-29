import { createContext } from '~/src/utils/react'

import {
  type SegmentedControlProps,
  type SegmentedControlType,
} from './SegmentedControl.types'

type SegmentedControlContextValue = Required<Pick<SegmentedControlProps<SegmentedControlType, string>, 'type' | 'size' | 'width'>>

export const [
  SegmentedControlContextProvider,
  useSegmentedControlContext,
] = createContext<SegmentedControlContextValue | null>(null, 'SegmentedControl')

export type SegmentedControlItemListContextValue = {
  itemCount: number
  selectedItemIndex: number | null
  setSelectedItemIndex: (index: number | null) => void
}

export const [
  SegmentedControlItemContextProvider,
  useSegmentedControlItemContext,
] = createContext<number | null>(null, 'SegmentedControlItem')

export const [
  SegmentedControlItemListContextProvider,
  useSegmentedControlItemListContext,
] = createContext<SegmentedControlItemListContextValue | null>(null, 'SegmentedControlItemList')
