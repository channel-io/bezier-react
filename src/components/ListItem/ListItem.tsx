/* External dependencies */
import React, { Ref, useRef, forwardRef, useCallback, useMemo, Fragment } from 'react'
import { noop, isNil, isString } from 'lodash-es'
import { v4 as uuid } from 'uuid'

/* Internal dependencies */
import useMergeRefs from '../../hooks/useMergeRefs'
import useAdjacentElementBorderRadius from '../../hooks/useAdjacentElementBorderRadius'
import { mergeClassNames } from '../../utils/stringUtils'
import { Text } from '../Text'
import { IconSize } from '../Icon'
import { isIconName } from '../Icon/util'
import { Typography } from '../../foundation'
import ListItemProps, { ListItemSize, ListItemColorVariant } from './ListItem.types'
import {
  Wrapper,
  LeftContentWrapper,
  StyledIcon,
  TitleWrapper,
  Title,
  DescriptionWrapper,
  Description,
  RightContent,
  ContentWrapper,
} from './ListItem.styled'

export const LIST_ITEM_TEST_ID = 'bezier-react-list-menu-item'

type ListItemRefType = HTMLDivElement & HTMLAnchorElement

function filterActiveItem(node: HTMLElement) {
  return node.dataset.active === 'true'
}

function ListItem({
  className,
  contentClassName,
  iconClassName,
  as,
  testId = LIST_ITEM_TEST_ID,
  size = ListItemSize.M,
  descriptionMaxLines,
  content,
  description,
  name,
  leftContent,
  leftIcon,
  colorVariant = ListItemColorVariant.Monochrome,
  href,
  hide = false,
  rightContent = null,
  /* OptionItem Props */
  optionKey,
  /* Activable Element Props */
  active,
  activeClassName,
  disabled = false,
  /* HTMLAttribute Props */
  onClick = noop,
  onMouseDown = noop,
  onMouseEnter = noop,
  onMouseLeave = noop,
  ...othreProps
}: ListItemProps, forwardedRef: Ref<ListItemRefType>) {
  const listItemRef = useRef<ListItemRefType>(null)
  const mergedRef = useMergeRefs<ListItemRefType>(listItemRef, forwardedRef)

  useAdjacentElementBorderRadius(listItemRef.current, filterActiveItem, active)

  const clazzName = useMemo(() => (
    mergeClassNames(className, ((active && activeClassName) || undefined))
  ), [
    className,
    activeClassName,
    active,
  ])

  const handleClick = useCallback((e: React.MouseEvent) => {
    if (!disabled) {
      onClick(e, name)
    }
  }, [
    disabled,
    name,
    onClick,
  ])

  const getNewLineComponenet = useCallback((desc: string) => (
    desc.split('\n').map((str, index) => {
      if (index === 0) {
        return (
          <Text key={uuid()} typo={Typography.Size12}>
            { str }
          </Text>
        )
      }

      return (
        <Fragment key={uuid()}>
          <br />
          <Text typo={Typography.Size12}>
            { str }
          </Text>
        </Fragment>
      )
    })
  ), [])

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
            name={leftIcon}
            size={IconSize.S}
            active={active}
            colorVariant={colorVariant}
          />
        </LeftContentWrapper>
      )
    }

    return null
  }, [
    active,
    iconClassName,
    leftContent,
    leftIcon,
    colorVariant,
  ])

  const titleComponent = useMemo(() => (
    <TitleWrapper className={contentClassName}>
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
    content,
    contentClassName,
    size,
  ])

  const descriptionComponent = useMemo(() => (
    <DescriptionWrapper>
      <Description descriptionMaxLines={descriptionMaxLines}>
        {
          isString(description)
            ? getNewLineComponenet(description)
            : description
        }
      </Description>
    </DescriptionWrapper>
  ), [
    description,
    descriptionMaxLines,
    getNewLineComponenet,
  ])

  const rightComponent = useMemo(() => (
    <RightContent>
      { rightContent }
    </RightContent>
  ), [rightContent])

  const ContentComponent = useMemo(() => (
    <>
      <ContentWrapper>
        { leftComponent }
        { titleComponent }
        { description && descriptionComponent }
      </ContentWrapper>
      { rightContent && rightComponent }
    </>
  ), [
    leftComponent,
    titleComponent,
    description,
    descriptionComponent,
    rightContent,
    rightComponent,
  ])

  if (hide) { return null }

  if (!isNil(href)) {
    return (
      <Wrapper
        ref={mergedRef}
        as="a"
        className={clazzName}
        size={size}
        draggable={false}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        onMouseDown={onMouseDown}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        active={false}
        colorVariant={colorVariant}
        disabled={disabled}
        data-active={false}
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
      ref={mergedRef}
      as={as}
      className={clazzName}
      size={size}
      onClick={handleClick}
      onMouseDown={onMouseDown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      active={active}
      disabled={disabled}
      colorVariant={colorVariant}
      data-active={active}
      data-option-key={optionKey}
      data-testid={testId}
      {...othreProps}
    >
      { ContentComponent }
    </Wrapper>
  )
}

export default forwardRef(ListItem)
