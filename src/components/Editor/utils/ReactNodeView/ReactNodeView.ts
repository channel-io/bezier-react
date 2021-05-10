/* External dependencies */
import { ReactElement } from 'react'
import { NodeView } from 'prosemirror-view'
import { Node as ProsemirrorNode } from 'prosemirror-model'
import { window } from 'ssr-window'

/* Internal dependencies */
import ReactNodeViewProvider from './ReactNodeViewProvider'

abstract class ReactNodeView implements NodeView {
  private provider: ReactNodeViewProvider

  node: ProsemirrorNode

  dom: HTMLElement

  constructor(node: ProsemirrorNode, provider: ReactNodeViewProvider) {
    this.provider = provider
    this.dom = window.document!.createElement('span')
    this.node = node
    this.update()
  }

  update() {
    this.provider.add(this.render(), this.dom)
    return true
  }

  destroy() {
    this.provider.delete(this.dom)
  }

  abstract render(): ReactElement
}

export default ReactNodeView
