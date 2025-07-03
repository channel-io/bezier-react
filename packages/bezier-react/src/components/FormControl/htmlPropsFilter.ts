import { type FormFieldSize } from '~/src/types/props'

export type HtmlElementType = 'input' | 'textarea' | 'button' | 'div' | 'select'

export interface HtmlFormProps {
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
 * HTML element별로 유효한 form 관련 속성들을 정의
 * HTML 표준에 따른 속성 유효성 검증
 */
const VALID_HTML_FORM_ATTRIBUTES: Record<HtmlElementType, string[]> = {
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
 * 특정 HTML element type에 유효한 속성만 필터링
 * HTML 표준에 따라 무효한 속성들을 자동으로 제거
 * 
 * @param props - 필터링할 props 객체
 * @param elementType - 타겟 HTML element type
 * @returns HTML element에 안전한 속성들 (hasError 제외)
 */
export function filterHtmlProps<T extends Record<string, any>>(
  props: T, 
  elementType: HtmlElementType
): Omit<T, 'hasError'> {
  const validFormAttrs = VALID_HTML_FORM_ATTRIBUTES[elementType]
  const result: Record<string, any> = {}

  // 모든 속성을 검사하여 HTML element에 유효한 것만 선별
  Object.keys(props).forEach(key => {
    const value = props[key]

    // hasError는 항상 제외 (React 컴포넌트 상태용, DOM 속성 아님)
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

    // 그 외 모든 속성은 그대로 전달 (className, data-*, onClick, style 등)
    result[key] = value
  })

  return result as Omit<T, 'hasError'>
}

/**
 * HTML element별 편의 필터링 함수들
 * HTML 표준에 따른 유효한 속성만 반환
 */
export const filterForInput = <T extends Record<string, any>>(props: T) => 
  filterHtmlProps(props, 'input')

export const filterForTextArea = <T extends Record<string, any>>(props: T) => 
  filterHtmlProps(props, 'textarea')

export const filterForButton = <T extends Record<string, any>>(props: T) => 
  filterHtmlProps(props, 'button')

export const filterForSelect = <T extends Record<string, any>>(props: T) => 
  filterHtmlProps(props, 'select')

export const filterForDiv = <T extends Record<string, any>>(props: T) => 
  filterHtmlProps(props, 'div')

/**
 * React Hook과 HTML 속성 필터링을 통합하는 유틸리티
 * 
 * @param props - 컴포넌트 props
 * @param elementType - 타겟 HTML element type
 * @param usePropsHook - props를 반환하는 React Hook
 * @returns HTML element에 안전한 props와 상태값들
 */
export function useFilteredHtmlProps<T extends Record<string, any>>(
  props: T,
  elementType: HtmlElementType,
  usePropsHook: (props: T) => any
) {
  const hookProps = usePropsHook(props)
  const filteredProps = filterHtmlProps(hookProps, elementType)
  
  return {
    // HTML element에 안전한 props (spread 가능)
    ...filteredProps,
    // 조건부 로직용 상태값들 (별도 접근)
    hasError: hookProps.hasError,
    disabled: hookProps.disabled,
    readOnly: hookProps.readOnly,
    required: hookProps.required,
    size: hookProps.size,
  }
}