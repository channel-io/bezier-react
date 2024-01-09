import {
  type AlphaBezierComponentProps,
  type ChildrenProps,
  type IdentifierProps,
} from '~/src/types/ComponentProps'

import { type TextProps } from '~/src/components/Text'

interface FormLabelOwnProps {
  htmlFor?: string
  help?: React.ReactNode
}

export interface FormLabelProps extends
  AlphaBezierComponentProps,
  ChildrenProps,
  Omit<TextProps, 'as'>,
  Partial<IdentifierProps>,
  FormLabelOwnProps {}
