import { type SourceFile } from 'ts-morph'

import {
  type ComponentTransformMap,
  type StyledAttrsTransformMap,
  changeAttrProperty,
  changeComponentProp,
} from '../../utils/component.js'
import { removeUnusedNamedImport } from '../../utils/import.js'

const STYLED_ATTRS_TRANSFORM_MAP: StyledAttrsTransformMap = {
  Text: {
    keyMapper: {
      marginAll: 'margin',
    },
    valueMapper: {
      'Typography.Size11': '"11"',
      'Typography.Size12': '"12"',
      'Typography.Size13': '"13"',
      'Typography.Size14': '"14"',
      'Typography.Size15': '"15"',
      'Typography.Size16': '"16"',
      'Typography.Size17': '"17"',
      'Typography.Size18': '"18"',
      'Typography.Size22': '"22"',
      'Typography.Size24': '"24"',
      'Typography.Size30': '"30"',
      'Typography.Size36': '"36"',
    },
  },
}

const JSX_PROP_TRANSFORM_MAP: ComponentTransformMap = {
  keyMapper: {
    Text: {
      marginAll: 'margin',
    },
  },
  valueMapper: {
    typo: {
      '{Typography.Size11}': '"11"',
      '{Typography.Size12}': '"12"',
      '{Typography.Size13}': '"13"',
      '{Typography.Size14}': '"14"',
      '{Typography.Size15}': '"15"',
      '{Typography.Size16}': '"16"',
      '{Typography.Size17}': '"17"',
      '{Typography.Size18}': '"18"',
      '{Typography.Size22}': '"22"',
      '{Typography.Size24}': '"24"',
      '{Typography.Size30}': '"30"',
      '{Typography.Size36}': '"36"',
    },
  },
}

const transformTextComponentProps = (sourceFile: SourceFile) => {
  const oldSourceFile = sourceFile.getText()

  changeComponentProp(sourceFile, JSX_PROP_TRANSFORM_MAP)
  changeAttrProperty(sourceFile, STYLED_ATTRS_TRANSFORM_MAP)

  if (oldSourceFile !== sourceFile.getText()) {
    removeUnusedNamedImport(sourceFile, ['@channel.io/bezier-react'])
  }
}

export default transformTextComponentProps
