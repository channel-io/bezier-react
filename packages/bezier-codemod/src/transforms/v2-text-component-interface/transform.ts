import { type SourceFile } from 'ts-morph'

import {
  changePropsName,
  transformAttrProperty,
} from '../../utils/component.js'
import { transformEnumMemberToStringLiteral } from '../enum-member-to-string-literal/transform.js'

const MARGIN_TRANSFORM_MAP = {
  Text: {
    marginAll: 'm',
    marginTop: 'mt',
    marginRight: 'mr',
    marginBottom: 'mb',
    marginLeft: 'ml',
    marginHorizontal: 'mx',
    marginVertical: 'my',
  },
}

const TYPOGRAPHY_ENUM_TRANSFORM_MAP = {
  Typography: {
    Size11: '11',
    Size12: '12',
    Size13: '13',
    Size14: '14',
    Size15: '15',
    Size16: '16',
    Size17: '17',
    Size18: '18',
    Size22: '22',
    Size24: '24',
    Size30: '30',
    Size36: '36',
  },
}

const transformTextComponentProps = (sourceFile: SourceFile) => {
  const oldSourceFileText = sourceFile.getText()

  transformEnumMemberToStringLiteral(sourceFile, TYPOGRAPHY_ENUM_TRANSFORM_MAP)
  changePropsName(sourceFile, MARGIN_TRANSFORM_MAP)
  transformAttrProperty(sourceFile, MARGIN_TRANSFORM_MAP)

  return oldSourceFileText !== sourceFile.getText()
}

export default transformTextComponentProps
