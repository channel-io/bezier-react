import React, { useCallback } from 'react'
import { noop, isNil } from 'lodash-es'

/* Internal dependencies */
import ListMenuTitleProps from './ListMenuTitle.types'
import { TitleWrapper, Wrapper } from './ListMenuTitle.styled'

export const SIDEBAR_MENU_TITLE_TEST_ID = 'ch-design-system-sidebar-menu-title'

function ListMenuTitle({
  as,
  testId = SIDEBAR_MENU_TITLE_TEST_ID,
  content,
  rightAction = null,
  onClick = noop,
  onClickAction = noop,
  style,
  className,
}: ListMenuTitleProps) {
  const handleClickAction = useCallback((ev: React.MouseEvent<HTMLDivElement>) => {
    ev.stopPropagation()
    onClickAction()
  }, [onClickAction])

  return (
    <Wrapper
      data-testid={testId}
      as={as}
      style={style}
      className={className}
      onClick={onClick}
    >
      <TitleWrapper>
        { content }
      </TitleWrapper>
      {
        !isNil(rightAction) && (
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

export default ListMenuTitle
