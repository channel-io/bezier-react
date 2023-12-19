import { 
  styled, 
  inputWrapperStyle, 
  focusedInputWrapperStyle, 
  erroredInputWrapperStyle,
  Typography,
} from '@channel.io/bezier-react'

const Wrapper = styled.div`
  position: relative;
  background-color: ${({ foundation }) =>
    foundation?.theme?.['bg-grey-lightest']};
  border-radius: 12px;

  ${inputWrapperStyle};

  ${({ focus }) => focus && focusedInputWrapperStyle};

  ${({ focus, whisper }) => focus && whisper && erroredInputWrapperStyle};
`

const Wrapper = styled.div`
  ${inputWrapperStyle}
`

const Wrapper = styled.div`
  ${focusedInputWrapperStyle};
`

const Wrapper = styled.div`
  ${erroredInputWrapperStyle};
`

const Wrapper = styled.div`
  ${Typography.Size11};
`

const Wrapper = styled.div`
  ${Typography.Size17}
`
