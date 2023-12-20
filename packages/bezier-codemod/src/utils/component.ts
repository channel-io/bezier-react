import {
  type JsxAttribute,
  type JsxOpeningElement,
  type JsxSelfClosingElement,
  type PropertyAssignment,
  type SourceFile,
  SyntaxKind,
} from 'ts-morph'

type Component = string
type From = string
type To = string
type ComponentTransformMap = Record<Component, Record<From, To>>

const getName = (node: JsxSelfClosingElement | JsxOpeningElement) => node.getTagNameNode().getText()

const renameProps = (node: JsxAttribute, to: string) => {
  node.set({ name: to, initializer: node.getInitializer()?.getText() })
}

export const changePropsName = (sourceFile: SourceFile, componentPropTransformMap: ComponentTransformMap) => {
  const componentNames = new Set(Object.keys(componentPropTransformMap));

  ([SyntaxKind.JsxSelfClosingElement, SyntaxKind.JsxOpeningElement] as const)
    .flatMap((v) => sourceFile.getDescendantsOfKind(v))
    .filter((node) => componentNames.has(getName(node)))
    .forEach((jsxElement) => {
      for (const [propsFrom, propsTo] of Object.entries(componentPropTransformMap[getName(jsxElement)])) {
        const attribute = jsxElement.getAttribute(propsFrom) as JsxAttribute | undefined
        if (attribute) {
          renameProps(attribute, propsTo)
        }
      }
    })
}

export const renameSingleProperty = (node: PropertyAssignment, to: string) => {
  node.getFirstChild()?.replaceWithText(to)
}

export const transformAttrProperty = (sourceFile: SourceFile, transformMap: Record<string, Record<string, string>>) => {
  for (const component of Object.keys(transformMap)) {
    const fromProps = new Set(Object.keys(transformMap[component]))

    sourceFile
      .getDescendantsOfKind(SyntaxKind.TaggedTemplateExpression)
      .filter((node) => node.getText().startsWith(`styled(${component})`))
      .flatMap((node) => node.getDescendantsOfKind(SyntaxKind.PropertyAssignment))
      .forEach((node) => {
        const prop = node.getFirstChild()?.getText()
        if (!prop || !fromProps.has(prop)) {
          return
        }

        renameSingleProperty(node, transformMap[component][prop])
      })
  }
}
