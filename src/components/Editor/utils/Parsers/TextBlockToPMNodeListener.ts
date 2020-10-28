/* External dependencies */
import { ParserRuleContext } from 'antlr4'
import { Node as ProsemirrorNode, Schema, Mark } from 'prosemirror-model'
import { isFunction } from 'lodash-es'

/* Internal dependencies */
import { unescapeTags } from '../../../../utils/stringUtils'
import { TextBlockParserListener } from './Antlr/TextBlockParserListener'

interface MarkInfo {
  bold: boolean
  italic: boolean
  link: {
    enable: boolean
    href: string | null
  }
}

interface NodeInfo {
  mention: {
    enable: boolean
    id: string | null
    username: string
  }
}

interface LinkRuleContext extends ParserRuleContext {
  ATTR_VALUE: () => ParserRuleContext[]
}

class TextBlockToPMNodeListener extends TextBlockParserListener {
  schema: Schema

  markInfo: MarkInfo = {
    bold: false,
    italic: false,
    link: {
      enable: false,
      href: null,
    },
  }

  nodeInfo: NodeInfo = {
    mention: {
      enable: false,
      id: '',
      username: '',
    },
  }

  result: ProsemirrorNode<Schema>[] = []

  nodes: ProsemirrorNode<Schema>[] = []

  text: string = ''

  constructor(schema: Schema) {
    super()
    this.schema = schema
  }

  buildNode() {
    if (!this.text) {
      return
    }

    const marks: Mark[] = []

    if (this.markInfo.bold && this.schema.marks.bold) {
      marks.push(this.schema.marks.bold.create())
    }

    if (this.markInfo.italic && this.schema.marks.italic) {
      marks.push(this.schema.marks.italic.create())
    }

    if (
      this.markInfo.link.enable &&
      (this.schema.marks.link || this.schema.marks.url)
    ) {
      if (this.schema.marks.url && (!this.markInfo.link || this.markInfo.link.href === this.text)) {
        marks.push(this.schema.marks.url.create({
          href: unescapeTags(this.markInfo.link.href ?? ''),
        }))
      } else if (this.schema.marks.link) {
        marks.push(this.schema.marks.link.create({
          href: unescapeTags(this.markInfo.link.href ?? ''),
        }))
      }
    }

    if (this.nodeInfo.mention.enable) {
      const { id, username } = this.nodeInfo.mention
      this.text = this.text.replace(new RegExp(`@${username}$`), '')

      if (this.text) {
        this.nodes.push(this.schema.text(unescapeTags(this.text), [...marks]))
      }

      this.nodes.push(this.schema.nodes.mention.create({ id, username }))
    } else {
      // eslint-disable-next-line no-lonely-if
      if (!isFunction(this.schema.nodes.variable?.create) && this.text) {
        this.nodes.push(this.schema.text(unescapeTags(this.text), [...marks]))
        this.text = ''
        return
      }
      // chunk(this.text.split(regexVariable), 3).forEach(([text, targetKey, altText]) => {
      //   if (text) {
      //     this.nodes.push(this.schema.text(unescapeTags(text), [...marks]))
      //   }
      //   const profileKey = `profile.${targetKey}`
      //   if (!targetKey || !this.schemaMap.has(profileKey)) {
      //     if (altText) {
      //       this.nodes.push(this.schema.text(unescapeTags(altText), [...marks]))
      //     }
      //     return
      //   }
      //   const target = this.schemaMap.get(profileKey)
      //   this.nodes.push(this.schema.nodes.variable.create({ target, altText }))
      // })
    }

    this.text = ''
  }

  exitParagraph() {
    this.result.push(this.schema.node('paragraph', undefined, [...this.nodes]))
    this.nodes = []
  }

  enterText() {}

  exitText() {
    if (this.text) {
      this.buildNode()
    }

    this.exitParagraph()
  }

  enterBold() {
    if (this.schema.marks.bold) {
      this.buildNode()
      this.markInfo.bold = true
    }
  }

  exitBold() {
    if (this.schema.marks.bold) {
      this.buildNode()
      this.markInfo.bold = false
    }
  }

  enterItalic() {
    if (this.schema.marks.italic) {
      this.buildNode()
      this.markInfo.italic = true
    }
  }

  exitItalic() {
    if (this.schema.marks.italic) {
      this.buildNode()
      this.markInfo.italic = false
    }
  }

  enterLink(ctx: LinkRuleContext) {
    const values = ctx.ATTR_VALUE()
    if (values.length < 1) {
      return
    }

    const type = values[0].getText().slice(1, -1)
    const value = (values.length > 1) ? values[1].getText().slice(1, -1) : null

    if (type === 'url' && (this.schema.marks.link || this.schema.marks.url)) {
      this.buildNode()
      this.markInfo.link.enable = true
      this.markInfo.link.href = value
    } else if (type === 'manager' && (this.schema.nodes.mention)) {
      this.buildNode()
      const username = /@\S+<\/link>/g.exec(ctx.getText())

      if (username) {
        this.nodeInfo.mention = {
          enable: true,
          id: value,
          username: username[0].replace('@', '').replace('</link>', ''),
        }
      }
    }
  }

  exitLink() {
    if ((this.schema.marks.link || this.schema.marks.url) && this.markInfo.link.enable) {
      this.buildNode()
      this.markInfo.link.enable = false
      this.markInfo.link.href = null
    } else if (this.schema.nodes.mention && this.nodeInfo.mention.enable) {
      this.buildNode()
      this.nodeInfo.mention = {
        enable: false,
        id: '',
        username: '',
      }
    }
  }

  exitInner() {}

  enterVariable() {}

  exitVariable() {}

  enterEmoji() {}

  exitEmoji() {}
  // exitEmoji(ctx: ParserRuleContext) {
  // const name = ctx.getText().slice(1, -1)
  // const emoji = EmojiService.getEmoji(name!)
  // if (emoji) {
  //   this.buildNode()
  //   this.nodes.push(this.schema.nodes.emoji.create({
  //     name,
  //     alt: emoji.getAlt(),
  //   }))
  // } else {
  //   this.text += unescapeTags(ctx.getText())
  // }
  // }

  enterPlain() {}

  exitPlain(ctx: ParserRuleContext) {
    const text = ctx.getText()

    // WhiteSpace 확인
    if (text.includes('\n')) {
      // 각각의 개행문자 사이가 paragraph 로 변환되어야 하므로, split
      const tokens = text.split('\n')

      /**
       * Listener 에 Node가 없다는 것은, 현재 텍스트 블록이 개행 문자로 시작하고 있다는 뜻이다.
       * 이 경우 Prosemirror 에서는 최초의 개행 문자는 필요로 하지 않으므로 제거한다.
       */
      if ((this.nodes.length === 0) && !this.text) { tokens.shift() }

      tokens.forEach((token, index) => {
        this.text += token

        /**
         * 개행문자를 기준으로 쪼개진 Whitespace 는 모두 텍스트에 반영되어야 하고,
         * 또한 독립된 Node 를 가져야 한다.
         * 다만, 가장 마지막으로 오는 Whitespace 는 독립된 Node 를 만들면 안되는데,
         * 이는 뒤따라올 텍스트가 개행을 확인하여 새로운 Node를 만들기 때문이다.
         * 따라서 index 를 체크하여 Node 생성 여부를 결정한다.
         */
        if (index !== (tokens.length - 1)) {
          this.buildNode()
          this.exitParagraph()
        }
      })
    } else {
      // 이외의 경우는 단순 텍스트이므로 추가한다.
      this.text += text
    }
  }
}

export default TextBlockToPMNodeListener
