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
    border-width: ${width}px;
    border-style: ${getBorderStyle(top)} ${getBorderStyle(right)} ${getBorderStyle(bottom)} ${getBorderStyle(left)};
    border-color: ${color};
    box-sizing: border-box;
  `
}

export const Border = {
  getBorder,
}
