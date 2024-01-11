import type { SimpleInterpolation } from 'styled-components'

import { isNil } from '~/src/utils/type'

import { css } from './FoundationStyledComponent'

export const absoluteCenter = (otherTransforms?: SimpleInterpolation) => css`
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
