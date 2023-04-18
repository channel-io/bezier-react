import { css } from '~/src/foundation'

import { ListItemSize } from './ListItem.types'

export function getStyleOfSize(size?: ListItemSize) {
  switch (size) {
    case ListItemSize.S:
      return css`
        padding: 4px 6px;
        ${({ foundation }) => foundation?.rounding.round6};
      `
    case ListItemSize.L:
      return css`
        padding: 8px 6px;
        ${({ foundation }) => foundation?.rounding.round8};
      `
    case ListItemSize.XL:
      return css`
        padding: 10px 6px;
        ${({ foundation }) => foundation?.rounding.round12};
      `
    case ListItemSize.M:
    default:
      return css`
        padding: 6px;
        ${({ foundation }) => foundation?.rounding.round6};
      `
  }
}
