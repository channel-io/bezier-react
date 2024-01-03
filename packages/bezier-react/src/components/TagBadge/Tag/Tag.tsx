import React, {
  type CSSProperties,
  forwardRef,
  memo,
} from 'react'

import { CancelSmallIcon } from '@channel.io/bezier-icons'
import classNames from 'classnames'

import { type SemanticNames } from '~/src/foundation'

import {
  getMarginStyle,
  splitByMarginProps,
} from '~/src/utils/props'
import {
  isEmpty,
  isNil,
} from '~/src/utils/type'

import { Icon } from '~/src/components/Icon'
import {
  TAG_BADGE_ICON_SIZE,
  TAG_TEXT_HORIZONTAL_PADDING,
  TagBadgeSize,
  TagBadgeVariant,
  getProperTagBadgeBgColor,
  getProperTagBadgeTypo,
} from '~/src/components/TagBadge/TagBadgeCommon'
import common from '~/src/components/TagBadge/TagBadgeCommon/TagBadge.module.scss'
import { Text } from '~/src/components/Text'

import type TagProps from './Tag.types'

import styles from './Tag.module.scss'

export const TAG_TEST_ID = 'bezier-react-tag'
export const TAG_DELETE_TEST_ID = 'bezier-react-tag-delete-icon'

export const Tag = memo(forwardRef<HTMLDivElement, TagProps>(function Tag(props, forwardedRef) {
  const [marginProps, marginRest] = splitByMarginProps(props)
  const marginStyle = getMarginStyle(marginProps)
  const {
    size = TagBadgeSize.M,
    variant = TagBadgeVariant.Default,
    color: givenColor,
    children,
    className,
    testId = TAG_TEST_ID,
    onDelete,
    style,
    ...rest
  } = marginRest

  const badgeColor: SemanticNames = givenColor || getProperTagBadgeBgColor(variant)
  const textColor: SemanticNames = givenColor || 'txt-black-darkest'

  return (
    <div
      className={classNames(
        styles.Tag,
        common.TagBadge,
        common[`size-${size}`],
        marginStyle.className,
        className,
      )}
      ref={forwardedRef}
      data-testid={testId}
      style={{
        '--b-tag-background-color': `var(--${badgeColor})`,
        ...marginStyle.style,
        ...style,
      } as CSSProperties}
      {...rest}
    >
      { !isEmpty(children) && (
        <Text
          typo={getProperTagBadgeTypo(size)}
          mx={TAG_TEXT_HORIZONTAL_PADDING}
          color={textColor}
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
