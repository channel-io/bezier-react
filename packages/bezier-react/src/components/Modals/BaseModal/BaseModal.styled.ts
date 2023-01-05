/* Internal dependencies */
import {
  styled,
  css,
  TransitionDuration,
  RoundAbsoluteNumber,
  keyframes,
} from '~/src/foundation'

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
    opacity: 0;
    transform: scale(0.95);
  }

  to {
    opacity: 1;
    transform: scale(1);
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
  animation-timing-function: cubic-bezier(0.3, 0, 0, 1);
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
  animation-timing-function: cubic-bezier(0.3, 0, 0, 1);

  ${({ foundation }) => foundation?.elevation.ev4()};
`
