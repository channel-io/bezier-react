import React, {
  forwardRef,
  useCallback,
} from 'react'

import { noop } from '~/src/utils/functionUtils'
import { isNil } from '~/src/utils/typeUtils'

import type ListMenuTitleProps from './ListMenuTitle.types'

import {
  TitleWrapper,
  Wrapper,
} from './ListMenuTitle.styled'

export const SIDEBAR_MENU_TITLE_TEST_ID = 'bezier-react-sidebar-menu-title'

const ListMenuTitle = forwardRef<HTMLDivElement, ListMenuTitleProps>(function ListMenuTitle({
  as,
  testId = SIDEBAR_MENU_TITLE_TEST_ID,
  content,
  hide = false,
  rightAction = null,
  onClickAction = noop,
  style,
  className,
  ...rest
}, forwardedRef) {
  const handleClickAction = useCallback((ev: React.MouseEvent<HTMLDivElement>) => {
    ev.stopPropagation()
    onClickAction()
  }, [onClickAction])

  if (hide) {
    return null
  }

  return (
    <Wrapper
      {...rest}
      ref={forwardedRef}
      data-testid={testId}
      as={as}
      style={style}
      className={className}
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
})

export default ListMenuTitle
