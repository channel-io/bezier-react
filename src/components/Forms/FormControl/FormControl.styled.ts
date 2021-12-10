/* Internal dependencies */
import { styled } from 'Foundation'
import { InterpolationProps } from 'Types/Foundation'

export const Wrapper = styled.div<InterpolationProps>`
  position: relative;
  ${({ interpolation }) => interpolation}
`

export const LabelWrapper = styled.div`
  padding: 0 2px;
  margin-bottom: 4px;
`

export const HelperTextWrapper = styled.div`
  padding: 0 2px;
  margin-top: 4px;
`
