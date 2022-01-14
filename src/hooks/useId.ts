/* @see https://github.com/chakra-ui/chakra-ui/blob/fa474bea3dcbdd4bbf2a26925f938d6e75a50c6d/packages/hooks/src/use-id.ts */
/* External dependencies */
import { useState, useEffect, useMemo } from 'react'
import { compact } from 'lodash-es'

const idRef = Object.seal({ current: 0 })

// eslint-disable-next-line no-plusplus
const generateId = () => idRef.current++

interface UseIdProps {
  idProp?: string
  prefix?: string
}

function useId({
  idProp,
  prefix,
}: UseIdProps) {
  const [id, setId] = useState(idRef.current)

  useEffect(() => {
    setId(generateId())
  }, [setId])

  return useMemo(() => (
    idProp || compact([prefix, id]).join('-')
  ), [
    idProp,
    prefix,
    id,
  ])
}

export default useId
