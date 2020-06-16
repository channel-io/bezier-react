/* External dependencies */
import React from 'react'

/* Internal dependencies */
import getElementType from './getElementType'
import { ComponentProps } from './ComponentProps'

export interface FinalProps<T extends ComponentProps> {
  props: T
  ElementType: React.ElementType<T>
}

export type RenderCallBack<T> = (props: FinalProps<T>) => any

export interface RenderComponentConfig<T extends ComponentProps> {
  props: T
  render: RenderCallBack<T>
}

const renderComponent = <T extends ComponentProps>({
  props,
  render,
}: RenderComponentConfig<T>): React.ReactElement => {
  const ElementType = getElementType<T>(props) as React.ReactType<T>
  const finalProps: FinalProps<T> = {
    props,
    ElementType,
  }

  const element = render(finalProps)

  return element
}

export default renderComponent
