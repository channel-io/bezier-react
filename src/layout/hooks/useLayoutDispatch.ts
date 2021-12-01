/* External dependencies */
import { useContext } from 'react'

/* Internal dependencies */
import { LayoutDispatchContext } from '../../contexts/LayoutContext'

function useLayoutDispatch() {
  const dispatch = useContext(LayoutDispatchContext)

  if (!dispatch) {
    throw new Error('Cannot find LayoutDispatch')
  }
  return dispatch
}

export default useLayoutDispatch
