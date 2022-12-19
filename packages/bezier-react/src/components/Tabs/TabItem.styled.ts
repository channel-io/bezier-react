/* Internal dependencies */
import { styled, keyframes, TransitionDuration } from 'Foundation'
import { Button as BaseButton, ButtonColorVariant, ButtonStyleVariant } from 'Components/Button'

const show = keyframes`
  from {
    height: 0;
  }

  to {
    height: 3px;
  }
`

export const Button = styled(BaseButton).attrs({
  colorVariant: ButtonColorVariant.MonochromeLight,
  styleVariant: ButtonStyleVariant.Tertiary,
})`
  top: 4px;
  color: inherit;

  &::after {
    position: absolute;
    right: 1px;
    bottom: -5px;
    left: 1px;
    height: 3px;
    content: '';
    background-color: ${({ foundation }) => foundation?.theme?.['bgtxt-blue-normal']};
    border-radius: 1.5px;

    ${({ foundation }) => (foundation?.transition?.getTransitionsCSS(['transform', 'background-color']))};
  }

  &[data-state="inactive"] {
    color: ${({ foundation }) => foundation?.theme?.['txt-black-dark']};

    &:hover {
      color: ${({ foundation }) => foundation?.theme?.['txt-black-darker']};
    }
  }

  &[data-state="active"] {
    overflow: visible;
    color: ${({ foundation }) => foundation?.theme?.['bgtxt-blue-normal']};
    
    &:hover {
      background-color: inherit;
    }

    &::after {
      animation: ${() => show} ${TransitionDuration.S}ms cubic-bezier(0.3, 0, 0, 1);
    }
  }
`
