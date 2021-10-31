/* External dependencies */
import React, { forwardRef } from 'react'
import { isNil } from 'lodash-es'

/* Internal dependencies */
import { Typography } from '../../foundation'
import {
  Icon,
  IconSize,
} from '../Icon'
import {
  DEFAULT_ICON_COLORS,
  TEXT_COLORS,
} from './Banner.const'
import {
  BannerColorVariant,
  BannerProps,
} from './Banner.types'
import Styled from './Banner.styled'

const BANNER_TEST_ID = 'bezier-react-banner'
export const BANNER_LINK_TEST_ID = 'bezier-react-banner-link'
export const BANNER_DISMISS_TEST_ID = 'bezier-react-banner-dismiss'

function Link({
  colorVariant = BannerColorVariant.Default,
  hasLink = false,
  linkText,
  linkTo,
}: BannerProps) {
  if (!hasLink) { return null }

  return (
    <a
      href={linkTo}
      target="_blank"
      rel="noopener noreferrer"
      data-testid={BANNER_LINK_TEST_ID}
    >
      <Styled.Link
        color={TEXT_COLORS[colorVariant]}
        bold
      >
        { linkText }
      </Styled.Link>
    </a>
  )
}

function DismissButton({
  colorVariant = BannerColorVariant.Default,
  dismissible,
  onDismiss,
}: BannerProps) {
  if (!dismissible) { return null }

  return (
    <Styled.Dismiss
      data-testid={BANNER_DISMISS_TEST_ID}
      onClick={onDismiss}
    >
      <Icon
        name="cancel"
        size={IconSize.XS}
        color={DEFAULT_ICON_COLORS[colorVariant]}
        onClick={onDismiss}
      />
    </Styled.Dismiss>
  )
}

function Banner(
  props: BannerProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  const {
    className,
    interpolation,
    colorVariant = BannerColorVariant.Default,
    icon,
    iconColor,
    text,
    testId = BANNER_TEST_ID,
  } = props

  return (
    <Styled.Wrapper
      ref={forwardedRef}
      data-testid={testId}
      className={className}
      colorVariant={colorVariant}
      interpolation={interpolation}
    >
      { !isNil(icon) && (
        <Styled.BannerIcon
          name={icon}
          color={iconColor ?? DEFAULT_ICON_COLORS[colorVariant]}
          size={IconSize.S}
        />
      ) }

      <Styled.Content
        typo={Typography.Size14}
        color={TEXT_COLORS[colorVariant]}
      >
        { text }
        <Link {...props} />
      </Styled.Content>

      <DismissButton {...props} />
    </Styled.Wrapper>
  )
}

export default forwardRef(Banner)
