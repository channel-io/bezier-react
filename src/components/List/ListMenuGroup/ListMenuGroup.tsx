/* External dependencies */
import React, { useCallback, useMemo, useState, useEffect, forwardRef } from 'react'
import { noop, isNil, get } from 'lodash-es'

/* Internal dependencies */
import { LIST_ITEM_PADDING_LEFT, LIST_MENU_GROUP_PADDING_LEFT } from '../../../constants/ListPadding'
import { isListItem } from '../ListItem/ListItem'
import { IconSize } from '../../Icon'
import ListMenuGroupProps from './ListMenuGroup.types'
import {
  GroupItemWrapper,
  GroupItemContentWrapper,
  StyledIcon,
  ContentWrapper,
} from './ListMenuGroup.styled'

export const LIST_MENU_GROUP_COMPONENT_NAME = 'ListMenuGroup'
export const LIST_MENU_GROUP_TEST_ID = 'ch-design-system-list-menu-group'

export function isListMenuGroup(element: any): element is React.ReactElement<ListMenuGroupProps> {
  return React.isValidElement(element) &&
    get(element, 'type.displayName') === LIST_MENU_GROUP_COMPONENT_NAME
}

function ListMenuGroupComponent({
  as,
  testId = LIST_MENU_GROUP_TEST_ID,
  className,
  chevronClassName,
  contentClassName,
  iconClassName,
  paddingLeft = 0,
  open = false,
  leftIcon,
  leftIconColor,
  name,
  content = null,
  rightContent = null,
  onOpen = noop,
  onClickArrow = noop,
  /* OptionMenuHost Props */
  selectedMenuItemIndex = null,
  onChangeOption = noop,
  /* HTMLAttribute props */
  onClick = noop,
  children,
  ...otherProps
}: ListMenuGroupProps,
forwardedRef: React.Ref<HTMLElement>,
) {
  const [currentMenuItemIndex, setCurrentMenuItemIndex] = useState<number | null>(selectedMenuItemIndex)

  useEffect(() => {
    const childs = React.Children.toArray(children)
    if (isNil(selectedMenuItemIndex)
      || (selectedMenuItemIndex < childs.length && selectedMenuItemIndex < 0)) {
      setCurrentMenuItemIndex(null)
      return
    }

    const element = childs[selectedMenuItemIndex]

    if (isListItem(element)) {
      if (element.props.href) { return }

      setCurrentMenuItemIndex(selectedMenuItemIndex)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMenuItemIndex])

  useEffect(() => {
    if (open) {
      onOpen(name)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  const handleClickGroup = useCallback(() => {
    if (onClick) {
      onClick(name)
    }
  }, [name, onClick])

  const handleClickItem = useCallback((
    itemIndex: number,
    optionKey: string,
  ) => {
    onChangeOption(name, optionKey, itemIndex)
  }, [name, onChangeOption])

  const handleClickIcon = useCallback((ev: React.MouseEvent<SVGSVGElement>) => {
    if (onClickArrow) {
      ev.stopPropagation()
      onClickArrow(name)
    }
  }, [name, onClickArrow])

  const ContentComponent = useMemo(() => (
    <>
      <GroupItemContentWrapper
        currentMenuItemIndex={currentMenuItemIndex}
        open={open}
        paddingLeft={paddingLeft}
      >
        <StyledIcon
          className={chevronClassName}
          name={`chevron-small-${open ? 'down' : 'right'}`}
          size={IconSize.S}
          onClick={handleClickIcon}
        />
        { !isNil(leftIcon) && (
          <StyledIcon
            className={iconClassName}
            name={leftIcon}
            size={IconSize.S}
            color={leftIconColor}
          />
        ) }
        <ContentWrapper className={contentClassName}>
          { content }
        </ContentWrapper>
      </GroupItemContentWrapper>
      { rightContent }
    </>
  ), [
    iconClassName,
    chevronClassName,
    contentClassName,
    content,
    paddingLeft,
    leftIcon,
    leftIconColor,
    open,
    rightContent,
    currentMenuItemIndex,
    handleClickIcon,
  ])

  const Items = useMemo(() => (
    React.Children.map(children, (element, index) => {
      if (isListItem(element)) {
        return React.cloneElement(element, {
          active: (currentMenuItemIndex === index),
          paddingLeft: paddingLeft + LIST_ITEM_PADDING_LEFT,
          onClick: (event: React.MouseEvent<HTMLDivElement>) => {
            handleClickItem(index, element.props.optionKey)
            if (element.props.onClick) { element.props.onClick(event) }
          },
        })
      }

      if (isListMenuGroup(element)) {
        return React.cloneElement(element, {
          paddingLeft: paddingLeft + LIST_MENU_GROUP_PADDING_LEFT,
        })
      }
      return element
    })
  ), [
    children,
    currentMenuItemIndex,
    handleClickItem,
    paddingLeft,
  ])

  return (
    <>
      <GroupItemWrapper
        as={as}
        ref={forwardedRef}
        name={name}
        className={className}
        open={open}
        currentMenuItemIndex={currentMenuItemIndex}
        onClick={handleClickGroup}
        data-testid={testId}
        data-active-index={currentMenuItemIndex}
        {...otherProps}
      >
        { ContentComponent }
      </GroupItemWrapper>
      { open && (
        Items
      ) }
    </>
  )
}

const ListMenuGroup = forwardRef(ListMenuGroupComponent)
ListMenuGroup.displayName = LIST_MENU_GROUP_COMPONENT_NAME

export default ListMenuGroup
