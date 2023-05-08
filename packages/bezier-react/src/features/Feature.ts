export enum FeatureType {
  SmoothCorners = 'smooth-corners',
}

export class Feature {
  name: FeatureType

  constructor(name: FeatureType) {
    this.name = name
  }

  async activate() {
    return Promise.resolve(false)
  }
}
