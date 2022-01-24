/* External dependencies */
import type { CSSProperties } from 'react'
import { isNil } from 'lodash-es'
import type { SimpleInterpolation } from 'styled-components'

/* Internal dependencies */
import { css } from './FoundationStyledComponent'

export const absoluteCenter = (otherTransforms: SimpleInterpolation) => `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) ${otherTransforms};
`

export const centeredBackgroundImage = (width?: number, height?: number, imageUrl?: string) => `
  background-image: url(${imageUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: ${width}px, ${height}px;
  background-clip: content-box;
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

/* line이  1이거나 undefined일때는 lineheight가 optional이지만, 1보다 큰 숫자일 경우 lineHeight를 명시하도록 합니다. */
type One = 1
export function ellipsis(line?: undefined, lineHeight?: undefined): ReturnType<typeof css>
export function ellipsis(line?: One, lineHeight?: undefined): ReturnType<typeof css>
export function ellipsis(line: number, lineHeight: number): ReturnType<typeof css>
export function ellipsis(line?: number, lineHeight?: number): ReturnType<typeof css> {
  if (isNil(line) || line <= 1) {
    return css`
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      `
  }

  if (isNil(lineHeight)) {
    // eslint-disable-next-line no-console
    console.warn('lineHeight required')
    return css``
  }

  /* stylelint-disable value-no-vendor-prefix, property-no-vendor-prefix */
  return css`
      display: -webkit-box;
      max-height: ${(line * lineHeight)}rem;
      overflow: hidden;
      line-height: ${lineHeight}rem;
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
  hasBackgroundImage?: boolean
  shadowBlur?: number
  margin?: number
}

export const smoothCorners = ({
  borderRadius = 0,
  shadow = '0 0 0 0 transparent',
  backgroundColor = 'white',
  hasBackgroundImage = false,
  shadowBlur = 0,
  margin = 0,
}: SmoothCornersOptions) => css`
  margin: ${margin}px;
  background-color: ${backgroundColor};

  ${hasBackgroundImage && css`
    background-image: var(--background-image);
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
    box-shadow: none;

    ${hasBackgroundImage && css`
      border-image-source: var(--background-image);
    `}

    --smooth-corners: ${borderRadius};
    --smooth-corners-shadow: ${shadow};
    --smooth-corners-bg-color: ${backgroundColor};
    --smooth-corners-padding: ${shadowBlur * 2};
    --smooth-corners-radius-unit: ${typeof borderRadius === 'string' ? 'string' : 'number'};
  }
`

interface SmoothCornersElementOptions {
  imageUrl: string
}

export const smoothCornersStyle = ({ imageUrl }: SmoothCornersElementOptions): CSSProperties => ({
  // @ts-ignore
  '--background-image': `url(${imageUrl})`,
})
