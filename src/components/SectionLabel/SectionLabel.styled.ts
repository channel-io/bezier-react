/* Internal dependencies */
import { styled } from '../../foundation'
import { Text } from '../Text'

const LeftContentWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 6px;
`

const ContentText = styled(Text)`
  overflow: hidden;
  color: ${({ foundation }) => foundation?.theme?.['txt-black-dark']};
  text-overflow: ellipsis;
  white-space: nowrap;
`

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 6px;
  overflow: hidden;
`

const HelpIconWrapper = styled.div`
  width: 16px;
  height: 16px;
  margin-left: 8px;
`

const RightContentWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 6px;
  margin: 0 6px 0 auto;
`

const RightItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
`

const ChildrenWrapper = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? 'unset' : 'none')};
`

const Wrapper = styled.div<{ clickable: boolean }>`
  display: flex;
  align-items: center;
  height: 28px;
  ${({ clickable }) => clickable && 'cursor: pointer;'}
`

const Divider = styled.div`
  height: 1px;
  margin: 0 6px;
  background-color: ${({ foundation }) => foundation?.theme?.['bdr-grey-light']};
`

export default {
  LeftContentWrapper,
  ContentText,
  ContentWrapper,
  HelpIconWrapper,
  RightContentWrapper,
  RightItemWrapper,
  ChildrenWrapper,
  Wrapper,
  Divider,
}
