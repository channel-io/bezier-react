/* External dependencies */
import React, {
  useState,
  useCallback,
  useLayoutEffect,
  useMemo,
} from 'react'
import { isNil, noop } from 'lodash-es'
import { v4 as uuid } from 'uuid'

/* Internal dependencies */
import { NavigationArea } from '../NavigationArea'
import { mergeClassNames } from '../../../utils/stringUtils'
import useLayoutDispatch from '../../../hooks/useLayoutDispatch'
import { Icon, IconSize } from '../../../components/Icon'
import LayoutActions from '../../redux/LayoutActions'
import {
  ChevronIconWrapper,
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
  onChangeWidth = noop,
  children,

  /* LayoutState Prop */
  layoutOption,
  showNavigation,
  ...otherProps
}: NavigationContentProps) {
  const dispatch = useLayoutDispatch()
  const currentKey = useMemo(() => uuid(), [])

  const [isHide, setIsHide] = useState(false)
  const [showChevron, setShowChevron] = useState(false)
  const [allowMouseMove, setAllowMouseMove] = useState(false)
  const [isHoveringOnPresenter, setIsHoveringOnPresenter] = useState(false)

  const handleClickChevron = useCallback(() => {
    dispatch(LayoutActions.setShowNavigation(isHide))

    setIsHide(prev => !prev)
    setIsHoveringOnPresenter(true)
  }, [
    dispatch,
    isHide,
    setIsHoveringOnPresenter,
  ])

  // NOTE: LAYOUTEFFECT를 사용하지 않으면 initial 값이 없을때 순간 깜빡임이 발생한다
  useLayoutEffect(() => {
    dispatch(LayoutActions.addNavOption({ key: currentKey, option: layoutOption }))

    if (!isNil(showNavigation)) {
      dispatch(LayoutActions.setShowNavigation(showNavigation))
    }

    return function cleanUp() {
      dispatch(LayoutActions.removeNavOption({ key: currentKey }))
    }
  }, [
    currentKey,
    layoutOption,
    showNavigation,
    dispatch,
  ])

  const clazzName = useMemo(() => (
    mergeClassNames(className, ((withScroll && scrollClassName) || undefined))
  ), [className, scrollClassName, withScroll])

  const HeaderComponent = useMemo(() => {
    if (!header) { return null }

    return (
      <StyledTitleWrapper fixed={fixedHeader}>
        { /* Background 등 처리를 위해 */ }
        { React.cloneElement(header, { isHover: isHoveringOnPresenter }) }
        {
          showChevron &&
          !allowMouseMove &&
          (
            // TODO: Tooltip 추가
            <ChevronIconWrapper
              onClick={handleClickChevron}
            >
              <Icon
                name={`chevron-${isHide ? 'right' : 'left'}-double` as const}
                color="txt-black-darkest"
                size={IconSize.S}
              />
            </ChevronIconWrapper>
          )
        }
      </StyledTitleWrapper>
    )
  }, [
    allowMouseMove,
    isHoveringOnPresenter,
    showChevron,
    isHide,
    header,
    fixedHeader,
    handleClickChevron,
  ])

  return (
    <NavigationArea
      currentKey={currentKey}
      setShowChevron={setShowChevron}
      allowMouseMove={allowMouseMove}
      setAllowMouseMove={setAllowMouseMove}
      isHoveringOnPresenter={isHoveringOnPresenter}
      setIsHoveringOnPresenter={setIsHoveringOnPresenter}
      onChangeWidth={onChangeWidth}
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
