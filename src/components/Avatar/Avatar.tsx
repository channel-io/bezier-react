/* External dependencies */
import React from 'react'
import _ from 'lodash'

/* Internal denpendencies */
import AvatarProps, { AvatarSize } from './Avatar.types'
import StyledAvatar from './Avatar.styled'

export const AVATAR_TEST_ID = 'ch-design-system-avatar'

function Avatar({
  src,
  alt = '',
  testId = AVATAR_TEST_ID,
  size = AvatarSize.L,
  onClick = _.noop,
  onMouseEnter = _.noop,
  onMouseLeave = _.noop,
}: AvatarProps) {
  return (
    <StyledAvatar
      data-testid={testId}
      size={size}
      src={src}
      role="img"
      aria-label={alt}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  )
}

export default Avatar
