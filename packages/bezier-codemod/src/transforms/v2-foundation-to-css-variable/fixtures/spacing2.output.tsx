/* External dependencies */
import { HStack, css, styled } from '@channel.io/bezier-react'

export const Header = styled(HStack)`
  height: 60px;

  ${({ foundation }) => css`
    padding: ${foundation?.spacing.s5} ${foundation?.spacing.s8};

    & button,
    a {
      color: ${foundation?.theme['bg-grey-dark']};

      &:hover {
        color: ${foundation?.theme['bg-grey-light']};
      }
    }
  `}
`
