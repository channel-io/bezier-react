/* External dependencies */
import * as Toolbar from '@radix-ui/react-toolbar'

/* Internal dependencies */
import {
  styled,
  css,
} from '~/src/foundation'
import { Icon } from '~/src/components/Icon'
import { TabSize } from './Tabs.types'

function getPaddingStyle({ size }: { size: TabSize }) {
  switch (size) {
    case TabSize.L:
      return css`
        padding: 0 14px;
        ${({ foundation }) => foundation?.rounding?.round12};
      `
    case TabSize.M:
      return css`
        padding: 0 14px;
        ${({ foundation }) => foundation?.rounding?.round8};
      `
    default:
    case TabSize.S:
      return css`
        padding: 0 7px;
        ${({ foundation }) => foundation?.rounding?.round6};
      `
  }
}

const commonStyle = css`
  all: unset;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 4px 0 5px 0;
  color: ${({ foundation }) => foundation?.theme?.['bgtxt-blue-normal']};
  text-decoration: none;
  cursor: pointer;

  ${({ foundation }) => foundation?.transition?.getTransitionsCSS('background-color')};
  ${getPaddingStyle}

  &:hover {
    background-color: ${({ foundation }) => foundation?.theme?.['bgtxt-blue-lightest']};
  }
`

interface ToolbarComponentProps {
  size: TabSize
}

export const ToolbarButton = styled(Toolbar.Button)<ToolbarComponentProps>`
  ${commonStyle}
`

export const ToolbarLink = styled(Toolbar.Link)<ToolbarComponentProps>`
  ${commonStyle}
`

export const LinkIcon = styled(Icon)`
  margin-left: 5px;
`
