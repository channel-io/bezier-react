const div = styled.div`
  ${({ foundation }) => foundation?.rounding.round12};
`

const div= styled.div`
  ${({ foundation }) => foundation?.rounding.round8}

  > img {
    ${({ foundation }) => foundation?.rounding.round8};
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin: 0 10px 12px;

  ${({ foundation }) => foundation?.rounding?.round12}
  ${({ foundation }) => foundation?.elevation?.ev1()}

  background-color: ${({ foundation }) =>
    foundation?.theme?.['bg-grey-lightest']};
`

const div = styled.div`
  ${({ foundation }) => foundation?.rounding?.round12};
  ${({ foundation }) => foundation?.rounding?.round12};
  ${({ foundation }) => foundation?.rounding.round12}
  ${({ foundation }) => foundation?.rounding.round12}
`
