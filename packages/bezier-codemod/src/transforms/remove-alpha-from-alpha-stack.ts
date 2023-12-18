import {
  type SourceFile,
  SyntaxKind,
} from 'ts-morph'

import {
  getNamedImport,
  hasNamedImport,
} from '../utils/import.js'

const LEGACY_STACKS = ['Stack', 'HStack', 'VStack', 'StackItem', 'Spacer']
const ALPHA_STACKS = ['AlphaStack']
const getNameWithLegacyPrefix = (name: string) => `Legacy${name}`
const getNameWithoutAlphaPrefix = (name: string) => name.slice('ALPHA'.length)

const transformInImport = (sourceFile: SourceFile, stacks: string[], convertFn: (name: string) => string) => {
  stacks.forEach((stack) => {
    if (hasNamedImport(sourceFile, stack)) {
      const importSpecifier = getNamedImport(sourceFile, stack)
      const alias = importSpecifier?.getAliasNode()
      if (alias) {
        importSpecifier?.replaceWithText(`${convertFn(stack)} as ${alias.getText()}`)
      } else {
        importSpecifier?.replaceWithText(convertFn(stack))
        sourceFile
          .getDescendantsOfKind(SyntaxKind.Identifier)
          .filter((v) => v.getText() === stack)
          .forEach((v) => v.replaceWithText(convertFn(stack)))
      }
    }
  })
}

const transformInJsx = (sourceFile: SourceFile, stacks: string[], convertFn: (name: string) => string) => {
  for (const syntaxKind of [SyntaxKind.JsxOpeningElement, SyntaxKind.JsxClosingElement, SyntaxKind.JsxSelfClosingElement] as const) {
    sourceFile
      .getDescendantsOfKind(syntaxKind)
      .forEach((v) => {
        const nodeName = v.getTagNameNode().getText()
        if (stacks.includes(nodeName)) {
          v.getTagNameNode().replaceWithText(convertFn(nodeName))
        }
      })
  }
}

const transformLegacyStack = (sourceFile: SourceFile) => {
  transformInImport(sourceFile, LEGACY_STACKS, getNameWithLegacyPrefix)
  transformInJsx(sourceFile, LEGACY_STACKS, getNameWithLegacyPrefix)
}

const transformAlphaStack = (sourceFile: SourceFile) => {
  transformInImport(sourceFile, ALPHA_STACKS, getNameWithoutAlphaPrefix)
  transformInJsx(sourceFile, ALPHA_STACKS, getNameWithoutAlphaPrefix)
}

const transform = (sourceFile: SourceFile) => {
  const oldSourceFileText = sourceFile.getText()
  transformLegacyStack(sourceFile)
  transformAlphaStack(sourceFile)
  return oldSourceFileText !== sourceFile.getText()
}

export default transform
