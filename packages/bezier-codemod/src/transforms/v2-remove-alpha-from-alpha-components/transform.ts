import { type SourceFile, SyntaxKind } from 'ts-morph'

import { renameNamedImport } from '../../utils/import.js'

const LEGACY_STACKS = ['Stack', 'HStack', 'VStack', 'StackItem', 'Spacer']
const ALPHA_STACKS = ['AlphaStack', 'AlphaCenter']
const getNameWithLegacyPrefix = (name: string) => `Legacy${name}`
const getNameWithoutAlphaPrefix = (name: string) => name.slice('ALPHA'.length)

const transformInJsx = (
  sourceFile: SourceFile,
  stacks: string[],
  convertFn: (name: string) => string
) => {
  for (const syntaxKind of [
    SyntaxKind.JsxOpeningElement,
    SyntaxKind.JsxClosingElement,
    SyntaxKind.JsxSelfClosingElement,
  ] as const) {
    sourceFile.getDescendantsOfKind(syntaxKind).forEach((v) => {
      const nodeName = v.getTagNameNode().getText()
      if (stacks.includes(nodeName)) {
        v.getTagNameNode().replaceWithText(convertFn(nodeName))
      }
    })
  }
}

const transformLegacyComponents = (sourceFile: SourceFile) => {
  renameNamedImport(sourceFile, LEGACY_STACKS, getNameWithLegacyPrefix)
  transformInJsx(sourceFile, LEGACY_STACKS, getNameWithLegacyPrefix)
}

const transformAlphaComponents = (sourceFile: SourceFile) => {
  renameNamedImport(sourceFile, ALPHA_STACKS, getNameWithoutAlphaPrefix)
  transformInJsx(sourceFile, ALPHA_STACKS, getNameWithoutAlphaPrefix)
}

const transform = (sourceFile: SourceFile) => {
  transformLegacyComponents(sourceFile)
  transformAlphaComponents(sourceFile)
}

export default transform
