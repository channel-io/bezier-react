/* Internal dependencies */
import { css } from '../../../foundation'
import { Placement } from '../Toast.types'

export default function getPlacement(placement) {
  switch (placement) {
    case Placement.TopLeft:
      return css`
          top: 0;
          left: 0;
        `
    case Placement.TopCenter:
      return css`
          top: 0;
          left: 0;
        `
    case Placement.TopRight:
      return css`
          top: 0;
          right: 0;
        `
    case Placement.BottomLeft:
      return css`
          bottom: 0;
          left: 0;
        `
    case Placement.BottomCenter:
      return css`
          bottom: 0;
          left: 0;
        `
    case Placement.BottomRight:
      return css`
          right: 0;
          bottom: 0;
        `
  }
  return css`
      right: 0;
      bottom: 0;
    `
}
