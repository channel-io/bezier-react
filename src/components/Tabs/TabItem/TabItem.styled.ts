/* Internal dependencies */
import { styled } from 'Foundation'
import DisabledOpacity from 'Constants/DisabledOpacity'
import TabItemProps, { StyledWrapperProps } from './TabItem.types'

export const Wrapper = styled.div<StyledWrapperProps & TabItemProps>`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  justify-content: center;
  height: ${({ height }) => height}px;
  overflow: hidden;
  font-size: inherit;
  font-weight: bold;
  color: ${props => props.foundation?.theme?.['txt-black-dark']};
  cursor: pointer;
  user-select: none;

  ${({ foundation }) => foundation?.transition?.getTransitionsCSS('color')};

  &:hover {
    ${props => (!props.disabled ? `
      ${props.active ? '' : `
        color: ${props.foundation?.theme?.['txt-black-darker']};
      `}
    ` : '')}
  }

  &::after {
    ${props => (!props.withIndicator ? `
      visibility: hidden;
    ` : '')}
    position: absolute;
    right: 1px;
    bottom: 0;
    left: 1px;
    height: ${props => props.indicatorThickness || 3}px;
    content: '';
    background-color: ${props => props.foundation?.theme?.['bgtxt-blue-normal']};
    border-radius: ${props => (props.indicatorThickness || 3) / 2}px;
    transform: translateY(100%);

    ${props => (props.foundation?.transition?.getTransitionsCSS(['transform', 'background-color']))};

    will-change: transform;
  }

  ${({ foundation, active }) => (active ? `
    color: ${foundation?.theme?.['bgtxt-blue-normal']};
    pointer-events: none;

    &::after {
      transform: translateY(0);
    }
  ` : '')}

  ${props => (props.disabled ? `
    cursor: not-allowed;
    pointer-events: all;
    opacity: ${DisabledOpacity};
  ` : '')}
`

interface BackgroundProps {
  padding: number
  borderRadius: number
  isHovered?: boolean
  disabled?: boolean
}

export const Background = styled.div<BackgroundProps>`
  position: relative;
  top: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100% - 9px);
  padding: 0 ${({ padding }) => padding}px;
  background-color:
    ${({ foundation, isHovered, disabled }) =>
    ((isHovered && !disabled) ? foundation?.theme?.['bg-black-lighter'] : '')};
  border-radius: ${({ borderRadius }) => borderRadius}px;
  ${({ foundation }) => foundation?.transition?.getTransitionsCSS('background-color')};
`
