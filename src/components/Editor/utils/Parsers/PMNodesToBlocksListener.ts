/* External dependencies */
import { Node as ProsemirrorNode, Schema, Mark } from 'prosemirror-model'
import _ from 'lodash'

/* Internal dependencies */
import { escapeTags } from '../../../../utils/stringUtils'
import { Block, BlockType, Text } from '../../Editor.types'

class ProsemirrorNodeListener {
  result: Block[] = []

  bulletItems: Text[] = []

  text = ''

  start() {
    this.result = []
    this.text = ''
  }

  end() {
    return this.result
  }

  enterParagraph(node: ProsemirrorNode<Schema>, isInsideBullet: boolean) {
    const prevBlock = _.last(this.result)
    if (
      prevBlock &&
      (prevBlock.type === BlockType.Text) &&
      !isInsideBullet
    ) {
      const { value } = this.result.pop() as Text
      this.text = `${value}\n`
    } else if (this.text && isInsideBullet) {
      this.text += '\n'
    } else if (node.childCount === 0) {
      this.text = '\n'
    }
  }

  exitParagraph() {
    if (this.text) {
      this.result.push({
        type: BlockType.Text,
        value: this.text,
      })
    }

    this.text = ''
  }

  enterBold() {
    this.text += '<b>'
  }

  exitBold() {
    this.text += '</b>'
  }

  enterItalic() {
    this.text += '<i>'
  }

  exitItalic() {
    this.text += '</i>'
  }

  enterLink(mark: Mark) {
    const link: string = mark.attrs.href

    if (!_.isString(link)) {
      return
    }

    // 이미 url encoding이 되어있는 경우에는 무시함
    this.text += `<link type="url" value="${escapeTags(link)}">`
  }

  exitLink() {
    this.text += '</link>'
  }

  exitBulletList() {
    this.result.push({
      type: BlockType.Bullets,
      blocks: this.bulletItems,
    })

    this.bulletItems = []
  }

  exitListItem() {
    const value = this.text.trim()

    if (value) {
      this.bulletItems.push({
        type: BlockType.Text,
        value,
      })
    }

    this.text = ''
  }

  visitCode(node: ProsemirrorNode<Schema>) {
    const text = node.textContent

    if (text) {
      this.result.push({
        type: BlockType.Code,
        value: text,
      })
    }
  }

  visitText(node: ProsemirrorNode<Schema>, noEscape: boolean) {
    const escapedText = escapeTags(node.text ?? '')
    this.text += noEscape ? node.text : escapedText
  }

  visitEmoji(node: ProsemirrorNode<Schema>) {
    const escapedName = escapeTags(node.attrs.name)
    this.text += `:${escapedName}:`
  }

  visitMention(node: ProsemirrorNode<Schema>) {
    const { id, username } = node.attrs
    const escapedUsername = escapeTags(username)
    this.text += `<link type="manager" value="${id}">@${escapedUsername}</link>`
  }

  visitBreak() {
    this.text += '\n'
  }

  visitVariable(node: ProsemirrorNode<Schema>) {
    const { target, altText } = node.attrs
    const key = target.key
    const divider = altText ? '|' : ''
    const escapedAltText = escapeTags(altText)
    this.text += `$\{${key}${divider}${escapedAltText}}`
  }
}

export default ProsemirrorNodeListener
