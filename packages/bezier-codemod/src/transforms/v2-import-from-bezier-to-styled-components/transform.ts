import { type SourceFile } from 'ts-morph'

import {
  getImportDeclaration,
  getImportDeclarations,
  hasNamedImport,
  removeNamedImport,
} from '../../utils/import.js'

const STYLED = 'styled'
const NAMED_IMPORTS = ['css', 'createGlobalStyle', 'keyframes', 'StyleSheetManager', 'ServerStyleSheet']
const STYLED_COMPONENTS = 'styled-components'
const BEZIER_REACT = '@channel.io/bezier-react'

const addImportToStyledComponents = (sourceFile: SourceFile, importSpecifier: string, isDefault: boolean = false) => {
  const styledComponentsImport = getImportDeclaration(sourceFile, STYLED_COMPONENTS)
  if (styledComponentsImport) {
    if (isDefault) {
      styledComponentsImport.setDefaultImport(importSpecifier)
    } else {
      styledComponentsImport.addNamedImport(importSpecifier)
    }
  } else {
    sourceFile.insertImportDeclaration(0, {
      defaultImport: STYLED,
      moduleSpecifier: STYLED_COMPONENTS,
    })
  }
}

const replaceStyledImport = (sourceFile: SourceFile) => {
  const oldSourceFileText = sourceFile.getText()

  if (hasNamedImport(sourceFile, STYLED)) {
    removeNamedImport(sourceFile, STYLED)
    addImportToStyledComponents(sourceFile, STYLED, true)
  }

  NAMED_IMPORTS.forEach((namedImport) => {
    if (hasNamedImport(sourceFile, namedImport)) {
      removeNamedImport(sourceFile, namedImport)
      addImportToStyledComponents(sourceFile, namedImport, false)
    }
  })

  getImportDeclarations(sourceFile, BEZIER_REACT)
    .forEach((importDeclaration) => {
      if (!importDeclaration.getImportClause()?.getText()) {
        importDeclaration.remove()
      }
    })

  return oldSourceFileText !== sourceFile.getText()
}

export default replaceStyledImport
