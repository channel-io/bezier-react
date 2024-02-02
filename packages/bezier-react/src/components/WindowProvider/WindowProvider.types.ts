import { type ChildrenProps } from '~/src/types/props'

export interface WindowContextValue {
  window: Window
  document: Document
  rootElement: HTMLElement
}

interface WindowProviderOwnProps {
  /**
   * injected window
   * @required
   */
  window: Window
}

export interface WindowProviderProps extends
  ChildrenProps,
  WindowProviderOwnProps {}
