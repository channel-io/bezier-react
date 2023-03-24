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

  flex-direction: var(--bezier-alpha-stack-direction);
  justify-content: var(--bezier-alpha-stack-justify);
  align-items: var(--bezier-alpha-stack-align);
  gap: var(--bezier-alpha-stack-spacing);

  ${({ interpolation }) => interpolation}
`
