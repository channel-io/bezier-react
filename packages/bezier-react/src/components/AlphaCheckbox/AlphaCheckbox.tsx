/* External dependencies */
import React, { forwardRef } from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

/* Internal dependencies */
import useId from 'Hooks/useId'
import { ariaAttr } from 'Utils/domUtils'
import { IconSize, CheckBoldIcon, HyphenBoldIcon } from 'Components/Icon'
import { FormFieldSize } from 'Components/Forms'
import useFormFieldProps from 'Components/Forms/useFormFieldProps'
import { CheckboxProps } from './AlphaCheckbox.types'
import * as Styled from './AlphaCheckbox.styled'

/* NOTE: Props are injected at runtime by `CheckboxPrimitive.Indicator`. */
function CheckIcon(props: {
  style?: React.CSSProperties
  'data-state'?: 'checked' | 'unchecked' | 'indeterminate'
  'data-disabled'?: boolean | undefined
}) {
  // eslint-disable-next-line react/destructuring-assignment
  const state = props['data-state']
  const isUnchecked = state === 'unchecked'
  const isIndeterminate = state === 'indeterminate'

  return (
    <Styled.CheckIcon
      source={!isIndeterminate ? CheckBoldIcon : HyphenBoldIcon}
      size={IconSize.XS}
      color={isUnchecked ? 'bg-black-dark' : 'bgtxt-absolute-white-dark'}
      {...props}
    />
  )
}

export const AlphaCheckbox = forwardRef<HTMLButtonElement, CheckboxProps>(function Checkbox({
  children,
  checked,
  id: idProp,
  ...rest
}, forwardedRef) {
  const id = useId(idProp, 'bezier-checkbox')
  const formFieldProps = useFormFieldProps(rest)

  const containerStyle = {
    '--bezier-checkbox-height': children ? `${FormFieldSize.M}px` : 'auto',
  } as React.CSSProperties

  return (
    <Styled.Container
      style={containerStyle}
      data-disabled={ariaAttr(formFieldProps.disabled)}
    >
      <Styled.CheckboxPrimitiveRoot
        ref={forwardedRef}
        id={id}
        checked={checked}
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
