/* Internal dependencies */
import { css, styled } from 'Foundation'
import DisabledOpacity from 'Constants/DisabledOpacity'
import { Button as BaseButton, ButtonColorVariant, ButtonStyleVariant } from 'Components/Button'
import { TabItemProps } from './Tabs.types'

export const Wrapper = styled.button<TabItemProps>`
  all: unset;
  position: relative;
  display: flex;
  justify-content: center;
  overflow: hidden;
  color: ${({ foundation }) => foundation?.theme?.['txt-black-dark']};
  cursor: pointer;
  user-select: none;

  &::after {
    position: absolute;
    right: 1px;
    bottom: 0;
    left: 1px;
    height: 3px;
    content: '';
    background-color: ${({ foundation }) => foundation?.theme?.['bgtxt-blue-normal']};
    border-radius: 1.5px;
    transform: translateY(100%);

    ${({ foundation }) => (foundation?.transition?.getTransitionsCSS(['transform', 'background-color']))};

    will-change: transform;
  }

  &[data-state="inactive"] {
    color: ${({ foundation }) => foundation?.theme?.['txt-black-dark']};
  }
  
  &[data-state="inactive"]:hover {
    color: ${({ foundation }) => foundation?.theme?.['txt-black-darker']};
  }

  &[data-state="active"] {
    color: ${({ foundation }) => foundation?.theme?.['bgtxt-blue-normal']};
    pointer-events: none;

    &::after {
      transform: translateY(0);
    }
  }

  ${({ disabled }) => disabled && css`
    cursor: not-allowed;
    pointer-events: all;
    opacity: ${DisabledOpacity};
  `}

  &:hover > button {
    background-color: ${({ foundation }) => foundation?.theme?.['bg-black-lighter']};
  }
`

export const Button = styled(BaseButton).attrs({
  colorVariant: ButtonColorVariant.MonochromeLight,
  styleVariant: ButtonStyleVariant.Tertiary,
})`
  margin-top: 4px;
  color: inherit;

  pointer-events: none;
`
