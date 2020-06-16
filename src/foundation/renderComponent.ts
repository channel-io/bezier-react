/* External dependencies */
import React from 'react'

/* Internal dependencies */
import getElementType from './getElementType'
import { ComponentProps } from './types'

export interface RenderResultConfig<T extends ComponentProps> {
  props: T
  ElementType: React.ElementType<T>
}

export type RenderCallBack<T> = (config: RenderResultConfig<T>) => any

export interface RenderConfig<T extends ComponentProps> {
  props: T
  render: RenderCallBack<T>
}

const renderComponent = <T extends ComponentProps>({
  props,
  render,
}: RenderConfig<T>): React.ReactElement => {
  const ElementType = getElementType<T>(props) as React.ReactType<T>
  const resolvedConfig: RenderResultConfig<T> = {
    props,
    ElementType,
  }

  const element = render(resolvedConfig)

  return element
}

export default renderComponent
