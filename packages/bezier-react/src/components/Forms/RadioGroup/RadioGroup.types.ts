/* External dependencies */
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

/* Internal dependencies */
import { BezierComponentProps, ChildrenProps } from 'Types/ComponentProps'
import { FormComponentProps } from 'Components/Forms'
import { FormGroupProps } from 'Components/Forms/FormGroup'

interface RadioGroupOptions {
  value?: string
  defaultValue?: string
  name?: string
  onValueChange?: (value: string) => void
}

interface RadioOptions {
  value: string
  id?: string
}

type RadioFormComponentProps = Pick<FormComponentProps, 'disabled' | 'required'>

export interface RadioGroupProps extends
  BezierComponentProps,
  ChildrenProps,
  RadioFormComponentProps,
  Pick<FormGroupProps, 'spacing' | 'direction'>,
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof RadioGroupOptions | keyof RadioGroupPrimitive.RadioGroupProps>,
  RadioGroupOptions {}

export interface RadioProps extends
  BezierComponentProps,
  ChildrenProps,
  RadioFormComponentProps,
  React.HTMLAttributes<HTMLButtonElement>,
  RadioOptions {}
