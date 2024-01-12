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

const NavItem = forwardRef<HTMLAnchorElement, NavItemProps>(function NavItem({
  as,
  testId = NAV_ITEM_TEST_ID,
  name,
  style,
  className,
  interpolation,
  content,
  href,
  target = '_self',
  rightContent,
  leftIcon,
  active,
  onClick = noop,
  ...rest
}, forwardedRef) {
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
        {...rest}
        ref={forwardedRef}
        as={as}
        style={style}
        className={classNames(
          styles.Item,
          active && styles.active,
          className,
        )}
        onClick={handleClickItem}
        data-testid={testId}
        href={href}
        target={target}
        role="menuitem"
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
})

export default memo(NavItem)
