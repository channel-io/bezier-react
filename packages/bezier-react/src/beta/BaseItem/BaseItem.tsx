'use client'

import { forwardRef } from 'react'
import * as React from 'react'

import { type BezierIcon, isBezierIcon } from '@channel.io/bezier-icons'
import classNames from 'classnames'

import { Text } from '~/src/beta/Text'

import type { BaseItemComponent, BaseItemProps } from './BaseItem.types'

import styles from './BaseItem.module.scss'

type BaseItemRootProps = React.HTMLAttributes<HTMLElement> &
  React.RefAttributes<HTMLElement> & {
    disabled?: boolean
    href?: string
    type?: string
  }

function BaseItemSideContentElement({
  content,
}: {
  content?: BezierIcon | React.ReactNode
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

function getTextTruncated(maxLines: BaseItemProps['contentMaxLines']) {
  if (maxLines == null) {
    return undefined
  }

  return maxLines <= 1 ? true : maxLines
}

const BaseItemImpl = forwardRef<HTMLElement, BaseItemProps>(function BaseItem(
  {
    as,
    className,
    children,
    description,
    contentMaxLines,
    leadingContent,
    trailingContent,
    size = 'm',
    variant = 'neutral',
    active = false,
    disabled = false,
    interactive = false,
    'aria-disabled': ariaDisabled,
    ...rest
  },
  forwardedRef
) {
  const isSingleLine = description == null
  const contentTruncated = getTextTruncated(contentMaxLines)
  const rootElement =
    as ??
    ('href' in rest && rest.href != null
      ? 'a'
      : 'onClick' in rest && rest.onClick != null
        ? 'button'
        : 'div')
  const Component = rootElement as React.ElementType<BaseItemRootProps>
  const rootProps = {
    ref: forwardedRef as React.Ref<HTMLElement>,
    className: classNames(
      styles.BaseItem,
      styles[`size-${size}`],
      styles[variant],
      active && styles.active,
      disabled && styles.disabled,
      interactive && styles.interactive,
      className
    ),
    'aria-disabled': disabled || ariaDisabled || undefined,
    ...(rootElement === 'button' && { disabled, type: 'button' }),
    ...rest,
  } as BaseItemRootProps

  return (
    <Component {...rootProps}>
      <div className={styles.ContentWrapper}>
        <div
          className={classNames(
            styles.Content,
            isSingleLine && styles['single-line']
          )}
        >
          {leadingContent != null && (
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
                  truncated={contentTruncated}
                >
                  {children}
                </Text>
              ) : (
                children
              )}
            </div>
          </div>
        </div>

        {description != null && (
          <div
            className={classNames(
              styles.Description,
              leadingContent != null && styles['has-leading-content']
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

      {trailingContent != null && (
        <div className={styles.TrailingContent}>
          <BaseItemSideContentElement content={trailingContent} />
        </div>
      )}
    </Component>
  )
})

export const BaseItem = BaseItemImpl as BaseItemComponent
