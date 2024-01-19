import {
  type JsxOpeningElement,
  type JsxSelfClosingElement,
  type SourceFile,
  SyntaxKind,
} from 'ts-morph'

type Component = string
type Props = string
type From = string
type To = string
type FromToMap = Record<From, To>

export type StyledAttrsTransformMap = Record<Component, { keyMapper?: FromToMap, valueMapper?: FromToMap }>
export type ComponentTransformMap = { keyMapper?: Record<Component, FromToMap>, valueMapper?: Record<Props, FromToMap> }

const getName = (node: JsxSelfClosingElement | JsxOpeningElement) => node.getTagNameNode().getText()

export const changeComponentProp = (sourceFile: SourceFile, componentPropTransformMap: ComponentTransformMap) => {
  const keyMapper = componentPropTransformMap.keyMapper
  if (!keyMapper) { return }
  const componentNames = Object.keys(keyMapper);

  ([SyntaxKind.JsxSelfClosingElement, SyntaxKind.JsxOpeningElement] as const)
    .flatMap((v) => sourceFile.getDescendantsOfKind(v))
    .filter((node) => componentNames.includes(getName(node)))
    .forEach((jsxElement) => {
      const elementName = getName(jsxElement)
      const mapper = keyMapper[elementName]
      jsxElement
        .getDescendantsOfKind(SyntaxKind.JsxAttribute)
        .forEach((attribute) => {
          const from = attribute.getFirstChild()?.getText()
          if (from && mapper[from]) {
            attribute.getFirstChild()?.replaceWithText(mapper[from])
          }
        })
    })

  const valueMapper = componentPropTransformMap.valueMapper
  if (!valueMapper) { return }
  const propsNames = Object.keys(valueMapper);
  ([SyntaxKind.JsxSelfClosingElement, SyntaxKind.JsxOpeningElement] as const)
    .flatMap((v) => sourceFile.getDescendantsOfKind(v))
    .filter((v) => v.getDescendantsOfKind(SyntaxKind.JsxAttribute).some((attr) => propsNames.includes(attr.getFirstChild()?.getText() ?? '')))
    .forEach((jsxElement) => {
      jsxElement
        .getDescendantsOfKind(SyntaxKind.JsxAttribute)
        .forEach((attribute) => {
          const prop = attribute.getFirstChild()?.getText() ?? ''
          const valueFrom = attribute.getLastChild()?.getText()
          const mapper = valueMapper[prop]
          if (valueFrom && mapper?.[valueFrom]) {
            attribute.getLastChild()?.replaceWithText(mapper[valueFrom])
          }
        })
    })
}

export const changeAttrProperty = (sourceFile: SourceFile, transformMap: StyledAttrsTransformMap) => {
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
