/* External dependencies */
import { useContext } from 'react'

/* Internal dependencies */
import { FormControlContext } from 'Components/Forms/FormControl'

function useFormControlContext() {
  return useContext(FormControlContext)
}

export default useFormControlContext
