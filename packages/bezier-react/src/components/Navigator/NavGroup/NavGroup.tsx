import React, {
  forwardRef,
  memo,
  useCallback,
} from 'react'

import {
  ChevronSmallDownIcon,
  ChevronSmallRightIcon,
} from '@channel.io/bezier-icons'

import { Typography } from '~/src/foundation'

import { noop } from '~/src/utils/function'
import { isNil } from '~/src/utils/type'

import {
  Icon,
  IconSize,
} from '~/src/components/Icon'
import { Text } from '~/src/components/Text'

import type NavGroupProps from './NavGroup.types'

import {
  ChevronWrapper,
  ChildrenWrapper,
  Item,
  LeftIconWrapper,
  RightContentWrapper,
  Wrapper,
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
    <Wrapper role="none">
      <Item
        {...rest}
        ref={forwardedRef}
        as={as}
        active={active}
        style={style}
        className={className}
        interpolation={interpolation}
        onClick={handleClickItem}
        data-testid={testId}
        role="menuitem"
        aria-haspopup={hasChildren}
        aria-expanded={open}
        aria-controls={ariaName}
      >
        <LeftIconWrapper>
          <Icon
            testId={NAV_GROUP_LEFT_ICON_TEST_ID}
            source={leftIcon}
            size={IconSize.S}
            color={active ? 'bgtxt-blue-normal' : 'txt-black-dark'}
          />
        </LeftIconWrapper>

        <Text typo={Typography.Size14} truncated>
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
          <RightContentWrapper>
            { rightContent }
          </RightContentWrapper>
        ) }
      </Item>

      { open && (
        <ChildrenWrapper
          role="menu"
          id={ariaName}
        >
          { open && children }
        </ChildrenWrapper>
      ) }
    </Wrapper>
  )
})

export default memo(NavGroup)
