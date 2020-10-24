/* External dependencies */
import React, { useCallback, useMemo } from 'react'
import _ from 'lodash'

/* Internal dependencies */
import { mergeClassNames } from '../../../utils/stringUtils'
import SidebarMenuItemProps from './SidebarMenuItem.types'
import { Wrapper } from './SidebarMenuItem.styled'

export const SIDEBAR_MENU_ITEM_TEST_ID = 'ch-design-system-sidebar-menu-item'

function SidebarMenuItem({
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
}: SidebarMenuItemProps) {
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

export default SidebarMenuItem
