/* Internal dependencies */
import { styled } from '~/src/foundation'
import { StyledWrapperProps, StyledTitleWrapperProps } from './ListMenuTitle.types'

export const Wrapper = styled.div<StyledWrapperProps>`
  display: flex;
  flex-direction: row;
  height: 44px;
  padding: 18px 6px 6px;
  line-height: 20px;
`

export const TitleWrapper = styled.div<StyledTitleWrapperProps>`
  flex: 1;
  font-size: 12px;
  font-weight: bold;
  line-height: 20px;
  color: ${props => props.foundation?.theme?.['txt-black-dark']};
`
