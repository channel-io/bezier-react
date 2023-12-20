import {
  type JsxOpeningElement,
  type JsxSelfClosingElement,
  type SourceFile,
  SyntaxKind,
} from 'ts-morph'

type Component = string
type From = string
type To = string
export type ComponentTransformMap = Record<Component, { keyMapper?: Record<From, To>, valueMapper?: Record<From, To> }>

const getName = (node: JsxSelfClosingElement | JsxOpeningElement) => node.getTagNameNode().getText()

export const changeComponentProp = (sourceFile: SourceFile, componentPropTransformMap: ComponentTransformMap) => {
  const componentNames = new Set(Object.keys(componentPropTransformMap));

  ([SyntaxKind.JsxSelfClosingElement, SyntaxKind.JsxOpeningElement] as const)
    .flatMap((v) => sourceFile.getDescendantsOfKind(v))
    .filter((node) => componentNames.has(getName(node)))
    .forEach((jsxElement) => {
      const elementName = getName(jsxElement)
      const { keyMapper, valueMapper } = componentPropTransformMap[elementName]
      jsxElement
        .getDescendantsOfKind(SyntaxKind.JsxAttribute)
        .forEach((attribute) => {
          if (keyMapper) {
            const propKeyFrom = attribute.getFirstChild()?.getText()
            if (propKeyFrom && keyMapper[propKeyFrom]) {
              attribute.getFirstChild()?.replaceWithText(keyMapper[propKeyFrom])
            }
          }

          if (valueMapper) {
            const propValueFrom = attribute.getLastChild()?.getText()
            if (propValueFrom && valueMapper[propValueFrom]) {
              attribute.getLastChild()?.replaceWithText(valueMapper[propValueFrom])
            }
          }
        })
    })
}

export const changeAttrProperty = (sourceFile: SourceFile, transformMap: ComponentTransformMap) => {
  for (const component of Object.keys(transformMap)) {
    const { keyMapper, valueMapper } = transformMap[component]

    sourceFile
      .getDescendantsOfKind(SyntaxKind.TaggedTemplateExpression)
      .filter((node) => node.getText().startsWith(`styled(${component})`))
      .flatMap((node) => node.getDescendantsOfKind(SyntaxKind.PropertyAssignment))
      .forEach((node) => {
        if (keyMapper) {
          const prop = node.getFirstChild()?.getText()
          if (prop && keyMapper?.[prop]) {
            node.getFirstChild()?.replaceWithText(keyMapper?.[prop])
          }
        }

        if (valueMapper) {
          const propValue = node.getLastChild()?.getText()
          if (propValue && valueMapper[propValue]) {
            node.getLastChild()?.replaceWithText(valueMapper[propValue])
          }
        }
      })
  }
}
