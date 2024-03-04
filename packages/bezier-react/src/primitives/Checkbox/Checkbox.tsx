import * as Checkbox from '@radix-ui/react-checkbox'

import {
  type CheckboxPrimitiveIndicatorProps,
  type CheckboxPrimitiveProps,
} from './Checkbox.types'

/**
 * @see {@link https://www.radix-ui.com/primitives/docs/components/checkbox#root}
 */
export const CheckboxPrimitive = Checkbox.Root as React.ForwardRefExoticComponent<CheckboxPrimitiveProps & React.RefAttributes<HTMLButtonElement>>

/**
 * @see {@link https://www.radix-ui.com/primitives/docs/components/checkbox#indicator}
 */
export const CheckboxPrimitiveIndicator = Checkbox.Indicator as React.ForwardRefExoticComponent<CheckboxPrimitiveIndicatorProps & React.RefAttributes<HTMLSpanElement>>
