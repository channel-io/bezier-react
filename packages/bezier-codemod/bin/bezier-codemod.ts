#! /usr/bin/env ts-node

import {
  IndentationText,
  NewLineKind,
  Project,
  QuoteKind,
  type SourceFile,
} from 'ts-morph'

import iconsToBezierIcons from '../transforms/icons-to-bezier-icons'

const project = new Project({
  manipulationSettings: {
    indentationText: IndentationText.TwoSpaces,
    newLineKind: NewLineKind.LineFeed,
    quoteKind: QuoteKind.Single,
    usePrefixAndSuffixTextForRename: true,
    useTrailingCommas: false,
  },
})

if (process.argv.length < 4) {
  console.error('Please provide a target directory.')
  process.exit(1)
}

const transformMap = {
  'icons-to-bezier-icons': iconsToBezierIcons,
} as Record<string, (sourceFile: SourceFile) => void>

project.addSourceFilesAtPaths(process.argv[3])

async function main() {
  Promise.all(
    project.getSourceFiles().map(async (sourceFile) => {
      const transformName = process.argv[2]
      const transform = transformMap[transformName]

      if (!transform) {
        console.error(`Unknown transform: ${transformName}`)
        process.exit(1)
      }

      transform(sourceFile)
      await sourceFile.save()
    }),
  ).then(() => {
    console.log('Transformation completed successfully.')
  })
}

main()
