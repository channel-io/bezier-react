import { AllIcon } from '@channel.io/bezier-icons'
import { styled, TransitionDuration, css } from '@channel.io/bezier-react'

export const BackIcon = styled(AllIcon)`
  ${({ foundation }) => foundation?.transition?.getTransitionsCSS('color')};
`

export const Block = styled.div`
  ${({ foundation }) =>
    foundation?.transition.getTransitionsCSS(['background-color'])};
`

export const Wrapper = styled.div`
  ${({ foundation }) =>
    foundation?.transition.getTransitionsCSS(['background-color', 'color'])};
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
        ${({ foundation }) =>
          foundation?.transition.getTransitionsCSS([
            'background-color',
            'color',
            'opacity',
          ])}
      }
    `}
`

export const div = styled.div`
  ${({ foundation }) =>
  foundation?.transition?.getTransitionsCSS(
    'background-color',
    TransitionDuration.M
  )}
`
