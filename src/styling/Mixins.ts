export const absoluteCenter = (otherTransforms: any) => `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) ${otherTransforms};
`

interface SmoothCornersOptions {
  n?: number
  shadow?: string
  backgroundColor?: string
  backgroundImage?: string
}

export const smoothCorners = ({
  n = 4,
  shadow = 'none',
  backgroundColor = 'white',
  backgroundImage = '',
}: SmoothCornersOptions) => `
  @supports(background: paint(smooth-corners)) {
    padding: 10px;
    margin: -10px;
    border-radius: 0;
    box-shadow: none;
    background: paint(smooth-corners);

    --smooth-corners: ${n};
    --smooth-corners-shadow: ${shadow};
    --smooth-corners-bg-color: ${backgroundColor};
    --smooth-corners-bg-image: ${`url(${backgroundImage})`};
    // --smooth-corners-bg-image: ${backgroundImage};
  }
`
