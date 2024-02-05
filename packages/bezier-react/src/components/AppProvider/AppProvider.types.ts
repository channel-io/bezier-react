import { type Feature } from '~/src/features'
import { type ChildrenProps } from '~/src/types/props'
import { type ThemeName } from '~/src/types/tokens'

interface AppProviderOwnProps {
  /**
   * Name of the theme to use for the app.
   * @default 'light'
   */
  themeName?: ThemeName
  /**
   * List of features to enable for the app.
   * @default []
   */
  features?: Feature[]
  /**
   * Window object to use for the app.
   * @default window
   */
  window?: Window
  /**
   * Whether to enable preflight(reset) styles.
   * @default true
   */
  preflight?: boolean
}

export interface AppProviderProps extends
  ChildrenProps,
  AppProviderOwnProps {}
