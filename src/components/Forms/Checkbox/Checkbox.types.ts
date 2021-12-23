/* Internal dependencies */
import {
  BezierComponentProps,
  ChildrenProps,
  AdditionalStylableProps,
  AdditionalTestIdProps,
} from 'Types/ComponentProps'
import type { FormComponentProps } from 'Components/Forms/Form.types'
import CheckType from './CheckType'

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
