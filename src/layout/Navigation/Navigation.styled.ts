/* External dependencies */
import styled from 'styled-components'

/* Internal dependencies */
import NavigationProps from './Navigation.types'

export const StyledNavigation = styled.div<NavigationProps>`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme?.colors?.background1};

  transition: background-color 200ms ease-in-out;
`
