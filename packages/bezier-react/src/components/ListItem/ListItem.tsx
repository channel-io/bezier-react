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

import type ListItemProps from './ListItem.types'
import {
  ListItemSize,
  ListItemVariant,
} from './ListItem.types'
import useAdjacentElementBorderRadius from './useAdjacentElementBorderRadius'

import styles from './ListItem.module.scss'

const LINE_BREAK_CHAR = '\n'

export const LIST_ITEM_TEST_ID = 'bezier-react-list-menu-item'

function filterActiveItem(node: HTMLElement) {
  return node.dataset.active === 'true'
}

type ListItemRef = HTMLDivElement & HTMLAnchorElement

function getNewLineComponent(value: string) {
  return value.split(LINE_BREAK_CHAR).map((str, index) => {
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

function ListItem({
  className,
  contentClassName,
  iconClassName,
  as,
  testId = LIST_ITEM_TEST_ID,
  size = ListItemSize.M,
  content,
  description,
  descriptionMaxLines,
  name,
  leftContent,
  leftIcon,
  variant = ListItemVariant.Monochrome,
  href = '',
  rightContent = null,
  active: activeProp,
  activeClassName,
  focused = false,
  disabled = false,
  onClick = noop,
  ...rest
}: ListItemProps,
forwardedRef: React.Ref<ListItemRef>,
) {
  const [listItemElement, setListItemElement] = useState<ListItemRef | null>(null)

  const setListItemRef = useCallback((node: ListItemRef | null) => {
    if (!node) { return }
    setListItemElement(node)
  }, [])

  const mergedRef = useMergeRefs<ListItemRef>(setListItemRef, forwardedRef)

  const isHyperLink = !isEmpty(href)
  const active = isHyperLink ? false : activeProp

  useEffect(function focus() {
    if (focused && listItemElement) {
      listItemElement.focus()
    }
  }, [
    focused,
    listItemElement,
  ])

  useAdjacentElementBorderRadius(listItemElement, filterActiveItem, active)

  const handleClick = useCallback((e: React.MouseEvent) => {
    if (!disabled) {
      onClick(e, name)
    }
  }, [
    disabled,
    name,
    onClick,
  ])

  const Content = (
    <>
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
                className={classNames(
                  styles.ListItemLeftIcon,
                  iconClassName,
                )}
                source={leftIcon}
                size={IconSize.S}
              />
            </div>
          ) }

        <div className={classNames(
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
    </>
  )

  const commonDataAttr = {
    'data-active': active,
    'data-testid': testId,
  }

  const commonProps = {
    ref: mergedRef,
    className: classNames(
      styles.ListItem,
      styles[`size-${size}`],
      styles[`variant-${variant}`],
      disabled && styles.disabled,
      active && styles.active,
      active && activeClassName,
      className,
    ),
    onClick: handleClick,
    ...rest,
  }

  const Comp = (as ?? 'button') as 'button'

  return isHyperLink
    ? (
      <a
        {...commonDataAttr}
        {...commonProps}
        href={href}
        draggable={false}
        target="_blank"
        rel="noopener noreferrer"
      >
        { Content }
      </a>
    )
    : (
      <Comp
        {...commonDataAttr}
        {...commonProps}
        type={Comp === 'button' ? 'button' : undefined}
        disabled={disabled}
        aria-pressed={active}
      >
        { Content }
      </Comp>
    )
}

export default forwardRef(ListItem)
