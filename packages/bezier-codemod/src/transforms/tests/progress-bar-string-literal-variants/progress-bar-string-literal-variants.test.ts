import fs from 'fs'
import path from 'path'

import project from '../../../project.js'
import progressBarStringLiteralVariants from '../../progress-bar-string-literal-variants.js'

describe('progressBarStringLiteralVariants', () => {
  it('should transform enum members to string literals correctly', () => {
    const inputPath = path.join(__dirname, 'fixtures', 'input1.tsx')
    const outputPath = path.join(__dirname, 'fixtures', 'output1.tsx')

    const inputCode = fs.readFileSync(inputPath, 'utf-8')
    const outputCode = fs.readFileSync(outputPath, 'utf-8')
    const sourceFile = project.createSourceFile('test.tsx', inputCode, { overwrite: true })

    const isMigrated = progressBarStringLiteralVariants(sourceFile)

    expect(sourceFile.getFullText()).toBe(outputCode)
    expect(isMigrated).toBe(true)
  })

  it('should transform enum members to string literals correctly with type imports', () => {
    const inputPath = path.join(__dirname, 'fixtures', 'input2.tsx')
    const outputPath = path.join(__dirname, 'fixtures', 'output2.tsx')

    const inputCode = fs.readFileSync(inputPath, 'utf-8')
    const outputCode = fs.readFileSync(outputPath, 'utf-8')
    const sourceFile = project.createSourceFile('test.tsx', inputCode, { overwrite: true })

    const isMigrated = progressBarStringLiteralVariants(sourceFile)

    expect(sourceFile.getFullText()).toBe(outputCode)
    expect(isMigrated).toBe(true)
  })

  it('should transform enum members to string literals correctly with mixed imports', () => {
    const inputPath = path.join(__dirname, 'fixtures', 'input3.tsx')
    const outputPath = path.join(__dirname, 'fixtures', 'output3.tsx')

    const inputCode = fs.readFileSync(inputPath, 'utf-8')
    const outputCode = fs.readFileSync(outputPath, 'utf-8')
    const sourceFile = project.createSourceFile('test.tsx', inputCode, { overwrite: true })

    const isMigrated = progressBarStringLiteralVariants(sourceFile)

    expect(sourceFile.getFullText()).toBe(outputCode)
    expect(isMigrated).toBe(true)
  })
})
