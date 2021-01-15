/* Internal dependencies */
import { Icon } from '../../../components/Icon'
import { styled } from '../../../styling/Theme'

interface StyledTitleWrapperProps {
  fixed: boolean
}

export const StyledTitleWrapper = styled.div<StyledTitleWrapperProps>`
  display: flex;
  align-items: center;
`

export const ChevronIcon = styled(Icon)`
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  padding: 6px;
  border-radius: 8px;
  color: #979797;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background3};
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

  & > *:last-child {
    margin-bottom: 40px !important;
  }
`

export const StyledFooterWrapper = styled.div`
  width: 100%;
`
