import { styled, LegacyHStack as BaseHStack, LegacyVStack } from '@channel.io/bezier-react'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 16px 16px 36px 16px;
`

export const HStack = styled(BaseHStack)`
  width: min-content;
`

export const Wrapper = styled(LegacyVStack)`
  width: min-content;
`
