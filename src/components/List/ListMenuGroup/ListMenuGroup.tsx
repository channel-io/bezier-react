/* External dependencies */
import React, { useCallback, useMemo, useState, useEffect, forwardRef } from 'react'
import { noop, isNil } from 'lodash-es'

/* Internal dependencies */
import { LIST_GROUP_PADDING_LEFT } from '../../../constants/ListPadding'
import { ListMenuContext } from '../../../contexts/ListMenuContext'
import useListMenuContext from '../../../hooks/useListMenuContext'
import { isListItem } from '../ListItem/ListItem'
import { IconSize } from '../../Icon'
import ListMenuGroupProps from './ListMenuGroup.types'
import {
  GroupItemWrapper,
  StyledIcon,
  ContentWrapper,
  ChevronWrapper,
} from './ListMenuGroup.styled'

export const LIST_MENU_GROUP_TEST_ID = 'ch-design-system-list-menu-group'

function ListMenuGroupComponent({
  as,
  testId = LIST_MENU_GROUP_TEST_ID,
  className,
  chevronClassName,
  contentClassName,
  iconClassName,
  paddingLeft: givenPaddingLeft,
  open = false,
  active: givenActive,
  leftIcon,
  leftIconColor,
  disableIconActive = false,
  name,
  content = null,
  rightContent = null,
  hide = false,
  onOpen = noop,
  onClickArrow = noop,
  /* OptionMenuHost Props */
  selectedMenuItemIndex = null,
  onChangeOption = noop,
  /* HTMLAttribute props */
  onClick: givenOnClick = noop,
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

  const context = useListMenuContext({
    paddingLeft: givenPaddingLeft,
    active: givenActive,
    onClick: givenOnClick,
  }, LIST_GROUP_PADDING_LEFT)
  const { paddingLeft, active, onClick } = context

  const handleClickGroup = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    onClick(e, name)
  }, [name, onClick])

  const ContentComponent = useMemo(() => (
    <>
      <ChevronWrapper>
        <StyledIcon
          className={chevronClassName}
          name={`chevron-small-${open ? 'down' : 'right'}`}
          size={IconSize.XXS}
          onClick={handleClickIcon}
          color="txt-black-darker"
        />
      </ChevronWrapper>
      { !isNil(leftIcon) && (
        <StyledIcon
          className={iconClassName}
          name={leftIcon}
          size={IconSize.S}
          active={active}
          disableIconActive={disableIconActive}
          color={leftIconColor}
          marginRight={8}
        />
      ) }
      <ContentWrapper className={contentClassName}>
        { content }
      </ContentWrapper>
      { rightContent }
    </>
  ), [
    iconClassName,
    chevronClassName,
    contentClassName,
    content,
    leftIcon,
    leftIconColor,
    open,
    rightContent,
    handleClickIcon,
    disableIconActive,
    active,
  ])

  const Items = useMemo(() => (
    React.Children.map(children, (element, index) => {
      const passedContext = {
        ...context,
        active: currentMenuItemIndex === index,
        onClick: () => handleClickItem(index, element.props.optionKey),
      }

      return (
        <ListMenuContext.Provider value={passedContext}>
          { element }
        </ListMenuContext.Provider>
      )
    })
  ), [
    children,
    context,
    currentMenuItemIndex,
    handleClickItem,
  ])

  if (hide) return null

  return (
    <>
      <GroupItemWrapper
        as={as}
        ref={forwardedRef}
        name={name}
        className={className}
        open={open}
        active={active}
        currentMenuItemIndex={currentMenuItemIndex}
        onClick={handleClickGroup}
        data-testid={testId}
        data-active-index={currentMenuItemIndex}
        paddingLeft={paddingLeft}
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

export default ListMenuGroup
