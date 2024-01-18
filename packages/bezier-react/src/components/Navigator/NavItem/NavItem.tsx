import React, { forwardRef } from 'react'

import classNames from 'classnames'

import { noop } from '~/src/utils/function'

import {
  Icon,
  IconSize,
} from '~/src/components/Icon'
import styles from '~/src/components/Navigator/Navigator.module.scss'
import { Text } from '~/src/components/Text'

import type { NavItemProps } from './NavItem.types'

export const NAV_ITEM_TEST_ID = 'bezier-react-nav-item'
export const NAV_ITEM_LEFT_ICON_TEST_ID = 'bezier-react-nav-item-left-icon'

/**
 * `NavItem` is a component for an item where you can navigate to another link.
 *
 * @example
 * ```tsx
 * <NavItem
 *   name="channel"
 *   content="https://channel.io"
 *   href="_parent"
 * />
 * ```
 */
export const NavItem = forwardRef<HTMLAnchorElement, NavItemProps>(function NavItem({
  testId = NAV_ITEM_TEST_ID,
  name,
  style,
  className,
  content,
  href,
  target = '_self',
  rightContent,
  leftContent,
  active,
  onClick = noop,
  ...rest
}, forwardedRef) {
  const handleClickItem = (e?: React.MouseEvent) => {
    onClick(e, name)
  }

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
          { leftContent && (
            <Icon
              testId={NAV_ITEM_LEFT_ICON_TEST_ID}
              source={leftContent}
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
