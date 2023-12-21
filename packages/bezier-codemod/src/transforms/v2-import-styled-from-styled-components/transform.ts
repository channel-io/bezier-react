import {
  type SourceFile,
  ts,
} from 'ts-morph'

import {
  getImportDeclaration,
  hasNamedImport,
  removeImportDeclarationWithoutImport,
  removeNamedImport,
} from '../../utils/import.js'

const STYLED = 'styled'
const STYLED_COMPONENTS = 'styled-components'

const removeStyledFromBezier = (sourceFile: SourceFile) => {
  removeNamedImport(sourceFile, STYLED)
  removeImportDeclarationWithoutImport(sourceFile)
}

const addStyledToStyledComponents = (sourceFile: SourceFile) => {
  const styledComponentsImport = getImportDeclaration(sourceFile, STYLED_COMPONENTS)
  if (styledComponentsImport) {
    styledComponentsImport.setDefaultImport(STYLED)
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
    addStyledToStyledComponents(sourceFile)
    removeStyledFromBezier(sourceFile)

    sourceFile.formatText({
      semicolons: ts.SemicolonPreference.Remove,
    })
  }

  return oldSourceFileText !== sourceFile.getText()
}

export default replaceStyledImport
