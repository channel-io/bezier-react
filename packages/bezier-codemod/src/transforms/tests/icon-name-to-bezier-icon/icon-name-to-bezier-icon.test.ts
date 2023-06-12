import fs from 'fs'
import path from 'path'

import project from '../../../project.js'
import { iconNameToBezierIcon } from '../../icon-name-to-bezier-icon.js'

describe('iconsToBezierIcons', () => {
  it('converts iconName prop to BezierIcon source and import icons', () => {
    const inputPath = path.join(__dirname, 'fixtures', 'input.tsx')
    const outputPath = path.join(__dirname, 'fixtures', 'output.tsx')

    const inputCode = fs.readFileSync(inputPath, 'utf-8')
    const outputCode = fs.readFileSync(outputPath, 'utf-8')
    const sourceFile = project.createSourceFile('test.tsx', inputCode, { overwrite: true })

    iconNameToBezierIcon(sourceFile)

    expect(sourceFile.getFullText()).toBe(outputCode)
  })
})
