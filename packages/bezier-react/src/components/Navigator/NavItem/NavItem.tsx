import React, {
  forwardRef,
  memo,
  useCallback,
} from 'react'

import classNames from 'classnames'

import { noop } from '~/src/utils/function'

import {
  Icon,
  IconSize,
} from '~/src/components/Icon'
import { Text } from '~/src/components/Text'

import type NavItemProps from './NavItem.types'

import styles from './NavItem.module.scss'

export const NAV_ITEM_TEST_ID = 'bezier-react-nav-item'
export const NAV_ITEM_LEFT_ICON_TEST_ID = 'bezier-react-nav-item-left-icon'

export const NavItem = memo(forwardRef<HTMLAnchorElement, NavItemProps>(function NavItem(props, forwardedRef) {
  const {
    testId = NAV_ITEM_TEST_ID,
    name,
    style,
    className,
    content,
    href,
    target = '_self',
    rightContent,
    leftIcon,
    active,
    onClick = noop,
    ...rest
  } = props

  const handleClickItem = useCallback((e?: React.MouseEvent) => {
    onClick(e, name)
  }, [
    name,
    onClick,
  ])

  return (
    <li
      className={styles.Wrapper}
      role="none"
    >
      <a
        ref={forwardedRef}
        style={style}
        className={classNames(
          styles.Item,
          active && styles.active,
          className,
        )}
        data-testid={testId}
        href={href}
        target={target}
        role="menuitem"
        onClick={handleClickItem}
        {...rest}
      >
        <div className={styles.LeftIconWrapper}>
          { leftIcon && (
            <Icon
              testId={NAV_ITEM_LEFT_ICON_TEST_ID}
              source={leftIcon}
              size={IconSize.S}
              color={active ? 'bgtxt-blue-normal' : 'txt-black-dark'}
            />
          ) }
        </div>

        <Text typo="14" truncated>
          { content }
        </Text>

        { rightContent && (
          <div className={styles.RightContentWrapper}>
            { rightContent }
          </div>
        ) }
      </a>
    </li>
  )
}))
