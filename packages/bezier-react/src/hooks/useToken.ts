import { type tokens } from '@channel.io/bezier-tokens'

import { createContext } from '~/src/utils/reactUtils'

type Tokens = typeof tokens
type GlobalTokens = Tokens['global']
type SemanticTokens = Omit<Tokens, 'global'>

export type TokenContextValue = GlobalTokens & SemanticTokens[keyof SemanticTokens]

const [TokenContextProvider, useTokenContext] = createContext<TokenContextValue | null>(null, 'ThemeContext')

function useToken() {
  return useTokenContext('useToken')
}

export {
  /** For internal use only.
   * @private
   */
  TokenContextProvider,
}

export default useToken
