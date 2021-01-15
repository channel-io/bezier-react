/* Internal dependencies */
import { styled } from '../../foundation'

export const ContentAreaWrapper = styled.div`
  grid-column: 1;
  grid-row: 2;
  position: relative;
`

export const StyledHandle = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: -8px;
  z-index: 10000;
  width: 16px;
  height: 100%;
  margin: 0 auto;
  cursor: col-resize;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 7px;
    width: 2px;
    height: 100%;
    opacity: 0;
    background-color: ${({ foundation }) => foundation?.theme?.['text-hover-blue']};
    transition: opacity 0.2s;
  }

  &:hover::before {
    opacity: 1;
  }
`
