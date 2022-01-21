/* Internal dependencies */
import { styled, css } from 'Foundation'
import { InjectedInterpolation } from 'Types/Foundation'
import type FormGroupProps from './FormGroup.types'

// TODO: Mixin으로 옮기기보다, Stack 컴포넌트가 prop을 통해 이 믹스인을 내부적으로 사용하도록 하기
function gap(spacing: number): InjectedInterpolation {
  return css`
    gap: ${spacing}px;

    @supports not(gap: ${spacing}px) {
      margin-top: ${-spacing}px;
      margin-left: ${-spacing}px;

      > * {
        margin-top: ${spacing}px;
        margin-left: ${spacing}px;
      }
    }
  `
}

type StackProps = Required<Pick<FormGroupProps, 'gap' | 'direction' | 'interpolation'>>

// TODO: Stack 컴포넌트로 교체
export const Stack = styled.div<StackProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  flex-wrap: wrap;
  ${({ gap: spacing }) => gap(spacing)}
  ${({ interpolation }) => interpolation}
`
