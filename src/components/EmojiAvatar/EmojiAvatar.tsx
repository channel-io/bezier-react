/* External dependencies */
import React, {
  useCallback,
  useMemo,
} from 'react'
import { isEmpty, isNil } from 'lodash-es'

/* Internal dependencies */
import { Status } from 'Components/Status'
import EmojiAvatarProps, { EmojiAvatarSize } from './EmojiAvatar.types'
import {
  StatusWrapper,
  Wrapper,
  EmojiIcon,
} from './EmojiAvatar.styled'

export const EMOJI_AVATAR_TEST_ID = 'bezier-react-emoji-avatar'

function EmojiAvatar({
  as,
  style,
  emojiUrl,
  className,
  interpolation,
  status,
  size = EmojiAvatarSize.Size24,
  testId = EMOJI_AVATAR_TEST_ID,
  onClick,
  children,
}: EmojiAvatarProps) {
  const handleClickIcon = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (!isNil(onClick)) {
      onClick(event)
    }
  }, [onClick])

  const StatusElement = useMemo(() => {
    if (
      (isEmpty(children) && !status)
      || (children && !React.isValidElement(children))
    ) {
      return null
    }

    const Contents = (() => {
      if (children) { return children }
      if (status) {
        return (
          <Status type={status} />
        )
      }
      return null
    })()

    return (
      <StatusWrapper>
        { Contents }
      </StatusWrapper>
    )
  }, [
    status,
    children,
  ])

  return (
    <Wrapper
      as={as}
      data-testid={testId}
      onClick={handleClickIcon}
    >
      <EmojiIcon
        role="img"
        style={style}
        imageUrl={emojiUrl}
        size={size}
        className={className}
        interpolation={interpolation}
        unClickable={isNil(onClick)}
      >
        { StatusElement }
      </EmojiIcon>
    </Wrapper>
  )
}

export default EmojiAvatar
