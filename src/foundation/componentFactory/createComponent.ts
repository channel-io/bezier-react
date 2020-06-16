/* Extenral dependencies */
import React from 'react'

/* Internal dependencies */
import { UIComponentProps } from './ComponentProps'

export interface CreateComponentConfig<T extends UIComponentProps> {
  render: (props: T) => React.ReactElement<T>
  displayName?: string
}

export type CreateComponentReturnType<T> = React.FunctionComponent<T> & {
  create: any
}

// Component Factory
const createComponent = <T extends { [key: string]: any }>({
  render,
  displayName = 'ChannelReactComponent',
}: CreateComponentConfig<T>): CreateComponentReturnType<T> => {
  // Generate Function Component
  const ChannelComponent: CreateComponentReturnType<T> = (props): React.ReactElement<T> => (
    render(props)
  )

  ChannelComponent.displayName = displayName

  // TODO: (@leo) create method 정의할 것 (shortHand)
  // eslint-disable-next-line no-console
  ChannelComponent.create = () => console.log(`create ${displayName}`)

  return ChannelComponent
}

export default createComponent
