'use client'
import { forwardRef } from 'react'
import * as React from 'react'

import classNames from 'classnames'

import { Icon } from '~/src/components/Icon'
import { Text } from '~/src/components/Text'

import type { NavItemProps } from './NavItem.types'

import styles from './NavItem.module.scss'

const NAV_ITEM_TEST_ID = 'bezier-nav-item'
export const NAV_ITEM_LEFT_ICON_TEST_ID = 'bezier-nav-item-left-icon'

/**
 * `NavItem` is a component for an item where you can navigate to another link.
 * @example
 * ```tsx
 * <NavItem
 *   name="channel"
 *   content="https://channel.io"
 *   href="_parent"
 * />
 * ```
 */
export const NavItem = forwardRef<HTMLAnchorElement, NavItemProps>(
  function NavItem(
    {
      name,
      style,
      className,
      content,
      href,
      target = '_self',
      rightContent,
      leftContent,
      active,
      onClick,
      ...rest
    },
    forwardedRef
  ) {
    const handleClickItem = (e?: React.MouseEvent) => {
      onClick?.(e, name)
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
            className
          )}
          href={href}
          target={target}
          role="menuitem"
          onClick={handleClickItem}
          data-testid={NAV_ITEM_TEST_ID}
          {...rest}
        >
          <div className={styles.LeftIconWrapper}>
            {leftContent && (
              <Icon
                data-testid={NAV_ITEM_LEFT_ICON_TEST_ID}
                source={leftContent}
                size="s"
                color={active ? 'bgtxt-blue-normal' : 'txt-black-dark'}
              />
            )}
          </div>

          <Text
            typo="14"
            truncated
          >
            {content}
          </Text>

          {rightContent && (
            <div className={styles.RightContentWrapper}>{rightContent}</div>
          )}
        </a>
      </li>
    )
  }
)
