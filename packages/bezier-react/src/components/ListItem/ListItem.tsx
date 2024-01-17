import React, {
  forwardRef,
  useCallback,
  useEffect,
  useState,
} from 'react'

import classNames from 'classnames'
import { v4 as uuid } from 'uuid'

import useMergeRefs from '~/src/hooks/useMergeRefs'
import { noop } from '~/src/utils/function'
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

function getNewLineComponent(value: string) {
  return value.split('\n').map((str, index) => {
    if (index === 0) {
      return (
        <Text key={uuid()} typo="12">
          { str }
        </Text>
      )
    }

    return (
      <React.Fragment key={uuid()}>
        <br />
        <Text typo="12">
          { str }
        </Text>
      </React.Fragment>
    )
  })
}

export const ListItem = forwardRef<ListItemRef, ListItemProps>(function ListItem({
  className,
  contentStyle,
  contentClassName,
  iconStyle,
  iconClassName,
  as,
  testId = 'bezier-list-item',
  variant = ListItemVariant.Monochrome,
  size = ListItemSize.M,
  name,
  content,
  description,
  descriptionMaxLines,
  leftIcon,
  leftContent,
  rightContent = null,
  active,
  activeClassName,
  focused = false,
  disabled = false,
  href = '',
  onClick = noop,
  ...rest
}, forwardedRef) {
  const [listItemElement, setListItemElement] = useState<ListItemRef | null>(null)

  const mergedRef = useMergeRefs(
    useCallback((node: ListItemRef | null) => {
      if (!node) { return }
      setListItemElement(node)
    }, []),
    forwardedRef,
  )

  useEffect(function focus() {
    if (focused && listItemElement) {
      listItemElement.focus()
    }
  }, [
    focused,
    listItemElement,
  ])

  const handleClick = useCallback<React.MouseEventHandler<ListItemRef>>((e) => {
    if (!disabled) {
      onClick(e, name)
    }
  }, [
    disabled,
    name,
    onClick,
  ])

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
        active && activeClassName,
        className,
      )}
      ref={mergedRef}
      data-testid={testId}
      onClick={handleClick}
    >
      <div className={styles.ListItemContent}>
        { !isNil(leftContent)
          ? (
            <div className={styles.ListItemLeftContent}>
              { leftContent }
            </div>
          )
          : !isNil(leftIcon) && (
            <div className={styles.ListItemLeftContent}>
              <Icon
                style={iconStyle}
                className={classNames(
                  styles.ListItemLeftIcon,
                  iconClassName,
                )}
                source={leftIcon}
                size={IconSize.S}
              />
            </div>
          ) }

        <div
          style={contentStyle}
          className={classNames(
            styles.ListItemTitle,
            contentClassName,
          )}
        >
          { isString(content) ? (
            <Text
              truncated
              typo={size === ListItemSize.XL
                ? '18'
                : '14'}
            >
              { content }
            </Text>
          ) : content }
        </div>

        { description && (
          <div className={styles.ListItemDescription}>
            <Text
              color="txt-black-darker"
              truncated={descriptionMaxLines}
            >
              { isString(description)
                ? getNewLineComponent(description)
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
