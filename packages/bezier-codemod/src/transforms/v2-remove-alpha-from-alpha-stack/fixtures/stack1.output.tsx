import { LegacyStack, LegacySpacer } from '@channel.io/bezier-react'

function Component() {
  return (
    <LegacyStack
      direction='horizontal'
    >
      <LegacyStackItem>
        <div />
      </LegacyStackItem>

      <LegacySpacer />
      
      <LegacyStackItem>
        <div />
      </LegacyStackItem>
    </LegacyStack>
  )
}
