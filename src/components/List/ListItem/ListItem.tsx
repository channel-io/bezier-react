/* External dependencies */
import React, { Ref, forwardRef, useCallback, useMemo } from 'react'
import { get, noop, isNil, isString } from 'lodash-es'

/* Internal dependencies */
import { LIST_ITEM_PADDING_LEFT } from '../../../constants/ListPadding'
import useListMenuContext from '../../../hooks/useListMenuContext'
import { mergeClassNames } from '../../../utils/stringUtils'
import { Text } from '../../Text'
import { Icon, IconSize } from '../../Icon'
import { isIconName } from '../../Icon/generated'
import { Typography } from '../../../foundation'
import ListItemProps, { ListItemSize } from './ListItem.types'
import {
  ContentWrapper,
  LeftSide,
  IconWrapper,
  Wrapper,
  DescriptionWrapper,
  Content,
  Description,
} from './ListItem.styled'

export const LIST_ITEM_COMPONENT_NAME = 'ListItem'
export const LIST_ITEM_TEST_ID = 'ch-design-system-list-menu-item'

export function isListItem(element: any): element is React.ReactElement<ListItemProps> {
  return React.isValidElement(element) &&
    get(element, 'type.displayName') === LIST_ITEM_COMPONENT_NAME
}

function ListItemComponent({
  className,
  contentClassName,
  iconClassName,
  as,
  testId = LIST_ITEM_COMPONENT_NAME,
  size = ListItemSize.M,
  showLine,
  content,
  description,
  name,
  leftIcon,
  leftIconColor,
  disableIconActive = false,
  paddingLeft: givenPaddingLeft = 0,
  href,
  hide = false,
  rightContent = null,
  /* OptionItem Props */
  optionKey,
  /* Activable Element Props */
  active: givenActive,
  activeClassName,
  /* HTMLAttribute Props */
  onClick: givenOnClick = noop,
  ...othreProps
}: ListItemProps, forwardedRef: Ref<any>) {
  const context = useListMenuContext({
    paddingLeft: givenPaddingLeft,
    active: givenActive,
    onClick: givenOnClick,
  }, LIST_ITEM_PADDING_LEFT)
  const { paddingLeft, active, onClick } = context

  const clazzName = useMemo(() => (
    mergeClassNames(className, ((active && activeClassName) || undefined))
  ), [
    className,
    activeClassName,
    active,
  ])

  const handleClick = useCallback((e) => {
    if (!active) {
      onClick(e, name)
    }
  }, [
    active,
    name,
    onClick,
  ])

  const ContentComponent = useMemo(() => (
    <>
      <LeftSide>
        <ContentWrapper className={contentClassName}>
          {
            leftIcon && (
              (isString(leftIcon) && isIconName(leftIcon))
                ? (
                  <IconWrapper
                    color={leftIconColor}
                    className={iconClassName}
                    active={active}
                    disableIconActive={disableIconActive}
                  >
                    <Icon
                      name={leftIcon}
                      size={IconSize.S}
                    />
                  </IconWrapper>
                ) : leftIcon
            )
          }
          <Content showLine={showLine}>
            <Text
              typo={size === ListItemSize.XL
                ? Typography.Size18
                : Typography.Size14}
            >
              { content }
            </Text>
          </Content>
        </ContentWrapper>
        { description && (
          <DescriptionWrapper
            active={active}
          >
            { leftIcon && <IconWrapper /> }
            <Description showLine={showLine}>
              <Text
                typo={Typography.Size14}
              >
                { description }
              </Text>
            </Description>
          </DescriptionWrapper>
        ) }
      </LeftSide>
      { rightContent }
    </>
  ), [
    leftIcon,
    iconClassName,
    disableIconActive,
    active,
    leftIconColor,
    contentClassName,
    content,
    description,
    rightContent,
    size,
    showLine,
  ])

  if (hide) return null

  if (!isNil(href)) {
    return (
      <Wrapper
        ref={forwardedRef}
        as="a"
        className={clazzName}
        size={size}
        paddingLeft={paddingLeft}
        draggable={false}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        active={false}
        data-active={active}
        data-option-key={optionKey}
        data-testid={testId}
        {...othreProps}
      >
        { ContentComponent }
      </Wrapper>
    )
  }

  return (
    <Wrapper
      as={as}
      className={clazzName}
      size={size}
      paddingLeft={paddingLeft}
      onClick={handleClick}
      active={active}
      data-active={active}
      data-option-key={optionKey}
      data-testid={testId}
      {...othreProps}
    >
      { ContentComponent }
    </Wrapper>
  )
}

const ListItem = forwardRef(ListItemComponent)
ListItem.displayName = LIST_ITEM_COMPONENT_NAME

export default ListItem
