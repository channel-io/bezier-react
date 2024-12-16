import {
  type GlobalToken,
  type SemanticToken,
  type ThemeName,
} from '~/src/types/alpha-tokens'

export interface ThemeSpecificTokens {
  global: GlobalToken
  semantic: SemanticToken
}

export interface TokenContextValue {
  themeName: ThemeName
  tokens: ThemeSpecificTokens
}

export interface TokenProviderProps {
  themeName: ThemeName
  children: React.ReactNode
}
