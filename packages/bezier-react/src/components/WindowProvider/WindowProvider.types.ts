import { type ChildrenProps } from '~/src/types/props'

export interface WindowContextValue {
  window: Window
  document: Document
  rootElement: HTMLElement
}

interface WindowProviderOwnProps {
  /**
   * Injected window object.
   */
  window: Window
}

export interface WindowProviderProps extends
  ChildrenProps,
  WindowProviderOwnProps {}
