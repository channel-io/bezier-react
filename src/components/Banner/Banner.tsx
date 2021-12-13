/* External dependencies */
import React, { forwardRef } from 'react'
import {
  isNil,
  isString,
} from 'lodash-es'

/* Internal dependencies */
import { Typography } from 'Foundation'
import { Text } from 'Components/Text'
import { Icon, IconSize } from 'Components/Icon'
import { DEFAULT_ICON_COLORS, TEXT_COLORS } from './Banner.const'
import { BannerVariant, BannerProps, RenderLinkFunc } from './Banner.types'
import Styled from './Banner.styled'

const BANNER_TEST_ID = 'bezier-react-banner'
export const BANNER_LINK_TEST_ID = 'bezier-react-banner-link'
export const BANNER_DISMISS_TEST_ID = 'bezier-react-banner-dismiss'

const externalLinkRenderer: RenderLinkFunc = ({
  content,
  linkTo,
}) => (
  <a
    href={linkTo}
    target="_blank"
    rel="noopener noreferrer"
    data-testid={BANNER_LINK_TEST_ID}
  >
    { content }
  </a>
)

function Link({
  variant = BannerVariant.Default,
  hasLink = false,
  linkText,
  linkTo,
  renderLink = externalLinkRenderer,
}: BannerProps) {
  if (!hasLink) { return null }

  return renderLink({
    content: (
      <Styled.Link
        typo={Typography.Size14}
        color={TEXT_COLORS[variant]}
        bold
      >
        { linkText }
      </Styled.Link>
    ),
    linkTo,
  })
}

function DismissButton({
  variant = BannerVariant.Default,
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
        color={DEFAULT_ICON_COLORS[variant]}
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
    variant = BannerVariant.Default,
    icon,
    iconColor,
    content,
    testId = BANNER_TEST_ID,
  } = props

  return (
    <Styled.Wrapper
      ref={forwardedRef}
      data-testid={testId}
      className={className}
      variant={variant}
      interpolation={interpolation}
    >
      { !isNil(icon) && (
        <Styled.BannerIcon
          name={icon}
          color={iconColor ?? DEFAULT_ICON_COLORS[variant]}
          size={IconSize.S}
        />
      ) }

      <Styled.ContentWrapper variant={variant}>
        { isString(content) ? (
          <Text
            typo={Typography.Size14}
            color={TEXT_COLORS[variant]}
          >
            { content }
            <Link {...props} />
          </Text>
        ) : content }
      </Styled.ContentWrapper>

      <DismissButton {...props} />
    </Styled.Wrapper>
  )
}

export default forwardRef(Banner)
