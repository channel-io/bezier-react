const div = styled.div`
  ${({ foundation, isRounding }) =>
  isRounding && foundation?.elevation?.ev3()};
`
