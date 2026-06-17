'use client'

import { forwardRef } from 'react'
import * as React from 'react'

import { isBezierIcon } from '@channel.io/bezier-icons'
import classNames from 'classnames'

import { Text } from '~/src/v3/Text'

import type { ItemBaseProps, ItemBaseSideContent } from './ItemBase.types'

import styles from './ItemBase.module.scss'

function ItemBaseSideContentElement({
  content,
}: {
  content?: ItemBaseSideContent
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

export const ItemBase = forwardRef<HTMLDivElement, ItemBaseProps>(
  function ItemBase(
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
          styles.ItemBase,
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
        <div
          className={classNames(
            styles.Content,
            !hasLeadingContent && styles['without-leading-content']
          )}
        >
          {hasLeadingContent && (
            <div className={styles.LeadingContent}>
              <ItemBaseSideContentElement content={leadingContent} />
            </div>
          )}

          <div className={styles.MainContent}>
            {typeof children === 'string' ? (
              <Text
                typo={size === 'l' ? '15' : '14'}
                truncated
              >
                {children}
              </Text>
            ) : (
              children
            )}
          </div>

          {description != null && (
            <div className={styles.Description}>
              {typeof description === 'string' ? (
                <Text
                  typo="12"
                  color="text-neutral-light"
                  truncated={2}
                >
                  {description}
                </Text>
              ) : (
                description
              )}
            </div>
          )}
        </div>

        {trailingContent != null && (
          <div className={styles.TrailingContent}>
            <ItemBaseSideContentElement content={trailingContent} />
          </div>
        )}
      </div>
    )
  }
)
