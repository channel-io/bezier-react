/* External dependencies */
import React, {
  useState,
  useCallback,
  useLayoutEffect,
  useMemo,
} from 'react'
import { isNil } from 'lodash-es'
import { v4 as uuid } from 'uuid'

/* Internal dependencies */
import { NavigationArea } from '../NavigationArea'
import { mergeClassNames } from '../../../utils/stringUtils'
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
  const dispatch = useLayoutDispatch()
  const currentKey = useMemo(() => uuid(), [])

  const [showChevron, setShowChevron] = useState(false)
  const [allowMouseMove, setAllowMouseMove] = useState(false)
  const [isHoveringOnPresenter, setIsHoveringOnPresenter] = useState(false)

  const handleClickClose = useCallback(() => {
    dispatch({
      type: ActionType.SET_SHOW_NAVIGATION,
      payload: false,
    })

    setShowChevron(false)
    setIsHoveringOnPresenter(true)
  }, [
    dispatch,
    setShowChevron,
    setIsHoveringOnPresenter,
  ])

  // NOTE: LAYOUTEFFECT를 사용하지 않으면 initial 값이 없을때 순간 깜빡임이 발생한다
  useLayoutEffect(() => {
    dispatch({
      type: ActionType.ADD_NAV_OPTION,
      payload: { key: currentKey, option: layoutOption },
    })

    if (!isNil(showNavigation)) {
      dispatch({
        type: ActionType.SET_SHOW_NAVIGATION,
        payload: showNavigation,
      })
    }

    return function cleanUp() {
      dispatch({
        type: ActionType.REMOVE_NAV_OPTION,
        payload: { key: currentKey },
      })
    }
  }, [
    dispatch,
    layoutOption,
    currentKey,
    showNavigation,
  ])

  const clazzName = useMemo(() => (
    mergeClassNames(className, ((withScroll && scrollClassName) || undefined))
  ), [className, scrollClassName, withScroll])

  const HeaderComponent = useMemo(() => {
    if (!header) { return null }

    return (
      <StyledTitleWrapper fixed={fixedHeader}>
        { /* Background 등 처리를 위해 */ }
        { React.cloneElement(header!, { isHover: isHoveringOnPresenter }) }
        {
          showChevron &&
          !allowMouseMove &&
          (
            <ChevronIcon
              name="chevron-left-double"
              onClick={handleClickClose}
              marginRight={10}
            />
          )
        }
      </StyledTitleWrapper>
    )
  }, [
    allowMouseMove,
    header,
    fixedHeader,
    showChevron,
    handleClickClose,
    isHoveringOnPresenter,
  ])

  return (
    <NavigationArea
      currentKey={currentKey}
      setShowChevron={setShowChevron}
      allowMouseMove={allowMouseMove}
      setAllowMouseMove={setAllowMouseMove}
      isHoveringOnPresenter={isHoveringOnPresenter}
      setIsHoveringOnPresenter={setIsHoveringOnPresenter}
    >
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
    </NavigationArea>
  )
}

export default NavigationContent
