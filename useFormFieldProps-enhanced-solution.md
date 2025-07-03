# Enhanced Solution: HTML Attribute Validation for `useFormFieldProps`

## Extended Problem Analysis

### Current HTML Attribute Validity Issues

After analyzing the codebase, various attributes from `useFormFieldProps` can be invalid depending on the target HTML element:

| Component | HTML Element | `disabled` | `readOnly` | `size` | `required` |
|-----------|-------------|------------|------------|--------|------------|
| TextField | `<input>` | ✅ | ✅ | ✅ | ✅ |
| TextArea | `<textarea>` | ✅ | ✅ | ❌ | ✅ |
| Switch | `<button>` | ✅ | ❌ | ❌ | ❌ |
| Select | `<button>` | ✅ | ❌ | ❌ | ❌ |
| Checkbox | `<button>` | ✅ | ❌ | ❌ | ❌ |
| RadioGroup | `<div>` | ❌ | ❌ | ❌ | ❌ |
| SegmentedControl | `<div>` | ❌ | ❌ | ❌ | ❌ |

### Current Inconsistent Handling
```tsx
// TextArea - manually excludes hasError but includes invalid size
const { disabled, readOnly, hasError, ...ownProps } = useFormFieldProps(rest)
return <TextareaAutosize {...ownProps} disabled={disabled} readOnly={readOnly} />

// Switch - manually excludes hasError, readOnly but may include invalid attributes
const { disabled, required, hasError, ...ownProps } = useFormFieldProps(rest)
return <SwitchPrimitive.Root disabled={disabled} required={required} {...ownProps} />

// RadioGroup - manually excludes hasError but may pass invalid attributes to div
const { hasError, ...formFieldProps } = useFormFieldProps(rest)
return <Stack {...formFieldProps}> // div element gets form attributes!
```

## Enhanced Solutions

### Solution 1: Element-Specific Props (Recommended)

Create element-specific prop getters that only return valid attributes:

```tsx
// Enhanced hook with element-specific filtering
export function useFormFieldProps<Props extends FormFieldProps & SizeProps<FormFieldSize>>(
  props?: Props
) {
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

    // Base ARIA attributes (valid for all elements)
    const ariaProps = {
      'aria-disabled': ariaAttr(disabled),
      'aria-invalid': ariaAttr(hasError),
      'aria-required': ariaAttr(required),
      'aria-readonly': ariaAttr(readOnly),
    }

    return {
      // All props for backward compatibility
      ...rest,
      ...ariaProps,
      size,
      disabled,
      hasError,
      required,
      readOnly,

      // Element-specific prop getters
      getInputProps: () => ({
        ...rest,
        ...ariaProps,
        size,
        disabled,
        required,
        readOnly,
      }),

      getTextAreaProps: () => ({
        ...rest,
        ...ariaProps,
        disabled,
        required,
        readOnly,
        // size is invalid for textarea
      }),

      getButtonProps: () => ({
        ...rest,
        ...ariaProps,
        disabled,
        // readOnly, size, required are invalid for button
      }),

      getDivProps: () => ({
        ...rest,
        ...ariaProps,
        // disabled, readOnly, size, required are invalid for div
      }),

      // State values (not for DOM)
      state: {
        hasError,
        disabled,
        readOnly,
        required,
        size,
      }
    }
  }, [props, contextValue])

  return formFieldProps
}
```

**Usage:**
```tsx
// TextField
const { getInputProps, state } = useFormFieldProps(rest)
return <input {...getInputProps()} />

// TextArea  
const { getTextAreaProps, state } = useFormFieldProps(rest)
return <textarea {...getTextAreaProps()} />

// Switch
const { getButtonProps, state } = useFormFieldProps(rest)
return <button {...getButtonProps()} />

// RadioGroup
const { getDivProps, state } = useFormFieldProps(rest)
return <div {...getDivProps()}> // Only gets ARIA attributes
```

### Solution 2: Element Type Parameter

Use TypeScript to enforce element-specific prop filtering:

```tsx
type ElementType = 'input' | 'textarea' | 'button' | 'div' | 'select'

export function useFormFieldProps<
  Props extends FormFieldProps & SizeProps<FormFieldSize>,
  Element extends ElementType = 'input'
>(
  props?: Props,
  elementType?: Element
) {
  // ... existing logic ...

  const validAttributes = useMemo(() => {
    const baseProps = {
      ...rest,
      'aria-disabled': ariaAttr(disabled),
      'aria-invalid': ariaAttr(hasError),
      'aria-required': ariaAttr(required),
      'aria-readonly': ariaAttr(readOnly),
    }

    switch (elementType) {
      case 'input':
        return { ...baseProps, size, disabled, required, readOnly }
      case 'textarea':
        return { ...baseProps, disabled, required, readOnly }
      case 'button':
        return { ...baseProps, disabled }
      case 'select':
        return { ...baseProps, size, disabled, required }
      case 'div':
      default:
        return baseProps
    }
  }, [elementType, rest, disabled, readOnly, required, hasError, size])

  return {
    ...validAttributes,
    // State values
    hasError,
    disabled,
    readOnly,
    required,
    size,
  }
}
```

**Usage:**
```tsx
// TextField
const { hasError, ...inputProps } = useFormFieldProps(rest, 'input')
return <input {...inputProps} />

// Switch
const { hasError, readOnly, required, size, ...buttonProps } = useFormFieldProps(rest, 'button')
return <button {...buttonProps} />
```

### Solution 3: Utility-Based Filtering

Create utility functions for filtering props:

```tsx
// Utility functions
export const filterValidProps = {
  forInput: (props: Record<string, any>) => {
    const { hasError, ...validProps } = props
    return validProps // input accepts all form attributes
  },

  forTextArea: (props: Record<string, any>) => {
    const { hasError, size, ...validProps } = props
    return validProps
  },

  forButton: (props: Record<string, any>) => {
    const { hasError, readOnly, required, size, ...validProps } = props
    return validProps
  },

  forDiv: (props: Record<string, any>) => {
    const { hasError, disabled, readOnly, required, size, ...validProps } = props
    return validProps
  }
}

// Enhanced useFormFieldProps remains the same
export function useFormFieldProps<Props extends FormFieldProps & SizeProps<FormFieldSize>>(
  props?: Props
) {
  // ... existing implementation ...
  return {
    ...formFieldProps,
    // Add filter utilities
    filterFor: filterValidProps,
  }
}
```

**Usage:**
```tsx
// TextField
const formProps = useFormFieldProps(rest)
return <input {...formProps.filterFor.forInput(formProps)} />

// Switch
const formProps = useFormFieldProps(rest)
return <button {...formProps.filterFor.forButton(formProps)} />
```

## Implementation Recommendation

### Phase 1: Implement Solution 1 (Element-Specific Props)
- **Pros**: 
  - Clear, explicit API
  - Type-safe element-specific props
  - Backward compatible
  - No runtime errors from invalid attributes
- **Cons**: 
  - Slightly more verbose API
  - Need to choose the right getter

### Phase 2: Component Migration Strategy

```tsx
// Before
const { hasError, ...ownProps } = useFormFieldProps(rest)
return <button {...ownProps} /> // May include invalid attributes

// After
const { getButtonProps, state } = useFormFieldProps(rest)
return <button {...getButtonProps()} />
// or use state.hasError for styling logic
```

### Phase 3: Add Developer Warnings

```tsx
// Add development-only warnings for invalid attribute usage
if (process.env.NODE_ENV === 'development') {
  if (elementType === 'button' && (readOnly || size || required)) {
    console.warn('Invalid attributes for button element: readOnly, size, required')
  }
}
```

## Benefits of Enhanced Solution

1. **HTML Compliance**: No invalid attributes on DOM elements
2. **Type Safety**: TypeScript prevents invalid attribute usage
3. **Developer Experience**: Clear, element-specific APIs
4. **Performance**: No unnecessary attribute processing
5. **Accessibility**: ARIA attributes remain consistent across all elements
6. **Maintainability**: Clear separation of concerns between different element types

## Migration Impact Assessment

- **Low Risk**: All solutions maintain backward compatibility
- **Gradual Migration**: Can be adopted component by component
- **Developer Education**: Clear documentation on which getter to use for each element type
- **Runtime Safety**: Invalid attributes are filtered out automatically