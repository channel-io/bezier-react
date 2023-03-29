/* External dependencies */
import React, { forwardRef } from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

/* Internal dependencies */
import useId from '~/src/hooks/useId'
import {
  IconSize,
  CheckBoldIcon,
  HyphenBoldIcon,
} from '~/src/components/Icon'
import { FormFieldSize } from '~/src/components/Forms'
import useFormFieldProps from '~/src/components/Forms/useFormFieldProps'
import {
  type CheckboxProps,
  type CheckedState,
} from './Checkbox.types'
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

function CheckboxImpl<Checked extends CheckedState>({
  children,
  checked,
  id: idProp,
  ...rest
}: CheckboxProps<Checked>, forwardedRef: React.Ref<HTMLButtonElement>) {
  const {
    id: formFieldId,
    hasError,
    ...formFieldProps
  } = useFormFieldProps(rest)

  const id = useId(idProp ?? formFieldId, 'bezier-checkbox')

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
}

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
export const Checkbox = forwardRef(CheckboxImpl) as <Checked extends CheckedState>(
  props: CheckboxProps<Checked> & { ref?: React.ForwardedRef<HTMLButtonElement> }
) => ReturnType<typeof CheckboxImpl<Checked>>
