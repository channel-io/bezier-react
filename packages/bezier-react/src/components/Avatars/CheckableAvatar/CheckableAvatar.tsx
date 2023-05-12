import React, { forwardRef } from 'react'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

import useId from '~/src/hooks/useId'

import { AvatarSize } from '~/src/components/Avatars/Avatar'
import { VisuallyHidden } from '~/src/components/VisuallyHidden'

import type { CheckableAvatarProps } from './CheckableAvatar.types'

import * as Styled from './CheckableAvatar.styled'

/**
 * `CheckableAvatar` is a checkbox component that looks like `Avatar`.
 *
 * @example
 *
 * ```tsx
 * const [checked, setChecked] = useState(false)
 * // Controlled
 * <CheckableAvatar
 *   name="John Doe"
 *   avatarUrl="..."
 *   checked={checked}
 *   onCheckedChange={setChecked}
 * />
 * // Uncontrolled
 * <CheckableAvatar
 *   name="John Doe"
 *   avatarUrl="..."
 *   defaultChecked
 * />
 * ```
 */
export const CheckableAvatar = forwardRef<HTMLButtonElement, CheckableAvatarProps>(function CheckableAvatar({
  children,
  id: idProp,
  name,
  size = AvatarSize.Size24,
  disabled,
  avatarUrl,
  fallbackUrl,
  status,
  showBorder,
  ...props
}, forwardedRef) {
  const id = useId(idProp, 'bezier-checkable-avatar')

  return (
    <Styled.CheckboxPrimitiveRoot
      ref={forwardedRef}
      id={id}
      name={name}
      disabled={disabled}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        asChild
        forceMount
      >
        <Styled.CheckIcon className={`size-${size}`} />
      </CheckboxPrimitive.Indicator>

      <Styled.Avatar
        aria-hidden
        size={size}
        name={name}
        disabled={disabled}
        avatarUrl={avatarUrl}
        fallbackUrl={fallbackUrl}
        status={status}
        showBorder={showBorder}
      >
        { children }
      </Styled.Avatar>

      <VisuallyHidden>
        <label htmlFor={id}>{ name }</label>
      </VisuallyHidden>
    </Styled.CheckboxPrimitiveRoot>
  )
})
