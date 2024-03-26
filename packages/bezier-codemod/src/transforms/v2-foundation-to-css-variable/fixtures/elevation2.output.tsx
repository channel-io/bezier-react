const div = styled.div`
  ${({ foundation, showNavigation }) =>
  !showNavigation && foundation?.elevation?.ev3()};
`
