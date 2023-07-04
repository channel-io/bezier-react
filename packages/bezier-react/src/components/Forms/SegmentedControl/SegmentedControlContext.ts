import { createContext } from '~/src/utils/reactUtils'

import {
  type SegmentedControlProps,
  type SegmentedControlType,
} from './SegmentedControl.types'

type SegmentedControlContextValue = Required<Pick<SegmentedControlProps<SegmentedControlType, string>, 'type' | 'size' | 'width'>>

export const [
  SegmentedControlContextProvider,
  useSegmentedControlContext,
] = createContext<SegmentedControlContextValue | null>(null, 'SegmentedControl')

interface SegmentedControlItemListContextValue {
  setSelectedElement: (node: HTMLButtonElement | null) => void
}

export const [
  SegmentedControlItemListContextProvider,
  useSegmentedControlItemListContext,
] = createContext<SegmentedControlItemListContextValue | null>(null, 'SegmentedControlItemList')
