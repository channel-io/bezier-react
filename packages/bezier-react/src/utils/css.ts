import { isNil } from './typeUtils'

export const px = <Value extends number | undefined>(value: Value) => (!isNil(value) ? `${value}px` as const : undefined)

export const cssVarName = <ComponentName extends string>(componentName: ComponentName) => <PropertyName extends string>(propertyName: PropertyName) => `--bezier-${componentName}-${propertyName}` as const

export function cssVarValue<
  PropertyName extends string | undefined,
  DeclarationValue extends string | number | undefined,
>(propertyName: PropertyName, declarationValue?: DeclarationValue) {
  /* eslint-disable no-nested-ternary */
  return !isNil(propertyName)
    ? !isNil(declarationValue)
      ? `var(--${propertyName}, ${declarationValue})` as const
      : `var(--${propertyName})` as const
    : undefined
  /* eslint-enable no-nested-ternary */
}

export function cssUrl(url: string | undefined) {
  return url ? `url(${url})` : undefined
}
