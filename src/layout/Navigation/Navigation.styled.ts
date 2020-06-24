/* External dependencies */
import styled from 'styled-components'

export const StyledNavigation = styled.div`
  /* position: absolute; */
  width: 240px;
  height: 100%;
  background-color: ${props => props.theme?.colors?.background1};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: -8px;
    width: 16px;
    height: 100%;
    margin: 0 auto;
    background-color: green;
    opacity: 0;
    cursor: col-resize;
    transition: opacity 0.2s;
  }

  &:hover::before {
    opacity: 1;
  }
`
