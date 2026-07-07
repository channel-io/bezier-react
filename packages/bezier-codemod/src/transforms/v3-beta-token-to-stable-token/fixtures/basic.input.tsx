import { betaTokens, type BetaSemanticColor } from '@channel.io/bezier-tokens/beta'
import { toString } from './string'
import {
  BetaTokenProvider,
  useBetaTokens,
  type BetaZIndex,
} from '@channel.io/bezier-react'
import '@channel.io/bezier-tokens/dist/beta/css/styles.css'

const color: BetaSemanticColor = 'text-neutral'
const zIndex: BetaZIndex = 'modal'
const allTokens = betaTokens
const normalizedValue = toString(color)

function Component() {
  const currentBetaTokens = useBetaTokens()

  return (
    <BetaTokenProvider tokens={currentBetaTokens}>
      <div style={{ zIndex }}>{color}</div>
    </BetaTokenProvider>
  )
}

export { Component, allTokens, normalizedValue }
