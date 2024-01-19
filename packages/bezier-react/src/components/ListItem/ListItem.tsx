import React, { forwardRef } from 'react'

import { isBezierIcon } from '@channel.io/bezier-icons'
import classNames from 'classnames'

import {
  isEmpty,
  isNil,
  isString,
} from '~/src/utils/type'

import {
  Icon,
  IconSize,
} from '~/src/components/Icon'
import { Text } from '~/src/components/Text'

import {
  type ListItemProps,
  ListItemSize,
  ListItemVariant,
} from './ListItem.types'

import styles from './ListItem.module.scss'

type ListItemRef = HTMLDivElement & HTMLAnchorElement

function renderNewLineComponent(value: string) {
  return value.split('\n').map((str, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <React.Fragment key={index}>
      { index !== 0 && <br /> }
      { str }
    </React.Fragment>
  ))
}

export const LIST_ITEM_TEST_ID = 'bezier-list-item'

export const ListItem = forwardRef<ListItemRef, ListItemProps>(function ListItem({
  className,
  as,
  testId = LIST_ITEM_TEST_ID,
  variant = ListItemVariant.Monochrome,
  size = ListItemSize.S,
  content,
  description,
  descriptionMaxLines,
  leftContent,
  rightContent,
  active = false,
  focused = false,
  disabled = false,
  href,
  onClick,
  ...rest
}, forwardedRef) {
  const isLink = !isEmpty(href)
  const Comp = isLink ? 'a' : (as ?? 'div') as 'div'

  return (
    <Comp
      {...rest}
      {...isLink && {
        href,
        draggable: false,
        target: '_blank',
        rel: 'noopener noreferrer',
      }}
      className={classNames(
        styles.ListItem,
        styles[`size-${size}`],
        styles[`variant-${variant}`],
        disabled && styles.disabled,
        focused && styles.focused,
        active && styles.active,
        className,
      )}
      ref={forwardedRef}
      data-testid={testId}
      onClick={!disabled ? onClick : undefined}
    >
      <div className={styles.ListItemContent}>
        { !isNil(leftContent) && (
          <div className={styles.ListItemLeftContent}>
            { isBezierIcon(leftContent)
              ? (
                <Icon
                  className={styles.ListItemLeftIcon}
                  source={leftContent}
                  size={IconSize.S}
                />
              )
              : leftContent }
          </div>
        ) }

        <div className={styles.ListItemTitle}>
          { isString(content) ? (
            <Text
              truncated
              typo={size === ListItemSize.L
                ? '16'
                : '14'}
            >
              { content }
            </Text>
          ) : content }
        </div>

        { description && (
          <div className={styles.ListItemDescription}>
            <Text
              typo="12"
              color="txt-black-darker"
              truncated={descriptionMaxLines}
            >
              { isString(description)
                ? renderNewLineComponent(description)
                : description }
            </Text>
          </div>
        ) }
      </div>

      { rightContent && (
        <div className={styles.ListItemRightContent}>
          { rightContent }
        </div>
      ) }
    </Comp>
  )
})
