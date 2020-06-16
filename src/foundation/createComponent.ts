/* Extenral dependencies */
import React from 'react'

/* Internal dependencies */
import { ObjectOf } from './utilTypes'
import renderComponent, { FinalProps } from './renderComponent'

export interface CreateComponentConfig<T> {
  render: (props: FinalProps<T>) => React.ReactNode
  displayName?: string
}

export type CreateComponentReturnType<T> = React.FunctionComponent<T> & {
  create: any
}

// Component Factory
const createComponent = <T extends ObjectOf<any> = any>({
  render,
  displayName = 'ChannelReactComponent',
}: CreateComponentConfig<T>): CreateComponentReturnType<T> => {
  // Generate Function Component
  const ChannelComponent: CreateComponentReturnType<T> = (props): React.ReactElement<T> => (
    renderComponent<T>({
      props,
      render,
    })
  )

  ChannelComponent.displayName = displayName

  // TODO: (@leo) create method 정의할 것 (shortHand)
  // eslint-disable-next-line no-console
  ChannelComponent.create = () => console.log(`create ${displayName}`)

  return ChannelComponent
}

export default createComponent
