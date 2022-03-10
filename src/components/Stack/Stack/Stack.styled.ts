/* Internal dependencies */
import {
  css,
  styled,
} from 'Foundation'
import { flex } from 'Components/Stack/util'
import type StackProps from './Stack.types'

interface ContainerProps extends
  Required<Pick<StackProps, 'interpolation' | 'direction' | 'mainAxis' | 'crossAxis'>> {}

export const Container = styled.div<ContainerProps>`
  display: flex;
  width: 100%;
  height: 100%;

  ${({ direction }) => css`
    flex-direction: ${direction === 'horizontal' ? 'row' : 'column'};
  `}

  ${({ mainAxis }) => css`
    justify-content: ${flex(mainAxis)};
  `}

  ${({ crossAxis }) => css`
    align-items: ${flex(crossAxis)};
  `}

  ${({ interpolation }) => interpolation}
`
