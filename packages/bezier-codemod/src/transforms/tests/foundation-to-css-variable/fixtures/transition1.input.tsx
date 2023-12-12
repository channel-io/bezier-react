const BackIcon = styled(Icon)`
  ${({ foundation }) => foundation?.transition?.getTransitionsCSS('color')};
`

const Block = styled.div`
  ${({ foundation }) =>
    foundation?.transition.getTransitionsCSS(['background-color'])};
`

const Wrapper = styled.div`
  ${({ foundation }) =>
    foundation?.transition.getTransitionsCSS(['background-color', 'color'])};
`

const Wrapper = styled.div`
  ${({ hasTransition, foundation }) =>
    hasTransition && foundation?.transition.getTransitionsCSS(['background-color', 'color'])};
`

const Command = styled.div`
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

const div = styled.div`
  ${({ foundation }) =>
  foundation?.transition?.getTransitionsCSS(
    'background-color',
    TransitionDuration.M
  )}
`
