import React, {
  forwardRef,
  memo,
  useCallback,
} from 'react'

import { Typography } from '~/src/foundation'

import { noop } from '~/src/utils/function'

import {
  Icon,
  IconSize,
} from '~/src/components/Icon'
import { Text } from '~/src/components/Text'

import type NavItemProps from './NavItem.types'

import {
  Item,
  LeftIconWrapper,
  RightContentWrapper,
  Wrapper,
} from './NavItem.styled'

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
        href={href}
        target={target}
        role="menuitem"
      >
        <LeftIconWrapper>
          { leftIcon && (
            <Icon
              testId={NAV_ITEM_LEFT_ICON_TEST_ID}
              source={leftIcon}
              size={IconSize.S}
              color={active ? 'bgtxt-blue-normal' : 'txt-black-dark'}
            />
          ) }
        </LeftIconWrapper>

        <Text typo={Typography.Size14} truncated>
          { content }
        </Text>

        { rightContent && (
          <RightContentWrapper>
            { rightContent }
          </RightContentWrapper>
        ) }
      </Item>
    </Wrapper>
  )
})

export default memo(NavItem)
