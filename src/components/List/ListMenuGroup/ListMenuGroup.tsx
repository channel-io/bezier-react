/* External dependencies */
import React, { useCallback, useMemo, useState, useEffect, forwardRef } from 'react'
import { noop, isNumber, isNil, isEmpty } from 'lodash-es'

/* Internal dependencies */
import { isListItem } from '../ListItem/ListItem'
import { Icon, IconSize } from '../../Icon'
import ListMenuGroupProps from './ListMenuGroup.types'
import { GroupItemWrapper, ChildrenWrapper, GroupItemContentWrapper } from './ListMenuGroup.styled'

export const SIDEBAR_MENU_GROUP_TEST_ID = 'ch-design-system-sidebar-menu-group'

function ListMenuGroup({
  as,
  testId = SIDEBAR_MENU_GROUP_TEST_ID,
  onOpen = noop,
  open = false,
  leftIcon,
  name,
  content = null,
  rightContent = null,
  onClickArrow = noop,
  arrowClassName,
  /* OptionMenuHost Props */
  selectedMenuItemIndex = null,
  onChangeOption = noop,
  /* HTMLAttribute props */
  onClick = noop,
  children,
  className,
  ...otherProps
}: ListMenuGroupProps,
forwardedRef: React.Ref<HTMLElement>,
) {
  const [currentMenuItemIndex, setCurrentMenuItemIndex] = useState<number | null>(selectedMenuItemIndex)

  useEffect(() => {
    if (isNumber(selectedMenuItemIndex)) {
      setCurrentMenuItemIndex(selectedMenuItemIndex)
    }
  }, [selectedMenuItemIndex])

  useEffect(() => {
    if (open) {
      onOpen(name)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  const handleClickItem = useCallback((
    itemIndex: number,
    optionKey: string,
  ) => {
    setCurrentMenuItemIndex(itemIndex)
    onChangeOption(name, optionKey, itemIndex)
  }, [name, onChangeOption])

  const handleClickIcon = useCallback((ev: React.MouseEvent<SVGSVGElement>) => {
    if (onClickArrow) {
      ev.stopPropagation()
      onClickArrow(name)
    }
  }, [name, onClickArrow])

  const Content = useMemo(() => (
    <>
      <GroupItemContentWrapper>
        { !isNil(leftIcon) && (
          <Icon
            name={leftIcon}
            size={IconSize.S}
            marginRight={10}
          />
        ) }
        { content }
      </GroupItemContentWrapper>
      {
        !isEmpty(children) && !rightContent ? (
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

export default forwardRef(ListMenuGroup)
