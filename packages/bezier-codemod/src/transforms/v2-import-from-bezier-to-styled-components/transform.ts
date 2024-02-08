import {
  type SourceFile,
  ts,
} from 'ts-morph'

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
  } else if (isDefault) {
    sourceFile.insertImportDeclaration(0, {
      defaultImport: STYLED,
      moduleSpecifier: STYLED_COMPONENTS,
    })
  } else {
    sourceFile.insertImportDeclaration(0, {
      namedImports: [importSpecifier],
      moduleSpecifier: STYLED_COMPONENTS,
    })
  }
}

const replaceStyledImport = (sourceFile: SourceFile) => {
  if (hasNamedImport(sourceFile, STYLED)) {
    removeNamedImport(sourceFile, STYLED)
    addImportToStyledComponents(sourceFile, STYLED, true)
  }

  // NOTE: semicolon 제거를 namedImport 추가 후 하면 ts-morph 에서 runtime error 를 낸다
  sourceFile.formatText({
    semicolons: ts.SemicolonPreference.Remove,
  })

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
}

export default replaceStyledImport
