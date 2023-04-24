import React, {
  createContext,
  useContext,
  useLayoutEffect,
  useState,
} from 'react'

import {
  type Feature,
  FeatureType,
} from './Feature'

export type FeatureFlag = Record<FeatureType, boolean>

const initialFeatureFlag: FeatureFlag = {
  [FeatureType.SmoothCorners]: false,
}

const FeatureFlagContext = createContext<FeatureFlag>(initialFeatureFlag)

export function FeatureProvider({
  children,
  features,
}: React.PropsWithChildren<{
  features: Feature[]
}>) {
  const [featureFlag, setFeatureFlag] = useState<FeatureFlag>(initialFeatureFlag)

  useLayoutEffect(function activateFeatures() {
    if (!features) {
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
    <FeatureFlagContext.Provider value={featureFlag}>
      { children }
    </FeatureFlagContext.Provider>
  )
}

export function useFeatureFlag() {
  return useContext(FeatureFlagContext)
}
