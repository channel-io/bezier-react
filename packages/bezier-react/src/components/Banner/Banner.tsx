/* External dependencies */
import React, { forwardRef } from 'react'

/* Internal dependencies */
import { Typography } from '~/src/foundation'
import {
  isNil,
  isString,
} from '~/src/utils/typeUtils'
import { Text } from '~/src/components/Text'
import { IconSize } from '~/src/components/Icon'
import { StackItem } from '~/src/components/Stack'
import {
  Button,
  ButtonSize,
  ButtonStyleVariant,
} from '~/src/components/Button'
import Styled from './Banner.styled'
import {
  BannerVariant,
  type BannerProps,
  type RenderLinkFunc,
} from './Banner.types'
import {
  DEFAULT_ICON_COLORS,
  TEXT_COLORS,
  ACTION_BUTTON_COLOR_VARIANTS,
} from './Banner.const'

const BANNER_TEST_ID = 'bezier-react-banner'
export const BANNER_LINK_TEST_ID = 'bezier-react-banner-link'

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

export const Banner = forwardRef(function Banner(
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
    actionIcon,
    onClickAction,
    testId = BANNER_TEST_ID,
  } = props

  return (
    <Styled.Stack
      ref={forwardedRef}
      data-testid={testId}
      className={className}
      interpolation={interpolation}
      variant={variant}
      spacing={6}
      align="start"
    >
      { !isNil(icon) && (
        <Styled.StackItem>
          <Styled.BannerIcon
            name={icon}
            color={iconColor ?? DEFAULT_ICON_COLORS[variant]}
            size={IconSize.S}
          />
        </Styled.StackItem>
      ) }

      <StackItem
        grow
        shrink
        weight={1}
        align="center"
      >
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
      </StackItem>

      { !isNil(actionIcon) && (
        <Styled.StackItem>
          <Button
            size={ButtonSize.XS}
            colorVariant={ACTION_BUTTON_COLOR_VARIANTS[variant]}
            styleVariant={ButtonStyleVariant.Tertiary}
            leftContent={actionIcon}
            onClick={onClickAction}
          />
        </Styled.StackItem>
      ) }
    </Styled.Stack>
  )
})
