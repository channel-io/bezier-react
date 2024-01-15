/* eslint-disable no-template-curly-in-string */
import { type SourceFile } from 'ts-morph'

import borderTransform from './border.js'
import elevationTransform from './elevation.js'
import roundingTransform from './rounding.js'
import spacingTransform from './spacing.js'
import themeTransform from './theme.js'
import transitionTransform from './transition.js'

const transform = (sourceFile: SourceFile) => {
  transitionTransform(sourceFile)
  themeTransform(sourceFile)
  elevationTransform(sourceFile)
  roundingTransform(sourceFile)
  borderTransform(sourceFile)
  spacingTransform(sourceFile)
}

export default transform
