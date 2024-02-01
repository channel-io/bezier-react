import {
  type Feature,
  type FeatureType,
} from '~/src/features'
import { type ChildrenProps } from '~/src/types/props'

export type FeatureFlag = Record<FeatureType, boolean>

interface FeatureProviderOwnProps {
  /**
   * Features to activate.
   */
  features: Feature[]
}

export interface FeatureProviderProps extends
  ChildrenProps,
  FeatureProviderOwnProps {}
