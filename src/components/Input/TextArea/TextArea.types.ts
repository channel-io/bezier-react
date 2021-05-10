/* Internal dependencies */

import { UIComponentProps } from '../../../types/ComponentProps'
import InjectedInterpolation from '../../../types/InjectedInterpolation'

export interface TextAreaProps extends UIComponentProps {
  autoFocus?: boolean
  maxHeight?: number
  width?: number
  value?: string
  placeholder?: string
  inputInterpolation: InjectedInterpolation
  onChange?: (changeValue?: string) => void
}
