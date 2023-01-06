/* External dependencies */
import React from 'react'

/* Internal denpendencies */
import { Avatar, AvatarSize } from '~/src/components/Avatars/Avatar'
import CheckableAvatarProps from './CheckableAvatar.types'
import { CheckableAvatarWrapper, CheckIcon, getAvatarImageStyle } from './CheckableAvatar.styled'

// TODO: 테스트 코드 작성
const CHECKABLE_AVATAR_TEST_ID = 'bezier-react-checkable-avatar'

const CHECKED_DEFAULT_SEMANTIC_COLOR = 'bgtxt-green-normal'

export function CheckableAvatar({
  size = AvatarSize.Size24,
  isChecked = false,
  isCheckable = true,
  checkedBackgroundColor = CHECKED_DEFAULT_SEMANTIC_COLOR,
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
