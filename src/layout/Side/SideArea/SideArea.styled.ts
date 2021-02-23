/* Internal dependencies */
import { css, styled } from '../../../foundation'
import LayoutSideType from '../../../constants/LayoutSideType'

interface SideAreaWrapperProps {
  sideType: LayoutSideType
  showSideView: boolean
}

export const SideAreaWrapper = styled.div<SideAreaWrapperProps>`
  position: relative;
  grid-row: ${({ sideType }) => (sideType === LayoutSideType.SidePanel ? '2 / 3' : '1 / 3')};
  grid-column: 2;
  background-color: ${({ foundation }) => foundation?.theme?.['bg-grey-lightest']};

  ${({ showSideView, sideType }) => showSideView && sideType === LayoutSideType.SidePanel && css`
    display: none;
  `}
`

export const ScrollWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`

export const Resizer = styled.div`
  position: absolute;
  bottom: 0;
  left: -8px;
  z-index: 10000;
  width: 16px;
  height: 100%;
  margin: 0 auto;
  cursor: col-resize;

  &::before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 8px;
    width: 1px;
    height: 100%;
    content: '';
    background-color: ${({ foundation }) => foundation?.theme?.['bd-black-light']};
    opacity: 0.7;
    transition: opacity 0.2s;
  }

  &:hover::before {
    opacity: 1;
  }
`
