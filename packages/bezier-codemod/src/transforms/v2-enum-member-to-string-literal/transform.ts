import { type SourceFile } from 'ts-morph'

import {
  type EnumTransformMap,
  transformEnumToStringLiteralInBezier,
} from '../../shared/enum.js'

const ENUM_TRANSFORM_MAP: EnumTransformMap = {
  AvatarSize: {
    M: 'm',
    S: 's',
  },
  ProgressBarVariant: {
    Green: 'green',
    GreenAlt: 'green-alt',
    Monochrome: 'monochrome',
  },
}

function enumMemberToStringLiteral(sourceFile: SourceFile): true | void {
  return transformEnumToStringLiteralInBezier(sourceFile, ENUM_TRANSFORM_MAP)
}

export default enumMemberToStringLiteral
