/* Internal dependencies */
import { styled } from '../../foundation'
import { Text } from '../Text'

const LeftContentWrapper = styled.div<{ paddingLeft: number }>`
  display: flex;
  align-items: center;
  padding-left: ${({ paddingLeft }) => paddingLeft}px;
`

const ContentText = styled(Text)`
  overflow: hidden;
  color: ${({ foundation }) => foundation?.theme?.['txt-black-dark']};
  text-overflow: ellipsis;
  white-space: nowrap;
`

const ContentWrapper = styled.div<{ paddingLeft: number }>`
  display: flex;
  align-items: center;
  padding-left: ${({ paddingLeft }) => paddingLeft}px;
  overflow: hidden;
`

const RightContentWrapper = styled.div<{ clickable: boolean }>`
  padding-left: 6px;
  margin: 0 6px 0 auto;
  ${({ clickable }) => clickable && 'cursor: pointer;'}
`

const Wrapper = styled.div<{ clickable: boolean }>`
  display: flex;
  align-items: center;
  height: 28px;
  ${({ clickable }) => clickable && 'cursor: pointer;'}
`

export default {
  LeftContentWrapper,
  ContentText,
  ContentWrapper,
  RightContentWrapper,
  Wrapper,
}
