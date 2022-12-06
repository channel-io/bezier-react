/* Internal dependencies */
import { styled, css } from 'Foundation'
import { Icon } from 'Components/Icon'
import { TabSize } from './Tabs.types'

interface BackgroundProps {
  height: TabSize
}

function getPaddingStyle({ height }: { height: TabSize }) {
  switch (height) {
    case TabSize.L:
      return css`
        padding: 0 14px;
        ${({ foundation }) => foundation?.rounding?.round12};
      `
    case TabSize.Normal:
      return css`
        padding: 0 14px;
        ${({ foundation }) => foundation?.rounding?.round8};
      `
    default:
    case TabSize.XS:
      return css`
        padding: 0 7px;
        ${({ foundation }) => foundation?.rounding?.round6};
      `
  }
}

export const Background = styled.button<BackgroundProps>`
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

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
`

export const LinkIcon = styled(Icon)`
  margin-left: 5px;
`
