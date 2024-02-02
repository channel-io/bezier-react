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

import { Icon } from '~/src/components/Icon'
import {
  TAG_BADGE_ICON_SIZE,
  TagBadgeSize,
  TagBadgeVariant,
  getProperTagBadgeBgColor,
  getProperTagBadgeTypo,
} from '~/src/components/TagBadge/TagBadgeCommon'
import commonStyles from '~/src/components/TagBadge/TagBadgeCommon/TagBadge.module.scss'
import { Text } from '~/src/components/Text'

import type TagProps from './Tag.types'

import styles from './Tag.module.scss'

export const TAG_TEST_ID = 'bezier-react-tag'
export const TAG_DELETE_TEST_ID = 'bezier-react-tag-delete-icon'

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
  testId = TAG_TEST_ID,
  onDelete,
  style,
  ...rest
}, forwardedRef) {
  const bgColor: SemanticColor = givenColor || getProperTagBadgeBgColor(variant)

  return (
    <div
      className={classNames(
        styles.Tag,
        commonStyles.TagBadge,
        commonStyles[`size-${size}`],
        className,
      )}
      ref={forwardedRef}
      data-testid={testId}
      style={{
        '--b-tag-badge-background-color': cssVar(bgColor),
        ...style,
      } as CSSProperties}
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
          source={CancelSmallIcon}
          size={TAG_BADGE_ICON_SIZE}
          testId={TAG_DELETE_TEST_ID}
          color="txt-black-darker"
          className={styles.CloseIcon}
          onClick={(e) => {
            e.stopPropagation()
            onDelete(e)
          }}
        />
      ) }
    </div>
  )
}))
