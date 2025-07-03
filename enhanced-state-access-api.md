# 향상된 `useFormFieldProps` - 상태값 접근 방법

## 문제 해결: 더 깔끔한 상태값 접근

두 번째 인자로 element type을 넘겼을 때 상태값을 어떻게 접근할지 개선했습니다.

## 개선된 API - 여러 가지 접근 방법 제공

### 방법 1: 구조화된 반환값 (권장)
```tsx
// 가장 깔끔한 방법 - props와 state 분리
const { props, state } = useFormFieldProps(rest, 'input')

return (
  <input 
    {...props} // DOM에 안전한 속성만 포함
    className={state.hasError ? 'error' : ''}
    aria-label={state.required ? 'Required field' : undefined}
  />
)
```

### 방법 2: 직접 접근 (백워드 컴패터빌리티)
```tsx
// 기존처럼 바로 접근도 가능
const formProps = useFormFieldProps(rest, 'input')

return (
  <input 
    {...formProps} 
    className={formProps.hasError ? 'error' : ''}
  />
)
```

### 방법 3: Destructuring (기존 패턴과 유사)
```tsx
// 필요한 상태값만 뽑아서 사용
const { hasError, disabled, ...inputProps } = useFormFieldProps(rest, 'input')

return (
  <input 
    {...inputProps}
    className={hasError ? 'error' : ''}
  />
)
```

## 각 요소별 사용 예시

### TextField (input)
```tsx
export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField({ className, ...rest }, forwardedRef) {
    const { props, state } = useFormFieldProps(rest, 'input')
    
    return (
      <input
        ref={forwardedRef}
        {...props} // disabled, readOnly, size, required + ARIA
        className={classNames(
          'textfield',
          state.hasError && 'textfield--error',
          state.disabled && 'textfield--disabled',
          className
        )}
      />
    )
  }
)
```

### TextArea 
```tsx
export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextArea({ ...rest }, forwardedRef) {
    const { props, state } = useFormFieldProps(rest, 'textarea')
    
    return (
      <textarea
        ref={forwardedRef}
        {...props} // disabled, readOnly, required + ARIA (size 자동 제외)
        rows={state.hasError ? 3 : 6} // 상태에 따른 조건부 속성
      />
    )
  }
)
```

### Switch (button)
```tsx
export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  function Switch({ checked, onCheckedChange, ...rest }, forwardedRef) {
    const { props, state } = useFormFieldProps(rest, 'button')
    
    return (
      <SwitchPrimitive.Root
        asChild
        checked={checked}
        onCheckedChange={onCheckedChange}
        required={state.required} // primitive에 상태값 전달
        disabled={state.disabled}
      >
        <button
          ref={forwardedRef}
          {...props} // disabled + ARIA만 (readOnly, size, required 자동 제외)
          className={state.hasError ? 'switch--error' : ''}
        />
      </SwitchPrimitive.Root>
    )
  }
)
```

### RadioGroup (div)
```tsx
export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  function RadioGroup({ children, ...rest }, forwardedRef) {
    const { props, state } = useFormFieldProps(rest, 'div')
    
    return (
      <RadioGroupPrimitive.Root
        asChild
        disabled={state.disabled} // primitive에 상태값 전달
        required={state.required}
      >
        <div
          ref={forwardedRef}
          {...props} // ARIA 속성만 (form 속성들 자동 제외)
          className={state.hasError ? 'radiogroup--error' : ''}
        >
          {children}
        </div>
      </RadioGroupPrimitive.Root>
    )
  }
)
```

## 주요 장점

### 1. 명확한 분리
```tsx
const { props, state } = useFormFieldProps(rest, 'input')
// props: DOM에 안전한 속성들만
// state: 조건부 로직용 상태값들
```

### 2. 타입 안전성
```tsx
// state 객체의 모든 속성이 타입 안전하게 접근 가능
state.hasError   // boolean
state.disabled   // boolean  
state.required   // boolean
state.readOnly   // boolean
state.size       // FormFieldSize | undefined
```

### 3. 유연한 사용법
```tsx
// Case 1: 구조화 (권장)
const { props, state } = useFormFieldProps(rest, 'input')

// Case 2: 기존 방식
const formProps = useFormFieldProps(rest, 'input')

// Case 3: 부분 destructuring
const { hasError, ...inputProps } = useFormFieldProps(rest, 'input')
```

### 4. 조건부 로직 최적화
```tsx
const { props, state } = useFormFieldProps(rest, 'textarea')

// 상태에 따른 다양한 조건부 처리
const dynamicProps = {
  ...props,
  rows: state.hasError ? 2 : 4,
  placeholder: state.required ? 'Required field' : 'Optional field',
  'data-testid': state.disabled ? 'disabled-textarea' : 'textarea'
}

return <textarea {...dynamicProps} />
```

## 마이그레이션 가이드

### Phase 1: 새 API 적용
```tsx
// Old
const { hasError, ...inputProps } = useFormFieldProps(rest)

// New (권장)
const { props, state } = useFormFieldProps(rest, 'input')
```

### Phase 2: 점진적 개선
```tsx
// 기존 코드 수정 없이 타입 안전성만 추가
const formProps = useFormFieldProps(rest, 'input')
// 기존 코드 그대로 사용하되 무효한 속성은 자동 필터링됨
```

이제 상태값 접근이 훨씬 명확하고 타입 안전하며 유연해졌습니다! 🎉