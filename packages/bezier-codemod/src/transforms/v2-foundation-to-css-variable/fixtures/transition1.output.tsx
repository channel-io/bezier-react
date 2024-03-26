import { AllIcon } from '@channel.io/bezier-icons'
import { styled, css } from '@channel.io/bezier-react'

export const BackIcon = styled(AllIcon)`
  transition: color var(--transition-s);
`

export const Block = styled.div`
  transition: background-color var(--transition-s);
`

export const Wrapper = styled.div`
  transition: background-color var(--transition-s), color var(--transition-s);
`

export const Wrapper1 = styled.div`
  ${({ hasTransition, foundation }) =>
    hasTransition && foundation?.transition.getTransitionsCSS(['background-color', 'color'])};
`

export const Command = styled.div`
  ${({ disabled }) =>
    disabled &&
    css`
      &&& {
        transition: background-color var(--transition-s), color var(--transition-s), opacity var(--transition-s);
      }
    `}
`

export const div = styled.div`
  transition: background-color var(--transition-m);
`
