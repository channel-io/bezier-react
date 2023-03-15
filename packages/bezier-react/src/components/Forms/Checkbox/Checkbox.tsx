/* External dependencies */
import React, { forwardRef } from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

/* Internal dependencies */
import useId from 'Hooks/useId'
import { IconSize, CheckBoldIcon, HyphenBoldIcon } from 'Components/Icon'
import { FormFieldSize } from 'Components/Forms'
import useFormFieldProps from 'Components/Forms/useFormFieldProps'
import { CheckboxProps } from './Checkbox.types'
import * as Styled from './Checkbox.styled'

type CheckIconProps = {} | {
  style: React.CSSProperties
  'data-state': 'checked' | 'unchecked' | 'indeterminate'
  'data-disabled': boolean | undefined
}

/* NOTE: Props are injected at runtime by `CheckboxPrimitive.Indicator`. */
const CheckIcon = forwardRef<SVGSVGElement, CheckIconProps>(function CheckIcon(
  props,
  forwardedRef,
) {
  // eslint-disable-next-line react/destructuring-assignment
  const state = props['data-state']
  const isUnchecked = state === 'unchecked'
  const isIndeterminate = state === 'indeterminate'

  return (
    <Styled.CheckIcon
      ref={forwardedRef}
      source={!isIndeterminate ? CheckBoldIcon : HyphenBoldIcon}
      size={IconSize.XS}
      color={isUnchecked ? 'bg-black-dark' : 'bgtxt-absolute-white-dark'}
      {...props}
    />
  )
})

/**
 * `Checkbox` is a control that allows the user to toggle between checked and not checked.
 * It can be used with labels or standalone.
 *
 * @example
 *
 * ```tsx
 * const [checked, setChecked] = useState(false)
 * // Controlled / With label
 * <Checkbox
 *   checked={checked}
 *   onCheckedChange={setChecked}
 * >
 *   Label
 * </Checkbox>
 * // Controlled / Standalone
 * <Checkbox
 *   checked={checked}
 *   onCheckedChange={setChecked}
 * />
 * // Uncontrolled
 * <Checkbox
 *   defaultChecked={true}
 * >
 *   Label
 * </Checkbox>
 * ```
 */
export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(function Checkbox({
  children,
  checked,
  id: idProp,
  ...rest
}, forwardedRef) {
  const id = useId(idProp, 'bezier-checkbox')
  const {
    hasError,
    ...formFieldProps
  } = useFormFieldProps(rest)

  const containerStyle = {
    '--bezier-checkbox-height': children ? `${FormFieldSize.M}px` : 'auto',
  } as React.CSSProperties

  return (
    <Styled.Container
      style={containerStyle}
      data-disabled={formFieldProps['aria-disabled']}
    >
      <Styled.CheckboxPrimitiveRoot
        ref={forwardedRef}
        id={id}
        checked={checked}
        data-invalid={formFieldProps['aria-invalid']}
        {...formFieldProps}
      >
        <CheckboxPrimitive.Indicator
          asChild
          /* NOTE: To allow the icon to be rendered even if unchecked. */
          forceMount
        >
          <CheckIcon />
        </CheckboxPrimitive.Indicator>
      </Styled.CheckboxPrimitiveRoot>
      { children && (
        <Styled.Label htmlFor={id}>
          { children }
        </Styled.Label>
      ) }
    </Styled.Container>
  )
})
