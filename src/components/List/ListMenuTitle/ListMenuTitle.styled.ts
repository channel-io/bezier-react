/* Internal dependencies */
import { styled } from '../../../foundation'
import {
  StyledWrapperProps,
  StyledTitleWrapperProps,
} from './ListMenuTitle.types'

export const Wrapper = styled.div<StyledWrapperProps>`
  display: flex;
  flex-direction: row;
  padding: 6px 12px 6px 16px;
  height: 20px;
  line-height: 20px;
`

export const TitleWrapper = styled.div<StyledTitleWrapperProps>`
  flex: 1;
  font-size: 12px;
  font-weight: bold;
  line-height: 20px;
  color: ${props => props.foundation?.theme?.['txt-black-dark']};
`
