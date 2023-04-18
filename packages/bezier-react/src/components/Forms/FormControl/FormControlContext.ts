import { createContext } from 'react'

import { type FormControlContextValue } from '~/src/components/Forms/FormControl'

export const FormControlContext = createContext<FormControlContextValue | undefined>(undefined)
