/* Internal dependencies */
import { styled } from '../../styling/Theme'
import Transition from '../../styling/Transition'
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
  color: ${props => props.theme?.colors?.text5};
  cursor: pointer;
  transition: ${props => props.theme?.transition?.ColorTransitionCubicSlow};
  user-select: none;

  &:not(:first-child) {
    margin-left: 20px;
  }

  &:hover {
    ${props => (!props.disabled ? `
      ${props.active ? '' : `
        color: ${props.theme?.colors?.text7};
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
    background-color: ${props => props.theme?.colors?.focus4};
    content: '';
    transform: translateY(100%);
    transition:
      transform ${Transition.TransitionDuration.Slow} ${Transition.TransitionEffect.DefaultCubic} 0.1s,
      background-color ${Transition.TransitionDuration.Slow} ${Transition.TransitionEffect.DefaultCubic};
    will-change: transform;
  }

  ${props => (props.active ? `
    color: ${props.theme?.colors?.focus4};
    pointer-events: none;

    &::after {
      transform: translateY(0);
    }
  ` : '')}

  ${props => (props.disabled ? `
    cursor: not-allowed;
    pointer-events: all;

    ${props.active ? `
      color: ${props.theme?.colors?.disabled5};
      &::after {
        background-color: ${props.theme?.colors?.disabled5};
      }
    ` : `
      color: ${props.theme?.colors?.disabled3};
      &::after {
        background-color: ${props.theme?.colors?.disabled3};
      }
    `}
  ` : '')}
`
