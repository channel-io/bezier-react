/* Internal dependencies */
import {
  css,
  styled,
} from '~/src/foundation'
import { flex } from '~/src/components/Stack/util'
import type StackProps from './Stack.types'

interface ContainerProps extends
  Required<Pick<StackProps, 'interpolation' | 'direction' | 'justify' | 'align'>> {}

export const Container = styled.div<ContainerProps>`
  display: flex;
  width: 100%;
  height: 100%;

  ${({ direction }) => css`
    flex-direction: ${direction === 'horizontal' ? 'row' : 'column'};
  `}

  ${({ justify }) => css`
    justify-content: ${flex(justify)};
  `}

  ${({ align }) => css`
    align-items: ${flex(align)};
  `}

  ${({ interpolation }) => interpolation}
`
