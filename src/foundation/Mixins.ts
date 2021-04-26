/* Internal dependencies */
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

export const ellipsis = (line = 1, lineHeight = 22, unit = 'px') => {
  if (line <= 1) {
    return css`
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      `
  }
  /* stylelint-disable value-no-vendor-prefix, property-no-vendor-prefix */
  return css`
      display: -webkit-box;
      max-height: ${(line * lineHeight) + unit};
      overflow: hidden;
      line-height: ${lineHeight + unit};
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: ${line};
    `
  /* stylelint-enable value-no-vendor-prefix, property-no-vendor-prefix */
}

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
  shadow = '0 0 0 0 transparent',
  backgroundColor = 'white',
  backgroundImage = '',
  shadowBlur = 0,
  margin = 0,
}: SmoothCornersOptions) => css`
  margin: ${margin}px;
  background-color: ${backgroundColor};

  ${backgroundImage && css`
    background-image: url(${backgroundImage});
    background-size: cover;
  `}

  ${borderRadius && css`
    border-radius: ${borderRadius};
  `}

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
