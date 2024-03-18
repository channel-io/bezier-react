import React, { forwardRef } from 'react'

import {
  ChevronSmallDownIcon,
  ChevronSmallRightIcon,
} from '@channel.io/bezier-icons'
import classNames from 'classnames'

import { isNil } from '~/src/utils/type'

import { BaseButton } from '~/src/components/BaseButton'
import { Icon } from '~/src/components/Icon'
import { Text } from '~/src/components/Text'

// eslint-disable-next-line no-restricted-imports
import commonStyles from '../NavItem/NavItem.module.scss'

import type { NavGroupProps } from './NavGroup.types'

import styles from './NavGroup.module.scss'

export const NAV_GROUP_TEST_ID = 'bezier-nav-group'
export const NAV_GROUP_LEFT_ICON_TEST_ID = 'bezier-nav-group-left-icon'

export const NavGroup = forwardRef<HTMLButtonElement, NavGroupProps>(function NavGroup({
  name,
  className,
  children,
  content,
  rightContent,
  leftContent,
  open,
  active,
  onClick,
  ...rest
}, forwardedRef) {
  const handleClickItem = (e?: React.MouseEvent) => {
    onClick?.(e, name)
  }

  const hasChildren = !isNil(children)
  const chevronIconSource = open ? ChevronSmallDownIcon : ChevronSmallRightIcon
  const ariaName = `${name}Menu`

  return (
    <li
      className={commonStyles.Wrapper}
      role="none"
    >
      <BaseButton
        ref={forwardedRef}
        className={classNames(
          commonStyles.Item,
          active && commonStyles.active,
          className,
        )}
        role="menuitem"
        aria-haspopup={hasChildren}
        aria-expanded={open}
        aria-controls={ariaName}
        onClick={handleClickItem}
        data-testid={NAV_GROUP_TEST_ID}
        {...rest}
      >
        <div className={commonStyles.LeftIconWrapper}>
          <Icon
            source={leftContent}
            size="s"
            color={active ? 'bgtxt-blue-normal' : 'txt-black-dark'}
            data-testid={NAV_GROUP_LEFT_ICON_TEST_ID}
          />
        </div>

        <Text typo="14" truncated>
          { content }
        </Text>

        { hasChildren && (
          <div className={styles.ChevronWrapper}>
            <Icon
              source={chevronIconSource}
              size="s"
              color="txt-black-dark"
            />
          </div>
        ) }

        { rightContent && (
          <div className={commonStyles.RightContentWrapper}>
            { rightContent }
          </div>
        ) }
      </BaseButton>

      { open && (
        <ul
          className={styles.ChildrenWrapper}
          role="menu"
          id={ariaName}
        >
          { open && children }
        </ul>
      ) }
    </li>
  )
})
