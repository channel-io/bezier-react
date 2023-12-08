const div = styled.div`
  ${({ foundation }) => foundation?.elevation?.ev1()};
`

const div = styled.div`
  ${({ foundation }) => foundation?.elevation?.ev1()}
`

const div = styled.div`
  ${({ foundation }) => foundation?.elevation.ev1()};
`

const div = styled.div`
  ${({ foundation }) => foundation?.elevation.ev1()}
`

const div = styled.div`
  ${({ foundation, showNavigation }) =>
  !showNavigation && foundation?.elevation?.ev3()};
`
