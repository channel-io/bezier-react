import React, {
  forwardRef,
  memo,
  useCallback,
} from 'react'

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
import styles from '~/src/components/Navigator/Navigator.module.scss'
import { Text } from '~/src/components/Text'

import type NavGroupProps from './NavGroup.types'

import {
  ChevronWrapper,
  ChildrenWrapper,
} from './NavGroup.styled'

export const NAV_GROUP_TEST_ID = 'bezier-react-nav-group'
export const NAV_GROUP_LEFT_ICON_TEST_ID = 'bezier-react-nav-group-left-icon'

const NavGroup = forwardRef<HTMLButtonElement, NavGroupProps>(function NavGroup({
  as,
  testId = NAV_GROUP_TEST_ID,
  name,
  style,
  className,
  interpolation,
  children,
  content,
  rightContent,
  leftIcon,
  open,
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

  const hasChildren = !isNil(children)
  const chevronIconSource = open ? ChevronSmallDownIcon : ChevronSmallRightIcon
  const ariaName = `${name}Menu`

  return (
    <li
      className={styles.Wrapper}
      role="none"
    >
      <button
        {...rest}
        ref={forwardedRef}
        as={as}
        type="button"
        style={style}
        className={classNames(
          styles.Item,
          className,
        )}
        interpolation={interpolation}
        onClick={handleClickItem}
        data-testid={testId}
        role="menuitem"
        aria-haspopup={hasChildren}
        aria-expanded={open}
        aria-controls={ariaName}
      >
        <div className={styles.LeftIconWrapper}>
          <Icon
            testId={NAV_GROUP_LEFT_ICON_TEST_ID}
            source={leftIcon}
            size={IconSize.S}
            color={active ? 'bgtxt-blue-normal' : 'txt-black-dark'}
          />
        </div>

        <Text typo="14" truncated>
          { content }
        </Text>

        { hasChildren && (
          <ChevronWrapper>
            <Icon
              source={chevronIconSource}
              size={IconSize.S}
              color="txt-black-dark"
            />
          </ChevronWrapper>
        ) }

        { rightContent && (
          <div className={styles.RightContentWrapper}>
            { rightContent }
          </div>
        ) }
      </button>

      { open && (
        <ChildrenWrapper
          role="menu"
          id={ariaName}
        >
          { open && children }
        </ChildrenWrapper>
      ) }
    </li>
  )
})

export default memo(NavGroup)
