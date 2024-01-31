import {
  type AlphaBezierComponentProps,
  type ChildrenProps,
  type IdentifierProps,
  type MarginProps,
} from '~/src/types/props'

import { type TextProps } from '~/src/components/Text'

interface FormLabelOwnProps {
  htmlFor?: string
  help?: React.ReactNode
}

export interface FormLabelProps extends
  AlphaBezierComponentProps,
  ChildrenProps,
  Omit<TextProps, keyof MarginProps>,
  Partial<IdentifierProps>,
  FormLabelOwnProps {}
