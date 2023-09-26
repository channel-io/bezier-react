import { type SourceFile } from 'ts-morph'

import enumMemberToStringLiteral from './common/enum-member-to-string-literal.js'

function progressBarStringLiteralVariants(sourceFile: SourceFile): true | void {
  const targetEnums = ['ProgressBarVariant', 'ProgressBarSize']
  return enumMemberToStringLiteral(targetEnums)(sourceFile)
}

export default progressBarStringLiteralVariants
