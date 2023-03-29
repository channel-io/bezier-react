/* External dependencies */
import {
  useCallback,
  useMemo,
} from 'react'

const BASE_URL = 'https://api.figma.com/v1'

interface UseFigmaAPIProps {
  token: string
}

function useFigmaAPI({
  token,
}: UseFigmaAPIProps) {
  const headers = useMemo((): RequestInit['headers'] => ({ 'X-Figma-Token': token }), [token])

  const getSvg = useCallback(async (params: {
    fileKey: string
    ids: string
  }) => {
    const { fileKey, ids } = params
    const response = await fetch(`${BASE_URL}/images/${fileKey}?ids=${ids}&format=svg`, {
      headers,
    })
    // TODO: 타입 정의
    return response.json()
  }, [headers])

  return {
    getSvg,
  }
}

export default useFigmaAPI
