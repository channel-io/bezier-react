/* Internal dependencies */
import { styled } from '../../../foundation'

interface StyledTitleWrapperProps {
  fixed: boolean
}

export const StyledTitleWrapper = styled.div<StyledTitleWrapperProps>`
  display: flex;
  align-items: center;
`

interface ChevronIconWrapperProps {
  isHover?: boolean
}

export const ChevronIconWrapper = styled.div<ChevronIconWrapperProps>`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  cursor: pointer;
  border-radius: 8px;

  &:hover {
    /* TODO: 디자인 팀과 확인 필요 */
    background-color: ${({ foundation }) => foundation?.theme?.['bg-black-lighter']};
  }
`

interface StyledContentWrapperProps {
  withScroll?: boolean
}

export const StyledContentWrapper = styled.div<StyledContentWrapperProps>`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: ${({ withScroll }) => (withScroll ? 'auto' : 'hidden')};
`

export const StyledFooterWrapper = styled.div`
  width: 100%;
`
