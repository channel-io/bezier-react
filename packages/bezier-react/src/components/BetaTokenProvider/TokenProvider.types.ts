import {
  type BetaGlobalToken,
  type BetaSemanticToken,
  type BetaThemeName,
} from '~/src/types/beta-tokens'

export interface ThemeSpecificTokens {
  global: BetaGlobalToken
  semantic: BetaSemanticToken
}

export interface TokenContextValue {
  themeName: BetaThemeName
  tokens: ThemeSpecificTokens
}

export interface TokenProviderProps {
  themeName: BetaThemeName
  children: React.ReactNode
}
