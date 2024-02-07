export enum FeatureType {
  SmoothCorners = 'smooth-corners',
}

export interface Feature {
  readonly name: FeatureType
  activate: () => Promise<boolean>
}
