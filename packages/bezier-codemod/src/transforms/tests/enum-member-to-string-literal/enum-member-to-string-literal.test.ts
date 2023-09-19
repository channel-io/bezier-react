import fs from 'fs'
import path from 'path'

import project from '../../../project.js'
import enumMemberToStringLiteral from '../../enum-member-to-string-literal.js'

describe('enumMemberToStringLiteral', () => {
  // TODO(@aru): 테스트 이름 변경
  it('ASDF1', () => {
    const inputPath = path.join(__dirname, 'fixtures', 'input1.tsx')
    const outputPath = path.join(__dirname, 'fixtures', 'output1.tsx')

    const inputCode = fs.readFileSync(inputPath, 'utf-8')
    const outputCode = fs.readFileSync(outputPath, 'utf-8')
    const sourceFile = project.createSourceFile('test.tsx', inputCode, { overwrite: true })

    const isMigrated = enumMemberToStringLiteral(sourceFile)

    expect(sourceFile.getFullText()).toBe(outputCode)
    expect(isMigrated).toBe(true)
  })

  // TODO(@aru): 테스트 이름 변경
  it('ASDF2', () => {
    const inputPath = path.join(__dirname, 'fixtures', 'input2.tsx')
    const outputPath = path.join(__dirname, 'fixtures', 'output2.tsx')

    const inputCode = fs.readFileSync(inputPath, 'utf-8')
    const outputCode = fs.readFileSync(outputPath, 'utf-8')
    const sourceFile = project.createSourceFile('test.tsx', inputCode, { overwrite: true })

    const isMigrated = enumMemberToStringLiteral(sourceFile)

    expect(sourceFile.getFullText()).toBe(outputCode)
    expect(isMigrated).toBe(true)
  })
})
