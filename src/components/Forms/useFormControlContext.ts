/* External dependencies */
import { useContext } from 'react'

/* Internal dependencies */
import { FormControlContext } from 'Components/Forms/FormControl'

function useFormControlContext() {
  const value = useContext(FormControlContext)
  return value
}

export default useFormControlContext
