import {
  styled, css
} from '@channel.io/bezier-react'

const Wrapper = styled.div`
  position: relative;
  background-color: ${({ foundation }) =>
    foundation?.theme?.['bg-grey-lightest']};
  border-radius: 12px;

  box-shadow: var(--input-box-shadow);

  ${({ focus }) => focus && css`
  box-shadow: var(--input-box-shadow-focused);
`};

  ${({ focus, whisper }) => focus && whisper && css`
  box-shadow: var(--input-box-shadow-invalid);
`};
`

const Wrapper = styled.div`
  box-shadow: var(--input-box-shadow);
`

const Wrapper = styled.div`
  box-shadow: var(--input-box-shadow-focused);
`

const Wrapper = styled.div`
  box-shadow: var(--input-box-shadow-invalid);
`

const Wrapper = styled.div`
  &::placeholder { color: var(--txt-black-dark); };
`
