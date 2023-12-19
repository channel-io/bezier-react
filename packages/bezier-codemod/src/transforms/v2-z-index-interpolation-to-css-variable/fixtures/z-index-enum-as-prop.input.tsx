import { Overlay, ZIndex } from '@channel.io/bezier-react'

export function SelectionOverlay () {
  return (
    <Overlay
      container={{ style: { zIndex: ZIndex.Overlay } }}
    />
  )
}