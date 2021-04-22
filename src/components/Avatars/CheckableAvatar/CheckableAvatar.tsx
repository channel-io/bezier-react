/* External dependencies */
import React from 'react'

/* Internal denpendencies */
import { Avatar } from '../Avatar'
import { CheckableAvatarProps } from './CheckableAvatar.types'
import { CheckableAvatarWrapper, CheckIcon } from './CheckableAvatar.styled'

export const CHECKABLE_AVATAR_TEST_ID = 'ch-design-system-checkable-avatar'

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
        color="bgtxt-absolute-white-normal"
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
