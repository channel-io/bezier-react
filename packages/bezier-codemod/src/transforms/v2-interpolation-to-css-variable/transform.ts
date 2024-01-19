/* eslint-disable no-template-curly-in-string */
import { type SourceFile } from 'ts-morph'

import inputTransform from './input.js'
import roundingTransform from './rounding.js'
import typographyTransform from './typography.js'
import zIndexTransform from './zIndex.js'

const transform = (sourceFile: SourceFile) => {
  inputTransform(sourceFile)
  zIndexTransform(sourceFile)
  typographyTransform(sourceFile)
  roundingTransform(sourceFile)
}

export default transform
