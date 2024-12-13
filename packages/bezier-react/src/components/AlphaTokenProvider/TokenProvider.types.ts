import {
  type GlobalToken,
  type ThemeName,
  type ThemeToken,
} from '~/src/types/alpha-tokens'

export interface ThemeSpecificTokens {
  global: GlobalToken
  theme: ThemeToken
}

export interface TokenContextValue {
  themeName: ThemeName
  tokens: ThemeSpecificTokens
}

export interface TokenProviderProps {
  themeName: ThemeName
  children: React.ReactNode
}
