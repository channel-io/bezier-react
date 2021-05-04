/* External dependencies */
import React, { useCallback, useMemo, useState, useEffect, forwardRef } from 'react'
import { noop, isNil } from 'lodash-es'

/* Internal dependencies */
import { LIST_GROUP_PADDING_LEFT } from '../../constants/ListPadding'
import { ListMenuContext } from '../../contexts/ListMenuContext'
import useListMenuContext from '../../hooks/useListMenuContext'
import { isListItem } from '../List/ListItem/ListItem'
import { IconSize } from '../Icon'
import OutlineItemProps, {
  ChevronIconType,
} from './OutlineItem.types'
import {
  GroupItemWrapper,
  StyledIcon,
  ContentWrapper,
  ChevronWrapper,
} from './OutlineItem.styled'

export const OUTLINE_ITEM_TEST_ID = 'ch-design-system-outline-item'

function OutlineItemComponent({
  as,
  testId = OUTLINE_ITEM_TEST_ID,
  className,
  interpolation,
  chevronClassName,
  chevronInterpolation,
  contentClassName,
  contentInterpolation,
  iconClassName,
  iconInterpolation,
  paddingLeft: givenPaddingLeft,
  open = false,
  active: givenActive,
  chevronIconType = ChevronIconType.Small,
  chevronIconSize = IconSize.XS,
  leftIcon,
  leftIconColor,
  disableIconActive = false,
  name,
  href,
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
}: OutlineItemProps,
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

  const ContentComponent = useMemo(() => {
    const chevronIcon = `${chevronIconType}-${open ? 'down' : 'right'}` as const

    return (
      <>
        <ChevronWrapper>
          { !isNil(children) && (
            <StyledIcon
              className={chevronClassName}
              interpolation={chevronInterpolation}
              name={chevronIcon}
              size={chevronIconSize}
              onClick={handleClickIcon}
              color="txt-black-darker"
            />
          ) }
        </ChevronWrapper>
        { !isNil(leftIcon) && (
        <StyledIcon
          className={iconClassName}
          interpolation={iconInterpolation}
          name={leftIcon}
          size={IconSize.S}
          active={active}
          disableIconActive={disableIconActive}
          color={leftIconColor}
          marginRight={8}
        />
        ) }
        <ContentWrapper
          className={contentClassName}
          interpolation={contentInterpolation}
        >
          { content }
        </ContentWrapper>
        { rightContent }
      </>
    )
  },
  [
    iconClassName,
    iconInterpolation,
    chevronClassName,
    chevronInterpolation,
    contentClassName,
    contentInterpolation,
    content,
    chevronIconSize,
    chevronIconType,
    leftIcon,
    leftIconColor,
    open,
    rightContent,
    handleClickIcon,
    disableIconActive,
    active,
    children,
  ])

  const Items = useMemo(() => (
    React.Children.map(children, (element, index) => {
      if (!React.isValidElement(element)) {
        return element
      }

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

  if (!isNil(href)) {
    return (
      <>
        <GroupItemWrapper
          ref={forwardedRef}
          as="a"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          name={name}
          className={className}
          interpolation={interpolation}
          open={open}
          active={false}
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

  return (
    <>
      <GroupItemWrapper
        as={as}
        ref={forwardedRef}
        name={name}
        className={className}
        interpolation={interpolation}
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

const OutlineItem = forwardRef(OutlineItemComponent)

export default OutlineItem
