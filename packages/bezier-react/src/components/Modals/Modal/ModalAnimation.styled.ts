/* Internal dependencies */
import { css, keyframes, TransitionDuration } from 'Foundation'

const overlayStyles = {
  open: css`
    opacity: 1;
  `,
  closed: css`
    opacity: 0;
  `,
}

const overlayShow = keyframes`
  from {
    ${overlayStyles.closed}
  }

  to {
    ${overlayStyles.open}
  }
`

const overlayHide = keyframes`
  from {
    ${overlayStyles.open}
  }

  to {
    ${overlayStyles.closed}
  }
`

const contentStyles = {
  open: css`
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  `,
  closed: css`
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.95);
  `,
}

const contentShow = keyframes`
  from {
    ${contentStyles.closed}
  }

  to {
    ${contentStyles.open}
  }
`

const contentHide = keyframes`
  from {
    ${contentStyles.open}
  }

  to {
    ${contentStyles.closed}
  }
`

function modalAnimationGenerator(
  frames: ReturnType<typeof keyframes>,
  type: 'show' | 'hide',
) {
  switch (type) {
    case 'show':
      return css`
        animation: ${() => frames} ${TransitionDuration.M}ms cubic-bezier(0.3, 0, 0, 1);
      `
    case 'hide':
      return css`
        animation: ${() => frames} ${TransitionDuration.S}ms cubic-bezier(0.3, 0, 0, 1);
      `
    default:
      return css``
  }
}

export default {
  overlayShow: modalAnimationGenerator(overlayShow, 'show'),
  overlayHide: modalAnimationGenerator(overlayHide, 'hide'),
  contentShow: modalAnimationGenerator(contentShow, 'show'),
  contentHide: modalAnimationGenerator(contentHide, 'hide'),
}
