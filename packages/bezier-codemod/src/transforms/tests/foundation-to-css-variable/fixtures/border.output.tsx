
const Wrapper = styled.div`
  border-bottom: 0.5px solid var(--bdr-black-light);
`

const Wrapper = styled.div`
  border-top: 1px solid var(--bg-txt-black);
  border-right: 1px solid var(--bg-txt-black);
  border-left: 1px solid var(--bg-txt-black);
`

const Wrapper = styled.div`
  border: 1px solid var(--bdr-black-light);
`

const Wrapper = styled.div`
  border: 1px solid var(--bdr-black-light);
`

const borderBaseStyle = css`
  ${({ foundation }) =>
    foundation?.border.getBorder(1, 'transparent', {
      top: false,
      right: false,
      bottom: true,
      left: false,
    })}
`

const Row = styled.div`
  ${({ foundation }) =>
    foundation?.border.getBorder(
      ROW_BORDER_WIDTH,
      foundation?.theme?.['bdr-black-light'],
      { top: false, right: false, left: false }
    )};
`

const div = style.div`
  ${({ divider }) =>
    divider &&
    css`
      border-bottom: 1px solid var(--bdr-black-light);
    `}
`
