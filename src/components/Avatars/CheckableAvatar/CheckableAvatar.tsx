/* External dependencies */
import React from 'react'

/* Internal denpendencies */
import { Avatar } from '../Avatar'
import CheckableAvatarProps from './CheckableAvatar.types'
import { CheckableAvatarWrapper, CheckIcon, getAvatarImageStyle } from './CheckableAvatar.styled'

// TODO: 테스트 코드 작성
const CHECKABLE_AVATAR_TEST_ID = 'bezier-react-checkable-avatar'

function CheckableAvatar({
  isChecked = false,
  isCheckable = true,
  checkedBackgroundColor = 'bgtxt-green-dark',
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
        color="bgtxt-absolute-white-normal"
      />
      <Avatar
        {...props}
        interpolation={getAvatarImageStyle(isChecked, isCheckable, checkedBackgroundColor, interpolation)}
      >
        { children }
      </Avatar>
    </CheckableAvatarWrapper>
  )
}

export default CheckableAvatar
