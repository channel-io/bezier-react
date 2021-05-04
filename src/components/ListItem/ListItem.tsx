/* External dependencies */
import React, { Ref, forwardRef, useCallback, useMemo, Fragment } from 'react'
import { get, noop, isNil, isString } from 'lodash-es'
import { v4 as uuid } from 'uuid'

/* Internal dependencies */
import { mergeClassNames } from '../../utils/stringUtils'
import { Text } from '../Text'
import { Icon, IconSize } from '../Icon'
import { isIconName } from '../Icon/util'
import { Typography } from '../../foundation'
import ListItemProps, { ListItemSize } from './ListItem.types'
import {
  Wrapper,
  ContentWrapper,
  IconWrapper,
  IconMargin,
  TitleWrapper,
  Title,
  DescriptionWrapper,
  Description,
  RightContent,
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
  descriptionMaxLines,
  content,
  description,
  name,
  leftIcon,
  leftIconColor,
  disableIconActive = false,
  href,
  hide = false,
  rightContent = null,
  /* OptionItem Props */
  optionKey,
  /* Activable Element Props */
  active,
  activeClassName,
  /* HTMLAttribute Props */
  onClick = noop,
  ...othreProps
}: ListItemProps, forwardedRef: Ref<any>) {
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

  const getNewLineComponenet = useCallback((desc: string) => (
    desc.split('\n').map((str, index) => {
      if (index === 0) {
        return (
          <Text key={uuid()} typo={Typography.Size14}>
            { str }
          </Text>
        )
      }

      return (
        <Fragment key={uuid()}>
          <br />
          <Text
            typo={Typography.Size14}
          >
            { str }
          </Text>
        </Fragment>
      )
    })
  ), [])

  const titleComponent = useMemo(() => (
    <TitleWrapper className={contentClassName}>
      {
        leftIcon && (
          isIconName(leftIcon)
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
      <Title>
        {
          isString(content) ? (
            <Text
              typo={size === ListItemSize.XL
                ? Typography.Size18
                : Typography.Size14}
            >
              { content }
            </Text>
          ) : content
        }
      </Title>
    </TitleWrapper>
  ), [
    active,
    content,
    contentClassName,
    disableIconActive,
    iconClassName,
    leftIcon,
    leftIconColor,
    size,
  ])

  const descriptionComponent = useMemo(() => (
    <DescriptionWrapper
      active={active}
    >
      { leftIcon && <IconMargin /> }
      <Description descriptionMaxLines={descriptionMaxLines}>
        {
          isString(description) ? (
            <Text
              typo={Typography.Size14}
            >
              { getNewLineComponenet(description) }
            </Text>
          ) : description
        }
      </Description>
    </DescriptionWrapper>
  ), [
    active,
    description,
    descriptionMaxLines,
    getNewLineComponenet,
    leftIcon,
  ])

  const rightComponent = useMemo(() => (
    <RightContent>
      { rightContent }
    </RightContent>
  ), [rightContent])

  const ContentComponent = useMemo(() => (
    <>
      <ContentWrapper>
        { titleComponent }
        { description && descriptionComponent }
      </ContentWrapper>
      { rightContent && rightComponent }
    </>
  ), [
    titleComponent,
    description,
    descriptionComponent,
    rightContent,
    rightComponent,
  ])

  if (hide) return null

  if (!isNil(href)) {
    return (
      <Wrapper
        ref={forwardedRef}
        as="a"
        className={clazzName}
        size={size}
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
