import React, {
  type CSSProperties,
  forwardRef,
  memo,
} from 'react'

import { CancelSmallIcon } from '@channel.io/bezier-icons'
import classNames from 'classnames'

import { type SemanticColor } from '~/src/types/tokens'
import { cssVar } from '~/src/utils/style'
import {
  isEmpty,
  isNil,
} from '~/src/utils/type'

import {
  Icon,
  IconSize,
} from '~/src/components/Icon'
import {
  TagBadgeSize,
  TagBadgeVariant,
  getProperTagBadgeBgColor,
  getProperTagBadgeTypo,
} from '~/src/components/TagBadgeCommon'
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
 *   size={TagBadgeSize.M}
 *   variant={TagBadgeVariant.Default}
 *   onDelete={handleDelete}
 * >
 *   Payment
 * </Tag>
 * ```
 */
export const Tag = memo(forwardRef<HTMLDivElement, TagProps>(function Tag({
  size = TagBadgeSize.M,
  variant = TagBadgeVariant.Default,
  color: givenColor,
  children,
  className,
  onDelete,
  style,
  ...rest
}, forwardedRef) {
  const bgColor: SemanticColor = givenColor || getProperTagBadgeBgColor(variant)

  return (
    <div
      style={{
        '--b-tag-badge-background-color': cssVar(bgColor),
        ...style,
      } as CSSProperties}
      className={classNames(
        styles.Tag,
        commonStyles.TagBadge,
        commonStyles[`size-${size}`],
        className,
      )}
      ref={forwardedRef}
      data-testid={TAG_TEST_ID}
      {...rest}
    >
      { !isEmpty(children) && (
        <Text
          typo={getProperTagBadgeTypo(size)}
          marginHorizontal={2}
          color="txt-black-darkest"
        >
          { children }
        </Text>
      ) }

      { !isNil(onDelete) && (
        <Icon
          role="button"
          tabIndex={0}
          className={styles.CloseIcon}
          source={CancelSmallIcon}
          size={IconSize.XS}
          color="txt-black-darker"
          onClick={(e) => {
            e.stopPropagation()
            onDelete(e)
          }}
          data-testid={TAG_DELETE_TEST_ID}
        />
      ) }
    </div>
  )
}))
