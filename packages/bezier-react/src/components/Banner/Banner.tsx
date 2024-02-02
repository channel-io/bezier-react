import React, { forwardRef } from 'react'

import { isBezierIcon } from '@channel.io/bezier-icons'
import classNames from 'classnames'

import { warn } from '~/src/utils/assert'
import {
  isNil,
  isString,
} from '~/src/utils/type'

import {
  Button,
  ButtonColorVariant,
  ButtonSize,
  ButtonStyleVariant,
} from '~/src/components/Button'
import {
  Icon,
  IconSize,
} from '~/src/components/Icon'
import {
  LegacyIcon,
  isIconName,
} from '~/src/components/LegacyIcon'
import { Text } from '~/src/components/Text'

import {
  type BannerProps,
  BannerVariant,
  type RenderLinkFunc,
} from './Banner.types'

import styles from './Banner.module.scss'

const BANNER_TEST_ID = 'bezier-react-banner'

function getActionButtonColorVariant(variant: BannerVariant) {
  return ({
    [BannerVariant.Default]: ButtonColorVariant.MonochromeDark,
    [BannerVariant.Blue]: ButtonColorVariant.Blue,
    [BannerVariant.Cobalt]: ButtonColorVariant.Cobalt,
    [BannerVariant.Green]: ButtonColorVariant.Green,
    [BannerVariant.Orange]: ButtonColorVariant.Orange,
    [BannerVariant.Red]: ButtonColorVariant.Red,
    [BannerVariant.Alt]: ButtonColorVariant.MonochromeDark,
  } as const)[variant]
}

const externalLinkRenderer: RenderLinkFunc = ({
  content,
  linkTo,
}) => (
  <a
    href={linkTo}
    target="_blank"
    rel="noopener noreferrer"
  >
    { content }
  </a>
)

/**
 * `Banner` is a component you use when you want to communicate instructions, warnings, recommendations, and other information well.
 * @example
 * ```tsx
 * <Banner
 *   variant={BannerVariant.Blue}
 *   icon={LightbulbIcon}
 *   content="Information here."
 * />
 * ```
 */
export const Banner = forwardRef<HTMLDivElement, BannerProps>(function Banner({
  className,
  variant = BannerVariant.Default,
  icon,
  iconColor,
  content,
  hasLink = false,
  linkText,
  linkTo,
  renderLink = externalLinkRenderer,
  actionIcon,
  onClickAction,
  testId = BANNER_TEST_ID,
  ...rest
}, forwardedRef) {
  if (isIconName(icon)) {
    warn('Deprecation: IconName as a value for the icon property of Banner has been deprecated. Use the Icon of bezier-icons instead.')
  }

  return (
    <div
      ref={forwardedRef}
      className={classNames(
        styles.Banner,
        styles[`variant-${variant}`],
        className,
      )}
      data-testid={testId}
      {...rest}
    >
      { !isNil(icon) && (
        <div className={styles.Center}>
          { isBezierIcon(icon) ? (
            <Icon
              className={styles.Icon}
              source={icon}
              color={iconColor}
              size={IconSize.S}
            />
          ) : (
            <LegacyIcon
              className={styles.Icon}
              name={icon}
              color={iconColor}
              size={IconSize.S}
            />
          ) }
        </div>
      ) }

      <div className={styles.Content}>
        { isString(content) ? (
          <Text typo="14">
            { content }

            { hasLink && (
              renderLink({
                content: (
                  <Text
                    className={styles.Link}
                    typo="14"
                    bold
                  >
                    { linkText }
                  </Text>
                ),
                linkTo,
              })
            ) }
          </Text>
        ) : content }
      </div>

      { !isNil(actionIcon) && (
        <div className={styles.Center}>
          <Button
            size={ButtonSize.XS}
            colorVariant={getActionButtonColorVariant(variant)}
            styleVariant={ButtonStyleVariant.Tertiary}
            leftContent={actionIcon}
            onClick={onClickAction}
          />
        </div>
      ) }
    </div>
  )
})
