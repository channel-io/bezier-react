/* External dependencies */
import React, { CSSProperties } from 'react'

/* Internal dependencies */
import type { InjectedInterpolation } from './Foundation'

/* Component Base Props */
interface RenderConfigProps {
  as?: React.ElementType
  testId?: string
}

interface StylableComponentProps {
  style?: CSSProperties
  className?: string
  interpolation?: InjectedInterpolation
}

export type BezierComponentProps = RenderConfigProps & StylableComponentProps

/** @deprecated FIXME 삭제 예정 */
export interface ContentComponentProps<Content = React.ReactNode> extends BezierComponentProps {
  content?: Content
}

/** @deprecated FIXME 삭제 예정 */
export interface ChildrenComponentProps<Children = React.ReactNode> extends BezierComponentProps {
  children?: Children
}

/* Component Additional Props */
export interface IdentifierProps {
  id: string
}

/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-ignore FIXME 실제 사용되면 제거
interface ContentProps<Content = React.ReactNode> {
  content?: Content
}
/* eslint-enable @typescript-eslint/no-unused-vars */

export interface VariantProps<Variant extends string | number> {
  variant?: Variant
}

export interface DisableProps {
  disabled?: boolean
}

export interface SideContentProps<LeftContent = React.ReactNode, RightContent = React.ReactNode> {
  leftContent?: LeftContent
  rightContent?: RightContent
}

export interface OptionItemProps {
  optionKey?: string
}

export interface OptionItemHostProps<OptionKeyType = string> {
  selectedOptionIndex?: number
  onChangeOption?: (optionIndex: number, optionKey?: OptionKeyType) => void
}

type PropNameType = string | string[]

type AdditionalProps<PropName extends PropNameType, Suffix extends string, PropType> = {
  [Key in `${PropName extends string
    ? PropName
    : PropName[number]
  }${Capitalize<Suffix>}`]: PropType
}

type AdditionalClassNameProps<ElementName extends PropNameType> =
  AdditionalProps<ElementName, 'className', string>

type AdditionalInterpolationProps<ElementName extends PropNameType> =
  AdditionalProps<ElementName, 'interpolation', InjectedInterpolation>

export type AdditionalStyleProps<ElementName extends PropNameType> =
  Partial<AdditionalClassNameProps<ElementName> & AdditionalInterpolationProps<ElementName>>

export type AdditionalTestIdProps<ElementName extends PropNameType> =
  Partial<AdditionalProps<ElementName, 'testId', InjectedInterpolation>>

export interface ActivatableProps extends AdditionalStyleProps<'active'> {
  active?: boolean
  allowActive?: boolean
}
