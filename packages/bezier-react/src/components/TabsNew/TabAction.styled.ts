/* Internal dependencies */
import { styled, css } from 'Foundation'
import { Icon } from 'Components/Icon'
import { TabsSize } from './Tabs.types'

interface BackgroundProps {
  height: TabsSize
}

export function getPaddingStyle({ height }: { height: TabsSize }) {
  switch (height) {
    case TabsSize.L:
      return css`
        padding: 0 14px;
        ${({ foundation }) => foundation?.rounding?.round12};
      `
    case TabsSize.Normal:
      return css`
        padding: 0 14px;
        ${({ foundation }) => foundation?.rounding?.round8};
      `
    default:
    case TabsSize.XS:
      return css`
        padding: 0 7px;
        ${({ foundation }) => foundation?.rounding?.round6};
      `
  }
}

export const Background = styled.div<BackgroundProps>`
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

interface ListProps {
  height: TabsSize
}

export const List = styled.div<ListProps>`
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  justify-content: space-between;
  height: ${props => props.height}px;
  box-shadow: 0 -1px 0 0 ${props => props.foundation?.theme?.['bg-black-light']} inset;
`

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
`

export const LinkIcon = styled(Icon)`
  margin-left: 5px;
  font-weight: bold;
`
