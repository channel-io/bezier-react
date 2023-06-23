import React from 'react'

import { isNil } from './typeUtils'

export const getReactVersion = () => {
  const [major, minor, patch] = React.version.split('.').map(Number)
  return { major, minor, patch }
}

type NonNullableValue = object | number | string | boolean | bigint | symbol
type NullableValue = NonNullableValue | null | undefined

/**
 * A function that makes it easy to use the React `createContext` function.
 *
 * @param defaultValue The default value of the context.
 * @param providerName The name of the provider component.
 * **Required if `defaultValue` is nullable.** Used to make the error message human-readable if contextValue is nil value.
 */
export function createContext<ContextValue extends NonNullableValue>(
  defaultValue: ContextValue
): [React.Provider<ContextValue>, () => ContextValue]
export function createContext<ContextValue extends NullableValue>(
  defaultValue: ContextValue,
  providerName: string,
): [React.Provider<ContextValue>, (consumerName: string) => NonNullable<ContextValue>]
export function createContext<ContextValue extends NullableValue>(
  defaultValue: ContextValue,
  providerName?: string,
) {
  const Context = React.createContext<ContextValue>(defaultValue)

  function useContext(consumerName?: any) {
    const contextValue = React.useContext(Context)

    if (isNil(contextValue)) {
      throw new Error(`'${consumerName}' must be used within '${providerName}'`)
    }

    return contextValue
  }

  return [
    Context.Provider,
    useContext,
  ] as const
}
