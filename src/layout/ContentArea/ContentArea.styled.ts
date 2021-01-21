/* Internal dependencies */
import { styled } from '../../foundation'

export const ContentAreaWrapper = styled.div`
  position: relative;
  grid-row: 2;
  grid-column: 1;
`

export const StyledHandle = styled.div`
  position: absolute;
  top: 0;
  right: -8px;
  bottom: 0;
  z-index: 10000;
  width: 16px;
  height: 100%;
  margin: 0 auto;
  cursor: col-resize;

  &::before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 7px;
    width: 2px;
    height: 100%;
    content: '';
    background-color: ${({ foundation }) => foundation?.theme?.['bg-white-normal']};
    opacity: 0;
    transition: opacity 0.2s;
  }

  &:hover::before {
    opacity: 1;
  }
`
