/* Internal dependencies */
import { styled } from 'Foundation'
import { InterpolationProps } from 'Types/Foundation'

export const Wrapper = styled.div<InterpolationProps>`
  position: relative;
  ${({ interpolation }) => interpolation}
`
