/* Internal dependencies */
import {
  type BezierComponentProps,
  type ChildrenProps,
  type AdditionalStylableProps,
  type AdditionalTestIdProps,
} from '~/src/types/ComponentProps'
import type { FormComponentProps } from '~/src/components/Forms/Form.types'
import type CheckType from './CheckType'

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
