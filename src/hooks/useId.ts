/* External dependencies */
import { useMemo } from 'react'
import { v4 as uuid } from 'uuid'

function useId() {
  return useMemo(() => uuid(), [])
}

export default useId
