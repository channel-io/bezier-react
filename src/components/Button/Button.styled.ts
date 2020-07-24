import styled from 'styled-components'

export const StyledBaseButton = styled.button`
  height: 34px;
  padding: 8px 22px;
  border: none;
  border-radius: 5px;
  outline: none;

  &:hover {
    box-shadow: 0 1px 4px 0 ${props => props.theme?.colors?.shadow1};
  }
`
