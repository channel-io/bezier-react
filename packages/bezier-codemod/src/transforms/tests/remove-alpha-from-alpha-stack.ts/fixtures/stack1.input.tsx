import { Stack, Spacer } from '@channel.io/bezier-react'

function Component() {
  return (
    <Stack
      direction='horizontal'
    >
      <StackItem>
        <div />
      </StackItem>

      <Spacer />
      
      <StackItem>
        <div />
      </StackItem>
    </Stack>
  )
}
