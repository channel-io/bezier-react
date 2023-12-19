import { styled, HStack as BaseHStack, VStack } from '@channel.io/bezier-react'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 16px 16px 36px 16px;
`

export const HStack = styled(BaseHStack)`
  width: min-content;
`

export const Wrapper = styled(VStack)`
  width: min-content;
`
