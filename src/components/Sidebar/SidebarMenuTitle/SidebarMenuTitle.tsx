import React, { useCallback } from 'react'
import _ from 'lodash'

/* Internal dependencies */
import SidebarMenuTitleProps from './SidebarMenuTitle.types'
import { TitleWrapper, Wrapper } from './SidebarMenuTitle.styled'

export const SIDEBAR_MENU_TITLE_TEST_ID = 'ch-design-system-sidebar-menu-title'

function SidebarMenuTitle({
  as,
  testId = SIDEBAR_MENU_TITLE_TEST_ID,
  content,
  rightAction = null,
  onClick = _.noop,
  onClickAction = _.noop,
  style,
  className,
}: SidebarMenuTitleProps) {
  const handleClickAction = useCallback((ev: React.MouseEvent<HTMLDivElement>) => {
    ev.stopPropagation()
    onClickAction()
  }, [onClickAction])

  return (
    <Wrapper
      data-testid={testId}
      as={as}
      style={style}
      height={20}
      className={className}
      onClick={onClick}
    >
      <TitleWrapper>
        { content }
      </TitleWrapper>
      {
        !_.isNil(rightAction) && (
          <div
            onClick={handleClickAction}
          >
            { rightAction }
          </div>
        )
      }
    </Wrapper>
  )
}

export default SidebarMenuTitle
