import { type Rule } from 'eslint'

export function createRule(
  description: string,
  messages: Record<string, string>,
  create: Rule.RuleModule['create']
): Rule.RuleModule {
  return {
    meta: {
      type: 'problem',
      docs: { description },
      schema: [],
      messages,
    },
    create,
  }
}
