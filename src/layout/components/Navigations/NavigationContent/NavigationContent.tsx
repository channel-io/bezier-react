/* External dependencies */
import React, {
  useState,
  useCallback,
  useLayoutEffect,
  useMemo,
} from 'react'
import { isArray, noop, compact } from 'lodash-es'
import { v4 as uuid } from 'uuid'

/* Internal dependencies */
import LayoutActions from '../../../redux/LayoutActions'
import useLayoutState from '../../../hooks/useLayoutState'
import useLayoutDispatch from '../../../hooks/useLayoutDispatch'
import { mergeClassNames } from '../../../../utils/stringUtils'
import { Button, ButtonStyleVariant, ButtonColorVariant } from '../../../../components/Button'
import { NavigationArea } from '../NavigationArea'
import {
  StyledContentWrapper,
  StyledFooterWrapper,
  StyledTitleWrapper,
} from './NavigationContent.styled'
import NavigationContentProps from './NavigationContent.types'

// TODO: 테스트 코드 작성
const NAV_CONTENT_TEST_ID = 'bezier-react-nav-content'

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
  navigationKey,
  ...otherProps
}: NavigationContentProps) {
  const dispatch = useLayoutDispatch()
  const currentKey = useMemo(() => uuid(), [])

  const { showingHidableNavigations } = useLayoutState()

  const isShowingNavigation = useMemo(() => {
    if (!layoutOption.hidable) { return true }
    return showingHidableNavigations.has(navigationKey)
  }, [
    layoutOption.hidable,
    navigationKey,
    showingHidableNavigations,
  ])

  const reverseShowingHidableNavigation = useCallback(() => {
    if (!layoutOption.hidable) { return }
    if (isShowingNavigation) {
      dispatch(LayoutActions.removeShowingHidableNavigation(navigationKey))
      return
    }
    dispatch(LayoutActions.addShowingHidableNavigation(navigationKey))
  }, [
    layoutOption.hidable,
    navigationKey,
    isShowingNavigation,
    dispatch,
  ])

  const [showChevron, setShowChevron] = useState(false)
  const [allowMouseMove, setAllowMouseMove] = useState(false)
  const [isHoveringOnPresenter, setIsHoveringOnPresenter] = useState(false)

  const handleClickChevron = useCallback(() => {
    reverseShowingHidableNavigation()
    setIsHoveringOnPresenter(true)
  }, [
    reverseShowingHidableNavigation,
    setIsHoveringOnPresenter,
  ])

  // NOTE: LAYOUTEFFECT를 사용하지 않으면 initial 값이 없을때 순간 깜빡임이 발생한다
  useLayoutEffect(() => {
    dispatch(LayoutActions.addNavOption({
      key: currentKey,
      option: {
        ...layoutOption,
        onChangeWidth,
      },
    }))

    return function cleanUp() {
      dispatch(LayoutActions.removeNavOption({ key: currentKey }))
    }
  }, [
    currentKey,
    layoutOption,
    dispatch,
    onChangeWidth,
  ])

  const clazzName = useMemo(() => (
    mergeClassNames(className, ((withScroll && scrollClassName) || undefined))
  ), [
    className,
    scrollClassName,
    withScroll,
  ])

  const showNavigationToggleButtonElement = useMemo(() => (
    // TODO: Tooltip 추가
    <Button
      leftComponent={`chevron-${isShowingNavigation ? 'left' : 'right'}-double` as const}
      styleVariant={ButtonStyleVariant.Tertiary}
      colorVariant={ButtonColorVariant.MonochromeLight}
      onClick={handleClickChevron}
    />
  ), [
    isShowingNavigation,
    handleClickChevron,
  ])

  const HeaderElement = useMemo(() => {
    if (!header) { return null }

    const headerActionElements = isArray(header.props.actions)
      ? header.props.actions
      : [header.props.actions]

    return (
      <StyledTitleWrapper fixed={fixedHeader}>
        { /* Background 등 처리를 위해 */ }
        {
          React.cloneElement(
            header, {
              isHover: isHoveringOnPresenter,
              actions: compact([
                showChevron && !allowMouseMove && (
                  showNavigationToggleButtonElement
                ),
                ...headerActionElements,
              ]),
            },
          )
        }
      </StyledTitleWrapper>
    )
  }, [
    allowMouseMove,
    isHoveringOnPresenter,
    showChevron,
    showNavigationToggleButtonElement,
    header,
    fixedHeader,
  ])

  return (
    <NavigationArea
      currentKey={currentKey}
      setShowChevron={setShowChevron}
      allowMouseMove={allowMouseMove}
      setAllowMouseMove={setAllowMouseMove}
      isHoveringOnPresenter={isHoveringOnPresenter}
      setIsHoveringOnPresenter={setIsHoveringOnPresenter}
      showNavigation={isShowingNavigation}
    >
      { (header && fixedHeader) && (
        HeaderElement
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
          HeaderElement
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
