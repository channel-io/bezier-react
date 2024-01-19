import { Overlay } from '@channel.io/bezier-react'

export function SelectionOverlay () {
  return (
    <Overlay
      container={{ style: { zIndex: 'var(--z-index-overlay)' } }}
    />
  )
}