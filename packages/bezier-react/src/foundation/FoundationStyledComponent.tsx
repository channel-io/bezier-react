/**
 * NOTE:
 * 이 모듈은 Text, Icon 등 뿐 아니라 Colors, Elevation 등에서도 import 하고 있습니다.
 * 이로 인해 Colors(Elevation 등) -> ThemedStyledComponent -> Theme -> Colors(Elevation 등)
 * 의 Circular dependency 가 발생합니다.
 * 하지만 ThemedStyledComponent 에서 사용하는 Theme 은 단순한 interface 로
 * 동작에는 문제가 없으며, type checking 도 올바르게 됩니다.
 */

/* External dependencies */
import React, {
  createContext,
  forwardRef,
  useContext,
} from 'react'

import styled, {
  type AnyStyledComponent,
  createGlobalStyle as baseCreateGlobalStyle,
  css as baseCSS,
  type CSSObject,
  type FlattenInterpolation,
  type FlattenSimpleInterpolation,
  type GlobalStyleComponent,
  type Interpolation,
  type InterpolationFunction,
  keyframes,
  ServerStyleSheet,
  type SimpleInterpolation,
  type StyledComponentInnerAttrs,
  type StyledComponentInnerComponent,
  type StyledComponentInnerOtherProps,
  type ThemedStyledFunction,
  type ThemedStyledProps,
} from 'styled-components'

/* Internal dependencies */
import { type Foundation } from './Foundation'
import domElements from './utils/domElements'

const FoundationContext = createContext<Foundation | null>(null)

interface FoundationProviderProps {
  foundation: Foundation
  children: React.ReactNode
}

function FoundationProvider({
  foundation,
  children,
}: FoundationProviderProps) {
  return (
    <FoundationContext.Provider value={foundation}>
      { children }
    </FoundationContext.Provider>
  )
}

/**
 * NOTE:
 * styled component 는 theme Context 를 갖고 있습니다. 하지만 이 context 를 사용할때는 반드시 'theme' 이라는 이름으로밖에 접근할 수 없습니다.
 * Theme 이라는 용어는 내부적으로 이미 사용하고 있거니와, styled 의 theme 에 해당하는 개념에 Mondrian 은 Foundation 이라는 이름을 붙여주었습니다.
 * 이 괴리를 해소하기 위해 styled 함수를 wrapping 하고 커스텀 context 를 강제 주입합니다.
 * 아래의 interface, type 들은 타입체크 에러를 해소하기 위해 작성되었습니다. 제거 가능한 방법을 찾을 경우 가급적 제거하는 것이 필요합니다.
 */

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

function templateFunctionGenerator(BaseComponentGenerator: ThemedStyledFunction<any, any, object, string | number | symbol>) {
  const customTemplateFn = (...args: TemplateStringsArray) => {
    // @ts-ignore
    const BaseComponent = BaseComponentGenerator(...args)
    const BaseRefComponent = forwardRef((props, ref) => {
      const currentFoundation = useContext(FoundationContext)
      return (
        <BaseComponent
          ref={ref}
          key={args.toString()}
          foundation={currentFoundation}
          {...props}
        />
      )
    })
    BaseRefComponent.toString = BaseComponent.toString
    return BaseRefComponent
  }
  customTemplateFn.attrs = (attrs) => templateFunctionGenerator(BaseComponentGenerator.attrs(attrs))
  customTemplateFn.withConfig = (config) => templateFunctionGenerator(BaseComponentGenerator.withConfig(config))
  return customTemplateFn
}

/* eslint-disable-next-line func-names */ /* @ts-ignore */
const FoundationStyled: FoundationStyledInterface = (tag) => {
  const tagTemplate = styled(tag)
  return templateFunctionGenerator(tagTemplate)
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
const FoundationCSS: FoundationCSSInterface = baseCSS

function useFoundation() {
  return useContext(FoundationContext)
}

type GlobalStyleProp = {
  global?: CSSObject
}

type FoundationWithGlobalStyle = Foundation & GlobalStyleProp
interface CreateFoundationGlobalStyle {
  <P extends object>(
    first:
    | TemplateStringsArray
    | CSSObject
    | InterpolationFunction<ThemedStyledProps<P & { foundation?: FoundationWithGlobalStyle }, Foundation>>,
    ...interpolations: Array<Interpolation<ThemedStyledProps<P & { foundation?: FoundationWithGlobalStyle }, Foundation>>>
  ): GlobalStyleComponent<
  // @ts-ignore
  P & { foundation: FoundationWithGlobalStyle },
  ThemedStyledProps<P & { foundation: FoundationWithGlobalStyle }, Foundation>
  >
}

/* eslint-disable-next-line func-names */ /* @ts-ignore */
const createFoundationGlobalStyle: CreateFoundationGlobalStyle = baseCreateGlobalStyle

export type {
  GlobalStyleProp,
}

export {
  createFoundationGlobalStyle as createGlobalStyle,
  FoundationStyled as styled,
  FoundationCSS as css,
  FoundationProvider,
  useFoundation,
  keyframes,
  ServerStyleSheet,
}
