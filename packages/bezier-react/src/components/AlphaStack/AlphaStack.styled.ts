/* Internal dependencies */
import { flex } from '~/src/components/Stack/util'
import {
  css,
  styled,
} from '~/src/foundation'
import type { AlphaStackProps } from './AlphaStack.types'

interface ContainerProps extends
  Required<Pick<AlphaStackProps, 'interpolation' | 'direction' | 'justify' | 'align' | 'spacing'>> {}

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

  ${({ spacing, direction }) => css`
    ${direction === 'horizontal' ? 'column-gap' : 'row-gap'}: ${spacing}px
  `}

  ${({ interpolation }) => interpolation}
`
