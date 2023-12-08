/* eslint-disable no-template-curly-in-string */
import { type SourceFile } from 'ts-morph'

import borderTransform from './foundation-to-css-variable-border.js'
import elevationTransform from './foundation-to-css-variable-elevation.js'
import roundingTransform from './foundation-to-css-variable-rounding.js'
import themeTransform from './foundation-to-css-variable-theme.js'
import transitionTransform from './foundation-to-css-variable-transition.js'

const transform = (sourceFile: SourceFile) => {
  try {
    transitionTransform(sourceFile)
    themeTransform(sourceFile)
    elevationTransform(sourceFile)
    roundingTransform(sourceFile)
    borderTransform(sourceFile)
  } catch (e) {
    console.log(e)
  }
}

export default transform
