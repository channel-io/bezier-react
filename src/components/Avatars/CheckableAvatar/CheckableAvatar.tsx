/* External dependencies */
import React from 'react'

/* Internal denpendencies */
import { Avatar, AvatarSize } from '../Avatar'
import CheckableAvatarProps from './CheckableAvatar.types'
import { CheckableAvatarWrapper, CheckIcon, getAvatarImageStyle } from './CheckableAvatar.styled'

// TODO: 테스트 코드 작성
const CHECKABLE_AVATAR_TEST_ID = 'bezier-react-checkable-avatar'

function CheckableAvatar({
  size = AvatarSize.Size24,
  isChecked = false,
  isCheckable = true,
  checkedBackgroundColor = 'bgtxt-green-normal',
  checkableWrapperClassName,
  checkableWrapperInterpolation,
  interpolation,
  children,
  ...props
}: CheckableAvatarProps) {
  return (
    <CheckableAvatarWrapper
      data-testid={CHECKABLE_AVATAR_TEST_ID}
      isChecked={isChecked}
      isCheckable={isCheckable}
      className={checkableWrapperClassName}
      interpolation={checkableWrapperInterpolation}
    >
      <CheckIcon
        name="check"
        avatarSize={size}
        color="bgtxt-absolute-white-normal"
      />
      <Avatar
        {...props}
        size={size}
        interpolation={getAvatarImageStyle(isChecked, isCheckable, checkedBackgroundColor, interpolation)}
      >
        { children }
      </Avatar>
    </CheckableAvatarWrapper>
  )
}

export default CheckableAvatar
