/* External dependencies */
import React, { useCallback, memo } from 'react'
import { noop } from 'lodash-es'

/* Internal dependencies */
import { Typography } from 'Foundation'
import { Icon, IconSize, isIconName } from 'Components/Icon'
import type NavItemProps from './NavItem.types'
import {
  Item,
  Wrapper,
  ContentWrapper,
  RightContentWrapper,
  LeftIconWrapper,
} from './NavItem.styled'

export const NAV_ITEM_TEST_ID = 'bezier-react-nav-item'

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
