/* External dependencies */
import React from 'react'

/* Internal denpendencies */
import { Avatar, AvatarProps } from '../Avatar'
import { CheckableAvatarWrapper, CheckIcon } from './CheckableAvatar.styled'

export const CHECKABLE_AVATAR_TEST_ID = 'ch-design-system-checkable-avatar'

interface CheckableAvatarProps extends AvatarProps {
  isChecked: boolean
  isCheckable: boolean
}

function CheckableAvatar({
  isChecked = false,
  isCheckable = true,
  children,
  ...props
}: CheckableAvatarProps) {
  return (
    <CheckableAvatarWrapper
      data-testid={CHECKABLE_AVATAR_TEST_ID}
      isChecked={isChecked}
      isCheckable={isCheckable}
    >
      <CheckIcon
        name="check"
        color="bg-white-absolute"
      />
      <Avatar
        {...props}
      >
        { children }
      </Avatar>
    </CheckableAvatarWrapper>
  )
}

export default CheckableAvatar
