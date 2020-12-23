/**
 * NOTE:
 * 이 모듈은 Text, Icon 등 뿐 아니라 Colors, Elevation 등에서도 import 하고 있습니다.
 * 이로 인해 Colors(Elevation 등) -> ThemedStyledComponent -> Theme -> Colors(Elevation 등)
 * 의 Circular dependency 가 발생합니다.
 * 하지만 ThemedStyledComponent 에서 사용하는 Theme 은 단순한 interface 로
 * 동작에는 문제가 없으며, type checking 도 올바르게 됩니다.
 */

/* External dependencies */
import React, { createContext, useContext } from 'react'
import styled, {
  css as baseCSS,
  ThemedStyledFunction,
  ThemedStyledProps,
  AnyStyledComponent,
  StyledComponentInnerComponent,
  StyledComponentInnerOtherProps,
  StyledComponentInnerAttrs,
  FlattenSimpleInterpolation,
  Interpolation,
  InterpolationFunction,
  FlattenInterpolation,
  SimpleInterpolation,
  CSSObject,
} from 'styled-components'

/* Internal dependencies */
import domElements from './utils/domElements'
import { Foundation } from './index'

const FoundationContext = createContext<Foundation | null>(null)

interface FoundationProviderProps {
  foundation: Foundation
  children: React.ReactNode
}

function FoundationProvider({
  foundation,
  children,
}: FoundationProviderProps) {
  return <FoundationContext.Provider value={foundation}>{ children }</FoundationContext.Provider>
}

type FoundationStyledComponentFactories = {
  [TTag in keyof JSX.IntrinsicElements]: ThemedStyledFunction<TTag, Foundation, { foundation?: Foundation }>
}

interface FoundationStyledInterface extends FoundationStyledComponentFactories {
  <C extends AnyStyledComponent>(component: C): ThemedStyledFunction<
  StyledComponentInnerComponent<C>,
  Foundation,
  StyledComponentInnerOtherProps<C> & { foundation?: Foundation },
  StyledComponentInnerAttrs<C>
  >
  <C extends keyof JSX.IntrinsicElements | React.ComponentType<any>>(
    // unfortunately using a conditional type to validate that it can receive a `theme?: Theme`
    // causes tests to fail in TS 3.1
    component: C
  ): ThemedStyledFunction<C, Foundation, { foundation?: Foundation }>
}

/* eslint-disable-next-line func-names */ /* @ts-ignore */
const FoundationStyled: FoundationStyledInterface = function <T extends object>(tag) {
  return function wrappedTemplateFunction(...args: TemplateStringsArray) {
    return function WrappedElement(props) {
      const currentFoundation = useContext(FoundationContext)
      const tagTemplate = styled(tag)
      // @ts-ignore
      const BaseComponent = tagTemplate<T>(...args)
      return (
        <BaseComponent
          foundation={currentFoundation}
          {...props}
        />
      )
    }
  }
};

(domElements as Array<AnyStyledComponent>).forEach(element => {
  FoundationStyled[element] = FoundationStyled(element)
})

interface FoundationCSSInterface {
  (
    first: TemplateStringsArray | CSSObject,
    ...interpolations: SimpleInterpolation[]
  ): FlattenSimpleInterpolation
  (
    first:
    | TemplateStringsArray
    | CSSObject
    | InterpolationFunction<ThemedStyledProps<{ foundation?: Foundation }, Foundation>>,
    ...interpolations: Array<Interpolation<ThemedStyledProps<{ foundation?: Foundation }, Foundation>>>
  ): FlattenInterpolation<ThemedStyledProps<{ foundation?: Foundation }, Foundation>>
  <P extends object>(
    first:
    | TemplateStringsArray
    | CSSObject
    | InterpolationFunction<ThemedStyledProps<P & { foundation?: Foundation }, Foundation>>,
    ...interpolations: Array<Interpolation<ThemedStyledProps<P & { foundation?: Foundation }, Foundation>>>
  ): FlattenInterpolation<ThemedStyledProps<P & { foundation?: Foundation }, Foundation>>
}

/* eslint-disable-next-line func-names */
const FoundationCSS: FoundationCSSInterface = function (...args) {
  /* @ts-ignore */
  return baseCSS(...args)
}

export {
  FoundationStyled as styled,
  FoundationCSS as css,
  FoundationProvider,
}
