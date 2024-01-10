import { AlphaStack, AlphaCenter } from '@channel.io/bezier-react'

function Component() {
  return (
    <>
      <AlphaStack
        direction="horizontal"
        spacing={6}
      >
        <div />
      </AlphaStack>

      <AlphaCenter>
        <div />
      </AlphaCenter>
    </>
  )
}
