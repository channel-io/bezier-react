import React, {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'

import {
  ChevronSmallDownIcon,
  ChevronSmallRightIcon,
  isBezierIcon,
} from '@channel.io/bezier-icons'
import classNames from 'classnames'

import { noop } from '~/src/utils/function'
import { isNil } from '~/src/utils/type'

import { IconSize } from '~/src/components/Icon'

import type OutlineItemProps from './OutlineItem.types'
import {
  OutlineItemContextProvider,
  useOutlineItemContext,
} from './OutlineItemContext'

import {
  ChevronWrapper,
  ContentWrapper,
  GroupItemWrapper,
  LeftContentWrapper,
  StyledIcon,
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
    contentClassName,
    contentInterpolation,
    iconClassName,
    iconInterpolation,
    paddingLeft: givenPaddingLeft,
    open = false,
    active: givenActive,
    focused = false,
    leftContent,
    leftIcon,
    leftIconColor = 'txt-black-dark',
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

    const chevronSource = open ? ChevronSmallDownIcon : ChevronSmallRightIcon
    const showChevron = !isNil(children)

    return (
      <ChevronWrapper>
        { showChevron && (
          <StyledIcon
            source={chevronSource}
            size={IconSize.XS}
            onClick={handleClickIcon}
            color="txt-black-darker"
          />
        ) }
      </ChevronWrapper>
    )
  }, [
    children,
    disableChevron,
    handleClickIcon,
    open,
  ])

  const leftComponent = useMemo(() => {
    if (!isNil(leftContent)) {
      return (
        <LeftContentWrapper>
          { leftContent }
        </LeftContentWrapper>
      )
    }

    const isIcon = isBezierIcon(leftIcon)

    if (isIcon) {
      const iconProps = {
        testId: leftIconTestId,
        className: classNames(
          iconClassName,
          (!disableIconActive && active) && 'active',
        ),
        interpolation: iconInterpolation,
        size: IconSize.S,
        color: leftIconColor,
      }

      const Icon = (() => {
        if (isIcon) {
          return (
            <StyledIcon
              {...iconProps}
              source={leftIcon}
            />
          )
        }
        return <></>
      })()

      return (
        <LeftContentWrapper>
          { Icon }
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

      // eslint-disable-next-line react/jsx-no-constructed-context-values
      const passedContext = {
        ...context,
        active: currentOutlineItemIndex === index,
        onClick: () => handleClickItem(index, element.props.optionKey),
      }

      return (
        <OutlineItemContextProvider value={passedContext}>
          { element }
        </OutlineItemContextProvider>
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
