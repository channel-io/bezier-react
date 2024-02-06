import React, { forwardRef } from 'react'

import { CheckIcon } from '@channel.io/bezier-icons'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import classNames from 'classnames'

import useId from '~/src/hooks/useId'

import {
  Avatar,
  AvatarSize,
} from '~/src/components/Avatar'
import { Icon } from '~/src/components/Icon'
import { UnstyledButton } from '~/src/components/UnstyledButton'
import { VisuallyHidden } from '~/src/components/VisuallyHidden'

import type { CheckableAvatarProps } from './CheckableAvatar.types'

import styles from './CheckableAvatar.module.scss'

/**
 * `CheckableAvatar` is a checkbox component that looks like `Avatar`.
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
  className,
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
    <CheckboxPrimitive.Root
      asChild
      className={classNames(
        styles.Checkbox,
        className,
      )}
      ref={forwardedRef}
      id={id}
      name={name}
      disabled={disabled}
      {...props}
    >
      <UnstyledButton>
        <CheckboxPrimitive.Indicator
          asChild
          forceMount
        >
          <Icon
            className={classNames(
              styles.CheckIcon,
              styles[`size-${size}`],
            )}
            source={CheckIcon}
            color="bgtxt-absolute-white-normal"
          />
        </CheckboxPrimitive.Indicator>

        <Avatar
          className={styles.Avatar}
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
        </Avatar>

        <VisuallyHidden>
          <label htmlFor={id}>{ name }</label>
        </VisuallyHidden>
      </UnstyledButton>
    </CheckboxPrimitive.Root>
  )
})
