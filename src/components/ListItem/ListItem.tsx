/* External dependencies */
import React, { Ref, forwardRef, useCallback, useMemo, Fragment } from 'react'
import { noop, isNil, isString } from 'lodash-es'
import { v4 as uuid } from 'uuid'

/* Internal dependencies */
import { mergeClassNames } from '../../utils/stringUtils'
import { Text } from '../Text'
import { IconSize } from '../Icon'
import { isIconName } from '../Icon/util'
import { Typography } from '../../foundation'
import ListItemProps, { ListItemSize } from './ListItem.types'
import {
  Wrapper,
  ContentWrapper,
  LeftContentWrapper,
  StyledIcon,
  IconMargin,
  TitleWrapper,
  Title,
  DescriptionWrapper,
  Description,
  RightContent,
} from './ListItem.styled'

export const LIST_ITEM_TEST_ID = 'bezier-react-list-menu-item'

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
  onMouseDown = noop,
  ...othreProps
}: ListItemProps, forwardedRef: Ref<any>) {
  const clazzName = useMemo(() => (
    mergeClassNames(className, ((active && activeClassName) || undefined))
  ), [
    className,
    activeClassName,
    active,
  ])

  const handleClick = useCallback((e: React.MouseEvent) => {
    onClick(e, name)
  }, [
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
    leftContent,
    leftIcon,
    leftIconColor,
  ])

  const titleComponent = useMemo(() => (
    <TitleWrapper className={contentClassName}>
      { leftComponent }
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
    leftComponent,
    content,
    contentClassName,
    size,
  ])

  const descriptionComponent = useMemo(() => (
    <DescriptionWrapper
      active={active}
    >
      { leftIcon && <IconMargin /> }
      <Description descriptionMaxLines={descriptionMaxLines}>
        {
          isString(description)
            ? getNewLineComponenet(description)
            : description
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
        onMouseDown={onMouseDown}
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
      onMouseDown={onMouseDown}
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

export default forwardRef(ListItem)
