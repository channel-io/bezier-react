/* External dependencies */
import React, { Ref, forwardRef, useCallback, useMemo } from 'react'
import _ from 'lodash'

/* Internal dependencies */
import { mergeClassNames } from '../../../utils/stringUtils'
import SidebarMenuItemProps from './SidebarMenuItem.types'
import { Wrapper } from './SidebarMenuItem.styled'

export const SIDEBAR_MENU_ITEM_COMPONENT_NAME = 'SidebarMenuItem'
export const SIDEBAR_MENU_ITEM_TEST_ID = 'ch-design-system-sidebar-menu-item'

export function isSidebarMenuItem(element: any): element is React.ReactElement<SidebarMenuItemProps> {
  return React.isValidElement(element) &&
    _.get(element, 'type.displayName') === SIDEBAR_MENU_ITEM_COMPONENT_NAME
}

function SidebarMenuItemComponent({
  as,
  testId = SIDEBAR_MENU_ITEM_TEST_ID,
  content,
  href,
  optionKey,
  /* Activable Element Props */
  active = false,
  activeClassName,
  /* HTMLAttribute Props */
  onClick = _.noop,
  className,
  ...othreProps
}: SidebarMenuItemProps, forwardedRef: Ref<any>) {
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

  if (!_.isNil(href)) {
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
        data-option-key={optionKey}
        data-testId={testId}
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
      data-option-key={optionKey}
      data-testId={testId}
      {...othreProps}
    >
      { content }
    </Wrapper>
  )
}

const SidebarMenuItem = forwardRef(SidebarMenuItemComponent)
SidebarMenuItem.displayName = SIDEBAR_MENU_ITEM_COMPONENT_NAME

export default SidebarMenuItem
