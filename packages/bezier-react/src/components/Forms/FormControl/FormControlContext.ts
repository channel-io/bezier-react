import { createContext } from '~/src/utils/reactUtils'

import { type FormControlContextValue } from '~/src/components/Forms/FormControl'

export const [
  FormControlContextProvider,
  useFormControlContext,
] = createContext<FormControlContextValue | undefined>(undefined)
