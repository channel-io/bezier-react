/* External dependencies */
import React, { useCallback, memo } from 'react'
import { noop, isNil } from 'lodash-es'

/* Internal dependencies */
import { Typography } from 'Foundation'
import useDepthContext, { DepthContext } from 'Hooks/useDepthContext'
import { Icon, IconSize, isIconName } from 'Components/Icon'
import type NavItemProps from './NavItem.types'
import {
  ItemWrapper,
  LeftIconWrapper,
  ChevronWrapper,
  ContentWrapper,
  RightContentWrapper,
} from './NavItem.styled'

const DEFAULT_INDENT = 30
const DEFAULT_PADDING_LEFT = 6
export const NAV_ITEM_TEST_ID = 'bezier-react-nav-item'

function NavItem({
  as,
  testId = NAV_ITEM_TEST_ID,
  name,
  style,
  className,
  interpolation,
  children,
  content,
  rightContent,
  leftIcon,
  leftIconColor = 'txt-black-dark',
  indent = DEFAULT_INDENT,
  active,
  open,
  onClick = noop,
}: NavItemProps) {
  const depthInfo = useDepthContext((parent) => ({
    depth: parent.depth + 1,
    paddingLeft: (parent.paddingLeft ?? (DEFAULT_PADDING_LEFT - indent)) as number + indent,
  }))

  const handleClickItem = useCallback((e?: React.MouseEvent) => {
    onClick(e, name)
  }, [
    name,
    onClick,
  ])

  const showChevron = !isNil(children)
  const chevronIconName = open ? 'chevron-small-down' : 'chevron-small-right'
  const showLeftComponent = isIconName(leftIcon)

  return (
    <>
      <ItemWrapper
        as={as}
        active={active}
        open={open}
        style={style}
        className={className}
        interpolation={interpolation}
        paddingLeft={depthInfo.paddingLeft ?? 0}
        onClick={handleClickItem}
        data-testid={testId}
      >
        { showLeftComponent && (
          <LeftIconWrapper>
            <Icon
              name={leftIcon}
              size={IconSize.S}
              color={leftIconColor}
            />
          </LeftIconWrapper>
        ) }

        <ContentWrapper typo={Typography.Size14}>
          { content }
        </ContentWrapper>

        { showChevron && (
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
      </ItemWrapper>

      { open && (
        <DepthContext.Provider value={depthInfo}>
          { children }
        </DepthContext.Provider>
      ) }
    </>
  )
}

export default memo(NavItem)
