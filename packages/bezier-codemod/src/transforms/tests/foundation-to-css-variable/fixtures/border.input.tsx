
const Wrapper = styled.div`
  ${({ foundation }) =>
  foundation?.border?.getBorder(0.5, foundation.theme['bdr-black-light'], {
    top: false,
    right: false,
    left: false,
  })};
`

const Wrapper = styled.div`
  ${({ foundation }) =>
    foundation?.border.getBorder(1, foundation.theme?.['bg-txt-black'], {
      top: true,
      right: true,
      bottom: false,
      left: true,
    })};
`

const Wrapper = styled.div`
  ${({ foundation }) =>
    foundation?.border.getBorder(1, foundation.theme?.['bdr-black-light'])}
`

const Wrapper = styled.div`
  ${({ foundation }) =>
    foundation?.border?.getBorder(1, foundation.theme?.['bdr-black-light'])};
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
      ${({ foundation }) =>
        foundation?.border.getBorder(1, foundation.theme?.['bdr-black-light'], {
          top: false,
          right: false,
          left: false,
        })}
    `}
`
