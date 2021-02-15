/* External dependencies */
import React, { useCallback, useMemo, useState, useEffect, forwardRef } from 'react'
import { noop, isNil } from 'lodash-es'

/* Internal dependencies */
import { isListItem } from '../ListItem/ListItem'
import { IconSize } from '../../Icon'
import ListMenuGroupProps from './ListMenuGroup.types'
import {
  GroupItemWrapper,
  ChildrenWrapper,
  GroupItemContentWrapper,
  StyledIcon,
  ContentWrapper,
} from './ListMenuGroup.styled'

export const SIDEBAR_MENU_GROUP_TEST_ID = 'ch-design-system-sidebar-menu-group'

function ListMenuGroup({
  as,
  testId = SIDEBAR_MENU_GROUP_TEST_ID,
  className,
  arrowClassName,
  contentClassName,
  onOpen = noop,
  open = false,
  leftIcon,
  name,
  content = null,
  rightContent = null,
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
      >
        <StyledIcon
          className={arrowClassName}
          name={`chevron-small-${open ? 'right' : 'down'}`}
          size={IconSize.S}
          onClick={handleClickIcon}
        />
        { !isNil(leftIcon) && (
          <StyledIcon
            name={leftIcon}
            size={IconSize.S}
          />
        ) }
        <ContentWrapper className={contentClassName}>
          { content }
        </ContentWrapper>
      </GroupItemContentWrapper>
      { rightContent }
    </>
  ), [
    content,
    leftIcon,
    arrowClassName,
    contentClassName,
    open,
    rightContent,
    handleClickIcon,
    currentMenuItemIndex,
  ])

  const Items = useMemo(() => (
    React.Children.map(children, (element, index) => {
      if (isListItem(element)) {
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
        <ChildrenWrapper>
          { Items }
        </ChildrenWrapper>
      ) }
    </>
  )
}

export default forwardRef(ListMenuGroup)
