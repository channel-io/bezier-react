/* External dependencies */
import React, { useMemo } from 'react'
import { noop } from 'lodash-es'

/* Internal dependencies */
import { mergeClassNames } from '../../../utils/stringUtils'
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

  /* Navigations Injected Props */
  showChevron = false,
  allowMouseMove = false,
  isHoveringOnPresenter = false,
  onClickClose = noop,
  optionIndex,
  ...otherProps
}: NavigationContentProps) {
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
