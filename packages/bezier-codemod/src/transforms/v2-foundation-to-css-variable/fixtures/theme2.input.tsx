const div = styled.div`
  background-color: ${({ foundation, colorVariant }) =>
  colorVariant === MessageButtonColorVariant.Null
    ? foundation?.theme?.['bg-grey-dark']
    : foundation?.theme?.[SemanticNameByMessageButtonColor[colorVariant]]};
`

const div = styled.div`
  color: ${({ foundation }) => foundation?.theme?.[SOME_COLOR]};
`
