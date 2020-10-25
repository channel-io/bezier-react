/* External dependencies */
import React, { useCallback, useMemo, useState, useEffect, forwardRef } from 'react'
import _ from 'lodash'

/* Internal dependencies */
import { isSidebarMenuItem } from '../SidebarMenuItem/SidebarMenuItem'
import { Icon, IconSize } from '../../Icon'
import SidebarMenuGroupProps from './SidebarMenuGroup.types'
import { GroupItemWrapper, ChildrenWrapper, GroupItemContentWrapper } from './SidebarMenuGroup.styled'

export const SIDEBAR_MENU_GROUP_TEST_ID = 'ch-design-system-sidebar-menu-group'

function SidebarMenuGroup({
  as,
  testId = SIDEBAR_MENU_GROUP_TEST_ID,
  open = false,
  leftIcon,
  content = null,
  rightContent = null,
  onClickArrow = _.noop,
  arrowClassName,
  /* OptionMenuHost Props */
  selectedMenuItemIndex = null,
  onChangeOption = _.noop,
  /* HTMLAttribute props */
  onClick = _.noop,
  children,
  className,
  ...otherProps
}: SidebarMenuGroupProps,
forwardedRef: React.Ref<HTMLElement>,
) {
  const [currentMenuItemIndex, setCurrentMenuItemIndex] = useState<number | null>(selectedMenuItemIndex)

  useEffect(() => {
    if (_.isNumber(selectedMenuItemIndex)) {
      setCurrentMenuItemIndex(selectedMenuItemIndex)
    }
  }, [selectedMenuItemIndex])

  const handleClickItem = useCallback((
    itemIndex: number,
    optionKey: string,
  ) => {
    setCurrentMenuItemIndex(itemIndex)
    onChangeOption(optionKey, itemIndex)
  }, [onChangeOption])

  const handleClickIcon = useCallback((ev: React.MouseEvent<SVGSVGElement>) => {
    ev.stopPropagation()
    onClickArrow()
  }, [onClickArrow])

  const Content = useMemo(() => (
    <>
      <GroupItemContentWrapper>
        { !_.isNil(leftIcon) && (
          <Icon
            name={leftIcon}
            size={IconSize.S}
            marginRight={10}
          />
        ) }
        { content }
      </GroupItemContentWrapper>
      {
        !_.isEmpty(children) && !rightContent ? (
          <Icon
            className={arrowClassName}
            name={open ? 'chevron-up' : 'chevron-down'}
            size={IconSize.XS}
            onClick={handleClickIcon}
          />
        ) : rightContent
      }
    </>
  ), [
    content,
    leftIcon,
    arrowClassName,
    open,
    rightContent,
    children,
    handleClickIcon,
  ])

  const Items = useMemo(() => (
    React.Children.map(children, (element, index) => {
      if (isSidebarMenuItem(element)) {
        return React.cloneElement(element, {
          active: (currentMenuItemIndex === index),
          onClick: (event: React.MouseEvent<HTMLDivElement>) => {
            handleClickItem(index, element.props.optionKey)
            if (element.props.onClick) { element.props.onClick(event) }
          },
        })
      }

      return element
    })
  ), [
    children,
    currentMenuItemIndex,
    handleClickItem,
  ])

  return (
    <>
      <GroupItemWrapper
        as={as}
        ref={forwardedRef}
        className={className}
        currentMenuItemIndex={currentMenuItemIndex}
        onClick={onClick}
        data-testid={testId}
        data-active-index={currentMenuItemIndex}
        {...otherProps}
      >
        { Content }
      </GroupItemWrapper>
      { open && (
        <ChildrenWrapper>
          { Items }
        </ChildrenWrapper>
      ) }
    </>
  )
}

export default forwardRef(SidebarMenuGroup)
