/* External dependencies */
import React from 'react'
import _ from 'lodash'

/* Internal denpendencies */
import AvatarProps, { AvatarSize } from './Avatar.types'
import { AvatarWrapper, AvatarImage } from './Avatar.styled'

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
    <AvatarWrapper
      data-testid={testId}
      size={size}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <AvatarImage
        src={src}
        alt={alt}
      />
    </AvatarWrapper>
  )
}

export default Avatar
