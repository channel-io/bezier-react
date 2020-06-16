/* Extenral dependencies */
import React from 'react'

/* Internal dependencies */
import { ObjectOf } from './utilTypes'
import renderComponent from './renderComponent'

export interface CreateComponentConfig<T> {
  render: (props: T, ElementType: React.ElementType<T>) => React.ReactNode
  displayName?: string
}

// Component Factory
const createComponent = <T extends ObjectOf<any> = any>({
  render,
  displayName = 'ChannelReactComponent',
}: CreateComponentConfig<T>): React.FunctionComponent<T> => {
  // Generate Function Component
  const ChannelComponent: React.FunctionComponent<T> = (props): React.ReactElement<T> => (
    renderComponent<T>({
      props,
      render: config => {
        const { ElementType } = config
        return render(props, ElementType)
      },
    })
  )

  ChannelComponent.displayName = displayName

  return ChannelComponent
}

export default createComponent
