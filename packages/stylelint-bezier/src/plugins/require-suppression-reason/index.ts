import { booleanPlugin, report } from '../utils'

export const ruleName = 'bezier/require-suppression-reason'
export const messages = {
  rejected:
    'BZR-ENG-001: Bezier suppression must be line-scoped and include `-- <specific reason>` explaining why the public alternative is unsafe.',
}

export const rule = booleanPlugin(
  ruleName,
  messages.rejected,
  (root, result, message) => {
    root.walkComments((comment) => {
      const value = comment.text.trim()
      if (!/stylelint-disable/u.test(value) || !/bezier/iu.test(value)) return
      const fileWide = /^stylelint-disable(?:\s|$)/u.test(value)
      const reason = value.split(/\s--\s/u)[1]?.trim() ?? ''
      if (fileWide || reason.length < 12) {
        report(result, ruleName, message, comment)
      }
    })
  }
)
