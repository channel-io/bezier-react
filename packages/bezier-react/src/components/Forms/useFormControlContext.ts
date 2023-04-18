import { useContext } from 'react'

import { FormControlContext } from '~/src/components/Forms/FormControl'

function useFormControlContext() {
  return useContext(FormControlContext)
}

export default useFormControlContext
