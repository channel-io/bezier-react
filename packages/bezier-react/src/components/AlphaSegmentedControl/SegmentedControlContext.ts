import {
  createContext,
  useContext,
} from 'react'

import { type SegmentedControlContextValue } from './SegmentedControl.types'

export const SegmentedControlContext = createContext<SegmentedControlContextValue | null>(null)

export function useSegmentedControlContext() {
  return useContext(SegmentedControlContext)
}
