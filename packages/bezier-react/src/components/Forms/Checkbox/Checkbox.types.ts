/* Internal dependencies */
import CheckType from './CheckType'
import {
  BezierComponentProps,
  ChildrenProps,
  AdditionalStylableProps,
  AdditionalTestIdProps,
} from '~/src/types/ComponentProps'
import type { FormComponentProps } from '~/src/components/Forms/Form.types'

interface CheckboxOptions {
  checked?: boolean | CheckType
  onClick?: React.MouseEventHandler
}

export default interface CheckboxProps extends
  BezierComponentProps,
  ChildrenProps,
  FormComponentProps,
  AdditionalStylableProps<'content'>,
  AdditionalTestIdProps<'checker'>,
  CheckboxOptions {}
