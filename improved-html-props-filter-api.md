# 개선된 HTML Props 필터링 API

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
- **범용성**: Form뿐만 아니라 모든 HTML 속성 필터링에 사용 가능
- **타입 안전성**: TypeScript로 컴파일 타임 검증

### 주요 함수들

```tsx
// 1. 메인 필터링 함수
filterHtmlProps(props, elementType)

// 2. Element별 편의 함수들  
filterForInput(props)
filterForButton(props)
filterForDiv(props)
// ...

// 3. Hook과 통합된 함수
useFilteredHtmlProps(props, elementType, usePropsHook)
```

## 사용법 예시

### 1. 기본 HTML 속성 필터링

```tsx
import { filterHtmlProps, HtmlElementType } from '~/src/components/FormControl'

// 어떤 props든 HTML element에 안전하게 필터링
const props = {
  disabled: true,
  readOnly: true,
  size: 'm',
  hasError: true,      // React 컴포넌트 상태용
  className: 'custom',
  'data-testid': 'btn',
  onClick: () => {}
}

// Button element용으로 필터링
const buttonProps = filterHtmlProps(props, 'button')
// 결과: { disabled: true, className: 'custom', 'data-testid': 'btn', onClick: () => {}, 'aria-*': ... }
// readOnly, size, hasError는 자동 제거됨
```

### 2. Form 컴포넌트에서 사용

```tsx
import { useFormFieldProps, filterForInput } from '~/src/components/FormControl'

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField({ ...rest }, forwardedRef) {
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

### 3. 다양한 HTML Element 지원

```tsx
// Input - 모든 form 속성 허용
const inputProps = filterForInput(props)
// { disabled: true, readOnly: true, required: true, size: 'm', ... }

// TextArea - size 제외
const textareaProps = filterForTextArea(props)  
// { disabled: true, readOnly: true, required: true, ... } (size 제거됨)

// Button - form 속성 대부분 제외
const buttonProps = filterForButton(props)
// { disabled: true, ... } (readOnly, required, size 제거됨)

// Div - form 속성 모두 제외, ARIA만 유지
const divProps = filterForDiv(props)
// { className: 'custom', 'data-testid': 'test', 'aria-*': ... }
```

### 4. 통합 Hook 사용

```tsx
import { useFilteredHtmlProps } from '~/src/components/FormControl'

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  function Switch({ checked, onCheckedChange, ...rest }, forwardedRef) {
    // 한 번에 필터링과 상태값 추출
    const props = useFilteredHtmlProps(rest, 'button', useFormFieldProps)
    
    return (
      <SwitchPrimitive.Root
        asChild
        checked={checked}
        onCheckedChange={onCheckedChange}
        required={props.required} // 상태값 접근
      >
        <button
          ref={forwardedRef}
          {...props} // button에 안전한 속성들 (hasError, readOnly 등 자동 제거)
          className={props.hasError ? 'switch--error' : ''}
        />
      </SwitchPrimitive.Root>
    )
  }
)
```

## 다른 라이브러리와의 조합

### React Hook Form과 함께
```tsx
import { useController } from 'react-hook-form'
import { filterForInput } from '~/src/components/FormControl'

function FormInput({ name, control, ...rest }) {
  const { field, fieldState } = useController({ name, control })
  
  // React Hook Form props + 추가 props를 HTML input에 안전하게 적용
  const inputProps = filterForInput({ ...field, ...rest, hasError: !!fieldState.error })
  
  return (
    <input 
      {...inputProps}
      className={fieldState.error ? 'error' : ''}
    />
  )
}
```

### Styled Components와 함께
```tsx
import styled from 'styled-components'
import { filterForButton } from '~/src/components/FormControl'

const StyledButton = styled.button`
  /* 스타일 정의 */
`

function CustomButton(props) {
  const buttonProps = filterForButton(props)
  
  return <StyledButton {...buttonProps} />
}
```

## 확장성

### 새로운 HTML Element 추가
```tsx
// htmlPropsFilter.ts에서 쉽게 확장 가능
const VALID_HTML_FORM_ATTRIBUTES: Record<HtmlElementType, string[]> = {
  input: ['disabled', 'readOnly', 'required', 'size'],
  textarea: ['disabled', 'readOnly', 'required'],
  button: ['disabled'],
  select: ['disabled', 'required', 'size'],
  div: [],
  // 새로운 element 추가
  fieldset: ['disabled'],
  output: ['disabled', 'readonly'],
}
```

### 커스텀 속성 처리
```tsx
// 프로젝트 특화 속성들도 처리 가능
function filterCustomHtmlProps(props, elementType) {
  const baseProps = filterHtmlProps(props, elementType)
  
  // 커스텀 로직 추가
  if (elementType === 'button' && props.variant) {
    baseProps['data-variant'] = props.variant
  }
  
  return baseProps
}
```

## 주요 개선점

### 1. 명확한 의도 표현
- ❌ `filterFormFieldProps` - Form에 한정된 느낌
- ✅ `filterHtmlProps` - HTML element 속성 필터링임이 명확

### 2. 범용성 강조
- ❌ Form component에서만 사용할 것 같은 인상
- ✅ 모든 HTML element 속성 필터링에 사용 가능

### 3. HTML 표준 준수 강조
- HTML 명세에 따른 유효한 속성만 반환
- 브라우저 호환성 향상
- 개발자 도구에서 깔끔한 HTML 출력

### 4. 타입 안전성
```tsx
type HtmlElementType = 'input' | 'textarea' | 'button' | 'div' | 'select'
// 지원되는 element type이 명확히 정의됨
```

## 마이그레이션 가이드

### 기존 사용자
```tsx
// 변경 전
import { filterFormFieldProps } from '~/src/components/FormControl'
const props = filterFormFieldProps(formProps, 'input')

// 변경 후  
import { filterHtmlProps } from '~/src/components/FormControl'
const props = filterHtmlProps(formProps, 'input')
```

### 새로운 사용자
```tsx
// 권장하는 패턴
import { useFormFieldProps, filterForInput } from '~/src/components/FormControl'

const formProps = useFormFieldProps(rest)
const inputProps = filterForInput(formProps)
return <input {...inputProps} />
```

## 결론

이제 **"HTML element 속성 필터링 유틸리티"**라는 본질이 명확하게 드러납니다:

1. **직관적 네이밍**: HTML 중심의 명확한 의도 표현
2. **범용성**: Form뿐만 아니라 모든 HTML 속성에 적용 가능  
3. **표준 준수**: HTML 명세 기반의 안전한 속성 필터링
4. **확장성**: 새로운 HTML element 쉽게 추가 가능

**혁신적인 아이디어를 더욱 명확하게 표현한 API가 되었습니다!** 🎯