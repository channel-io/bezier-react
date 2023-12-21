import { type SourceFile } from 'ts-morph'

import {
  type EnumTransformMap,
  transformEnumMemberToStringLiteral,
} from '../../shared/enum.js'

const ENUM_TRANSFORM_MAP: EnumTransformMap = {
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

function enumMemberToStringLiteral(sourceFile: SourceFile): true | void {
  return transformEnumMemberToStringLiteral(sourceFile, ENUM_TRANSFORM_MAP)
}

export default enumMemberToStringLiteral
