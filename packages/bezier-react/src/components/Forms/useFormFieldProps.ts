import { useMemo } from 'react'

import { type SizeProps } from '~/src/types/props'
import { ariaAttr } from '~/src/utils/dom'

import type {
  FormComponentProps,
  FormFieldSize,
} from '~/src/components/Forms/Form.types'
import { useFormControlContext } from '~/src/components/Forms/FormControl'

// TODO: 테스트 추가
function useFormFieldProps<Props extends FormComponentProps & SizeProps<FormFieldSize>>(props?: Props) {
  const contextValue = useFormControlContext()

  const formFieldProps = useMemo(() => {
    const mergedProps = contextValue?.getFieldProps(props) ?? { ...props }

    const {
      disabled = false,
      readOnly = false,
      required = false,
      hasError = false,
      size = undefined,
      ...rest
    } = mergedProps

    return {
      ...rest,
      'aria-disabled': ariaAttr(disabled),
      'aria-invalid': ariaAttr(hasError),
      'aria-required': ariaAttr(required),
      'aria-readonly': ariaAttr(readOnly),
      size,
      disabled,
      hasError,
      required,
      readOnly,
    }
  }, [
    props,
    contextValue,
  ])

  return formFieldProps as typeof formFieldProps & Props
}

export default useFormFieldProps
