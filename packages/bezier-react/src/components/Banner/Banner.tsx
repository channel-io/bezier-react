'use client'

import { forwardRef } from 'react'

import { isBezierIcon } from '@channel.io/bezier-icons'
import classNames from 'classnames'

import { warn } from '~/src/utils/assert'
import { isNil } from '~/src/utils/type'

import { Button } from '~/src/components/Button'
import { Icon } from '~/src/components/Icon'
import { LegacyIcon, isIconName } from '~/src/components/LegacyIcon'
import { Text } from '~/src/components/Text'

import {
  type BannerProps,
  type BannerVariant,
  type RenderLinkFunc,
} from './Banner.types'

import styles from './Banner.module.scss'

const BANNER_TEST_ID = 'bezier-banner'

function getActionButtonColorVariant(variant: BannerVariant) {
  return (
    {
      default: 'monochrome-dark',
      blue: 'blue',
      cobalt: 'cobalt',
      green: 'green',
      orange: 'orange',
      red: 'red',
      alt: 'monochrome-dark',
    } as const
  )[variant]
}

const externalLinkRenderer: RenderLinkFunc = ({ content, linkTo }) => (
  <a
    href={linkTo}
    target="_blank"
    rel="noopener noreferrer"
  >
    {content}
  </a>
)

/**
 * `Banner` is a component you use when you want to communicate instructions, warnings, recommendations, and other information well.
 * @example
 * ```tsx
 * <Banner
 *   variant="blue"
 *   icon={LightbulbIcon}
 *   content="Information here."
 * />
 * ```
 */
export const Banner = forwardRef<HTMLDivElement, BannerProps>(function Banner(
  {
    className,
    variant = 'default',
    icon,
    iconColor,
    content,
    hasLink = false,
    linkText,
    linkTo,
    renderLink = externalLinkRenderer,
    actionIcon,
    onClickAction,
    ...rest
  },
  forwardedRef
) {
  if (isIconName(icon)) {
    warn(
      'Deprecation: IconName as a value for the icon property of Banner has been deprecated. Use the Icon of bezier-icons instead.'
    )
  }

  return (
    <div
      ref={forwardedRef}
      className={classNames(
        styles.Banner,
        styles[`variant-${variant}`],
        className
      )}
      data-testid={BANNER_TEST_ID}
      {...rest}
    >
      {!isNil(icon) && (
        <div className={styles.Center}>
          {isBezierIcon(icon) ? (
            <Icon
              className={classNames({
                [styles.Icon]: !iconColor,
              })}
              source={icon}
              color={iconColor}
              size="s"
            />
          ) : (
            <LegacyIcon
              className={classNames({
                [styles.Icon]: !iconColor,
              })}
              name={icon}
              color={iconColor}
              size="s"
            />
          )}
        </div>
      )}

      <div className={styles.Content}>
        <Text typo="14">
          {content}

          {hasLink &&
            renderLink({
              content: (
                <Text
                  className={styles.Link}
                  typo="14"
                  bold
                >
                  {linkText}
                </Text>
              ),
              linkTo,
            })}
        </Text>
      </div>

      {!isNil(actionIcon) && (
        <div className={styles.Center}>
          <Button
            size="xs"
            colorVariant={getActionButtonColorVariant(variant)}
            styleVariant="tertiary"
            leftContent={actionIcon}
            onClick={onClickAction}
          />
        </div>
      )}
    </div>
  )
})
