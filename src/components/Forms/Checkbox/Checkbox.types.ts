/* Internal dependencies */
import {
  BezierComponentProps,
  ChildrenProps,
  DisableProps,
  AdditionalStylableProps,
  AdditionalTestIdProps,
} from 'Types/ComponentProps'
import CheckType from './CheckType'

interface CheckboxOptions {
  checked?: boolean | CheckType
  onClick?: React.MouseEventHandler
}

export default interface CheckboxProps extends
  BezierComponentProps,
  ChildrenProps,
  DisableProps,
  AdditionalStylableProps<'content'>,
  AdditionalTestIdProps<'checker'>,
  CheckboxOptions {}
