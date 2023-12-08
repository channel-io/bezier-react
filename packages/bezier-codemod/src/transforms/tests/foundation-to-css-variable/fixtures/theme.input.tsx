const div = styled.div`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  color: ${({ foundation }) => foundation?.theme?.['txt-black-dark']};
  background-color: ${({ foundation }) => foundation?.theme?.['bg-grey-lighter']};
`


const UploadButton = styled.div`
  background-color: ${({ foundation }) =>
    foundation?.theme?.['bg-white-normal']};
`

const CountryNumberSelect = styled(BaseCountryNumberSelect)`
  margin: 0;

  &&& {
    > *:first-child {
      color: ${({ foundation }) => foundation?.theme?.['txt-black-darkest']};
      background-color: ${({ foundation }) =>
        foundation?.theme?.['bg-black-lighter']};
      box-shadow: none;

      &:hover {
        background-color: ${({ foundation }) =>
          foundation?.theme?.['bg-black-light']};
      }
    }
  }
`

const MessageContainer = styled.div`
  background-color: ${({ foundation }) =>
    foundation?.theme['bgtxt-absolute-black-light']};
  border: 1px solid ${({ foundation }) => foundation?.theme['bdr-black-light']};
  border-radius: 6px;
  box-shadow: 0 4px 12px 0
    ${({ foundation }) => foundation?.theme['shdw-large']};
`

const Wrapper = styled.div`
  .video-react {
    box-sizing: content-box !important;
    max-width: 100% !important;
    overflow: hidden !important;
    font-family: inherit !important;
    background-color: transparent !important;
    border: 1px solid
      ${({ foundation }) => foundation?.theme?.['bdr-black-light']} !important;
    border-radius: 6px !important;
`

const Row = styled.div`
  ${({ divider }) =>
    divider &&
    css`
      &:not(:last-child) {
        box-shadow: inset 0 -1px 0 ${({ foundation }) => foundation?.theme?.['shdw-small']};
      }
    `}

  ${({ disabledHover, isDraggingGlobal }) =>
    !disabledHover &&
    !isDraggingGlobal &&
    css`
      &:hover {
        background-color: ${({ foundation }) =>
          foundation?.theme?.['bg-grey-lighter']};
      }
    `}
`

const MessageWrapper = styled.div`
  color: ${({ foundation }) =>
    foundation?.theme?.['bgtxt-white-dark']};
  background-color: ${({ foundation }) =>
    foundation?.theme?.['bgtxt-absolute-white-dark']};
  ${({ foundation }) =>
    foundation?.border.getBorder(1, foundation?.theme?.['bdr-black-light'])};
`

const div = styled.div`
  background-color: ${({ foundation, colorVariant }) =>
  colorVariant === MessageButtonColorVariant.Null
    ? foundation?.theme?.['bg-grey-dark']
    : foundation?.theme?.[SemanticNameByMessageButtonColor[colorVariant]]};
`