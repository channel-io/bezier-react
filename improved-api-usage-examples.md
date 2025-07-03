# 개선된 API 사용법 - HTML Tag별 Attribute 필터링

## 새로운 유틸리티 함수 기반 접근법

### 기본 사용법

```tsx
import { useFormFieldProps, filterFormFieldProps } from '~/src/components/FormControl'

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField({ ...rest }, forwardedRef) {
    const formProps = useFormFieldProps(rest)
    const inputProps = filterFormFieldProps(formProps, 'input')
    
    return (
      <input
        ref={forwardedRef}
        {...inputProps} // hasError 자동 제외, input에 유효한 속성만
        className={formProps.hasError ? 'error' : ''}
      />
    )
  }
)
```

### 편의 함수들 사용

```tsx
import { useFormFieldProps, filterForInput, filterForButton, filterForDiv } from '~/src/components/FormControl'

// TextField - input 요소
export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField({ ...rest }, forwardedRef) {
    const formProps = useFormFieldProps(rest)
    const inputProps = filterForInput(formProps) // 편의 함수
    
    return (
      <input
        ref={forwardedRef}
        {...inputProps} // disabled, readOnly, size, required + ARIA
        className={formProps.hasError ? 'error' : ''}
      />
    )
  }
)

// Switch - button 요소
export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  function Switch({ checked, onCheckedChange, ...rest }, forwardedRef) {
    const formProps = useFormFieldProps(rest)
    const buttonProps = filterForButton(formProps) // button에 유효한 속성만
    
    return (
      <SwitchPrimitive.Root
        asChild
        checked={checked}
        onCheckedChange={onCheckedChange}
        required={formProps.required} // 상태값으로 primitive에 전달
      >
        <button
          ref={forwardedRef}
          {...buttonProps} // disabled + ARIA만 (readOnly, size, required 자동 제거)
          className={formProps.hasError ? 'switch--error' : ''}
        />
      </SwitchPrimitive.Root>
    )
  }
)

// RadioGroup - div 요소
export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  function RadioGroup({ children, ...rest }, forwardedRef) {
    const formProps = useFormFieldProps(rest)
    const divProps = filterForDiv(formProps) // ARIA 속성만
    
    return (
      <RadioGroupPrimitive.Root
        asChild
        disabled={formProps.disabled} // primitive에 상태값 전달
        required={formProps.required}
      >
        <div
          ref={forwardedRef}
          {...divProps} // ARIA 속성만 (form 속성들 자동 제거)
          className={formProps.hasError ? 'radiogroup--error' : ''}
        >
          {children}
        </div>
      </RadioGroupPrimitive.Root>
    )
  }
)
```

### 통합 함수 사용 (가장 간단)

```tsx
import { useFormFieldPropsFor } from '~/src/components/FormControl'

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextArea({ ...rest }, forwardedRef) {
    // 한 번에 필터링된 props와 상태값 모두 받기
    const props = useFormFieldPropsFor(rest, 'textarea', useFormFieldProps)
    
    return (
      <textarea
        ref={forwardedRef}
        {...props} // hasError, size 자동 제거, 나머지는 포함
        rows={props.hasError ? 3 : 6} // 상태값으로 조건부 처리
      />
    )
  }
)
```

## API 비교

### 기존 방식 vs 새로운 방식

```tsx
// 기존: 수동 destructuring (실수 가능성)
const { hasError, size, readOnly, ...buttonProps } = useFormFieldProps(rest)
return <button {...buttonProps} />

// 새로운: 자동 필터링 (안전하고 간단)
const formProps = useFormFieldProps(rest)
const buttonProps = filterForButton(formProps)
return <button {...buttonProps} />
```

### 각 요소별 필터링 결과

```tsx
const props = {
  disabled: true,
  readOnly: true,
  required: true,
  size: 'm',
  hasError: true,
  className: 'custom',
  'data-testid': 'test'
}

const formProps = useFormFieldProps(props)

// Input: 모든 form 속성 포함
filterForInput(formProps)
// { disabled: true, readOnly: true, required: true, size: 'm', className: 'custom', 'data-testid': 'test', 'aria-*': ... }

// TextArea: size 제외
filterForTextArea(formProps)  
// { disabled: true, readOnly: true, required: true, className: 'custom', 'data-testid': 'test', 'aria-*': ... }

// Button: form 속성 대부분 제외
filterForButton(formProps)
// { disabled: true, className: 'custom', 'data-testid': 'test', 'aria-*': ... }

// Div: form 속성 모두 제외  
filterForDiv(formProps)
// { className: 'custom', 'data-testid': 'test', 'aria-*': ... }
```

## 유틸리티 함수의 장점

### 1. 자연스러운 관심사 분리
```tsx
// Hook은 props 반환에 집중
const formProps = useFormFieldProps(rest)

// 유틸리티는 필터링에 집중
const inputProps = filterForInput(formProps)
```

### 2. 조합 가능성
```tsx
// 여러 필터링 조합 가능
const baseProps = useFormFieldProps(rest)
const inputProps = filterForInput(baseProps)
const customProps = { ...inputProps, customAttribute: 'value' }
```

### 3. 재사용성
```tsx
// 다른 hooks와도 함께 사용 가능
const customFormProps = useCustomFormProps(rest)
const inputProps = filterForInput(customFormProps)
```

### 4. 테스트 용이성
```tsx
// 유틸리티 함수는 순수 함수라 테스트 쉬움
expect(filterForButton({ disabled: true, readOnly: true }))
  .toEqual({ disabled: true }) // readOnly 자동 제거됨
```

## 마이그레이션 가이드

### 점진적 적용 가능
```tsx
// 1단계: 기존 방식 유지 (Breaking change 없음)
const { hasError, ...ownProps } = useFormFieldProps(rest)

// 2단계: 새 방식 도입 (팀이 준비되면)
const formProps = useFormFieldProps(rest)
const inputProps = filterForInput(formProps)

// 3단계: 통합 함수 사용 (더 간단하게)
const props = useFormFieldPropsFor(rest, 'input', useFormFieldProps)
```

### 기존 코드 호환성
```tsx
// 모든 기존 코드는 그대로 동작
const { hasError, ...ownProps } = useFormFieldProps(rest) // ✅ 여전히 동작
```

## 결론

이 접근법은 다음과 같은 이점을 제공합니다:

1. **직관적**: `useFormFieldProps`는 원래 목적에 충실
2. **안전**: HTML 표준 준수로 무효한 속성 자동 제거
3. **유연**: 필요에 따라 다양한 조합 가능
4. **호환**: 기존 코드 전혀 수정 불필요
5. **확장**: 새로운 HTML 요소 추가 시 쉽게 확장

**사용자의 제안이 정말 훌륭했습니다!** 🎯