const div = styled.div`
  ${({ foundation }) =>
  foundation?.transition.getTransitionsCSS(
    ['top', 'opacity'],
    foundation?.transition.TransitionDuration.S
  )}
`

const transitionStyleOf = (properties: string | string[]) => css`
  ${({ foundation }) =>
    foundation?.transition.getTransitionsCSS(properties, TransitionDuration.M)}
`
