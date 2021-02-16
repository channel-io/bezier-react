/* Internal dependencies */
import { HEADER_HEIGHT } from '../../constants/LayoutSizes'
import { styled } from '../../foundation'

export const ContentAreaWrapper = styled.div`
  position: relative;
  grid-row: 2;
  grid-column: 1;
  background-color: ${({ foundation }) => foundation?.theme?.['bg-white-normal']};
`

interface StyledHandleProps {
  withSideView: boolean
}

export const StyledHandle = styled.div<StyledHandleProps>`
  position: absolute;
  right: -8px;
  bottom: 0;
  z-index: 10000;
  width: 16px;
  height: calc(100% + ${({ withSideView }) => (withSideView ? HEADER_HEIGHT : 0)}px);
  margin: 0 auto;
  cursor: col-resize;

  &::before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 7px;
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
