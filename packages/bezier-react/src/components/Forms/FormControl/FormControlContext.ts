/* External dependencies */
import { createContext } from 'react'

/* Internal dependencies */
import { type FormControlContextValue } from '~/src/components/Forms/FormControl'

const FormControlContext = createContext<FormControlContextValue | undefined>(undefined)

export default FormControlContext
