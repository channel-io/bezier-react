import React, { forwardRef } from 'react'

import {
  ChevronSmallDownIcon,
  ChevronSmallRightIcon,
} from '@channel.io/bezier-icons'
import classNames from 'classnames'

import { noop } from '~/src/utils/function'
import { isNil } from '~/src/utils/type'

import {
  Icon,
  IconSize,
} from '~/src/components/Icon'
import commonStyles from '~/src/components/Navigator/Navigator.module.scss'
import { Text } from '~/src/components/Text'

import type { NavGroupProps } from './NavGroup.types'

import styles from './NavGroup.module.scss'

export const NAV_GROUP_TEST_ID = 'bezier-react-nav-group'
export const NAV_GROUP_LEFT_ICON_TEST_ID = 'bezier-react-nav-group-left-icon'

export const NavGroup = forwardRef<HTMLButtonElement, NavGroupProps>(function NavGroup({
  testId = NAV_GROUP_TEST_ID,
  name,
  className,
  children,
  content,
  rightContent,
  leftContent,
  open,
  active,
  onClick = noop,
  ...rest
}, forwardedRef) {
  const handleClickItem = (e?: React.MouseEvent) => {
    onClick(e, name)
  }

  const hasChildren = !isNil(children)
  const chevronIconSource = open ? ChevronSmallDownIcon : ChevronSmallRightIcon
  const ariaName = `${name}Menu`

  return (
    <li
      className={commonStyles.Wrapper}
      role="none"
    >
      <button
        ref={forwardedRef}
        type="button"
        className={classNames(
          commonStyles.Item,
          active && commonStyles.active,
          className,
        )}
        data-testid={testId}
        role="menuitem"
        aria-haspopup={hasChildren}
        aria-expanded={open}
        aria-controls={ariaName}
        onClick={handleClickItem}
        {...rest}
      >
        <div className={commonStyles.LeftIconWrapper}>
          <Icon
            testId={NAV_GROUP_LEFT_ICON_TEST_ID}
            source={leftContent}
            size={IconSize.S}
            color={active ? 'bgtxt-blue-normal' : 'txt-black-dark'}
          />
        </div>

        <Text typo="14" truncated>
          { content }
        </Text>

        { hasChildren && (
          <div className={styles.ChevronWrapper}>
            <Icon
              source={chevronIconSource}
              size={IconSize.S}
              color="txt-black-dark"
            />
          </div>
        ) }

        { rightContent && (
          <div className={commonStyles.RightContentWrapper}>
            { rightContent }
          </div>
        ) }
      </button>

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
