/* Internal dependencies */
import {
  styled,
} from '~/src/foundation'
import type { AlphaStackProps } from './AlphaStack.types'

interface ContainerProps extends
  Required<Pick<AlphaStackProps, 'interpolation' | 'direction' | 'justify' | 'align' | 'spacing'>> {}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: var(--bezier-alpha-stack-direction);
  gap: var(--bezier-alpha-stack-spacing);
  align-items: var(--bezier-alpha-stack-align);
  justify-content: var(--bezier-alpha-stack-justify);
  width: 100%;
  height: 100%;

  ${({ interpolation }) => interpolation}
`
