/* External dependencies */
import { Node as ProsemirrorNode, Schema, Mark } from 'prosemirror-model'
import { autobind } from 'core-decorators'
import _ from 'lodash'

/* Internal dependencies */
import PMNodesToBlocksListener from './PMNodesToBlocksListener'

interface MarkUp {
  [key: string]: Mark<Schema>
}

const emptyMarkUp: MarkUp = {}

class PMNodesToBlocksVisitor {
  listener: PMNodesToBlocksListener

  prevStyle: MarkUp = {}

  isInsideBullet: boolean = false

  constructor(listener: PMNodesToBlocksListener) {
    this.listener = listener
  }

  start(doc: ProsemirrorNode<Schema>, noEscape: boolean = false) {
    this.prevStyle = {}

    this.listener.start()
    doc.forEach((node) => this.visitNode(node, noEscape))
    return this.listener.end()
  }

  getStyle(result: MarkUp, mark: Mark<Schema<any, any>>) {
    result[mark.type.name] = mark
    return result
  }

  checkExitStyle(current: MarkUp) {
    if (_.has(this.prevStyle, 'bold') !== _.has(current, 'bold')) {
      this.checkExitBold()
    }

    if (_.has(this.prevStyle, 'italic') !== _.has(current, 'italic')) {
      this.checkExitItalic()
    }

    const prevLinkStyle = this.prevStyle.url || this.prevStyle.link
    const prevUrl = _.get(this.prevStyle.url || this.prevStyle.link, 'attrs.href')
    const currentUrl = _.get(current.url || current.link, 'attrs.href')

    if (prevLinkStyle && prevUrl !== currentUrl) {
      this.checkExitLink()
    }
  }

  checkEnterStyle(current: MarkUp) {
    if (!this.prevStyle.bold && current.bold) {
      this.listener.enterBold()
    }

    if (!this.prevStyle.italic && current.italic) {
      this.listener.enterItalic()
    }

    if (current.url || current.link) {
      this.listener.enterLink(current.url || current.link)
    }

    this.prevStyle = current
  }

  checkExitLink() {
    if (this.prevStyle.url || this.prevStyle.link) {
      this.listener.exitLink()
      delete this.prevStyle.url
      delete this.prevStyle.link
    }
  }

  checkExitItalic() {
    this.checkExitLink()

    if (this.prevStyle.italic) {
      this.listener.exitItalic()
      delete this.prevStyle.italic
    }
  }

  checkExitBold() {
    this.checkExitItalic()

    if (this.prevStyle.bold) {
      this.listener.exitBold()
      delete this.prevStyle.bold
    }
  }

  @autobind
  visitNode(node: ProsemirrorNode<Schema>, noEscape: boolean) {
    switch (node.type.name) {
      case 'paragraph': {
        this.listener.enterParagraph(node, this.isInsideBullet)
        node.forEach((childNode) => this.visitNode(childNode, noEscape))
        this.checkExitStyle({})

        if (!this.isInsideBullet) {
          this.listener.exitParagraph()
        }
        break
      }

      case 'codeBlock': {
        this.listener.visitCode(node)
        break
      }

      case 'bulletList': {
        this.isInsideBullet = true
        node.forEach((childNode) => this.visitNode(childNode, noEscape))
        this.listener.exitBulletList()
        this.isInsideBullet = false
        break
      }

      case 'listItem': {
        node.forEach((childNode) => this.visitNode(childNode, noEscape))
        this.listener.exitListItem()
        break
      }

      case 'text': {
        this.checkStyle(node)
        this.listener.visitText(node, noEscape)
        break
      }

      case 'emoji': {
        this.checkStyle(node)
        this.listener.visitEmoji(node)
        break
      }

      case 'mention': {
        this.checkStyle(node)
        this.listener.visitMention(node)
        break
      }

      case 'break': {
        this.checkExitStyle(emptyMarkUp)
        this.listener.visitBreak()
        break
      }

      case 'variable': {
        this.checkStyle(node)
        this.listener.visitVariable(node)
        break
      }
    }
  }

  @autobind
  checkStyle(node: ProsemirrorNode<Schema>) {
    const currentStyle = node.marks.reduce(this.getStyle, ({} as MarkUp))
    this.checkExitStyle(currentStyle)
    this.checkEnterStyle(currentStyle)
  }
}

export default PMNodesToBlocksVisitor
