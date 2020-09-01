export const absoluteCenter = (otherTransforms: any) => `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) ${otherTransforms};
`

export const smoothCorners = (round: number = 4) => `
  @supports(mask-image: paint(smooth-corners)) {
    mask-image: paint(smooth-corners);
    --smooth-corners: ${round};
  }
`
