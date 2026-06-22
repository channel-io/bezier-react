'use client'

import { type CSSProperties, forwardRef } from 'react'

import { CancelSmallIcon } from '@channel.io/bezier-icons'
import classNames from 'classnames'

import { isEmpty, isNil } from '~/src/utils/type'
import { BaseTagBadge, BaseTagBadgeText } from '~/src/v3/BaseTagBadge'

import type { TagProps } from './Tag.types'

import styles from './Tag.module.scss'

/**
 * `Tag` represents a compact selected or categorized value.
 * It shows a delete button when `onDelete` is provided.
 */
export const Tag = forwardRef<HTMLDivElement, TagProps>(function Tag(
  {
    size = 'm',
    variant = 'default',
    children,
    className,
    style,
    onDelete,
    ...rest
  },
  forwardedRef
) {
  return (
    <BaseTagBadge
      ref={forwardedRef}
      size={size}
      variant={variant}
      className={classNames(styles.Tag, className)}
      style={
        {
          ...style,
          '--b-tag-badge-color': 'var(--color-text-neutral)',
        } as CSSProperties
      }
      {...rest}
    >
      {!isEmpty(children) && (
        <BaseTagBadgeText
          size={size}
          truncated
          className={styles.Text}
        >
          {children}
        </BaseTagBadgeText>
      )}

      {!isNil(onDelete) && (
        <button
          type="button"
          className={styles.DeleteButton}
          aria-label="Delete tag"
          onClick={(event) => {
            event.stopPropagation()
            onDelete(event)
          }}
        >
          <CancelSmallIcon
            className={styles.DeleteIcon}
            aria-hidden
          />
        </button>
      )}
    </BaseTagBadge>
  )
})
