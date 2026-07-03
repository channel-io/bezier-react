'use client'

import { forwardRef } from 'react'
import * as React from 'react'

import { isBezierIcon } from '@channel.io/bezier-icons'
import classNames from 'classnames'


import { Text } from '~/src/beta/Text'

import type { BaseItemProps, BaseItemSideContent } from './BaseItem.types'

import styles from './BaseItem.module.scss'


function BaseItemSideContentElement({
  content,
}: {
  content?: BaseItemSideContent
}) {
  if (isBezierIcon(content)) {
    const SourceElement = content

    return (
      <SourceElement
        className={styles.Icon}
        aria-hidden
      />
    )
  }

  return content
}

export const BaseItem = forwardRef<HTMLDivElement, BaseItemProps>(
  function BaseItem(
    {
      className,
      children,
      description,
      leadingContent,
      trailingContent,
      size = 'm',
      variant = 'neutral',
      active = false,
      disabled = false,
      ...rest
    },
    forwardedRef
  ) {
    const hasLeadingContent = leadingContent != null
    const interactive =
      rest.role === 'menuitem' ||
      rest.role === 'option' ||
      rest.role === 'button' ||
      rest.onClick != null

    return (
      <div
        ref={forwardedRef}
        className={classNames(
          styles.BaseItem,
          styles[`size-${size}`],
          styles[variant],
          active && styles.active,
          disabled && styles.disabled,
          interactive && styles.interactive,
          className
        )}
        aria-disabled={disabled || undefined}
        {...rest}
      >
        <div className={styles.Content}>
          {hasLeadingContent && (
            <div className={styles.LeadingContent}>
              <BaseItemSideContentElement content={leadingContent} />
            </div>
          )}

          <div className={styles.ContentBody}>
            <div className={styles.MainContent}>
              {typeof children === 'string' ? (
                <Text
                  typo="14"
                  fontWeight="500"
                  truncated
                >
                  {children}
                </Text>
              ) : (
                children
              )}
            </div>
          </div>

          {trailingContent != null && (
            <div className={styles.TrailingContent}>
              <BaseItemSideContentElement content={trailingContent} />
            </div>
          )}
        </div>

        {description != null && (
          <div
            className={classNames(
              styles.Description,
              hasLeadingContent && styles['has-leading-content']
            )}
          >
            {typeof description === 'string' ? (
              <Text
                typo="12"
                color="text-neutral-lighter"
              >
                {description}
              </Text>
            ) : (
              description
            )}
          </div>
        )}
      </div>
    )
  }
)
