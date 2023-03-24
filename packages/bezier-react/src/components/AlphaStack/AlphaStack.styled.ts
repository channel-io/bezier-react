/* Internal dependencies */
import {
  styled,
} from '~/src/foundation'
import type { AlphaStackProps } from './AlphaStack.types'

interface ContainerProps extends
  Required<Pick<AlphaStackProps, 'interpolation' | 'direction' | 'justify' | 'align' | 'spacing'>> {}

export const Container = styled.div<ContainerProps>`
  display: flex;
  width: 100%;
  height: 100%;

  ${({ interpolation }) => interpolation}
`
