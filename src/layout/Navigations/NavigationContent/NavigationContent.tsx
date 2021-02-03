/* External dependencies */
import React, { useContext, useLayoutEffect, useMemo } from 'react'
import { isNil } from 'lodash-es'

/* Internal dependencies */
import { mergeClassNames } from '../../../utils/stringUtils'
import { NavigationContext } from '../../../contexts/NavigationContext'
import { ActionType } from '../../Client/utils/LayoutReducer'
import useLayoutDispatch from '../../../hooks/useLayoutDispatch'
import {
  ChevronIcon,
  StyledContentWrapper,
  StyledFooterWrapper,
  StyledTitleWrapper,
} from './NavigationContent.styled'
import NavigationContentProps from './NavigationContent.types'

export const NAV_CONTENT_TEST_ID = 'ch-design-system-nav-content'

function NavigationContent({
  style,
  className,
  testId = NAV_CONTENT_TEST_ID,
  /* 사용처에서 관리해야 하는 prop */
  header = null,
  fixedHeader = false,
  stickyFooter = null,
  scrollRef,
  scrollClassName,
  withScroll,
  onScroll,
  children,

  /* LayoutState Prop */
  layoutOption,
  showNavigation,
  ...otherProps
}: NavigationContentProps) {
  const {
    optionIndex,
    showChevron,
    allowMouseMove,
    isHoveringOnPresenter,
    onClickClose,
  } = useContext(NavigationContext)

  const dispatch = useLayoutDispatch()

  // NOTE: LAYOUTEFFECT를 사용하지 않으면 initial 값이 없을때 순간 렌더링이 된다
  useLayoutEffect(() => {
    if (optionIndex === 0) {
      dispatch({ type: ActionType.CLEAR_NAV_OPTION })
    }

    dispatch({
      type: ActionType.ADD_NAV_OPTION,
      payload: { index: optionIndex, option: layoutOption },
    })

    if (!isNil(showNavigation)) {
      dispatch({
        type: ActionType.SET_SHOW_NAVIGATION,
        payload: showNavigation,
      })
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [layoutOption])

  const clazzName = useMemo(() => (
    mergeClassNames(className, ((withScroll && scrollClassName) || undefined))
  ), [className, scrollClassName, withScroll])

  const HeaderComponent = useMemo(() => {
    if (!header) { return null }

    return (
      <StyledTitleWrapper fixed={fixedHeader}>
        { /* Background 등 처리를 위해 */ }
        { React.cloneElement(header!, { isHover: isHoveringOnPresenter }) }
        { showChevron && !allowMouseMove && (
          <ChevronIcon
            name="chevron-left-double"
            onClick={onClickClose}
            marginRight={10}
          />
        ) }
      </StyledTitleWrapper>
    )
  }, [
    allowMouseMove,
    header,
    fixedHeader,
    showChevron,
    onClickClose,
    isHoveringOnPresenter,
  ])

  return (
    <>
      { (header && fixedHeader) && (
        HeaderComponent
      ) }

      <StyledContentWrapper
        style={style}
        ref={scrollRef}
        data-testid={testId}
        className={clazzName}
        withScroll={withScroll}
        onScroll={onScroll}
        {...otherProps}
      >
        { (header && !fixedHeader) && (
          HeaderComponent
        ) }
        { children }
      </StyledContentWrapper>

      { stickyFooter && (
      <StyledFooterWrapper>
        { stickyFooter }
      </StyledFooterWrapper>
      ) }
    </>
  )
}

export default NavigationContent
