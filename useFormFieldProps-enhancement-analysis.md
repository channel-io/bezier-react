# Enhancing `hasError` Handling in `useFormFieldProps`

## Current Problem Analysis

### Issue Description
The `useFormFieldProps` hook currently returns `hasError` as part of the props object, but `hasError` is not a valid HTML attribute. This forces developers to manually destructure it out before passing props to DOM elements.

### Current Usage Patterns
Based on codebase analysis, here are the current usage patterns:

```tsx
// SegmentedControl - Manual destructuring
const { hasError, ...ownProps } = useFormFieldProps(rest)
return <SegmentedControlItemList {...ownProps} />

// RadioGroup - Manual destructuring  
const { hasError, ...formFieldProps } = useFormFieldProps(rest)
return <RadioGroupPrimitive.Root {...formFieldProps} />

// Checkbox - Mixed destructuring
const { id: formFieldId, hasError, ...formFieldProps } = useFormFieldProps(rest)
return <CheckboxPrimitive.Root {...formFieldProps} />

// TextField - Full destructuring
const { disabled, readOnly, hasError, size: formFieldSize, ...ownProps } = useFormFieldProps(rest)
return <input {...ownProps} />
```

### Current Implementation
```tsx
export function useFormFieldProps<Props extends FormFieldProps & SizeProps<FormFieldSize>>(props?: Props) {
  // ... logic ...
  return {
    ...rest,
    'aria-disabled': ariaAttr(disabled),
    'aria-invalid': ariaAttr(hasError),
    'aria-required': ariaAttr(required),
    'aria-readonly': ariaAttr(readOnly),
    size,
    disabled,
    hasError,  // ❌ This causes the problem
    required,
    readOnly,
  }
}
```

## Proposed Solutions

### Solution 1: Split Return Object (Recommended)
Separate HTML props from component state:

```tsx
export function useFormFieldProps<Props extends FormFieldProps & SizeProps<FormFieldSize>>(props?: Props) {
  // ... existing logic ...
  
  return {
    // HTML-safe props for DOM elements
    formProps: {
      ...rest,
      'aria-disabled': ariaAttr(disabled),
      'aria-invalid': ariaAttr(hasError),
      'aria-required': ariaAttr(required),
      'aria-readonly': ariaAttr(readOnly),
      size,
      disabled,
      required,
      readOnly,
    },
    // Component state (not for DOM)
    hasError,
    // For backward compatibility
    ...rest,
    'aria-disabled': ariaAttr(disabled),
    'aria-invalid': ariaAttr(hasError),
    'aria-required': ariaAttr(required),
    'aria-readonly': ariaAttr(readOnly),
    size,
    disabled,
    required,
    readOnly,
  }
}
```

**Usage:**
```tsx
// New recommended usage
const { formProps, hasError } = useFormFieldProps(rest)
return <input {...formProps} />

// Backward compatible
const { hasError, ...ownProps } = useFormFieldProps(rest)
return <input {...ownProps} />
```

### Solution 2: Exclude Option
Add an option to exclude non-HTML props:

```tsx
export function useFormFieldProps<Props extends FormFieldProps & SizeProps<FormFieldSize>>(
  props?: Props, 
  options?: { excludeNonHTMLProps?: boolean }
) {
  // ... existing logic ...
  
  const baseProps = {
    ...rest,
    'aria-disabled': ariaAttr(disabled),
    'aria-invalid': ariaAttr(hasError),
    'aria-required': ariaAttr(required),
    'aria-readonly': ariaAttr(readOnly),
    size,
    disabled,
    required,
    readOnly,
  }

  if (options?.excludeNonHTMLProps) {
    return baseProps
  }

  return {
    ...baseProps,
    hasError,
  }
}
```

**Usage:**
```tsx
// Clean HTML props
const formProps = useFormFieldProps(rest, { excludeNonHTMLProps: true })
return <input {...formProps} />

// Traditional usage (backward compatible)
const { hasError, ...formProps } = useFormFieldProps(rest)
return <input {...formProps} />
```

### Solution 3: Separate Hooks
Create dedicated hooks for different purposes:

```tsx
export function useFormFieldProps<Props extends FormFieldProps & SizeProps<FormFieldSize>>(props?: Props) {
  // Returns only HTML-safe props
  // ... logic without hasError ...
}

export function useFormFieldState<Props extends FormFieldProps>(props?: Props) {
  // Returns only state values
  const contextValue = useFormControlContext()
  const mergedProps = contextValue?.getFieldProps(props) ?? { ...props }
  
  return {
    hasError: mergedProps.hasError ?? false,
    disabled: mergedProps.disabled ?? false,
    required: mergedProps.required ?? false,
    readOnly: mergedProps.readOnly ?? false,
  }
}
```

**Usage:**
```tsx
const formProps = useFormFieldProps(rest)
const { hasError } = useFormFieldState(rest)
return <input {...formProps} />
```

## Implementation Recommendations

### Phase 1: Implement Solution 1 (Split Return Object)
- Maintains backward compatibility
- Provides a cleaner API for new code
- Gradual migration path

### Phase 2: Update Components
- Update all components to use the new `formProps` pattern
- Add lint rules to prevent direct spreading of `useFormFieldProps` result

### Phase 3: Deprecation (Future)
- Add deprecation warnings for old usage patterns
- Eventually remove `hasError` from the main return object

## Benefits

1. **Improved Developer Experience**: No more manual destructuring required
2. **Type Safety**: Clear separation between HTML props and component state
3. **Maintainability**: Easier to understand what props are safe for DOM elements
4. **Backward Compatibility**: Existing code continues to work
5. **Future Proof**: Clear migration path for better patterns

## Breaking Changes Assessment

**Solution 1**: No breaking changes (fully backward compatible)
**Solution 2**: No breaking changes (opt-in behavior)
**Solution 3**: Breaking change (requires code updates)

## Conclusion

**Recommendation**: Implement Solution 1 (Split Return Object) as it provides the best balance of:
- Developer experience improvement
- Backward compatibility
- Clear migration path
- Type safety enhancements

This approach allows teams to gradually migrate to the cleaner API while maintaining all existing functionality.