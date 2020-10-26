/* External dependencies */
import React, { Ref, forwardRef, useCallback, useMemo } from 'react'
import { get, noop, isNil } from 'lodash-es'

/* Internal dependencies */
import { mergeClassNames } from '../../../utils/stringUtils'
import ListItemProps from './ListItem.types'
import { Wrapper } from './ListItem.styled'

export const SIDEBAR_MENU_ITEM_COMPONENT_NAME = 'ListItem'
export const SIDEBAR_MENU_ITEM_TEST_ID = 'ch-design-system-sidebar-menu-item'

export function isListItem(element: any): element is React.ReactElement<ListItemProps> {
  return React.isValidElement(element) &&
    get(element, 'type.displayName') === SIDEBAR_MENU_ITEM_COMPONENT_NAME
}

function ListItemComponent({
  as,
  testId = SIDEBAR_MENU_ITEM_TEST_ID,
  content,
  href,
  /* OptionItem Props */
  optionKey,
  /* Activable Element Props */
  active = false,
  activeClassName,
  /* HTMLAttribute Props */
  onClick = noop,
  className,
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
      onClick(e)
    }
  }, [active, onClick])

  if (!isNil(href)) {
    return (
      <Wrapper
        ref={forwardedRef}
        as="a"
        className={clazzName}
        draggable={false}
        href={href}
        target="_blank"
        rel="noopener noreferer"
        onClick={handleClick}
        active={active}
        data-active={active}
        data-option-key={optionKey}
        data-testid={testId}
        {...othreProps}
      >
        { content }
      </Wrapper>
    )
  }

  return (
    <Wrapper
      as={as}
      className={clazzName}
      onClick={handleClick}
      active={active}
      data-active={active}
      data-option-key={optionKey}
      data-testid={testId}
      {...othreProps}
    >
      { content }
    </Wrapper>
  )
}

const ListItem = forwardRef(ListItemComponent)
ListItem.displayName = SIDEBAR_MENU_ITEM_COMPONENT_NAME

export default ListItem
