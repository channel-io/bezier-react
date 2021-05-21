/* External dependencies */
import React, {
  useState,
  useCallback,
  useLayoutEffect,
  useMemo,
} from 'react'
import { isArray, isNil, noop, compact } from 'lodash-es'
import { v4 as uuid } from 'uuid'

/* Internal dependencies */
import LayoutActions from '../../redux/LayoutActions'
import useLayoutState from '../../../hooks/useLayoutState'
import useLayoutDispatch from '../../../hooks/useLayoutDispatch'
import { mergeClassNames } from '../../../utils/stringUtils'
import { Icon, IconSize } from '../../../components/Icon'
import { NavigationArea } from '../NavigationArea'
import {
  ChevronIconWrapper,
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
  showNavigation,
  ...otherProps
}: NavigationContentProps) {
  const dispatch = useLayoutDispatch()
  const currentKey = useMemo(() => uuid(), [])

  const { showNavigation: isShowingNavigation } = useLayoutState()

  const [showChevron, setShowChevron] = useState(false)
  const [allowMouseMove, setAllowMouseMove] = useState(false)
  const [isHoveringOnPresenter, setIsHoveringOnPresenter] = useState(false)

  const handleClickChevron = useCallback(() => {
    dispatch(LayoutActions.setShowNavigation(!isShowingNavigation))

    setIsHoveringOnPresenter(true)
  }, [
    dispatch,
    isShowingNavigation,
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
  ), [
    className,
    scrollClassName,
    withScroll,
  ])

  const showNavigationToggleButtonElement = useMemo(() => (
    // TODO: Tooltip 추가
    <ChevronIconWrapper
      onClick={handleClickChevron}
    >
      <Icon
        name={`chevron-${isShowingNavigation ? 'left' : 'right'}-double` as const}
        color="txt-black-darkest"
        size={IconSize.S}
      />
    </ChevronIconWrapper>
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
      onChangeWidth={onChangeWidth}
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
