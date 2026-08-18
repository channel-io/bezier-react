import { type ChildNode, type Document, type Root } from 'postcss'
import stylelint, { type PostcssResult, type Rule } from 'stylelint'

export function booleanPlugin(
  ruleName: string,
  message: string,
  visitor: (
    root: Root | Document,
    result: PostcssResult,
    message: string
  ) => void
) {
  const messages = stylelint.utils.ruleMessages(ruleName, { rejected: message })
  const pluginRule: Rule<boolean> = (primary) => (root, result) => {
    const valid = stylelint.utils.validateOptions(result, ruleName, {
      actual: primary,
      possible: [true, false],
    })
    if (valid && primary) visitor(root, result, messages.rejected)
  }
  pluginRule.ruleName = ruleName
  pluginRule.messages = messages
  return pluginRule
}

export function report(
  result: PostcssResult,
  ruleName: string,
  message: string,
  node: ChildNode,
  word?: string
) {
  stylelint.utils.report({ result, ruleName, message, node, word })
}
