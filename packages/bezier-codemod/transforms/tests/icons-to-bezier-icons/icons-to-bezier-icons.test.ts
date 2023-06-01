import fs from 'fs'
import path from 'path'

import {
  IndentationText,
  NewLineKind,
  Project,
  QuoteKind,
} from 'ts-morph'

import iconsToBezierIcons from '../../icons-to-bezier-icons'

describe('iconsToBezierIcons', () => {
  it('should transform import statements correctly', () => {
    const project = new Project({
      manipulationSettings: {
        indentationText: IndentationText.TwoSpaces,
        newLineKind: NewLineKind.LineFeed,
        quoteKind: QuoteKind.Single,
        usePrefixAndSuffixTextForRename: false,
        useTrailingCommas: false,
      },
    })

    const inputPath = path.join(__dirname, 'fixtures', 'input.tsx')
    const outputPath = path.join(__dirname, 'fixtures', 'output.tsx')

    const inputCode = fs.readFileSync(inputPath, 'utf-8')
    const outputCode = fs.readFileSync(outputPath, 'utf-8')
    const sourceFile = project.createSourceFile('test.tsx', inputCode, { overwrite: true })

    iconsToBezierIcons(sourceFile)

    const transformedCode = sourceFile.getText()
    expect(transformedCode).toBe(outputCode)
  })
})
