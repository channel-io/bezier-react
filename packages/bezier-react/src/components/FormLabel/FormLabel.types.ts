import {
  type ChildrenProps,
  type IdentifierProps,
  type MarginProps,
} from '~/src/types/props'

import { type TextProps } from '~/src/components/Text'

interface FormLabelOwnProps {
  htmlFor?: string
  help?: React.ReactNode
}

/**
 * @deprecated These components are deprecated. Use beta components from `@channel.io/bezier-react/beta` instead.
 */
export interface FormLabelProps
  extends Omit<TextProps, keyof MarginProps>,
    ChildrenProps,
    Partial<IdentifierProps>,
    FormLabelOwnProps {}
