import {
  type ChildrenProps,
  type IdentifierProps,
  type V3MarginProps,
} from '~/src/types/props'
import { type TextProps } from '~/src/v3/Text'

interface BaseHelperTextOwnProps {
  type: 'info' | 'error'
}

export interface BaseHelperTextProps
  extends Omit<TextProps, keyof V3MarginProps>,
    ChildrenProps,
    Partial<IdentifierProps>,
    BaseHelperTextOwnProps {}

export interface FormHelperTextProps
  extends Omit<BaseHelperTextProps, 'type'> {}

export interface FormErrorMessageProps extends FormHelperTextProps {}
