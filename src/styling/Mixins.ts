import { css } from './Theme'

export const absoluteCenter = (otherTransforms: any) => `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) ${otherTransforms};
`

export const hideScrollbars = () => css`
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

interface SmoothCornersOptions {
  n?: number
  shadow?: string
  backgroundColor?: string
  backgroundImage?: string
  shadowBlur?: number
  margin?: number
}

export const smoothCorners = ({
  n = 3.5,
  shadow = 'none',
  backgroundColor = 'white',
  backgroundImage = '',
  shadowBlur = 0,
  margin = 0,
}: SmoothCornersOptions) => css`
  @supports (background: paint(smooth-corners)) {
    padding: ${shadowBlur * 2}px;
    margin: ${-(shadowBlur * 2) + margin}px;
    border-radius: 0;
    box-shadow: none;
    background: paint(smooth-corners);

    /* Custom property 는 CSSUnparsedValue 로만 잡혀서 사용하는 임시 속성 */
    border-image-source: url(${backgroundImage});

    --smooth-corners: ${n};
    --smooth-corners-shadow: ${shadow};
    --smooth-corners-bg-color: ${backgroundColor};
    --smooth-corners-padding: ${shadowBlur * 2};
  }
`
