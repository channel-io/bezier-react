/* External dependencies */
import React, { useCallback, memo } from 'react'
import { noop } from 'lodash-es'
import { isIconName } from '@bezier-react/icons'

/* Internal dependencies */
import { Typography } from 'Foundation'
import { Icon, IconSize } from 'Components/Icon'
import type NavItemProps from './NavItem.types'
import {
  Item,
  Wrapper,
  ContentWrapper,
  RightContentWrapper,
  LeftIconWrapper,
} from './NavItem.styled'

export const NAV_ITEM_TEST_ID = 'bezier-react-nav-item'
export const NAV_ITEM_LEFT_ICON_TEST_ID = 'bezier-react-nav-item-left-icon'

function NavItem({
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
}: NavItemProps) {
  const handleClickItem = useCallback((e?: React.MouseEvent) => {
    onClick(e, name)
  }, [
    name,
    onClick,
  ])

  const showLeftIcon = isIconName(leftIcon)

  return (
    <Wrapper role="none">
      <Item
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
          { showLeftIcon && (
            <Icon
              testId={NAV_ITEM_LEFT_ICON_TEST_ID}
              name={leftIcon}
              size={IconSize.S}
              color={active ? 'bgtxt-blue-normal' : 'txt-black-dark'}
            />
          ) }
        </LeftIconWrapper>

        <ContentWrapper typo={Typography.Size14}>
          { content }
        </ContentWrapper>

        { rightContent && (
          <RightContentWrapper>
            { rightContent }
          </RightContentWrapper>
        ) }
      </Item>
    </Wrapper>
  )
}

export default memo(NavItem)
