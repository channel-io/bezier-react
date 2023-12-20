import {
  type JsxAttribute,
  type JsxOpeningElement,
  type JsxSelfClosingElement,
  type SourceFile,
  SyntaxKind,
} from 'ts-morph'

type Component = string
type PropsFrom = string
type PropsTo = string
type ComponentPropTransformMap = Record<Component, Record<PropsFrom, PropsTo>>

const getName = (node: JsxSelfClosingElement | JsxOpeningElement) => node.getTagNameNode().getText()

const renameProps = (node: JsxAttribute, to: string) => {
  node.set({ name: to, initializer: node.getInitializer()?.getText() })
}

export const changePropsName = (sourceFile: SourceFile, componentPropTransformMap: ComponentPropTransformMap) => {
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
