import type React from 'react'

import type { AvatarProps } from '~/src/components/Avatars/Avatar'

interface CheckableAvatarPropsOptions {
  /**
   * The controlled checked state of the checkbox.
   * Must be used in conjunction with `onCheckedChange`.
   */
  checked?: boolean
  /**
   * The checked state of the checkbox when it is initially rendered.
   * Use when you do not need to control its checked state.
   */
  defaultChecked?: boolean
  /**
   * The unique id of the checkbox. It is created automatically by default.
   * It used by the label element in the checkbox.
   */
  id?: string
  /**
   * The value given as data when submitted with a name.
   * @default 'on'
   */
  value?: string
  /**
   * Event handler called when the checked state of the checkbox changes.
   */
  onCheckedChange?: (checked: boolean) => void
}

export interface CheckableAvatarProps extends
  Omit<AvatarProps, 'as' | keyof React.HTMLAttributes<HTMLDivElement>>,
  React.HTMLAttributes<HTMLButtonElement>,
  CheckableAvatarPropsOptions {}
