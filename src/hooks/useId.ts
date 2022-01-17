/* @see https://github.com/chakra-ui/chakra-ui/blob/fa474bea3dcbdd4bbf2a26925f938d6e75a50c6d/packages/hooks/src/use-id.ts */
/* External dependencies */
import { useState, useEffect, useMemo } from 'react'
import { compact } from 'lodash-es'

const idRef = Object.seal({ current: 1 })

const generateId = () => {
  const id = idRef.current
  idRef.current += 1
  return id
}

function useId(idProp?: string, prefix?: string) {
  const [id, setId] = useState(idRef.current)

  useEffect(() => {
    if (idProp) { return }
    setId(generateId())
  }, [idProp])

  return useMemo(() => (
    idProp || compact([prefix, id]).join('-')
  ), [
    idProp,
    prefix,
    id,
  ])
}

export default useId
