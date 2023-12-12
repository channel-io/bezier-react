
const Wrapper = styled.div`
  border-color: var(--bdr-black-light);
  border-style: none none solid none;
  border-width: 0.5px;
`

const Wrapper = styled.div`
  border-color: var(--bg-txt-black);
  border-style: solid solid none solid;
  border-width: 1px;
`

const Wrapper = styled.div`
  border: 1px solid var(--bdr-black-light);
`

const Wrapper = styled.div`
  border: 1px solid var(--bdr-black-light);
`

const div = style.div`
  ${({ divider }) =>
    divider &&
    css`
      border-color: var(--bdr-black-light);
  border-style: none none solid none;
  border-width: 1px;
    `}
`
