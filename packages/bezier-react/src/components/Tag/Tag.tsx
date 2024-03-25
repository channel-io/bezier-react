import React, { forwardRef, memo } from 'react'

import { CancelSmallIcon } from '@channel.io/bezier-icons'

import { isEmpty, isNil } from '~/src/utils/type'

import { BaseTagBadge, BaseTagBadgeText } from '~/src/components/BaseTagBadge'
import { Icon } from '~/src/components/Icon'

import { type TagProps } from './Tag.types'

import styles from './Tag.module.scss'

export const TAG_TEST_ID = 'bezier-tag'
export const TAG_DELETE_TEST_ID = 'bezier-tag-delete-icon'

/**
 * `Tag` is a component for representing tag, which shows close icon when `onDelete` property is specified.
 * @example
 * ```tsx
 * <Tag
 *   size="m"
 *   variant="default"
 *   onDelete={handleDelete}
 * >
 *   Payment
 * </Tag>
 * ```
 */
export const Tag = memo(
  forwardRef<HTMLDivElement, TagProps>(function Tag(
    { size = 'm', variant = 'default', children, className, onDelete, ...rest },
    forwardedRef
  ) {
    return (
      <BaseTagBadge
        ref={forwardedRef}
        size={size}
        variant={variant}
        data-testid={TAG_TEST_ID}
        {...rest}
      >
        {!isEmpty(children) && (
          <BaseTagBadgeText
            size={size}
            marginHorizontal={2}
            color="txt-black-darkest"
          >
            {children}
          </BaseTagBadgeText>
        )}

        {!isNil(onDelete) && (
          <Icon
            role="button"
            tabIndex={0}
            className={styles.TagDeleteIcon}
            source={CancelSmallIcon}
            size="xs"
            color="txt-black-darker"
            onClick={(e) => {
              e.stopPropagation()
              onDelete(e)
            }}
            data-testid={TAG_DELETE_TEST_ID}
          />
        )}
      </BaseTagBadge>
    )
  })
)
