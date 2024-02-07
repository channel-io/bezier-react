import { type ChildrenProps } from '~/src/types/props'

export enum FeatureType {
  SmoothCorners = 'smooth-corners',
}

export interface Feature {
  readonly name: FeatureType
  activate: () => Promise<boolean>
}

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
