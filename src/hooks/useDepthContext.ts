/* External dependencies */
import { createContext, useContext } from 'react'

interface DepthContextProps {
  depth: number
  [k: string]: number | string | boolean
}

type ProceedDrillDown = (parent: DepthContextProps) => DepthContextProps

const defaultDepthContext = {
  depth: 0,
}

const defaultProceedDrillDown: ProceedDrillDown = (parent) => ({
  depth: parent.depth + 1,
})

export const DepthContext = createContext<DepthContextProps>(defaultDepthContext)

export default function useDepthContext(proceedDrillDown: ProceedDrillDown = defaultProceedDrillDown) {
  const parentDepthInfo = useContext(DepthContext)
  return proceedDrillDown(parentDepthInfo)
}
