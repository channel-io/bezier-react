/* External dependencies */
import { noop } from 'lodash-es'
import React, { useMemo } from 'react'

/* Internal dependencies */
import {
  ChevronIcon,
  StyledContentWrapper,
  StyledFooterWrapper,
  StyledTitleWrapper,
} from './NavigationContent.styled'

function NavigationContent({
  /* 사용처에서 관리해야 하는 prop */
  header = null,
  fixedHeader = false,
  stickyFooter = null,
  children,

  /* NavigationArea에서 inject된 prop */
  showChevron = false,
  allowMouseMove = false,
  isHoveringOnPresenter = false,
  onClickClose = noop,
}) {
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
      <StyledContentWrapper>
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

// ref={scrollRef}
// className={scrollClassName}
// withScroll={withScroll}
// onScroll={onScroll}
