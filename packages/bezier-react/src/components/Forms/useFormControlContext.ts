/* External dependencies */
import { useContext } from 'react'

/* Internal dependencies */
import { FormControlContext } from '~/src/components/Forms/FormControl'

function useFormControlContext() {
  return useContext(FormControlContext)
}

export default useFormControlContext
