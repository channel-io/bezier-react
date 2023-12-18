import { AlphaStack, styled } from '@channel.io/bezier-react'

export const Container = styled(AlphaStack)`
  width: 100%;
  padding: 18px;
  background: var(--bg-black-lightest);
  border-radius: 16px;
  ${({ foundation }) => foundation?.rounding.round16}
`