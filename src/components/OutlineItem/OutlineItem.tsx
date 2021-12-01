/* External dependencies */
import React, { useCallback, useMemo, useState, useEffect, forwardRef } from 'react'
import { noop, isNil } from 'lodash-es'

/* Internal dependencies */
import { IconSize } from '../Icon'
import { isIconName } from '../Icon/util'
import { OutlineItemContext } from './OutlineItemContext'
import useOutlineItemContext from './useOutlineItemContext'
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

export const OUTLINE_ITEM_TEST_ID = 'bezier-react-outline-item'
export const OUTLINE_ITEM_LEFT_ICON_TEST_ID = 'bezier-react-outline-item-left-icon'

function OutlineItem(
  {
    as,
    testId = OUTLINE_ITEM_TEST_ID,
    leftIconTestId = OUTLINE_ITEM_LEFT_ICON_TEST_ID,
    style,
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
    focused = false,
    chevronIconType = ChevronIconType.Small,
    chevronIconSize = IconSize.XS,
    leftContent,
    leftIcon,
    leftIconColor,
    disableChevron = false,
    disableIconActive = false,
    name,
    href,
    content = null,
    rightContent = null,
    hide = false,
    onOpen = noop,
    onClickArrow = noop,
    /* OptionMenuHost Props */
    selectedOutlineItemIndex = null,
    onChangeOption = noop,
    /* HTMLAttribute props */
    onClick: givenOnClick = noop,
    children,
  }: OutlineItemProps,
  forwardedRef: React.Ref<HTMLElement>,
) {
  const [currentOutlineItemIndex, setCurrentOutlineItemIndex] = useState<number | null>(selectedOutlineItemIndex)

  useEffect(() => {
    const childs = React.Children.toArray(children)
    if (isNil(selectedOutlineItemIndex)
      || (selectedOutlineItemIndex < childs.length && selectedOutlineItemIndex < 0)) {
      setCurrentOutlineItemIndex(null)
      return
    }

    const element = childs[selectedOutlineItemIndex]

    if (React.isValidElement(element) && isNil(element.props.children)) {
      if (element.props.href) { return }

      setCurrentOutlineItemIndex(selectedOutlineItemIndex)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOutlineItemIndex])

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
  }, [
    name,
    onChangeOption,
  ])

  const handleClickIcon = useCallback((event?: React.MouseEvent<SVGSVGElement>) => {
    if (onClickArrow) {
      event?.stopPropagation()
      onClickArrow(name)
    }
  }, [
    name,
    onClickArrow,
  ])

  const context = useOutlineItemContext({
    paddingLeft: givenPaddingLeft,
    active: givenActive,
    onClick: givenOnClick,
  }, LIST_GROUP_PADDING_LEFT)
  const { paddingLeft, active, onClick } = context

  const handleClickGroup = useCallback((event?: React.MouseEvent) => {
    onClick(event, name)
  }, [
    name,
    onClick,
  ])

  const chevronComponent = useMemo(() => {
    if (disableChevron) {
      return null
    }

    const chevronIcon = `${chevronIconType}-${open ? 'down' : 'right'}` as const
    const showChevron = !isNil(children)

    return (
      <ChevronWrapper>
        { showChevron && (
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
    )
  }, [
    disableChevron,
    open,
    chevronIconType,
    chevronIconSize,
    chevronClassName,
    chevronInterpolation,
    children,
    handleClickIcon,
  ])

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
            testId={leftIconTestId}
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
    leftIconTestId,
  ])

  const ContentComponent = useMemo(() => (
    <>
      { chevronComponent }
      { leftComponent }
      <ContentWrapper
        className={contentClassName}
        interpolation={contentInterpolation}
      >
        { content }
      </ContentWrapper>
      { rightContent }
    </>
  ),
  [
    chevronComponent,
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
        active: currentOutlineItemIndex === index,
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
    currentOutlineItemIndex,
    handleClickItem,
  ])

  if (hide) { return null }

  if (!isNil(href)) {
    return (
      <>
        <GroupItemWrapper
          ref={forwardedRef as React.Ref<HTMLAnchorElement>}
          as="a"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={style}
          className={className}
          interpolation={interpolation}
          active={false}
          focused={focused}
          currentOutlineItemIndex={currentOutlineItemIndex}
          paddingLeft={paddingLeft}
          onClick={handleClickGroup}
          data-testid={testId}
          data-active-index={currentOutlineItemIndex}
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
        style={style}
        className={className}
        interpolation={interpolation}
        active={active}
        focused={focused}
        currentOutlineItemIndex={currentOutlineItemIndex}
        paddingLeft={paddingLeft}
        onClick={handleClickGroup}
        data-testid={testId}
        data-active-index={currentOutlineItemIndex}
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
