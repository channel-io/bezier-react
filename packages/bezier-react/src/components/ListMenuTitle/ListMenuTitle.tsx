import React, { useCallback } from 'react'
import { isNil } from 'lodash-es'

/* Internal dependencies */
import ListMenuTitleProps from './ListMenuTitle.types'
import { TitleWrapper, Wrapper } from './ListMenuTitle.styled'

export const SIDEBAR_MENU_TITLE_TEST_ID = 'bezier-react-sidebar-menu-title'

function ListMenuTitle({
  as,
  testId = SIDEBAR_MENU_TITLE_TEST_ID,
  content,
  hide = false,
  rightAction = null,
  onClick = () => {},
  onClickAction = () => {},
  style,
  className,
}: ListMenuTitleProps) {
  const handleClickAction = useCallback((ev: React.MouseEvent<HTMLDivElement>) => {
    ev.stopPropagation()
    onClickAction()
  }, [onClickAction])

  if (hide) {
    return null
  }

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
