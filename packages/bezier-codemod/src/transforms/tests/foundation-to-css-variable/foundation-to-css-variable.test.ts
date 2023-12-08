import fs from 'fs'
import path from 'path'

import { type SourceFile } from 'ts-morph'

import project from '../../../project.js'
import borderTransform from '../../foundation-to-css-variable-border.js'
import elevationTransform from '../../foundation-to-css-variable-elevation.js'
import roundingTransform from '../../foundation-to-css-variable-rounding.js'
import themeTransform from '../../foundation-to-css-variable-theme.js'
import transitionTransform from '../../foundation-to-css-variable-transition.js'

const test = (fileName: string, transform: (sourceFile: SourceFile) => void) => {
  const inputPath = path.join(__dirname, 'fixtures', `${fileName}.input.tsx`)
  const outputPath = path.join(__dirname, 'fixtures', `${fileName}.output.tsx`)

  const inputCode = fs.readFileSync(inputPath, 'utf-8')
  const outputCode = fs.readFileSync(outputPath, 'utf-8')
  const sourceFile = project.createSourceFile('test.tsx', inputCode, { overwrite: true })

  transform(sourceFile)

  expect(sourceFile.getFullText()).toBe(outputCode)
}

describe('theme transform', () => {
  it('should transform foundation to css variable', () => {
    test('theme', themeTransform)
  })
})

describe('rounding transform', () => {
  it('should transform foundation to css variable', () => {
    test('rounding', roundingTransform)
  })
})

describe('border transform', () => {
  it('should transform foundation to css variable', () => {
    test('border', borderTransform)
  })
})

describe('elevation transform', () => {
  it('should transform foundation to css variable', () => {
    test('elevation', elevationTransform)
  })
})

describe('transition transform', () => {
  it('should transform foundation to css variable', () => {
    test('transition', transitionTransform)
  })
})
