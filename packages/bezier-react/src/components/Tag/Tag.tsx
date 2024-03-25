import React, { forwardRef, memo } from 'react'

import { CancelSmallIcon } from '@channel.io/bezier-icons'
import classNames from 'classnames'

import { isEmpty, isNil } from '~/src/utils/type'

import { Icon } from '~/src/components/Icon'
import { getProperTagBadgeTypo } from '~/src/components/TagBadgeCommon'
import commonStyles from '~/src/components/TagBadgeCommon/TagBadge.module.scss'
import { Text } from '~/src/components/Text'

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
    {
      size = 'm',
      variant = 'default',
      children,
      className,
      onDelete,
      ...rest
    },
    forwardedRef
  ) {
    return (
      <div
        ref={forwardedRef}
        className={classNames(
          commonStyles.TagBadge,
          commonStyles[`size-${size}`],
          commonStyles[`variant-${variant}`],
          className
        )}
        data-testid={TAG_TEST_ID}
        {...rest}
      >
        {!isEmpty(children) && (
          <Text
            typo={getProperTagBadgeTypo(size)}
            marginHorizontal={2}
            color="txt-black-darkest"
          >
            {children}
          </Text>
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
      </div>
    )
  })
)
