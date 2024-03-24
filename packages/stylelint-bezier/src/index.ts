import stylelint from 'stylelint'

import validateTokensRule from './rules/validate-tokens'

const { createPlugin } = stylelint

export default [createPlugin(validateTokensRule.ruleName, validateTokensRule)]
