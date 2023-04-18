import {
  type BezierComponentProps,
  type ChildrenProps,
  type IdentifierProps,
} from '~/src/types/ComponentProps'

import { type TextProps } from '~/src/components/Text'

interface FormLabelOptions {
  htmlFor?: string
  help?: React.ReactNode
}

export default interface FormLabelProps extends
  BezierComponentProps,
  ChildrenProps,
  TextProps,
  Partial<IdentifierProps>,
  FormLabelOptions {}
