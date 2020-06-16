/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { ComponentProps } from './ComponentProps'

export interface RenderConfig {
  ElementType: any
}

export type RendererProps<T extends ComponentProps> = T & {
  config: RenderConfig
}

export type RenderCallBack<T> = (props: RendererProps<T>) => any

export interface RenderComponentConfig<T extends ComponentProps> {
  props: T
  render: RenderCallBack<T>
}

const renderComponent = <T extends ComponentProps>({
  props,
  render,
}: RenderComponentConfig<T>): React.ReactElement => {
  const ElementType = props.as

  const config = {
    ElementType,
  }

  const finalProps: RendererProps<T> = {
    ...props,
    config,
  }

  const element = render(finalProps)

  return element
}

export default renderComponent
