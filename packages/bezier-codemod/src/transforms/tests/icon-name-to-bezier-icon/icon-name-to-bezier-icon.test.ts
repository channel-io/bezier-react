import fs from 'fs'
import path from 'path'

import project from '../../../project.js'
import iconNameToBezierIcon from '../../icon-name-to-bezier-icons/transform.js'

describe('iconsToBezierIcons', () => {
  it('converts iconName prop to BezierIcon source and import icons when bezier is not imported', () => {
    const inputPath = path.join(__dirname, 'fixtures', 'input1.tsx')
    const outputPath = path.join(__dirname, 'fixtures', 'output1.tsx')

    const inputCode = fs.readFileSync(inputPath, 'utf-8')
    const outputCode = fs.readFileSync(outputPath, 'utf-8')
    const sourceFile = project.createSourceFile('test.tsx', inputCode, { overwrite: true })

    const isMigrated = iconNameToBezierIcon(sourceFile)

    expect(sourceFile.getFullText()).toBe(outputCode)
    expect(isMigrated).toBe(true)
  })
})

describe('iconsToBezierIcons', () => {
  it('converts iconName prop to BezierIcon source and import icons when bezier icon is already imported', () => {
    const inputPath = path.join(__dirname, 'fixtures', 'input2.tsx')
    const outputPath = path.join(__dirname, 'fixtures', 'output2.tsx')

    const inputCode = fs.readFileSync(inputPath, 'utf-8')
    const outputCode = fs.readFileSync(outputPath, 'utf-8')
    const sourceFile = project.createSourceFile('test.tsx', inputCode, { overwrite: true })

    const isMigrated = iconNameToBezierIcon(sourceFile)

    expect(sourceFile.getFullText()).toBe(outputCode)
    expect(isMigrated).toBe(true)
  })
})
