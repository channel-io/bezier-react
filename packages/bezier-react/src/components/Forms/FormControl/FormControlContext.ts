/* External dependencies */
import { createContext } from 'react'

/* Internal dependencies */
import { type FormControlContextValue } from '~/src/components/Forms/FormControl'

export const FormControlContext = createContext<FormControlContextValue | undefined>(undefined)
