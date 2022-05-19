/* External dependencies */
import React, { useState, useEffect, useMemo } from 'react'
import { compact } from 'lodash-es'

/* Internal dependencies */
import { getReactVersion } from 'Utils/reactUtils'

/* @see https://github.com/chakra-ui/chakra-ui/blob/fa474bea3dcbdd4bbf2a26925f938d6e75a50c6d/packages/hooks/src/use-id.ts */
const idRef = Object.seal({ current: 1 })

const generateId = () => {
  const id = idRef.current
  idRef.current += 1
  return id
}

const joinId = (...args: unknown[]) => compact(args).join('-')

function useIdLegacy(idProp?: string, prefix?: string) {
  const [id, setId] = useState(idRef.current)

  useEffect(() => {
    if (idProp) { return }
    setId(generateId())
  }, [idProp])

  return useMemo(() => (
    idProp || joinId(prefix, id)
  ), [
    idProp,
    prefix,
    id,
  ])
}

function useId(idProp?: string, prefix?: string) {
  const id = React.useId()

  return useMemo(() => (
    idProp || joinId(prefix, id)
  ), [
    idProp,
    prefix,
    id,
  ])
}

const isReactUnderV18 = getReactVersion().major < 18

export default isReactUnderV18 ? useIdLegacy : useId
