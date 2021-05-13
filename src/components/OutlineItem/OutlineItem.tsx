/* External dependencies */
import React, { useCallback, useMemo, useState, useEffect, forwardRef } from 'react'
import { noop, isNil } from 'lodash-es'

/* Internal dependencies */
import { OutlineItemContext } from '../../contexts/OutlineItemContext'
import useOutlineItemContext from '../../hooks/useOutlineItemContext'
import { IconSize } from '../Icon'
import { isIconName } from '../Icon/util'
import OutlineItemProps, {
  ChevronIconType,
} from './OutlineItem.types'
import {
  GroupItemWrapper,
  StyledIcon,
  ContentWrapper,
  ChevronWrapper,
  LeftContentWrapper,
} from './OutlineItem.styled'

const LIST_GROUP_PADDING_LEFT = 16

export const OUTLINE_ITEM_TEST_ID = 'ch-design-system-outline-item'

function OutlineItem(
  {
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
    leftContent,
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

  const handleClickIcon = useCallback((event?: React.MouseEvent<SVGSVGElement>) => {
    if (onClickArrow) {
      event?.stopPropagation()
      onClickArrow(name)
    }
  }, [name, onClickArrow])

  const context = useOutlineItemContext({
    paddingLeft: givenPaddingLeft,
    active: givenActive,
    onClick: givenOnClick,
  }, LIST_GROUP_PADDING_LEFT)
  const { paddingLeft, active, onClick } = context

  const handleClickGroup = useCallback((event?: React.MouseEvent) => {
    onClick(event, name)
  }, [name, onClick])

  const leftComponent = useMemo(() => {
    if (!isNil(leftContent)) {
      return (
        <LeftContentWrapper>
          { leftContent }
        </LeftContentWrapper>
      )
    }
    if (!isNil(leftIcon) && isIconName(leftIcon)) {
      return (
        <LeftContentWrapper>
          <StyledIcon
            className={iconClassName}
            interpolation={iconInterpolation}
            name={leftIcon}
            size={IconSize.S}
            active={active}
            disableIconActive={disableIconActive}
            color={leftIconColor}
          />
        </LeftContentWrapper>
      )
    }

    return null
  }, [
    active,
    disableIconActive,
    iconClassName,
    iconInterpolation,
    leftContent,
    leftIcon,
    leftIconColor,
  ])

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
        { leftComponent }
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
    chevronIconType,
    open,
    children,
    chevronClassName,
    chevronInterpolation,
    chevronIconSize,
    handleClickIcon,
    leftComponent,
    contentClassName,
    contentInterpolation,
    content,
    rightContent,
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
        <OutlineItemContext.Provider value={passedContext}>
          { element }
        </OutlineItemContext.Provider>
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
          ref={forwardedRef as React.Ref<HTMLAnchorElement>}
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

export default forwardRef(OutlineItem)
