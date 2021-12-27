/* External dependencies */
import { useMemo } from 'react'

const id = Object.seal({ current: 0 })

interface UseIdProps {
  idProp?: string
  prefix?: string
}

function useId({
  idProp,
  prefix,
}: UseIdProps) {
  return useMemo(() => {
    if (idProp) { return idProp }
    id.current += 1
    return prefix
      ? `${prefix}-${id.current}`
      : `${id.current}`
  }, [
    idProp,
    prefix,
  ])
}

export default useId
