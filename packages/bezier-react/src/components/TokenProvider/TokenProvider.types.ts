import { type ChildrenProps } from '~/src/types/props'
import {
  type GlobalToken,
  type SemanticToken,
  type ThemeName,
} from '~/src/types/tokens'

export type ThemeSpecificTokens = {
  global: GlobalToken
  semantic: SemanticToken
}

export interface TokenContextValue {
  themeName: ThemeName
  tokens: ThemeSpecificTokens
}

interface TokenProviderOwnProps {
  /**
   * Name of the theme to use for the child element.
   */
  themeName: ThemeName
}

export interface TokenProviderProps
  extends ChildrenProps,
    TokenProviderOwnProps {}
