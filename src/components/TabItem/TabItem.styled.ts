/* Internal dependencies */
import { styled } from '../../foundation'
import { StyledWrapperProps } from './TabItem.types'

export const Wrapper = styled.div<StyledWrapperProps>`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-shrink: 0;
  justify-content: center;
  min-height: 34px;
  padding: 0 12px;
  overflow: hidden;
  font-size: inherit;
  font-weight: bold;
  color: ${props => props.foundation?.theme?.['text-hover-blue']};
  cursor: pointer;
  user-select: none;

  /* stylelint-disable-next-line */
  ${props => (
    props.foundation?.transition?.getTransitionCSS(
      'color',
      props.foundation?.transition?.TransitionDuration.L,
    )
  )};

  &:not(:first-child) {
    margin-left: 20px;
  }

  &:hover {
    ${props => (!props.disabled ? `
      ${props.active ? '' : `
        color: ${props.foundation?.theme?.['text-hover-blue']};
      `}
    ` : '')}
  }

  &::after {
    ${props => (!props.withIndicator ? `
      visibility: hidden;
    ` : '')}
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: ${props => props.indicatorThickness || 3}px;
    background-color: ${props => props.foundation?.theme?.['text-hover-blue']};
    content: '';
    transform: translateY(100%);

    ${props => (props.foundation?.transition?.getTransitionCSS(['transform', 'background-color']))};

    will-change: transform;
  }

  ${props => (props.active ? `
    color: ${props.foundation?.theme?.['text-hover-blue']};
    pointer-events: none;

    &::after {
      transform: translateY(0);
    }
  ` : '')}

  ${props => (props.disabled ? `
    cursor: not-allowed;
    pointer-events: all;

    ${props.active ? `
      color: ${props.foundation?.theme?.['text-hover-blue']};
      &::after {
        background-color: ${props.foundation?.theme?.['text-hover-blue']};
      }
    ` : `
      color: ${props.foundation?.theme?.['text-hover-blue']};
      &::after {
        background-color: ${props.foundation?.theme?.['text-hover-blue']};
      }
    `}
  ` : '')}
`
