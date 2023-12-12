const borderBaseStyle = css`
  ${({ foundation }) =>
    foundation?.border.getBorder(1, 'transparent', {
      top: false,
      right: false,
      bottom: true,
      left: false,
    })}
`

const div = style.div`
  ${({ divider }) =>
    divider &&
    css`
      ${({ hasBorder, foundation }) =>
        hasBorder && foundation?.border.getBorder(1, foundation.theme?.['bdr-black-light'], {
          top: false,
          right: false,
          left: false,
        })}
    `}
`

const Row = styled.div`
  ${({ foundation }) =>
    foundation?.border.getBorder(
      ROW_BORDER_WIDTH,
      foundation?.theme?.['bdr-black-light'],
      { top: false, right: false, left: false }
    )};
`

