/* Internal dependencies */
import {
  styled,
  css,
  TransitionDuration,
  RoundAbsoluteNumber,
  keyframes,
} from 'Foundation'

const visibleAnimation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const translateAnimation = keyframes`
  from {
    transform: translate(0, -122px);
  }

  to {
    transform: translate(0, 0);
  }
`

export const BaseModalWrapper = styled.div<{ padded?: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ padded }) => padded && css`
    padding: 40px 0;
  `}

  animation-name: ${() => visibleAnimation};
  animation-duration: ${TransitionDuration.M}ms;
`

export const BaseModalBackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${({ foundation }) => foundation?.theme?.['bgtxt-absolute-black-lighter']};
`

export const BaseModalChildrenScrollArea = styled.div`
  position: relative;
  z-index: 1;
  min-width: 360px;
  max-height: 100%;
  overflow-y: auto;
  color: ${({ foundation }) => foundation?.theme['bg-grey-darkest']};
  background-color: ${({ foundation }) => foundation?.theme?.['bg-white-high']};
  border-radius: ${RoundAbsoluteNumber.R20}px;

  animation-name: ${() => translateAnimation};
  animation-duration: ${TransitionDuration.M}ms;
  ${({ foundation }) => foundation?.elevation.ev4()};
`
