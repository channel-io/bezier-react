import { type ChildrenProps } from '~/src/types/props'

export interface WindowContextValue {
  /**
   * A window containing a DOM document; the `document` property points to the DOM document loaded in that window.
   */
  window: Window
  /**
   * The DOM document loaded in the window.
   */
  document: Document
  /**
   * Same as `document.body`. Specifies the beginning and end of the document body.
   */
  rootElement: HTMLElement
}

interface WindowProviderOwnProps {
  /**
   * A window containing a DOM document; the document property points to the DOM document loaded in that window.
   */
  window: Window
}

export interface WindowProviderProps extends
  ChildrenProps,
  WindowProviderOwnProps {}
