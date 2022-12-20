/* Internal dependencies */
import { styled } from 'Foundation'
import {
  Button as BaseButton,
  ButtonColorVariant,
  ButtonStyleVariant,
} from 'Components/Button'

const HEIGHT = 3

export const Button = styled(BaseButton).attrs({
  colorVariant: ButtonColorVariant.MonochromeLight,
  styleVariant: ButtonStyleVariant.Tertiary,
})`
  top: 4px;
  overflow: visible;
  color: inherit;

  &::after {
    position: absolute;
    right: 1px;
    bottom: -8px;
    left: 1px;
    height: ${HEIGHT}px;
    content: '';
    background-color: ${({ foundation }) => foundation?.theme?.['bgtxt-blue-normal']};
    border-radius: 1.5px;

    ${({ foundation }) => foundation?.transition?.getTransitionsCSS(['transform'])};
    will-change: transform;
  }

  &[data-state="inactive"] {
    color: ${({ foundation }) => foundation?.theme?.['txt-black-dark']};

    &:hover {
      color: ${({ foundation }) => foundation?.theme?.['txt-black-darker']};
    }
  }

  &[data-state="active"] {
    color: ${({ foundation }) => foundation?.theme?.['bgtxt-blue-normal']};
    
    &:hover {
      background-color: inherit;
    }

    &::after {
      transform: translateY(-${HEIGHT}px);
    }
  }
`
