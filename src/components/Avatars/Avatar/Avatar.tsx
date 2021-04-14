/* External dependencies */
import React, { forwardRef, useMemo } from 'react'
import { noop, isEmpty } from 'lodash-es'

/* Internal denpendencies */
import useProgressiveImage from '../../../hooks/useProgressiveImage'
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
  const loadedAvatarUrl = useProgressiveImage(avatarUrl)

  const StatusComponent = useMemo(() => {
    if (
      disabled
      || (isEmpty(children) && !status)
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
    disabled,
    children,
  ])

  return (
    <AvatarWrapper>
      <StyledAvatar
        ref={forwardedRef}
        data-testid={testId}
        avatarUrl={loadedAvatarUrl || defaultAvatarUrl}
        size={size}
        role="img"
        aria-label={name}
        showBorder={!disabled && showBorder}
        disabled={disabled}
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
