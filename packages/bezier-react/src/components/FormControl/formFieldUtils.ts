import { type FormFieldSize } from '~/src/types/props'

export type ElementType = 'input' | 'textarea' | 'button' | 'div' | 'select'

export interface FormFieldProps {
  disabled?: boolean
  readOnly?: boolean
  required?: boolean
  hasError?: boolean
  size?: FormFieldSize
  'aria-disabled'?: string
  'aria-invalid'?: string
  'aria-required'?: string
  'aria-readonly'?: string
  [key: string]: any
}

/**
 * HTML element별로 유효한 form field 속성들을 정의
 */
const VALID_FORM_ATTRIBUTES: Record<ElementType, string[]> = {
  input: ['disabled', 'readOnly', 'required', 'size'],
  textarea: ['disabled', 'readOnly', 'required'], // size는 textarea에 무효
  button: ['disabled'], // readOnly, required, size는 button에 무효
  select: ['disabled', 'required', 'size'], // readOnly는 select에서 다르게 처리
  div: [], // 모든 form 속성이 div에 무효
}

/**
 * 모든 HTML element에 유효한 ARIA 속성들
 */
const ARIA_ATTRIBUTES = [
  'aria-disabled',
  'aria-invalid', 
  'aria-required',
  'aria-readonly',
]

/**
 * 특정 HTML element type에 유효한 form field 속성만 필터링
 * 
 * @param props - useFormFieldProps에서 반환된 props
 * @param elementType - 타겟 HTML element type
 * @returns HTML element에 안전한 속성들
 */
export function filterFormFieldProps<T extends Record<string, any>>(
  props: T, 
  elementType: ElementType
): Omit<T, 'hasError'> {
  const validFormAttrs = VALID_FORM_ATTRIBUTES[elementType]
  const result: Record<string, any> = {}

  // 기본 속성들 복사 (data-*, class, id 등)
  Object.keys(props).forEach(key => {
    const value = props[key]

    // hasError는 항상 제외 (DOM 속성이 아님)
    if (key === 'hasError') {
      return
    }

    // ARIA 속성은 모든 element에 유효
    if (ARIA_ATTRIBUTES.indexOf(key) !== -1) {
      result[key] = value
      return
    }

    // Form 관련 속성들은 element type에 따라 필터링
    if (['disabled', 'readOnly', 'required', 'size'].indexOf(key) !== -1) {
      if (validFormAttrs.indexOf(key) !== -1) {
        result[key] = value
      }
      return
    }

    // 그 외 모든 속성은 그대로 전달 (className, data-*, onClick 등)
    result[key] = value
  })

  return result as Omit<T, 'hasError'>
}

/**
 * 편의 함수들 - 각 element type별로
 */
export const filterForInput = <T extends Record<string, any>>(props: T) => 
  filterFormFieldProps(props, 'input')

export const filterForTextArea = <T extends Record<string, any>>(props: T) => 
  filterFormFieldProps(props, 'textarea')

export const filterForButton = <T extends Record<string, any>>(props: T) => 
  filterFormFieldProps(props, 'button')

export const filterForSelect = <T extends Record<string, any>>(props: T) => 
  filterFormFieldProps(props, 'select')

export const filterForDiv = <T extends Record<string, any>>(props: T) => 
  filterFormFieldProps(props, 'div')

/**
 * useFormFieldProps와 함께 사용하는 통합 함수
 * 
 * @param props - 컴포넌트 props
 * @param elementType - 타겟 HTML element type
 * @param useFormFieldProps - useFormFieldProps hook 함수
 * @returns 필터링된 props와 상태값들
 */
export function useFormFieldPropsFor<T extends Record<string, any>>(
  props: T,
  elementType: ElementType,
  useFormFieldProps: (props: T) => any
) {
  const formFieldProps = useFormFieldProps(props)
  const filteredProps = filterFormFieldProps(formFieldProps, elementType)
  
  return {
    // HTML element에 안전한 props
    ...filteredProps,
    // 조건부 로직용 상태값들
    hasError: formFieldProps.hasError,
    disabled: formFieldProps.disabled,
    readOnly: formFieldProps.readOnly,
    required: formFieldProps.required,
    size: formFieldProps.size,
  }
}