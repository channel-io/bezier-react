/* Internal dependencies */
import { css } from '../FoundationStyledComponent'

interface GetBorderOption {
  top?: boolean
  right?: boolean
  bottom?: boolean
  left?: boolean
}

const defaultGetBorderOption = {
  top: true,
  right: true,
  bottom: true,
  left: true,
}

function getBorder(width: number, color: any, option: GetBorderOption = defaultGetBorderOption) {
  const { top, right, bottom, left } = {
    ...defaultGetBorderOption,
    ...option,
  }

  function getBorderStyle(position: boolean) {
    return position ? 'solid' : 'none'
  }

  return css`
    box-sizing: border-box;
    border-color: ${color};
    border-style: ${getBorderStyle(top)} ${getBorderStyle(right)} ${getBorderStyle(bottom)} ${getBorderStyle(left)};
    border-width: ${width}px;
  `
}

export const Border = {
  getBorder,
}
