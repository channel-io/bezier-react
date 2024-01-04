import { Text, Typography, styled } from '@channel.io/bezier-react'

export const Title = styled(Text).attrs({
  typo: Typography.Size11,
  marginAll: 1,
  marginTop: 2,
  marginRight: 3,
  marginBottom: 4,
  marginLeft: 5,
  marginHorizontal: 6,
  marginVertical: 7,
})``

export const Subtitle = styled(Text)`
  ${Typography.Size11};
`
