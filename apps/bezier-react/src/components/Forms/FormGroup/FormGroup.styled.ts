/* Internal dependencies */
import { styled } from 'Foundation'
import { gap } from 'Utils/styleUtils'
import type FormGroupProps from './FormGroup.types'

type StackProps = Required<Pick<FormGroupProps, 'gap' | 'direction' | 'interpolation'>>

// TODO: Stack 컴포넌트로 교체
export const Stack = styled.div<StackProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  flex-wrap: wrap;
  ${({ gap: spacing }) => gap(spacing)}
  ${({ interpolation }) => interpolation}
`
