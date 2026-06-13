import {
  type ChildrenProps,
  type IdentifierProps,
  type V3MarginProps,
} from '~/src/types/props'
import { type TextProps } from '~/src/v3/Text'

interface FormLabelOwnProps {
  htmlFor?: string
  help?: React.ReactNode
}

export interface FormLabelProps
  extends Omit<TextProps, keyof V3MarginProps>,
    ChildrenProps,
    Partial<IdentifierProps>,
    FormLabelOwnProps {}
