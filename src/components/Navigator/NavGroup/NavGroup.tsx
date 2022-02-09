/* External dependencies */
import React, { useCallback, memo } from 'react'
import { noop, isNil } from 'lodash-es'

/* Internal dependencies */
import { Typography } from 'Foundation'
import { Icon, IconSize, isIconName } from 'Components/Icon'
import type NavGroupProps from './NavGroup.types'
import {
  Item,
  Wrapper,
  ChildrenWrapper,
  LeftIconWrapper,
  ChevronWrapper,
  ContentWrapper,
  RightContentWrapper,
} from './NavGroup.styled'

export const NAV_GROUP_TEST_ID = 'bezier-react-nav-group'

function NavGroup({
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
  leftIconColor = 'txt-black-dark',
  open,
  onClick = noop,
}: NavGroupProps) {
  const handleClickItem = useCallback((e?: React.MouseEvent) => {
    onClick(e, name)
  }, [
    name,
    onClick,
  ])

  const hasChildren = !isNil(children)
  const chevronIconName = open ? 'chevron-small-down' : 'chevron-small-right'
  const showLeftIcon = isIconName(leftIcon)

  return (
    <Wrapper
      role="menuitem"
      aria-haspopup={hasChildren}
      aria-expanded={open}
      aria-controls={name}
    >
      <Item
        as={as}
        open={open}
        style={style}
        className={className}
        interpolation={interpolation}
        onClick={handleClickItem}
        data-testid={testId}
      >
        <LeftIconWrapper>
          { showLeftIcon && (
            <Icon
              name={leftIcon}
              size={IconSize.S}
              color={leftIconColor}
            />
          ) }
        </LeftIconWrapper>

        <ContentWrapper typo={Typography.Size14}>
          { content }
        </ContentWrapper>

        { hasChildren && (
          <ChevronWrapper>
            <Icon
              name={chevronIconName}
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
          id={name}
        >
          { open && children }
        </ChildrenWrapper>
      ) }
    </Wrapper>
  )
}

export default memo(NavGroup)
