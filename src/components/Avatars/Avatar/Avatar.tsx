/* External dependencies */
import React, { forwardRef, useMemo } from 'react'
import { noop, isEmpty } from 'lodash-es'

/* Internal denpendencies */
import DefaultAvatarSvg from '../assets/DefaultAvatar'
import { svgToDataUrl } from '../../../utils/svgUtils'
import { Status } from '../../Status'
import { StyledAvatar, AvatarWrapper, StatusWrapper } from './Avatar.styled'
import { AvatarSize, AvatarProps } from './Avatar.types'

export const AVATAR_TEST_ID = 'ch-design-system-avatar'

const defaultAvatarUrl = svgToDataUrl(<DefaultAvatarSvg />)

function Avatar({
  avatarUrl,
  size = AvatarSize.XS,
  name = '',
  testId = AVATAR_TEST_ID,
  disabled = false,
  showBorder = false,
  status,
  onClick = noop,
  onMouseEnter = noop,
  onMouseLeave = noop,
  children,
}: AvatarProps,
forwardedRef: React.Ref<HTMLDivElement>,
) {
  const StatusComponent = useMemo(() => {
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
      <StatusWrapper
        showBorder={showBorder}
      >
        { Contents }
      </StatusWrapper>
    )
  }, [
    status,
    showBorder,
    children,
  ])

  return (
    <AvatarWrapper
      disabled={disabled}
    >
      <StyledAvatar
        ref={forwardedRef}
        data-testid={testId}
        avatarUrl={avatarUrl}
        fallbackUrl={defaultAvatarUrl}
        size={size}
        role="img"
        aria-label={name}
        showBorder={showBorder}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        { StatusComponent }
      </StyledAvatar>
    </AvatarWrapper>
  )
}

export default forwardRef(Avatar)
