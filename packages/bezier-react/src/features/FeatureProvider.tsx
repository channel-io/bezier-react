import React, {
  useLayoutEffect,
  useMemo,
  useState,
} from 'react'

import { createContext } from '~/src/utils/react'
import { isEmpty } from '~/src/utils/type'

import {
  type Feature,
  FeatureType,
} from './Feature'

export type FeatureFlag = Record<FeatureType, boolean>

const initialFeatureFlag: FeatureFlag = {
  [FeatureType.SmoothCorners]: false,
}

const [
  FeatureFlagContextProvider,
  useFeatureFlagContext,
] = createContext<FeatureFlag>(initialFeatureFlag)

interface FeatureProviderProps {
  children: React.ReactNode
  /**
   * Features to activate.
   */
  features: Feature[]
}

/**
 * `FeatureProvider` is a component that activates features and provides.
 *
 * @example
 *
 * ```tsx
 * <FeatureProvider features={[SmoothCornersFeature]}>
 *   <App />
 * </FeatureProvider>
 * ```
 */
export function FeatureProvider({
  children,
  features,
}: FeatureProviderProps) {
  const [featureFlag, setFeatureFlag] = useState<FeatureFlag>(initialFeatureFlag)

  useLayoutEffect(function activateFeatures() {
    if (isEmpty(features)) {
      return
    }

    const promises = features.map(feature => (
      feature.activate().then(activated => (
        { [feature.name]: activated }
      ))
    ))

    Promise.all(promises).then(flags => {
      setFeatureFlag(prev => ({
        ...prev,
        ...flags.reduce((acc, cur) => ({ ...acc, ...cur }), {}),
      }))
    })
  }, [features])

  return (
    <FeatureFlagContextProvider value={featureFlag}>
      { children }
    </FeatureFlagContextProvider>
  )
}

export function useFeatureFlag(featureType: FeatureType) {
  const contextValue = useFeatureFlagContext()

  return useMemo(() => (
    contextValue[featureType]
  ), [
    contextValue,
    featureType,
  ])
}
