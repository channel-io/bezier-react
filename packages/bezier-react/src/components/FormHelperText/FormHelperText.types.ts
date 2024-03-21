import {
  type ChildrenProps,
  type IdentifierProps,
  type MarginProps,
} from '~/src/types/props'

import { type TextProps } from '~/src/components/Text'

interface BaseHelperTextOwnProps {
  type: 'info' | 'error'
}

export interface BaseHelperTextProps
  extends Omit<TextProps, keyof MarginProps>,
    ChildrenProps,
    Partial<IdentifierProps>,
    BaseHelperTextOwnProps {}

export interface FormHelperTextProps
  extends Omit<BaseHelperTextProps, 'type'> {}

export interface FormErrorMessageProps extends FormHelperTextProps {}
