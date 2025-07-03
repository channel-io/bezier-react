# 개선된 HTML Props 필터링 API

## 핵심 개선사항

### 1. React Hook 패턴 준수
```tsx
// ❌ 비정상적: Hook을 매개변수로 전달
useFilteredHtmlProps(props, elementType, useFormFieldProps)

// ✅ 정상적: Hook을 컴포넌트 내부에서 직접 호출
const formProps = useFormFieldProps(rest)
const inputProps = filterForInput(formProps)
```

### 2. 단일 진실의 원천 (Single Source of Truth)
```tsx
// ❌ 기존: 중복된 속성 정의
// htmlPropsFilter.ts: ['disabled', 'readOnly', 'required', 'size']
// FormFieldProps: { disabled?, readOnly?, required?, hasError? }

// ✅ 개선: FormFieldProps를 기준으로 통합
interface HtmlFormProps extends FormFieldProps {
  size?: FormFieldSize
  // FormFieldProps에서 자동으로 disabled, readOnly, required, hasError 상속
}
```

## HTML Element 중심의 명확한 네이밍

### 기존 문제점
```tsx
// 기존: Form field에 한정된 것처럼 느껴짐
import { filterFormFieldProps } from '~/src/components/FormControl'
```

### 개선된 네이밍
```tsx
// 개선: HTML element 속성 필터링의 본질이 명확함
import { filterHtmlProps } from '~/src/components/FormControl'
```

## 새로운 API 개요

### 핵심 컨셉
- **HTML 표준 준수**: HTML element별 유효한 속성만 반환
- **타입 안전성**: FormFieldProps 기반의 타입 정의로 일관성 보장
- **React Hook 패턴 준수**: Hook은 컴포넌트 내부에서 직접 호출

### 주요 함수들

```tsx
// 1. 메인 필터링 함수
filterHtmlProps(props, elementType)

// 2. Element별 편의 함수들  
filterForInput(props)
filterForButton(props)
filterForDiv(props)
// ...

// 3. ❌ 제거됨: useFilteredHtmlProps (비정상적 Hook 패턴)
```

## 사용법 예시

### 1. 올바른 React Hook 패턴

```tsx
import { useFormFieldProps, filterForInput } from '~/src/components/FormControl'

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField({ ...rest }, forwardedRef) {
    // ✅ Hook을 컴포넌트 내부에서 직접 호출
    const formProps = useFormFieldProps(rest)
    const inputProps = filterForInput(formProps) // HTML input에 안전한 속성만
    
    return (
      <input
        ref={forwardedRef}
        {...inputProps} // disabled, readOnly, size, required + ARIA + 기타 HTML 속성
        className={formProps.hasError ? 'error' : ''} // 상태값으로 조건부 처리
      />
    )
  }
)
```

### 2. 타입 안전성 보장

```tsx
// FormFieldProps 기반으로 일관된 타입 정의
interface HtmlFormProps extends FormFieldProps {
  size?: FormFieldSize  // 추가 속성만 정의
  // disabled, readOnly, required, hasError는 FormFieldProps에서 자동 상속
}

// 컴파일 타임에 타입 안전성 검증
const props: HtmlFormProps = {
  disabled: true,      // ✅ FormFieldProps에서 정의됨
  readOnly: true,      // ✅ FormFieldProps에서 정의됨  
  hasError: true,      // ✅ FormFieldProps에서 정의됨
  size: 'm',          // ✅ 명시적으로 추가 정의됨
  invalidProp: true,   // ❌ 타입 에러 발생
}
```

### 3. 다양한 HTML Element 지원

```tsx
// FormFieldProps 기반으로 일관된 속성 처리
const formProps = useFormFieldProps(rest)

// Input - FormFieldProps의 모든 form 속성 허용
const inputProps = filterForInput(formProps)
// { disabled: true, readOnly: true, required: true, size: 'm', ... }

// TextArea - size 제외 (HTML 표준에 따라)
const textareaProps = filterForTextArea(formProps)  
// { disabled: true, readOnly: true, required: true, ... } (size 자동 제거)

// Button - form 속성 대부분 제외 (HTML 표준에 따라)
const buttonProps = filterForButton(formProps)
// { disabled: true, ... } (readOnly, required, size 자동 제거)

// Div - form 속성 모두 제외, ARIA만 유지
const divProps = filterForDiv(formProps)
// { className: 'custom', 'data-testid': 'test', 'aria-*': ... }
```

### 4. 복잡한 컴포넌트에서의 활용

```tsx
export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  function Switch({ checked, onCheckedChange, ...rest }, forwardedRef) {
    // Hook을 컴포넌트 내부에서 직접 호출
    const formProps = useFormFieldProps(rest)
    const buttonProps = filterForButton(formProps) // button에 안전한 속성만
    
    return (
      <SwitchPrimitive.Root
        asChild
        checked={checked}
        onCheckedChange={onCheckedChange}
        required={formProps.required} // FormFieldProps에서 상속된 속성에 안전하게 접근
      >
        <button
          ref={forwardedRef}
          {...buttonProps} // hasError, readOnly 등 자동 제거됨
          className={formProps.hasError ? 'switch--error' : ''} // 타입 안전한 상태값 접근
        />
      </SwitchPrimitive.Root>
    )
  }
)
```

## 타입 시스템의 장점

### 1. FormFieldProps와의 완벽한 통합
```tsx
// 한 곳에서 form 속성을 정의하고 모든 곳에서 재사용
export interface FormFieldProps extends DisableProps, Partial<IdentifierProps> {
  hasError?: boolean
  required?: boolean
  readOnly?: boolean
}

// HTML 필터링에서 동일한 타입 기반으로 처리
const FORM_FIELD_ATTRIBUTES = ['disabled', 'hasError', 'required', 'readOnly'] as const
```

### 2. 컴파일 타임 검증
```tsx
// FormFieldProps가 변경되면 자동으로 반영됨
// 수동으로 속성 목록을 동기화할 필요 없음
```

### 3. IDE 지원 향상
```tsx
// TypeScript IntelliSense가 정확한 타입 정보 제공
const formProps = useFormFieldProps(rest) // FormFieldProps & 추가 속성들
const inputProps = filterForInput(formProps) // Omit<typeof formProps, 'hasError'>
```

## 다른 라이브러리와의 조합

### React Hook Form과 함께
```tsx
import { useController } from 'react-hook-form'
import { useFormFieldProps, filterForInput } from '~/src/components/FormControl'

function FormInput({ name, control, ...rest }) {
  const { field, fieldState } = useController({ name, control })
  
  // 각 Hook을 컴포넌트 내부에서 직접 호출
  const formProps = useFormFieldProps({ 
    ...field, 
    ...rest, 
    hasError: !!fieldState.error 
  })
  const inputProps = filterForInput(formProps)
  
  return (
    <input 
      {...inputProps}
      className={formProps.hasError ? 'error' : ''}
    />
  )
}
```

## 확장성

### 새로운 FormField 속성 추가
```tsx
// 1. FormFieldProps에 새 속성 추가
export interface FormFieldProps extends DisableProps, Partial<IdentifierProps> {
  hasError?: boolean
  required?: boolean
  readOnly?: boolean
  autoComplete?: boolean  // 새 속성 추가
}

// 2. htmlPropsFilter.ts에서 자동으로 인식됨 (단일 진실의 원천)
const FORM_FIELD_ATTRIBUTES = ['disabled', 'hasError', 'required', 'readOnly', 'autoComplete'] as const

// 3. HTML element별 유효성 업데이트
const VALID_HTML_FORM_ATTRIBUTES: Record<HtmlElementType, readonly string[]> = {
  input: ['disabled', 'readOnly', 'required', 'size', 'autoComplete'],
  textarea: ['disabled', 'readOnly', 'required', 'autoComplete'],
  // ...
}
```

## 주요 개선점 요약

### 1. 정상적인 React 패턴 준수
- ❌ Hook을 매개변수로 전달하는 비정상적 패턴 제거
- ✅ Hook을 컴포넌트 내부에서 직접 호출하는 정상적 패턴

### 2. 단일 진실의 원천 확립
- ❌ FormFieldProps와 htmlPropsFilter의 중복 정의
- ✅ FormFieldProps를 기반으로 한 통합된 타입 시스템

### 3. 유지보수성 향상
- ❌ 한쪽이 변경되었을 때 다른 쪽에서 알기 어려운 구조
- ✅ FormFieldProps 변경 시 자동으로 전체 시스템에 반영

### 4. 명확한 의도 표현
- ❌ `filterFormFieldProps` - Form에 한정된 느낌
- ✅ `filterHtmlProps` - HTML element 속성 필터링임이 명확

### 5. 타입 안전성 강화
```tsx
// 컴파일 타임에 모든 불일치 검출
type HtmlElementType = 'input' | 'textarea' | 'button' | 'div' | 'select'
interface HtmlFormProps extends FormFieldProps { /* ... */ }
```

## 마이그레이션 가이드

### 기존 사용자 (잘못된 패턴)
```tsx
// ❌ 변경 전: 비정상적 Hook 패턴
import { useFilteredHtmlProps } from '~/src/components/FormControl'
const props = useFilteredHtmlProps(rest, 'input', useFormFieldProps)

// ✅ 변경 후: 정상적 Hook 패턴
import { useFormFieldProps, filterForInput } from '~/src/components/FormControl'
const formProps = useFormFieldProps(rest)
const inputProps = filterForInput(formProps)
```

### 권장 패턴
```tsx
// 모든 새로운 컴포넌트에서 사용할 패턴
import { useFormFieldProps, filterForInput } from '~/src/components/FormControl'

export function MyComponent({ ...rest }) {
  const formProps = useFormFieldProps(rest)
  const inputProps = filterForInput(formProps)
  
  return (
    <input 
      {...inputProps}
      className={formProps.hasError ? 'error' : ''}
    />
  )
}
```

## 결론

이제 **완전히 정제된 HTML element 속성 필터링 유틸리티**가 되었습니다:

1. **React 패턴 준수**: 정상적인 Hook 사용법
2. **타입 시스템 통합**: FormFieldProps 기반의 일관된 타입 정의
3. **유지보수성**: 단일 진실의 원천으로 변경 사항 자동 반영
4. **직관적 네이밍**: HTML element 중심의 명확한 의도 표현
5. **표준 준수**: HTML 명세 기반의 안전한 속성 필터링

**React 생태계의 혁신적이고 완성도 높은 솔루션이 되었습니다!** 🎯✨