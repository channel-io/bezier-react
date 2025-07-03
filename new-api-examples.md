# 새로운 `useFormFieldProps` API 사용법

## 새로운 API - Element Type Parameter

두 번째 인자로 HTML 태그를 전달하면 해당 요소에 유효한 속성만 반환합니다.

### 기본 사용법

```tsx
// 기존 방식 (여전히 동작)
const { hasError, ...ownProps } = useFormFieldProps(rest)
return <input {...ownProps} />

// 새로운 방식 - 훨씬 깔끔!
const inputProps = useFormFieldProps(rest, 'input')
return <input {...inputProps} />
```

### 각 요소별 사용 예시

#### TextField (input 요소)
```tsx
export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField({ ...rest }, forwardedRef) {
    // input에 유효한 모든 속성 포함 (disabled, readOnly, size, required + ARIA)
    const inputProps = useFormFieldProps(rest, 'input')
    
    return (
      <input
        ref={forwardedRef}
        {...inputProps} // hasError는 제외됨
        className={inputProps.hasError ? 'error' : ''} // 상태값으로 접근
      />
    )
  }
)
```

#### TextArea (textarea 요소)
```tsx
export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextArea({ ...rest }, forwardedRef) {
    // textarea에 유효한 속성만 (disabled, readOnly, required + ARIA, size 제외)
    const textareaProps = useFormFieldProps(rest, 'textarea')
    
    return (
      <textarea
        ref={forwardedRef}
        {...textareaProps} // size는 자동으로 제외됨
      />
    )
  }
)
```

#### Switch (button 요소)
```tsx
export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  function Switch({ checked, onCheckedChange, ...rest }, forwardedRef) {
    // button에 유효한 속성만 (disabled + ARIA만, readOnly/size/required 제외)
    const buttonProps = useFormFieldProps(rest, 'button')
    
    return (
      <SwitchPrimitive.Root
        asChild
        checked={checked}
        onCheckedChange={onCheckedChange}
        required={buttonProps.required} // 상태값으로 primitive에 전달
      >
        <button
          ref={forwardedRef}
          {...buttonProps} // readOnly, size, required는 자동 제외
        />
      </SwitchPrimitive.Root>
    )
  }
)
```

#### RadioGroup (div 요소)
```tsx
export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  function RadioGroup({ children, ...rest }, forwardedRef) {
    // div에는 ARIA 속성만 (모든 form 속성 제외)
    const divProps = useFormFieldProps(rest, 'div')
    
    return (
      <RadioGroupPrimitive.Root
        asChild
        disabled={divProps.disabled} // 상태값으로 primitive에 전달
        required={divProps.required}
      >
        <div
          ref={forwardedRef}
          {...divProps} // disabled, readOnly 등은 자동 제외, ARIA만 포함
        >
          {children}
        </div>
      </RadioGroupPrimitive.Root>
    )
  }
)
```

## 백워드 컴패터빌리티

### 기존 코드는 그대로 동작
```tsx
// 이전 방식 - 여전히 완전 동작
const { hasError, ...ownProps } = useFormFieldProps(rest)
return <input {...ownProps} />

// Getter 방식도 여전히 사용 가능 (deprecated)
const { getInputProps, state } = useFormFieldProps(rest)
return <input {...getInputProps()} />
```

### 점진적 마이그레이션 가능
```tsx
// 혼합 사용 - 기존 패턴에서 새 패턴으로 점진적 이동
function MyComponent({ ...rest }) {
  // 팀이 준비되면 이렇게 변경
  const props = useFormFieldProps(rest, 'input')
  return <input {...props} />
  
  // 또는 기존 방식 유지
  // const { hasError, ...props } = useFormFieldProps(rest)
  // return <input {...props} className={hasError ? 'error' : ''} />
}
```

## 장점 요약

1. **더 직관적**: 어떤 element type인지 명시적으로 표현
2. **타입 안전**: 잘못된 속성이 자동으로 제거됨
3. **깔끔한 코드**: 수동 destructuring 불필요
4. **완전 호환**: 기존 코드 전혀 건드릴 필요 없음
5. **점진적 마이그레이션**: 필요에 따라 하나씩 업데이트

## API 비교

| 방식 | 코드 | 장점 | 단점 |
|------|------|------|------|
| 기존 | `const { hasError, ...props } = useFormFieldProps(rest)` | 익숙함 | 수동 작업, 실수 가능성 |
| Getter | `const { getInputProps } = useFormFieldProps(rest)` | 안전함 | 장황함 |
| **새 API** | `const props = useFormFieldProps(rest, 'input')` | **간단하고 안전** | - |