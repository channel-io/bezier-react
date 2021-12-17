/* External dependencies */
import { createContext } from 'react'

/* Internal dependencies */
import { FormControlContextValue } from 'Components/Forms/FormControl'

const FormControlContext = createContext<FormControlContextValue | undefined>(undefined)

export default FormControlContext
