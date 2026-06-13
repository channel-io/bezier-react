'use client'

import { type CSSProperties, forwardRef } from 'react'

import classNames from 'classnames'

import { Icon } from '~/src/v3/Icon'
import { IconButton } from '~/src/v3/IconButton'
import { Text } from '~/src/v3/Text'

import {
  type BannerProps,
  type RenderLinkFunc,
} from './Banner.types'

import styles from './Banner.module.scss'

const externalLinkRenderer: RenderLinkFunc = ({ content, linkTo }) => (
  <a
    className={styles.Anchor}
    href={linkTo}
    target="_blank"
    rel="noopener noreferrer"
  >
    {content}
  </a>
)

const bannerTextStyle = {
  '--b-text-color': 'var(--b-v3-banner-color)',
} as CSSProperties

const bannerIconStyle = {
  '--b-v3-icon-color': 'var(--b-v3-banner-icon-color)',
} as CSSProperties

const bannerActionIconStyle = {
  '--b-v3-icon-button-icon-color': 'var(--b-v3-banner-icon-color)',
} as CSSProperties

/**
 * `Banner` is a component you use when you want to communicate instructions, warnings, recommendations, and other information well.
 * @example
 * ```tsx
 * <Banner
 *   variant="blue"
 *   leadingIcon={LightbulbIcon}
 *   content="Information here."
 * />
 * ```
 */
export const Banner = forwardRef<HTMLDivElement, BannerProps>(function Banner(
  {
    className,
    variant = 'default',
    leadingIcon,
    content,
    hasLink = false,
    linkText,
    linkTo,
    renderLink = externalLinkRenderer,
    actionIcon,
    actionAriaLabel = 'Close',
    onClickAction,
    ...rest
  },
  forwardedRef
) {
  return (
    <div
      ref={forwardedRef}
      className={classNames(
        styles.Banner,
        styles[`variant-${variant}`],
        className
      )}
      {...rest}
    >
      {leadingIcon && (
        <div className={styles.IconWrapper}>
          <Icon
            className={styles.Icon}
            source={leadingIcon}
            size="20"
            style={bannerIconStyle}
          />
        </div>
      )}

      <div className={styles.Content}>
        <Text
          className={classNames(styles.Text, styles.Message)}
          typo="14"
          style={bannerTextStyle}
        >
          {content}
        </Text>

        {hasLink &&
          renderLink({
            content: (
              <Text
                className={styles.Link}
                typo="14"
                fontWeight="700"
                style={bannerTextStyle}
              >
                {linkText}
              </Text>
            ),
            linkTo,
          })}
      </div>

      {actionIcon && (
        <div className={styles.ActionWrapper}>
          <IconButton
            content={actionIcon}
            size="s"
            variant="ghost"
            semantic="secondary"
            aria-label={actionAriaLabel}
            style={bannerActionIconStyle}
            onClick={onClickAction}
          />
        </div>
      )}
    </div>
  )
})
