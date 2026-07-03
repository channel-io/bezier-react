import { tokens, type SemanticColor } from '@channel.io/bezier-tokens'
import { toString } from './string'
import {
  TokenProvider,
  useTokens,
  type ZIndex,
} from '@channel.io/bezier-react'
import '@channel.io/bezier-tokens/css/styles.css'

const color: SemanticColor = 'text-neutral'
const zIndex: ZIndex = 'modal'
const allTokens = tokens
const normalizedValue = toString(color)

function Component() {
  const currentBetaTokens = useTokens()

  return (
    <TokenProvider tokens={currentBetaTokens}>
      <div style={{ zIndex }}>{color}</div>
    </TokenProvider>
  )
}

export { Component, allTokens, normalizedValue }
