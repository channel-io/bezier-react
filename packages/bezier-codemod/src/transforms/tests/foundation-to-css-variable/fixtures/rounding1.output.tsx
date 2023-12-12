const div = styled.div`
  overflow: hidden;
  border-radius: var(--radius-12);
`

const div= styled.div`
  overflow: hidden;
  border-radius: var(--radius-8);

  > img {
    overflow: hidden;
  border-radius: var(--radius-8);
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin: 0 10px 12px;

  overflow: hidden;
  border-radius: var(--radius-12);
  ${({ foundation }) => foundation?.elevation?.ev1()}

  background-color: ${({ foundation }) =>
    foundation?.theme?.['bg-grey-lightest']};
`

const div = styled.div`
  overflow: hidden;
  border-radius: var(--radius-12);
`

const div = styled.div`
  overflow: hidden;
  border-radius: var(--radius-12);
`

const div = styled.div`
  overflow: hidden;
  border-radius: var(--radius-12);
`

const div = styled.div`
  overflow: hidden;
  border-radius: var(--radius-12);
`
