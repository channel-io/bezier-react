/* External dependencies */
import { ParserRuleContext } from 'antlr4'

/* Internal dependencies */
import BlocksParserContextType from '../../../../types/BlocksParserContextType'
import { TextBlockParserListener } from './Antlr/TextBlockParserListener'
// TODO: Emoji, Variable 지원 할 수 있도록 변형
// import EmojiService from 'Services/EmojiService'
// import { replaceVariable } from 'Utils/MessageUtils'

interface LinkRuleContext extends ParserRuleContext {
  ATTR_VALUE: () => ParserRuleContext[]
}

export class BlocksParserContext {
  type: BlocksParserContextType

  value?: string

  children: Array<BlocksParserContext>

  constructor(type: BlocksParserContextType, value?: string) {
    this.type = type
    this.value = value
    this.children = []
  }
}

class TextBlockNodeListener extends TextBlockParserListener {
  queue: BlocksParserContext[] = []

  current: BlocksParserContext = new BlocksParserContext(BlocksParserContextType.Root)

  managerIds: string[] = []

  plainBuffer: string = ''

  withVariable: boolean = false

  constructor(withVariable: boolean) {
    super()
    this.withVariable = withVariable
  }

  getContext() {
    return this.current
  }

  getManagerIds() {
    return this.managerIds
  }

  shiftText() {
    if (this.plainBuffer) {
      this.current.children.push(new BlocksParserContext(
        BlocksParserContextType.Text,
        this.plainBuffer,
      ))
      this.plainBuffer = ''
    }
  }

  shiftContext() {
    this.shiftText()
    const lastContext: BlocksParserContext = this.queue.pop()!
    lastContext.children.push(this.current)
    this.current = lastContext
  }

  enterText() {
    this.queue = []
    this.current = new BlocksParserContext(BlocksParserContextType.Root)
    this.plainBuffer = ''
  }

  exitText() {
    // TODO: replaceVariable 구현
    // if (this.withVariable) {
    //   this.plainBuffer = replaceVariable(this.plainBuffer)
    // }
    this.shiftText()
  }

  enterBold() {
    this.shiftText()
    this.queue.push(this.current)
    this.current = new BlocksParserContext(BlocksParserContextType.Bold)
  }

  exitBold() {
    this.shiftContext()
  }

  enterItalic() {
    this.shiftText()
    this.queue.push(this.current)
    this.current = new BlocksParserContext(BlocksParserContextType.Italic)
  }

  exitItalic() {
    this.shiftContext()
  }

  enterLink(ctx: LinkRuleContext) {
    this.shiftText()
    const values = ctx.ATTR_VALUE()
    if (values.length < 1) {
      return
    }

    const type: BlocksParserContextType = values[0].getText().slice(1, -1) as BlocksParserContextType
    const value = (values.length > 1) ? values[1].getText().slice(1, -1) : undefined

    if (type === BlocksParserContextType.Mention) {
      this.managerIds.push(value!)
    }

    this.queue.push(this.current)
    this.current = new BlocksParserContext(type, value)
  }

  exitLink() {
    this.shiftContext()
  }

  enterInner() {}

  exitInner() {}

  enterVariable() {}

  exitVariable() {}

  enterEmoji() {}

  exitEmoji(ctx: ParserRuleContext) {
    this.shiftText()
    const text = ctx.getText()

    // TODO: EmojiService 대신 emojiMap 자체를 받아서 사용하도록 변경
    // if (EmojiService.emojiMap[text.slice(1, -1)]) {
    //   const emojiContext = new BlocksParserContext(BlocksParserContextType.Emoji, text)
    //   this.current.children.push(emojiContext)
    //   return
    // }

    this.plainBuffer += text
  }

  enterPlain() {}

  exitPlain(ctx: ParserRuleContext) {
    this.plainBuffer += ctx.getText()
  }
}

export default TextBlockNodeListener
