/* External dependencies */
import { createContext } from 'react'

/* Internal dependencies */
import { FormContextValue } from 'Components/Forms/FormControl'

const FormControlContext = createContext<FormContextValue | undefined>(undefined)

export default FormControlContext
