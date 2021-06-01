/* External dependencies */
import React, {
  forwardRef,
  useState,
  useCallback,
  useMemo,
} from 'react'
import {
  noop,
  isNil,
  isEmpty,
  isString,
} from 'lodash-es'
import { v4 as uuid } from 'uuid'

/* Internal dependencies */
import useMergeRefs from '../../hooks/useMergeRefs'
import useAdjacentElementBorderRadius from '../../hooks/useAdjacentElementBorderRadius'
import { mergeClassNames } from '../../utils/stringUtils'
import { Text } from '../Text'
import { IconSize } from '../Icon'
import { isIconName } from '../Icon/util'
import { Typography } from '../../foundation'
import ListItemProps, {
  ListItemSize,
  ListItemColorVariant,
} from './ListItem.types'
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
  colorVariant = ListItemColorVariant.Monochrome,
  href = '',
  hide = false,
  rightContent = null,
  /* OptionItem Props */
  optionKey,
  /* Activable Element Props */
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

    if (!isNil(leftIcon) && isIconName(leftIcon)) {
      return (
        <LeftContentWrapper>
          <StyledIcon
            className={iconClassName}
            name={leftIcon}
            size={IconSize.S}
            active={isActive}
            colorVariant={colorVariant}
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
    colorVariant,
  ])

  const titleComponent = useMemo(() => (
    <TitleWrapper className={contentClassName}>
      <Title>
        { isString(content) ? (
          <Text
            typo={size === ListItemSize.XL
              ? Typography.Size18
              : Typography.Size14}
          >
            { content }
          </Text>
        ) : content }
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
    colorVariant,
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
    colorVariant,
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
