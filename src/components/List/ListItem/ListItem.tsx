/* External dependencies */
import React, { Ref, forwardRef, useCallback, useMemo } from 'react'
import { get, noop, isNil, isString } from 'lodash-es'

/* Internal dependencies */
import { mergeClassNames } from '../../../utils/stringUtils'
import { IconSize } from '../../Icon'
import ListItemProps from './ListItem.types'
import { ContentWrapper, StyledIcon, Wrapper } from './ListItem.styled'

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
  content,
  name,
  leftIcon,
  leftIconColor,
  disableIconActive = false,
  paddingLeft,
  href,
  hide = false,
  rightContent = null,
  /* OptionItem Props */
  optionKey,
  /* Activable Element Props */
  active = false,
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

  const ContentComponent = useMemo(() => (
    <>
      {
        !isNil(leftIcon) && (
          isString(leftIcon) ? (
            <StyledIcon
              className={iconClassName}
              name={leftIcon}
              size={IconSize.S}
              marginRight={8}
              color={(!disableIconActive && active) ? 'bgtxt-blue-normal' : leftIconColor}
            />
          ) : leftIcon
        )
      }
      <ContentWrapper className={contentClassName}>
        { content }
      </ContentWrapper>
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
    rightContent,
  ])

  if (hide) return null

  if (!isNil(href)) {
    return (
      <Wrapper
        ref={forwardedRef}
        as="a"
        className={clazzName}
        paddingLeft={paddingLeft}
        draggable={false}
        href={href}
        target="_blank"
        rel="noopener noreferer"
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
