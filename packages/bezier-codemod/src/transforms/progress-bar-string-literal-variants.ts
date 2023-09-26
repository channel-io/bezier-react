import { type SourceFile } from 'ts-morph'

import enumMemberToStringLiteral from './common/enum-member-to-string-literal.js'

function progressBarStringLiteralVariants(sourceFile: SourceFile): true | void {
  const enumTransforms = {
    ProgressBarSize: {
      M: 'm',
      S: 's',
    },
    ProgressBarVariant: {
      Green: 'green',
      GreenAlt: 'green-alt',
      Monochrome: 'monochrome',
    },
  }
  return enumMemberToStringLiteral(enumTransforms)(sourceFile)
}

export default progressBarStringLiteralVariants
