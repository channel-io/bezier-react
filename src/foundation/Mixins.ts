import { css } from './FoundationStyledComponent'

export const absoluteCenter = (otherTransforms: any) => `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) ${otherTransforms};
`

export const disableAutoMinimum = css`
  min-width: 0;
  min-height: 0;
`

export const hideScrollbars = () => css`
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

interface SmoothCornersOptions {
  borderRadius?: number | string
  shadow?: string
  backgroundColor?: string
  backgroundImage?: string
  shadowBlur?: number
  margin?: number
}

export const smoothCorners = ({
  borderRadius = 0,
  shadow = '0 0 0 0 rgba(0, 0, 0, 0)',
  backgroundColor = 'white',
  backgroundImage = '',
  shadowBlur = 0,
  margin = 0,
}: SmoothCornersOptions) => css`
  @supports (background: paint(smooth-corners)) {
    padding: ${shadowBlur * 2}px;
    margin: ${-(shadowBlur * 2) + margin}px;
    background: paint(smooth-corners);
    border-radius: 0;
    /* Custom property 는 CSSUnparsedValue 로만 잡혀서 사용하는 임시 속성 */
    border-image-source: url(${backgroundImage});
    box-shadow: none;

    --smooth-corners: ${borderRadius};
    --smooth-corners-shadow: ${shadow};
    --smooth-corners-bg-color: ${backgroundColor};
    --smooth-corners-padding: ${shadowBlur * 2};
    --smooth-corners-radius-unit: ${typeof borderRadius === 'string' ? 'string' : 'number'};
  }
`
