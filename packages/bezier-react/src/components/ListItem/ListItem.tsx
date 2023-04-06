/* External dependencies */
import React, {
  forwardRef,
  useCallback,
  useMemo,
  useState,
} from 'react'

import { v4 as uuid } from 'uuid'

/* Internal dependencies */
import { Typography } from '~/src/foundation'

import useMergeRefs from '~/src/hooks/useMergeRefs'
import { noop } from '~/src/utils/functionUtils'
import { mergeClassNames } from '~/src/utils/stringUtils'
import {
  isEmpty,
  isNil,
  isString,
} from '~/src/utils/typeUtils'

import {
  IconSize,
  isBezierIcon,
  isIconName,
} from '~/src/components/Icon'
import { Text } from '~/src/components/Text'

import type ListItemProps from './ListItem.types'
import {
  ListItemSize,
  ListItemVariant,
} from './ListItem.types'
import useAdjacentElementBorderRadius from './useAdjacentElementBorderRadius'

import {
  ContentWrapper,
  Description,
  DescriptionWrapper,
  LeftContentWrapper,
  RightContent,
  StyledIcon,
  StyledLegacyIcon,
  Title,
  TitleWrapper,
  Wrapper,
} from './ListItem.styled'

const LINE_BREAK_CHAR = '\n'

export const LIST_ITEM_TEST_ID = 'bezier-react-list-menu-item'

function filterActiveItem(node: HTMLElement) {
  return node.dataset.active === 'true'
}

type ListItemRef = HTMLDivElement & HTMLAnchorElement

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
  variant = ListItemVariant.Monochrome,
  href = '',
  hide = false,
  rightContent = null,
  /* OptionItem Props */
  optionKey,
  /* Activatable Element Props */
  active,
  activeClassName,
  focused = false,
  disabled = false,
  /* HTMLAttribute Props */
  onClick = noop,
  onMouseDown = noop,
  onMouseEnter = noop,
  onMouseLeave = noop,
  ...otherProps
}: ListItemProps,
forwardedRef: React.Ref<ListItemRef>,
) {
  const [listItemElement, setListItemElement] = useState<ListItemRef | null>(null)

  const setListItemRef = useCallback((node: ListItemRef | null) => {
    if (!node) { return }
    setListItemElement(node)
  }, [])

  const mergedRef = useMergeRefs<ListItemRef>(setListItemRef, forwardedRef)

  const isHyperLink = !isEmpty(href)
  const isActive = isHyperLink ? false : active

  useAdjacentElementBorderRadius(listItemElement, filterActiveItem, isActive)

  const mergedClassName = useMemo(() => (
    mergeClassNames(className, ((isActive && activeClassName) || undefined))
  ), [
    className,
    activeClassName,
    isActive,
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

  const getNewLineComponent = useCallback((desc: string) => (
    desc.split(LINE_BREAK_CHAR).map((str, index) => {
      if (index === 0) {
        return (
          <Text key={uuid()} typo={Typography.Size12}>
            { str }
          </Text>
        )
      }

      return (
        <React.Fragment key={uuid()}>
          <br />
          <Text typo={Typography.Size12}>
            { str }
          </Text>
        </React.Fragment>
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

    if (isIconName(leftIcon)) {
      return (
        <LeftContentWrapper>
          <StyledLegacyIcon
            className={iconClassName}
            name={leftIcon}
            size={IconSize.S}
            active={isActive}
            variant={variant}
          />
        </LeftContentWrapper>
      )
    }

    if (isBezierIcon(leftIcon)) {
      return (
        <LeftContentWrapper>
          <StyledIcon
            className={iconClassName}
            source={leftIcon}
            size={IconSize.S}
            active={isActive}
            variant={variant}
          />
        </LeftContentWrapper>
      )
    }

    return null
  }, [
    isActive,
    iconClassName,
    leftContent,
    leftIcon,
    variant,
  ])

  const titleComponent = useMemo(() => (
    <TitleWrapper className={contentClassName}>
      { isString(content) ? (
        <Title>
          <Text
            typo={size === ListItemSize.XL
              ? Typography.Size18
              : Typography.Size14}
          >
            { content }
          </Text>
        </Title>
      ) : content }
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
            ? getNewLineComponent(description)
            : description
        }
      </Description>
    </DescriptionWrapper>
  ), [
    description,
    descriptionMaxLines,
    getNewLineComponent,
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

  const commonDataAttr = useMemo(() => ({
    'data-active': isActive,
    'data-option-key': optionKey,
    'data-testid': testId,
  }), [
    isActive,
    optionKey,
    testId,
  ])

  const commonListItemProps = useMemo((): ListItemProps & { ref: React.Ref<ListItemRef> } => ({
    ref: mergedRef,
    className: mergedClassName,
    size,
    onClick: handleClick,
    onMouseDown,
    onMouseEnter,
    onMouseLeave,
    active: isActive,
    focused,
    disabled,
    variant,
    ...otherProps,
  }), [
    mergedRef,
    mergedClassName,
    size,
    handleClick,
    onMouseDown,
    onMouseEnter,
    onMouseLeave,
    isActive,
    focused,
    disabled,
    variant,
    otherProps,
  ])

  if (hide) { return null }

  return isHyperLink
    ? (
      <Wrapper
        {...commonDataAttr}
        {...commonListItemProps}
        as={'a' as React.ElementType<any>}
        href={href}
        draggable={false}
        target="_blank"
        rel="noopener noreferrer"
      >
        { ContentComponent }
      </Wrapper>
    )
    : (
      <Wrapper
        {...commonDataAttr}
        {...commonListItemProps}
        as={as}
      >
        { ContentComponent }
      </Wrapper>
    )
}

export default forwardRef(ListItem)
